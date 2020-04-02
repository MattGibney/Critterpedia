import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  firebaseApp: service('firebase-app'),

  async model(params) {
    const critter = await this.modelFor('application').findBy('name', params.critter_name);

    const analytics = await this.get('firebaseApp').analytics();
    analytics.logEvent("view_critter", { name: critter.name });


    return critter
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
