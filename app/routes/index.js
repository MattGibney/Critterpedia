import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.setHeadTags();
  },

  setHeadTags() {
    let headTags = [
      {
        type: 'meta',
        tagId: 'meta-og-image',
        attrs: {
          property: 'og:image',
          content: 'https://critterpedia.moppler.co.uk/assets/app-icon.png'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-description',
        attrs: {
          name: 'description',
          content: `Animal Crossing New Horizons companion app. Perfect for the mobile, this site provides all of the information you need for catching Fish and Insects. It's your very own Critterpedia, right in your pocket!`
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-url',
        attrs: {
          property: 'og:url',
          content: 'https://critterpedia.moppler.co.uk/'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-type',
        attrs: {
          property: 'og:type',
          content: 'website'
        }
      },
      {
        type: 'link',
        tagId: 'canonical-link',
        attrs: {
          rel: 'canonical',
          href: 'https://critterpedia.moppler.co.uk/'
        }
      }
    ];

    this.set('headTags', headTags);
  }
});
