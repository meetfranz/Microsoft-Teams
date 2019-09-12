module.exports = Franz => class MicrosoftTeams extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '').replace(/(Chrome\/)([^ ]*)/g, '$164.0.3282.140 Edge/18.17763');
  }
};
