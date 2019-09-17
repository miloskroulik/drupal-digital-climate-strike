<?php

namespace Drupal\digital_climate_strike_widget\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure Digital Climate Strike widget settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'digital_climate_strike_widget_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['digital_climate_strike_widget.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['enable'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show the Digital #ClimateStrike Widget'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')->get('enable'),
    ];

    $form['language'] = [
      '#type' => 'select',
      '#title' => $this->t('Language'),
      '#options' => [
        'en' => $this->t('English'),
        'de' => $this->t('German'),
        'es' => $this->t('Spanish'),
        'cs' => $this->t('Czech'),
      ],
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('language'),
    ];

    $form['cookie_expiration_days'] = [
      '#type' => 'number',
      '#title' => $this->t('Cookie Expiration Days'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('cookie_expiration_days'),
    ];

    $form['iframe_host'] = [
      '#type' => 'textfield',
      '#title' => $this->t('iFrame Host'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('iframe_host'),
    ];

    $form['disable_google_analytics'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Disable Google Analytics'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('disable_google_analytics'),
    ];

    $form['always_show_widget'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Always show widget'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('always_show_widget'),
    ];

    $form['force_full_page_widget'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Force Full Page Widget'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('force_full_page_widget'),
    ];

    $form['show_close_button_full_widget'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show close button on Full Page Widget'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('show_close_button_full_widget'),
    ];

    $form['footer_display_start_date'] = [
      '#type' => 'date',
      '#title' => $this->t('Footer display start date'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('footer_display_start_date'),
    ];

    $form['full_page_display_start_date'] = [
      '#type' => 'date',
      '#title' => $this->t('Full page display start date'),
      '#default_value' => $this->config('digital_climate_strike_widget.settings')
        ->get('full_page_display_start_date'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
//    if ($form_state->getValue('example') != 'example') {
//      $form_state->setErrorByName('example', $this->t('The value is not correct.'));
//    }
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('digital_climate_strike_widget.settings')
      ->set('enable', $form_state->getValue('enable'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('language', $form_state->getValue('language'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('cookie_expiration_days', $form_state->getValue('cookie_expiration_days'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('iframe_host', $form_state->getValue('iframe_host'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('disable_google_analytics', $form_state->getValue('disable_google_analytics'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('always_show_widget', $form_state->getValue('always_show_widget'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('force_full_page_widget', $form_state->getValue('force_full_page_widget'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('show_close_button_full_widget', $form_state->getValue('show_close_button_full_widget'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('footer_display_start_date', $form_state->getValue('footer_display_start_date'))
      ->save();
    $this->config('digital_climate_strike_widget.settings')
      ->set('full_page_display_start_date', $form_state->getValue('full_page_display_start_date'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}
