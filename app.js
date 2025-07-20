/* eslint-disable */
(($) => {
  'use strict';

  const classes = {
    style: 'custom-style',
  };

  const selectors = {
    style: `.${classes.style}`,
    appendLocation: '#container', // Append location for the HTML - Don't change this.
  };

  const self = {};

  self.init = () => {
    self.reset();
    self.buildCSS();
    self.buildHTML();
    self.setEvents();
  };

  self.reset = () => {
    $(selectors.style).remove();
    $(document).off('.eventListener');
  };

  //STYLES
  self.buildCSS = () => {
    const customStyle = `
            <style class="${classes.style}">
            </style>
        `;
    $('head').append(customStyle);
  };

  //HTML
  self.buildHTML = () => {
    const html = ``;
    $(selectors.appendLocation).append(html);
  };

  // Event listeners
  self.setEvents = () => {
    // Favorite cart event, etc.
  };

  // Extra functions (localStorage, api requests, etc.)
  self.setCartStorage = () => {};

  self.setFavoritesStorage = () => {};

  $(document).ready(self.init);
})(jQuery);
