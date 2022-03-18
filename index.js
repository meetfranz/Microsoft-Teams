module.exports = Franz => class MicrosoftTeams extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '').replace(/(Chrome\/)([^ ]*)/g, '$163.0.3239.84');
  }

  // https://docs.microsoft.com/en-us/microsoftteams/troubleshoot/teams-sign-in/sign-in-loop#resolution
  knownCertificateHosts() {
    return [
      'microsoft.com',
      'microsoftonline.com',
      'teams.skype.com',
      'teams.microsoft.com',
      'sfbassets.com',
      'skypeforbusiness.com',
    ];
  }

  // we need to allow all cookies for ms teams
  onHeadersReceived(details, callback) {
    if (details.responseHeaders && details.responseHeaders['Set-Cookie'] && details.responseHeaders['Set-Cookie'].length && !details.responseHeaders['Set-Cookie'][0].includes('SameSite=none')) {
      // eslint-disable-next-line no-param-reassign
      details.responseHeaders['Set-Cookie'][0] = `${details.responseHeaders['Set-Cookie'][0]}; SameSite=none`;
    }
    callback({ cancel: false, responseHeaders: details.responseHeaders });
  }
};
