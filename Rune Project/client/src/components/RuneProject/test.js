const diablo2RunesArray = [
    { name: 'El', number: 1, reqLevel: 11, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Eld', number: 2, reqLevel: 11, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Tir', number: 3, reqLevel: 13, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Nef', number: 4, reqLevel: 13, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Eth', number: 5, reqLevel: 15, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Ith', number: 6, reqLevel: 15, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Tal', number: 7, reqLevel: 17, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Ral', number: 8, reqLevel: 19, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Ort', number: 9, reqLevel: 21, neededFor:  3 , cubable: false, dropped: 0, gems: '' },
    { name: 'Thul', number: 10, reqLevel: 23, neededFor:  3 , cubable: false, dropped: 0, gems: 'Chipped Topaz ' },
    { name: 'Amn', number: 11, reqLevel: 25, neededFor:  3 , cubable: false, dropped: 0, gems: 'Chipped Amethyst' },
    { name: 'Sol', number: 12, reqLevel: 27, neededFor:  3 , cubable: false, dropped: 0, gems: 'Chipped Sapphire' },
    { name: 'Shael', number: 13, reqLevel: 29, neededFor:  3 , cubable: false, dropped: 0, gems: 'Chipped Ruby' },
    { name: 'Dol', number: 14, reqLevel: 31, neededFor:  3 , cubable: false, dropped: 0, gems: 'Chipped Emerald' },
    { name: 'Hel', number: 15, reqLevel: 0, neededFor: 3 , cubable: false, dropped: 0, gems: 'Chipped Diamond' },
    { name: 'Io', number: 16, reqLevel: 35, neededFor:  3 , cubable: false, dropped: 0, gems: 'Flawed Topaz' },
    { name: 'Lum', number: 17, reqLevel: 37, neededFor: 3 , cubable: false, dropped: 0, gems: 'Flawed Amethyst' },
    { name: 'Ko', number: 18, reqLevel: 39, neededFor:  3 , cubable: false, dropped: 0, gems: 'Flawed Sapphire' },
    { name: 'Fal', number: 19, reqLevel: 41, neededFor:  3 , cubable: false, dropped: 0, gems: 'Flawed Ruby' },
    { name: 'Lem', number: 20, reqLevel: 43, neededFor:  3 , cubable: false, dropped: 0, gems: 'Flawed Emerald' },
    { name: 'Pul', number: 21, reqLevel: 45, neededFor: 2 , cubable: false, dropped: 0, gems: 'Flawed Diamond' },
    { name: 'Um', number: 22, reqLevel: 47, neededFor:  2 , cubable: false, dropped: 0, gems: 'Topaz' },
    { name: 'Mal', number: 23, reqLevel: 49, neededFor:  2 , cubable: false, dropped: 0, gems: 'Amethyst' },
    { name: 'Ist', number: 24, reqLevel: 51, neededFor:  2 , cubable: false, dropped: 0, gems: 'Sapphire' },
    { name: 'Gul', number: 25, reqLevel: 53, neededFor:  2 , cubable: false, dropped: 0, gems: 'Ruby' },
    { name: 'Vex', number: 26, reqLevel: 55, neededFor:  2 , cubable: false, dropped: 0, gems: 'Emerald' },
    { name: 'Ohm', number: 27, reqLevel: 57, neededFor: 2 , cubable: false, dropped: 0, gems: 'Diamond' },
    { name: 'Lo', number: 28, reqLevel: 59, neededFor:  2 , cubable: false, dropped: 0, gems: 'Flawless Topaz' },
    { name: 'Sur', number: 29, reqLevel: 61, neededFor:  2 , cubable: false, dropped: 0, gems: 'Flawless Amethyst' },
    { name: 'Ber', number: 30, reqLevel: 63, neededFor:  2 , cubable: false, dropped: 0, gems: 'Flawless Sapphire' },
    { name: 'Jah', number: 31, reqLevel: 65, neededFor:  2 , cubable: false, dropped: 0, gems: 'Flawless Ruby' },
    { name: 'Cham', number: 32, reqLevel: 67, neededFor:  1 , cubable: false, dropped: 0, gems: 'Flawless Emerald' },
    { name: 'Zod', number: 33, reqLevel: 69, neededFor:  0 , cubable: false, dropped: 0, gems: '' },
  ];


const diablo2RunesObject = diablo2RunesArray.reduce((acc, rune) => {
    acc[rune.number] = {
      name: rune.name,
      number: rune.number,
      reqLevel: rune.reqLevel,
      neededForCube: rune.neededForCube,
      cubable: rune.cubable,
      dropped: rune.dropped,
      gems: rune.gems,
      usedInProject: false, // Added property with initial value false
    };
    return acc;
  }, {});
  
  console.log(diablo2RunesObject);


  // armor: '',weapon: ''