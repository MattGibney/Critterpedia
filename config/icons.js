/**
 * Font Awesome icon settings
 * At build time, this file is used to create a custom fontawesome font file
 * containing only the icons that are required for the application. This file
 * dramatically reduces the size of the compiled application.
 * 
 * Any new icons that are required, also need to be added to this file.
 */

module.exports = function() {
  return {
    'free-brands-svg-icons': [
      'twitter'
    ],
    'pro-solid-svg-icons': [
      'chevron-left',
      'cog',
      'sort',
      'sort-down',
      'sort-up',
      'badge-check',
      'exclamation-triangle',
      'info-circle',
      'language',
      'stream',
      'th-large'
    ]
  };
};