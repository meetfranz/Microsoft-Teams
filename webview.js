const path = require('path');

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

  setTimeout(() => {
    const el = document.querySelector('#download-desktop-page .use-app-lnk');
    if (el) {
      el.click();
    }
  }, 4000);
};
