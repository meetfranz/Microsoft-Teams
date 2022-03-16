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
};
