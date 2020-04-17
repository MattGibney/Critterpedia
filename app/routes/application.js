  import Route from '@ember/routing/route';
import AnalyticsRouteMixin from 'emberfire/mixins/analytics-route';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Route.extend(AnalyticsRouteMixin, {
  intl: service(),
  settings: storageFor('settings'),
  
  beforeModel() {
    this._super(...arguments);
    return this.intl.setLocale([this.get('settings.language')]);
  },

  model(params) {
    if(params.hemisphere === 'southern') {
      this.set('settings.hemisphere', params.hemisphere);
    }
    return [
      {
        type: 'insect',
        isRare: false,
        name: 'common_butterfly',
        price: 160,
        location: 'flying',
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
        name: 'yellow_butterfly',
        price: 160,
        location: 'flying',
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
        name: 'tiger_butterfly',
        price: 240,
        location: 'flying',
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
        name: 'peacock_butterfly',
        price: 2500,
        location: 'above_flowers',
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
        name: 'common_bluebottle',
        price: 300,
        location: 'flying',
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
        name: 'paper_kite_butterfly',
        price: 1000,
        location: 'flying',
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
        name: 'great_purple_emperor',
        price: 3000,
        location: 'flying',
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
        name: 'monarch_butterfly',
        price: 140,
        location: 'flying',
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
        name: 'emperor_butterfly',
        price: 4000,
        location: 'flying',
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
        name: 'agrias_butterfly',
        price: 3000,
        location: 'flying',
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
        name: "rajah_brookes_birdwing",
        price: 2500,
        location: 'above_flowers',
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
        name: "queen_alexandras_birdwing",
        price: 4000,
        location: 'flying',
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
        name: 'moth',
        price: 130,
        location: 'around_light',
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
        name: 'atlas_moth',
        price: 3000,
        location: 'on_trees',
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
        name: 'madagascan_sunset_moth',
        price: 2500,
        location: 'flying',
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
        name: 'long_locust',
        price: 200,
        location: 'grass',
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
        name: 'migratory_locust',
        price: 600,
        location: 'grass',
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
        name: 'rice_grasshopper',
        price: 160,
        location: 'grass',
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
        name: 'grasshopper',
        price: 160,
        location: 'grass',
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
        name: 'cricket',
        price: 130,
        location: 'grass',
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
        name: 'bell_cricket',
        price: 430,
        location: 'grass',
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
        name: 'mantis',
        price: 430,
        location: 'flowers',
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
        name: 'orchid_mantis',
        price: 2400,
        location: 'flowers',
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
        name: 'honeybee',
        price: 200,
        location: 'above_flowers',
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
        name: 'wasp',
        price: 2500,
        location: 'shaking_trees',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'brown_cicada',
        price: 250,
        location: 'on_trees',
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
        name: 'robust_cicada',
        price: 300,
        location: 'on_trees',
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
        name: 'giant_cicada',
        price: 500,
        location: 'on_trees',
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
        name: 'walker_cicada',
        price: 400,
        location: 'on_trees',
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
        name: 'evening_cicada',
        price: 550,
        location: 'on_trees',
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
        name: 'cicada_shell',
        price: 10,
        location: 'on_trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'red_dragonfly',
        price: 180,
        location: 'flying',
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
        name: 'darner_dragonfly',
        price: 230,
        location: 'flying',
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
        name: 'banded_dragonfly',
        price: 4500,
        location: 'flying',
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
        name: 'damselfly',
        price: 500,
        location: 'flying',
        months: {
          northern: [10, 11, 0, 1],
          southern: [4, 5, 6, 7]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'firefly',
        price: 300,
        location: 'rivers_ponds',
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
        name: 'mole_cricket',
        price: 500,
        location: 'underground',
        months: {
          northern: [10, 11, 0, 1, 2, 3, 4],
          southern: [4, 5, 6, 7, 8, 9, 10]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'pondskater',
        price: 130,
        location: 'river',
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
        name: 'diving_beetle',
        price: 800,
        location: 'river',
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
        name: 'giant_water_bug',
        price: 2000,
        location: 'rivers_ponds',
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
        name: 'stinkbug',
        price: 120,
        location: 'flowers',
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9],
          southern: [8, 9, 10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'man-faced_stink_bug',
        price: 1000,
        location: 'flowers',
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
        name: 'ladybug',
        price: 200,
        location: 'flowers',
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
        name: 'tiger_beetle',
        price: 1500,
        location: 'flying',
        months: {
          northern: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          southern: [8, 9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'jewel_beetle',
        price: 2400,
        location: 'tree_stumps',
        months: {
          northern: [3, 4, 5, 6, 7],
          southern: [9, 10, 11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'citrus_long-horned_beetle',
        price: 350,
        location: 'tree_stumps',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'rosalia_batesi_beetle',
        price: 3000,
        location: 'tree_stumps',
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'blue_weevil_beetle',
        price: 800,
        location: 'on_trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'violin_beetle',
        price: 450,
        location: 'on_trees',
        months: {
          northern: [4, 5, 8, 9, 10],
          southern: [2, 3, 4, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'dung_beetle',
        price: 3000,
        location: 'ground',
        months: {
          northern: [11, 0, 1],
          southern: [5, 6, 7]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'earth-boring_dung_beetle',
        price: 300,
        location: 'ground',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'scarab_beetle',
        price: 10000,
        location: 'on_trees',
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
        name: 'drone_beetle',
        price: 200,
        location: 'on_trees',
        months: {
          northern: [5, 6, 7],
          southern: [11, 0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'goliath_beetle',
        price: 8000,
        location: 'on_trees',
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
        name: 'saw_stag',
        price: 2000,
        location: 'on_trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'miyama_stag',
        price: 1000,
        location: 'on_trees',
        months: {
          northern: [6, 7],
          southern: [0, 1]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'giant_stag',
        price: '0	0',
        location: 'on_trees',
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
        name: 'rainbow_stag',
        price: 6000,
        location: 'on_trees',
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
        name: 'cyclommatus_stag',
        price: 8000,
        location: 'on_trees',
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
        name: 'golden_stag',
        price: 12000,
        location: 'on_trees',
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
        name: 'giraffe_stag',
        price: '0	0',
        location: 'on_trees',
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
        name: 'horned_dynastid',
        price: 1350,
        location: 'on_trees',
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
        name: 'horned_atlas',
        price: 8000,
        location: 'on_trees',
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
        name: 'horned_elephant',
        price: 8000,
        location: 'on_trees',
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
        name: 'horned_hercules',
        price: 12000,
        location: 'on_trees',
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
        name: 'walking_stick',
        price: 600,
        location: 'on_trees',
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
        name: 'walking_leaf',
        price: 600,
        location: 'ground_trees',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'bagworm',
        price: 600,
        location: 'shaking_trees',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'ant',
        price: 80,
        location: 'rotten_turnips_fruit',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'hermit_crab',
        price: 1000,
        location: 'beach',
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
        name: 'wharf_roach',
        price: 200,
        location: 'rocks_beach',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: true,
        name: 'fly',
        price: 60,
        location: 'rotten_fruit_garbage',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'mosquito',
        price: 130,
        location: 'flying',
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
        name: 'flea',
        price: 70,
        location: 'flea_villagers',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'snail',
        price: 250,
        location: 'rocks_rain',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'insect',
        isRare: false,
        name: 'pill_bug',
        price: 250,
        location: 'rocks_under',
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
        name: 'centipede',
        price: 300,
        location: 'rocks_under',
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
        name: 'spider',
        price: 480,
        location: 'shaking_trees',
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
        name: 'tarantula',
        price: 8000,
        location: 'ground',
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
        name: 'scorpion',
        price: 8000,
        location: 'ground',
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
        name: 'bitterling',
        price: 900,
        location: 'river',
        months: {
          northern: [10, 11, 0, 1, 2],
          southern: [4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'pale_chub',
        price: 160,
        location: 'river',
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
        name: 'crucian_carp',
        price: 160,
        location: 'river',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'dace',
        price: 240,
        location: 'river',
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
        name: 'carp',
        price: 300,
        location: 'pond',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'koi',
        price: 4000,
        location: 'pond',
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
        name: 'goldfish',
        price: 1300,
        location: 'pond',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'pop-eyed_goldfish',
        price: 1300,
        location: 'pond',
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
        name: 'ranchu_goldfish',
        price: 4500,
        location: 'pond',
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
        name: 'killifish',
        price: 300,
        location: 'pond',
        months: {
          northern: [3, 4, 5, 6, 7],
          southern: [9, 10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'crawfish',
        price: 200,
        location: 'pond',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'soft-shelled_turtle',
        price: 3750,
        location: 'river',
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
        name: 'snapping_turtle',
        price: 5000,
        location: 'river',
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
        name: 'tadpole',
        price: 100,
        location: 'pond',
        months: {
          northern: [2, 3, 4, 5, 6],
          southern: [8, 9, 10, 11, 0]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'frog',
        price: 120,
        location: 'pond',
        months: {
          northern: [4, 5, 6, 7],
          southern: [10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'freshwater_goby',
        price: 400,
        location: 'river',
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
        name: 'loach',
        price: 400,
        location: 'river',
        months: {
          northern: [2, 3, 4],
          southern: [8, 9, 10]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'catfish',
        price: 800,
        location: 'pond',
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
        name: 'giant_snakehead',
        price: 5500,
        location: 'pond',
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
        name: 'bluegill',
        price: 180,
        location: 'river',
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
        name: 'yellow_perch',
        price: 300,
        location: 'river',
        months: {
          northern: [9, 10, 11, 0, 1, 2],
          southern: [3, 4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'black_bass',
        price: 400,
        location: 'river',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'tilapia',
        price: 800,
        location: 'river',
        months: {
          northern: [5, 6, 7, 8, 9],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'pike',
        price: 1800,
        location: 'river',
        months: {
          northern: [8, 9, 10, 11],
          southern: [2, 3, 4, 5]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'pond_smelt',
        price: '0,',
        location: 'river',
        months: {
          northern: [11, 0, 1],
          southern: [5, 6, 7]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'sweetfish',
        price: 900,
        location: 'river',
        months: {
          northern: [6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'cherry_salmon',
        price: 1000,
        location: 'river_cliff',
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
        name: 'char',
        price: 3800,
        location: 'river_cliff',
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
        name: 'golden_trout',
        price: 15000,
        location: 'river_cliff',
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
        name: 'stringfish',
        price: 15000,
        location: 'river_cliff',
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
        name: 'salmon',
        price: 700,
        location: 'river_mouth',
        months: {
          northern: [8],
          southern: [2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'king_salmon',
        price: 1800,
        location: 'river_mouth',
        months: {
          northern: [8],
          southern: [2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'mitten_crab',
        price: 2000,
        location: 'river',
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
        name: 'guppy',
        price: 1300,
        location: 'river',
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
        name: 'nibble_fish',
        price: 1500,
        location: 'river',
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
        name: 'angelfish',
        price: 3000,
        location: 'river',
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
        name: 'betta',
        price: 2500,
        location: 'river',
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
        name: 'neon_tetra',
        price: 500,
        location: 'river',
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
        name: 'rainbowfish',
        price: 800,
        location: 'river',
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
        name: 'piranha',
        price: 2500,
        location: 'river',
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
        name: 'arowana',
        price: 10000,
        location: 'river',
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
        name: 'dorado',
        price: 15000,
        location: 'river',
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
        name: 'gar',
        price: 6000,
        location: 'pond',
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
        name: 'arapaima',
        price: 10000,
        location: 'river',
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
        name: 'saddled_bichir',
        price: 4000,
        location: 'river',
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
        name: 'sturgeon',
        price: 10000,
        location: 'river_mouth',
        months: {
          northern: [8, 9, 10, 11, 0, 1, 2],
          southern: [2, 3, 4, 5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'sea_butterfly',
        price: 1000,
        location: 'sea',
        months: {
          northern: [11, 0, 1, 2],
          southern: [5, 6, 7, 8]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'seahorse',
        price: 1100,
        location: 'sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'clownfish',
        price: 650,
        location: 'sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'surgeonfish',
        price: 1000,
        location: 'sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'butterfly_fish',
        price: 1000,
        location: 'sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8],
          southern: [9, 10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'napoleonfish',
        price: 10000,
        location: 'sea',
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
        name: 'zebra_turkeyfish',
        price: 500,
        location: 'sea',
        months: {
          northern: [3, 4, 5, 6, 7, 8, 9, 10],
          southern: [9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'blowfish',
        price: 5000,
        location: 'sea',
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
        name: 'puffer_fish',
        price: 250,
        location: 'sea',
        months: {
          northern: [6, 7, 8],
          southern: [0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'anchovy',
        price: 200,
        location: 'sea',
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
        name: 'horse_mackerel',
        price: 150,
        location: 'sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'barred_knifejaw',
        price: 5000,
        location: 'sea',
        months: {
          northern: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          southern: [8, 9, 10, 11, 0, 1, 2, 3, 4]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'sea_bass',
        price: 400,
        location: 'sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'red_snapper',
        price: 3000,
        location: 'sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'dab',
        price: 300,
        location: 'sea',
        months: {
          northern: [9, 10, 11, 0, 1, 2, 3],
          southern: [7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'olive_flounder',
        price: 800,
        location: 'sea',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'squid',
        price: 500,
        location: 'sea',
        months: {
          northern: [11, 0, 1, 2, 3, 4, 5, 6, 7],
          southern: [5, 6, 7, 8, 9, 10, 11, 0, 1]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'moray_eel',
        price: 2000,
        location: 'sea',
        months: {
          northern: [7, 8, 9],
          southern: [1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'ribbon_eel',
        price: 600,
        location: 'sea',
        months: {
          northern: [5, 6, 7, 8, 9],
          southern: [11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'tuna',
        price: 7000,
        location: 'pier',
        months: {
          northern: [10, 11, 0, 1, 2, 3],
          southern: [4, 5, 6, 7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'blue_marlin',
        price: 10000,
        location: 'pier',
        months: {
          northern: [10, 11, 0, 1, 2, 3, 6, 7, 8],
          southern: [0, 1, 2, 4, 5, 6, 7, 8, 9]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'giant_trevally',
        price: 4500,
        location: 'pier',
        months: {
          northern: [4, 5, 6, 7, 8],
          southern: [10, 11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'mahi-mahi',
        price: 6000,
        location: 'pier',
        months: {
          northern: [4, 5, 6, 7, 8, 9],
          southern: [10, 11, 0, 1, 2, 3]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'ocean_sunfish',
        price: 4000,
        location: 'sea',
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
        name: 'ray',
        price: 3000,
        location: 'sea',
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
        name: 'saw_shark',
        price: 12000,
        location: 'sea',
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
        name: 'hammerhead_shark',
        price: 8000,
        location: 'sea',
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
        name: 'great_white_shark',
        price: 15000,
        location: 'sea',
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
        name: 'whale_shark',
        price: 13000,
        location: 'sea',
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'suckerfish',
        price: 1500,
        location: 'sea',
        months: {
          northern: [5, 6, 7, 8],
          southern: [11, 0, 1, 2]
        }
      },
      {
        type: 'fish',
        isRare: false,
        name: 'football_fish',
        price: 2500,
        location: 'sea',
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
        name: 'oarfish',
        price: 9000,
        location: 'sea',
        months: {
          northern: [11, 0, 1, 2, 3, 4],
          southern: [5, 6, 7, 8, 9, 10]
        }
      },
      {
        type: 'fish',
        isRare: true,
        name: 'barreleye',
        price: 15000,
        location: 'sea',
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
        name: 'coelacanth',
        price: 15000,
        location: 'sea_rain',
        months: {
          northern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          southern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      }
    ];
  }
});
