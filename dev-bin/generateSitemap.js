const data = require('../app/data.json');
const fs = require('fs');

// console.log(data);

let document = `https://critterpedia.moppler.co.uk/settings`;

data.forEach(critter => {
  const critterURL = `https://critterpedia.moppler.co.uk/critter/${encodeURIComponent(critter.name)}`;

  document = `${document}
${critterURL}`;
});

fs.writeFileSync('public/sitemap.txt', document, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

// console.log(document);