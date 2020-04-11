import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      hemisphere: 'northern',
      flickPrices: false,
      language: 'en-us',
      viewMode: 'grid'
    };
  }
});

export default Storage;