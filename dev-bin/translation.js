const englishTranslations = require('../translations/en-us.json');

const flat = {};

flattenTranslations(englishTranslations);

function flattenTranslations(object, prefix = null) {
  Object.keys(object).forEach(key => {
    if(typeof object[key] === 'string') {
      if(prefix) {
        return flat[`${[prefix, key].join('.')}`] = object[key];
      }
      return flat[key] = object[key];
    }
    if(prefix) {
      return flattenTranslations(object[key], `${[prefix, key].join('.')}`)
    }
    return flattenTranslations(object[key], key)
  });
}

// console.log(flat);

for (let [key, value] of Object.entries(flat)) {
  console.log(`${key}\t${value}`);
}