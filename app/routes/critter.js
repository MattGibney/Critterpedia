import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return await this.modelFor('application').findBy('name', params.critter_name);
  },

  afterModel(model) {
    this.setHeadTags(model);
  },

  setHeadTags(model) {
    let headTags = [{
      type: 'link',
      tagId: 'canonical-link',
      attrs: {
        rel: 'canonical',
        href: `https://critterpedia.moppler.co.uk/critter/${encodeURIComponent(model.name)}`
      }
    }];

    this.set('headTags', headTags);
  }
});
