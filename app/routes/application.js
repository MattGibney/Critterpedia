import Route from '@ember/routing/route';
import AnalyticsRouteMixin from 'emberfire/mixins/analytics-route';
import { inject as service } from '@ember/service';

export default Route.extend(AnalyticsRouteMixin, {
  intl: service(),
  
  beforeModel() {
    this._super(...arguments);
    return this.intl.setLocale(['en-us']);
  },

  model() {
    return [
      {
        type: 'insect',
        isRare: false,
        name: 'Common Butterfly',
        price: 160,
        location: 'Flying',
        time: {
          start: '04',
          end: '19'
        },
        months: {
          northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
          southern: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Yellow Butterfly',
        price: 160,
        location: 'Flying',
        time: {
          start: '04',
          end: '19'
        },
        months: {
          northern: [2, 3, 4, 5, 8, 9],
          southern: [2, 3, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Tiger Butterfly',
        price: 240,
        location: 'Flying',
        time: {
          start: '04',
          end: '19'
        },
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8],
          southern: [8, 9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Peacock Butterfly',
        price: 2500,
        location: 'Above Flowers',
        time: {
          start: '04',
          end: '19'
        },
        months: {
          northern: [2, 3, 4, 5],
          southern: [8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Common Bluebottle',
        price: 300,
        location: 'Flying',
        time: {
          start: '04',
          end: '19'
        },
        months: {
          northern: [3, 4, 5, 6, 7],
          southern: [9, 10, 11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Paper Kite Butterfly',
        price: 1000,
        location: 'Flying',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Great Purple Emperor',
        price: 3000,
        location: 'Flying',
        time: {
          start: '04',
          end: '07'
        },
        months: {
          northern: [4, 5, 6, 7],
          southern: [10, 11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Monarch Butterfly',
        price: 140,
        location: 'Flying',
        time: {
          start: '04',
          end: '17'
        },
        months: {
          northern: [8, 9, 10],
          southern: [2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Emperor Butterfly',
        price: 4000,
        location: 'Flying',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [11, 0, 1, 2, 5, 6, 7, 8],
          southern: [0, 1, 2, 5, 6, 7, 8, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Agrias Butterfly',
        price: 3000,
        location: 'Flying',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: "Rajah Brooke's Birdwing",
        price: 2500,
        location: 'Above Flowers',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [11, 0, 1, 3, 4, 5, 6, 7, 8],
          southern: [5, 6, 7, 9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: "Queen Alexandra's Birdwing",
        price: 4000,
        location: 'Flying',
        time: {
          start: '08',
          end: '16'
        },
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Moth',
        price: 130,
        location: 'Around Light',
        time: {
          start: '19',
          end: '04'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Atlas Moth',
        price: 3000,
        location: 'On Trees',
        time: {
          start: '19',
          end: '04'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Madagascan Sunset Moth',
        price: 2500,
        location: 'Flying',
        time: {
          start: '08',
          end: '16'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Long Locust',
        price: 200,
        location: 'Grass',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Migratory Locust',
        price: 600,
        location: 'Grass',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [7, 8, 9, 10],
          southern: [1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Rice Grasshopper',
        price: 160,
        location: 'Grass',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [7, 8, 9, 10],
          southern: [1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Grasshopper',
        price: 160,
        location: 'Grass',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Cricket',
        price: 130,
        location: 'Grass',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [8, 9, 10],
          southern: [2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Bell Cricket',
        price: 430,
        location: 'Grass',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [8, 9],
          southern: [2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Mantis',
        price: 430,
        location: 'Flowers',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          southern: [8, 9, 10, 11, 0, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Orchid Mantis',
        price: 2400,
        location: 'Flowers',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          southern: [8, 9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Honeybee',
        price: 200,
        location: 'Above Flowers',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [2, 3, 4, 5, 6],
          southern: [8, 9, 10, 11, 0]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Wasp',
        price: 2500,
        location: 'Shaking Trees',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Brown Cicada',
        price: 250,
        location: 'On Trees',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Robust Cicada',
        price: 300,
        location: 'On Trees',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Giant Cicada',
        price: 500,
        location: 'On Trees',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Walker Cicada',
        price: 400,
        location: 'On Trees',
        time: {
          start: '08',
          end: '16'
        },
        months: {
          northern: [7, 8],
          southern: [1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Evening Cicada',
        price: 550,
        location: 'On Trees',
        time: {
          start: '16',
          end: '19'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Cicada Shell',
        price: 10,
        location: 'On Trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Red Dragonfly',
        price: 180,
        location: 'Flying',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [8, 9],
          southern: [2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Darner Dragonfly',
        price: 230,
        location: 'Flying',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9],
          southern: [9, 10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Banded Dragonfly',
        price: 4500,
        location: 'Flying',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Damselfly',
        price: 500,
        location: 'Flying',
        months: {
          northern: [10, 11, 0, 1],
          southern: [4, 5, 6, 7]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Firefly',
        price: 300,
        location: 'Rivers and Ponds',
        time: {
          start: '19',
          end: '04'
        },
        months: {
          northern: [5],
          southern: [11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Mole cricket',
        price: 500,
        location: 'Underground',
        months: {
          northern: [10, 11, 0, 1, 2, 3, 4],
          southern: [4, 5, 6, 7, 8, 9, 10]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Pondskater',
        price: 130,
        location: 'Rivers',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Diving Beetle',
        price: 800,
        location: 'Rivers',
        time: {
          start: '08',
          end: '19'
        },
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Giant Water Bug',
        price: 2000,
        location: 'Rivers and Ponds',
        time: {
          start: '19',
          end: '08'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [0, 1, 2, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Stinkbug',
        price: 120,
        location: 'Flowers',
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9],
          southern: [8, 9, 10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Man-faced Stink Bug',
        price: 1000,
        location: 'Flowers',
        time: {
          start: '19',
          end: '08'
        },
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9],
          southern: [8, 9, 10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Ladybug',
        price: 200,
        location: 'Flowers',
        time: {
          start: '08',
          end: '17'
        },
        months: {
          northern: [2, 3, 4, 5, 9],
          southern: [3, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Tiger Beetle',
        price: 1500,
        location: 'Flying',
        months: {
          northern: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          southern: [8, 9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Jewel Beetle',
        price: 2400,
        location: 'On Trees',
        months: {
          northern: [3, 4, 5, 6, 7],
          southern: [9, 10, 11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Citrus Long-horned Beetle',
        price: 350,
        location: 'Tree Stumps',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Rosalia Batesi Beetle',
        price: 3000,
        location: 'Tree Stumps',
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Blue Weevil Beetle',
        price: 800,
        location: 'On Trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Violin Beetle',
        price: 450,
        location: 'On Trees',
        months: {
          northern: [4, 5, 8, 9, 10],
          southern: [2, 3, 4, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Dung Beetle',
        price: 3000,
        location: 'Ground',
        months: {
          northern: [11, 0, 1],
          southern: [5, 6, 7]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Earth-boring Dung Beetle',
        price: 300,
        location: 'Ground',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Scarab Beetle',
        price: 10000,
        location: 'On Trees',
        time: {
          start: '23',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Drone Beetle',
        price: 200,
        location: 'On Trees',
        months: {
          northern: [5, 6, 7],
          southern: [11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Goliath Beetle',
        price: 8000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Saw Stag',
        price: 2000,
        location: 'On Trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Miyama Stag',
        price: 1000,
        location: 'On Trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Giant Stag',
        price: '0	0',
        location: 'On Trees',
        time: {
          start: '23',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Rainbow Stag',
        price: 6000,
        location: 'On Trees',
        time: {
          start: '19',
          end: '08'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Cyclommatus Stag',
        price: 8000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Golden Stag',
        price: 12000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Giraffe Stag',
        price: '0	0',
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Horned Dynastid',
        price: 1350,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Horned Atlas',
        price: 8000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Horned Elephant',
        price: 8000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Horned Hercules',
        price: 12000,
        location: 'On Trees',
        time: {
          start: '17',
          end: '08'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Walking Stick',
        price: 600,
        location: 'On Trees',
        time: {
          start: '17',
          end: '19'
        },
        months: {
          northern: [6, 7, 8, 9, 10],
          southern: [0, 1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Walking Leaf',
        price: 600,
        location: 'Ground Beneath Trees',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Bagworm',
        price: 600,
        location: 'Shaking Trees',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Ant',
        price: 80,
        location: 'Rotten Turnips and Fruit',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Hermit Crab',
        price: 1000,
        location: 'Beach',
        time: {
          start: '19',
          end: '08'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Wharf Roach',
        price: 200,
        location: 'Beach Rocks',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Fly',
        price: 60,
        location: 'Rotten Food and Garbage',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Mosquito',
        price: 130,
        location: 'Flying',
        time: {
          start: '17',
          end: '04'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Flea',
        price: 70,
        location: 'On Flea-Infested Villagers',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Snail',
        price: 250,
        location: 'Under Rocks',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Pill Bug',
        price: 250,
        location: 'Under Rocks',
        time: {
          start: '11',
          end: '16'
        },
        months: {
          northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
          southern: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Centipede',
        price: 300,
        location: 'Under Rocks',
        time: {
          start: '05',
          end: '23'
        },
        months: {
          northern: [8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
          southern: [2, 3, 4, 5, 6, 7, 8, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'Spider',
        price: 480,
        location: 'Shaking Trees',
        time: {
          start: '19',
          end: '08'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Tarantula',
        price: 8000,
        location: 'Ground',
        time: {
          start: '19',
          end: '04'
        },
        months: {
          northern: [10, 11, 0, 1, 2, 3],
          southern: [4, 5, 6, 7, 8, 9]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'Scorpion',
        price: 8000,
        location: 'Ground',
        time: {
          start: '19',
          end: '04'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Bitterling',
        price: 900,
        location: 'River',
        months: {
          northern: [10, 11, 0, 1, 2],
          southern: [4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Pale Chub',
        price: 160,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Crucian Carp',
        price: 160,
        location: 'River',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Dace',
        price: 240,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Carp',
        price: 300,
        location: 'Pond',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Koi',
        price: 4000,
        location: 'Pond',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Goldfish',
        price: 1300,
        location: 'Pond',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Pop-eyed Goldfish',
        price: 1300,
        location: 'Pond',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Ranchu Goldfish',
        price: 4500,
        location: 'Pond',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Killifish',
        price: 300,
        location: 'Pond',
        months: {
          northern: [3, 4, 5, 6, 7],
          southern: [9, 10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Crawfish',
        price: 200,
        location: 'Pond',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Soft-shelled Turtle',
        price: 3750,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [7, 8],
          southern: [1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Snapping Turtle',
        price: 5000,
        location: 'River',
        time: {
          start: '21',
          end: '04'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9],
          southern: [9, 10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Tadpole',
        price: 100,
        location: 'Pond',
        months: {
          northern: [2, 3, 4, 5, 6],
          southern: [8, 9, 10, 11, 0]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Frog',
        price: 120,
        location: 'Pond',
        months: {
          northern: [4, 5, 6, 7],
          southern: [10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Freshwater Goby',
        price: 400,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Loach',
        price: 400,
        location: 'River',
        months: {
          northern: [2, 3, 4],
          southern: [8, 9, 10]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Catfish',
        price: 800,
        location: 'Pond',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Giant Snakehead',
        price: 5500,
        location: 'Pond',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [5, 6, 7],
          southern: [11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Bluegill',
        price: 180,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Yellow Perch',
        price: 300,
        location: 'River',
        months: {
          northern: [9, 10, 11, 0, 1, 2],
          southern: [3, 4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Black Bass',
        price: 400,
        location: 'River',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Tilapia',
        price: 800,
        location: 'River',
        months: {
          northern: [5, 6, 7, 8, 9],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Pike',
        price: 1800,
        location: 'River',
        months: {
          northern: [8, 9, 10, 11],
          southern: [2, 3, 4, 5]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Pond Smelt',
        price: '0,',
        location: 'River',
        months: {
          northern: [11, 0, 1],
          southern: [5, 6, 7]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Sweetfish',
        price: 900,
        location: 'River',
        months: {
          northern: [6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Cherry Salmon',
        price: 1000,
        location: 'River (Cliff)',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [2, 3, 4, 5, 8, 9, 10],
          southern: [2, 3, 4, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Char',
        price: 3800,
        location: 'River (Cliff)',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [2, 3, 4, 5, 8, 9, 10],
          southern: [8, 9, 10, 11, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Golden Trout',
        price: 15000,
        location: 'River (Cliff)',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [2, 3, 4, 8, 9, 10],
          southern: [8, 9, 10, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Stringfish',
        price: 15000,
        location: 'River (Cliff)',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [11, 0, 1, 2],
          southern: [5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Salmon',
        price: 700,
        location: 'River (Mouth)',
        months: {
          northern: [8],
          southern: [2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'King Salmon',
        price: 1800,
        location: 'River (Mouth)',
        months: {
          northern: [8],
          southern: [2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Mitten Crab',
        price: 2000,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [8, 9, 10],
          southern: [2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Guppy',
        price: 1300,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Nibble Fish',
        price: 1500,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Angelfish',
        price: 3000,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Betta',
        price: 2500,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Neon Tetra',
        price: 500,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Rainbowfish',
        price: 800,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Piranha',
        price: 2500,
        location: 'River',
        time: {
          start: '09',
          end: '16'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Arowana',
        price: 10000,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Dorado',
        price: 15000,
        location: 'River',
        time: {
          start: '04',
          end: '21'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Gar',
        price: 6000,
        location: 'Pond',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Arapaima',
        price: 10000,
        location: 'River',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Saddled Bichir',
        price: 4000,
        location: 'River',
        time: {
          start: '21',
          end: '04'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Sturgeon',
        price: 10000,
        location: 'River (Mouth)',
        months: {
          northern: [8, 9, 10, 11, 0, 1, 2],
          southern: [2, 3, 4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Sea Butterfly',
        price: 1000,
        location: 'Sea',
        months: {
          northern: [11, 0, 1, 2],
          southern: [5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Seahorse',
        price: 1100,
        location: 'Sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Clownfish',
        price: 650,
        location: 'Sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Surgeonfish',
        price: 1000,
        location: 'Sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Butterfly Fish',
        price: 1000,
        location: 'Sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Napoleonfish',
        price: 10000,
        location: 'Sea',
        time: {
          start: '04',
          end: '21'
        },
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Zebra Turkeyfish',
        price: 500,
        location: 'Sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Blowfish',
        price: 5000,
        location: 'Sea',
        time: {
          start: '21',
          end: '04'
        },
        months: {
          northern: [10, 11, 0, 1],
          southern: [4, 5, 6, 7]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Puffer Fish',
        price: 250,
        location: 'Sea',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Anchovy',
        price: 200,
        location: 'Sea',
        time: {
          start: '04',
          end: '21'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Horse Mackerel',
        price: 150,
        location: 'Sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Barred Knifejaw',
        price: 5000,
        location: 'Sea',
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          southern: [8, 9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Sea Bass',
        price: 400,
        location: 'Sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Red Snapper',
        price: 3000,
        location: 'Sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Dab',
        price: 300,
        location: 'Sea',
        months: {
          northern: [9, 10, 11, 0, 1, 2, 3],
          southern: [7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Olive Flounder',
        price: 800,
        location: 'Sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Squid',
        price: 500,
        location: 'Sea',
        months: {
          northern: [11, 0, 1, 2, 3, 4, 5, 6, 7],
          southern: [5, 6, 7, 8, 9, 10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Moray Eel',
        price: 2000,
        location: 'Sea',
        months: {
          northern: [7, 8, 9],
          southern: [1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Ribbon Eel',
        price: 600,
        location: 'Sea',
        months: {
          northern: [5, 6, 7, 8, 9],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Tuna',
        price: 7000,
        location: 'Pier',
        months: {
          northern: [10, 11, 0, 1, 2, 3],
          southern: [4, 5, 6, 7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Blue Marlin',
        price: 10000,
        location: 'Pier',
        months: {
          northern: [10, 11, 0, 1, 2, 3, 6, 7, 8],
          southern: [0, 1, 2, 4, 5, 6, 7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Giant Trevally',
        price: 4500,
        location: 'Pier',
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Mahi-mahi',
        price: 6000,
        location: 'Pier',
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Ocean Sunfish',
        price: 4000,
        location: 'Sea',
        time: {
          start: '04',
          end: '21'
        },
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Ray',
        price: 3000,
        location: 'Sea',
        time: {
          start: '04',
          end: '21'
        },
        months: {
          northern: [7, 8, 9, 10],
          southern: [1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Saw Shark',
        price: 12000,
        location: 'Sea',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Hammerhaead Shark',
        price: 8000,
        location: 'Sea',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Great White Shark',
        price: 15000,
        location: 'Sea',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Whale Shark',
        price: 13000,
        location: 'Sea',
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Suckerfish',
        price: 1500,
        location: 'Sea',
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'Football Fish',
        price: 2500,
        location: 'Sea',
        time: {
          start: '16',
          end: '09'
        },
        months: {
          northern: [10, 11, 0, 1, 2],
          southern: [4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Oarfish',
        price: 9000,
        location: 'Sea',
        months: {
          northern: [11, 0, 1, 2, 3, 4],
          southern: [5, 6, 7, 8, 9, 10]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Barreleye',
        price: 15000,
        location: 'Sea',
        time: {
          start: '21',
          end: '04'
        },
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'Coelacanth',
        price: 15000,
        location: 'Sea (Rain)',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      }
    ];
  }
});
