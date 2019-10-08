module.exports = Franz => class MicrosoftTeams extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '').replace(/(Chrome\/)([^ ]*)/g, '$179.0.3932.0');
  }
};
