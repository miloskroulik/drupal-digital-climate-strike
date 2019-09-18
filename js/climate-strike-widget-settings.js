var settings = drupalSettings;
var cookie_expiration_days = drupalSettings.digital_climate_strike_widget.cookie_expiration_days;
var language = drupalSettings.digital_climate_strike_widget.language;
var iframe_host = drupalSettings.digital_climate_strike_widget.iframe_host;
var disable_google_analytics = drupalSettings.digital_climate_strike_widget.disable_google_analytics;
var always_show_widget = drupalSettings.digital_climate_strike_widget.always_show_widget;
var force_full_page_widget = drupalSettings.digital_climate_strike_widget.force_full_page_widget;
var show_close_button_full_widget = drupalSettings.digital_climate_strike_widget.show_close_button_full_widget;
var footer_display_start_date = drupalSettings.digital_climate_strike_widget.footer_display_start_date;
var full_page_display_start_date = drupalSettings.digital_climate_strike_widget.full_page_display_start_date;

var DIGITAL_CLIMATE_STRIKE_OPTIONS = {
  /**
   * Specify view cookie expiration. After initial view, widget will not be
   * displayed to a user again until after this cookie expires. Defaults to
   * one day.
   */
  cookieExpirationDays: !cookie_expiration_days ? 1 : parseInt(cookie_expiration_days), // @type {number}

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
  language: !language ? null : language, // @type {string}

  /**
   * Allow you to override the iFrame hostname. Defaults to https://assets.digitalclimatestrike.net
   */
  iframeHost: !iframe_host ? 'https://assets.digitalclimatestrike.net' : iframe_host, // @type {string}

  /**
   * Prevents the widget iframe from loading Google Analytics. Defaults to
   * false. (Google Analytics will also be disabled if doNotTrack is set on
   * the user's browser.)
   */
  disableGoogleAnalytics: !disable_google_analytics ? false: parseInt(disable_google_analytics), // @type {boolean}

  /**
   * Always show the widget, even when someone has closed the widget and set the cookie on their device.
   * Useful for testing. Defaults to false.
   */
  alwaysShowWidget: !always_show_widget ? false : parseInt(always_show_widget), // @type {boolean}

  /**
   * Automatically makes the widget full page. Defaults to false.
   */
  forceFullPageWidget: !force_full_page_widget ? false: parseInt(force_full_page_widget), // @type {boolean}

  /**
   * For the full page widget, shows a close button "x" and hides the message about the site being
   * available tomorrow. Defaults to false.
   */
  showCloseButtonOnFullPageWidget: !show_close_button_full_widget ? false : parseInt(show_close_button_full_widget), // @type {boolean}

  /**
   * The date when the sticky footer widget should start showing on your web site.
   * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
   * Defaults to new Date(2019, 7, 1) (August 1st, 2019).
   */
  footerDisplayStartDate: !footer_display_start_date ? new Date() : new Date(footer_display_start_date), //@ type {Date object}

  /**
   * The date when the full page widget should showing on your web site for 24 hours.
   * Note: the month is one integer less than the number of the month. E.g. 8 is September, not August.
   * Defaults to new Date(2019, 8, 20) (September 20th, 2019)
   */
  fullPageDisplayStartDate: !full_page_display_start_date ? new Date(2019, 8, 20) : new Date(full_page_display_start_date), //@ type {Date object}
};
print();
