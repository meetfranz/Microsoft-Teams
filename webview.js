const path = require('path');

window.desktop = undefined;

module.exports = (Franz) => {
  const getMessages = () => {
    let messages = 0;
    const badge = document.querySelector('.activity-badge.dot-activity-badge .activity-badge');
    if (badge) {
      const value = parseInt(badge.innerHTML, 10);

      if (!isNaN(value)) {
        messages = value;
      }
    }

    // set Franz badge
    Franz.setBadge(messages);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  Franz.loop(getMessages);
};
