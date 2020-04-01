import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return await this.modelFor('application').findBy('name', params.critter_name);
  },

  afterModel(model) {
    this.setHeadTags(model);
  },

  setHeadTags(model) {
    let headTags = [
      {
        type: 'meta',
        tagId: 'meta-og-title',
        attrs: {
          property: 'og:title',
          content: `Critterpedia | ${model.name}`
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-image',
        attrs: {
          property: 'og:image',
          content: `https://critterpedia.moppler.co.uk/assets/app-icon.png`
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-url',
        attrs: {
          property: 'og:url',
          content: `https://critterpedia.moppler.co.uk/critter/${encodeURIComponent(model.name)}`
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
          href: `https://critterpedia.moppler.co.uk/critter/${encodeURIComponent(model.name)}`
        }
      }
    ];

    this.set('headTags', headTags);
  }
});
