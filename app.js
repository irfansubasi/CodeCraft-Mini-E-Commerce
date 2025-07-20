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
    self.addCDNLinks();
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

  //CDN
  self.addCDNLinks = () => {
    const cssLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
      'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    ];

    //link ve preconnect ayrımı
    cssLinks.forEach((href) => {
      if (
        href.includes('fonts.googleapis.com') ||
        href.includes('fonts.gstatic.com')
      ) {
        if (
          !$('head link[rel="preconnect"]').filter(
            (_, link) => link.href === href
          ).length
        ) {
          const $link = $('<link>', {
            rel: 'preconnect',
            href: href,
            crossOrigin: href.includes('fonts.gstatic.com')
              ? 'anonymous'
              : undefined,
          });
          $('head').append($link);
        }
      } else {
        if (
          !$('head link[rel="stylesheet"]').filter(
            (_, link) => link.href === href
          ).length
        ) {
          const $link = $('<link>', {
            rel: 'stylesheet',
            href: href,
          });
          if (href.includes('font-awesome')) {
            $link.attr(
              'integrity',
              'sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
            );
            $link.attr('crossorigin', 'anonymous');
            $link.attr('referrerpolicy', 'no-referrer');
          }
          $('head').append($link);
        }
      }
    });

    const jsLinks = [
      //jquery codetour'da ekli olduğu için script'i eklemedim
      'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
    ];
    jsLinks.forEach((src) => {
      if (!$('head script').filter((_, script) => script.src === src).length) {
        const $script = $('<script>', {
          src: src,
        });
        $('head').append($script);
      }
    });
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
