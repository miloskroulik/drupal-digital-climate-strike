var DIGITAL_CLIMATE_STRIKE_OPTIONS = {
  /**
   * Specify view cookie expiration. After initial view, widget will not be
   * displayed to a user again until after this cookie expires. Defaults to
   * one day.
   */
  cookieExpirationDays: 1, // @type {number}

  /**
   * Set the language of the widget. We currently support:
   * 'en': English
   * 'de': German
   * 'es': Spanish
   * 'cs': Czech
   * 'fr': French
   * Defaults to null, which will obey the nagivator.language setting of the
   * viewer's browser.
   */
  language: null, // @type {string}

  /**
   * Allow you to override the iFrame hostname. Defaults to https://assets.digitalclimatestrike.net
   */
  iframeHost: 'https://assets.digitalclimatestrike.net', // @type {string}

  /**
   * Prevents the widget iframe from loading Google Analytics. Defaults to
   * false. (Google Analytics will also be disabled if doNotTrack is set on
   * the user's browser.)
   */
  disableGoogleAnalytics: false, // @type {boolean}

  /**
   * Always show the widget, even when someone has closed the widget and set the cookie on their device.
   * Useful for testing. Defaults to false.
   */
  alwaysShowWidget: false, // @type {boolean}

  /**
   * Automatically makes the widget full page. Defaults to false.
   */
  forceFullPageWidget: false, // @type {boolean}

  /**
   * For the full page widget, shows a close button "x" and hides the message about the site being
   * available tomorrow. Defaults to false.
   */
  showCloseButtonOnFullPageWidget: false, // @type {boolean}

  /**
   * The date when the sticky footer widget should start showing on your web site.
   * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
   * Defaults to new Date(2019, 7, 1) (August 1st, 2019).
   */
  footerDisplayStartDate: new Date(), //@ type {Date object}

  /**
   * The date when the full page widget should showing on your web site for 24 hours.
   * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
   * Defaults to new Date(2019, 8, 20) (September 20th, 2019)
   */
  fullPageDisplayStartDate: new Date(2019, 8, 20), //@ type {Date object}
};
