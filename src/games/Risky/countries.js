export const continents = {
  namerica: {
    name: 'North America',
    color: '#FF0',
    bonus: 5,
    label: [38, 173]
  },
  europe: {
    name: 'Europe',
    color: '#888',
    bonus: 5,
    label: [320, 266]
  },
  asia: {
    name: 'Asia',
    color: '#8adb8e',
    bonus: 7,
    label: [955, 390]
  },
  africa: {
    name: 'Africa',
    color: '#9c7905',
    bonus: 3,
    label: [438, 643]
  },
  australia: {
    name: 'Australia',
    color: '#a31aa6',
    bonus: 2,
    label: [768, 612]
  },
  samerica: {
    name: 'South America',
    color: '#F80',
    bonus: 2,
    label: [338, 756]
  }
}






export const countries = [
  {
    continent: 'namerica',
    id: 'greenland',
    name: 'Greenland',
    points: [[253, 8], [327, 4], [346, 45], [300, 81], [243, 33]],
    connections: ['iceland', 'northwestterritory', 'ontario', 'quebec'],
    center: [305,48]
  },
  {
    continent: 'samerica',
    id: 'argentina',
    name: 'Argentina',
    points: [[220, 621], [280, 645], [308, 694], [270, 790], [243, 785]],
    connections: ['peru', 'brazil'],
    center: [273,722]
  },
  {
    continent: 'samerica',
    id: 'peru',
    name: 'Peru',
    points: [[220, 621], [171, 525], [177, 480], [220, 512], [280, 645]],
    connections: ['argentina', 'brazil', 'venezuela'],
    center: [220,563]
  },
  {
    continent: 'samerica',
    id: 'brazil',
    name: 'Brazil',
    points: [[280, 645], [220, 512], [292, 464], [338, 522], [346, 614], [308, 694]],
    connections: ['argentina', 'peru', 'venezuela', 'northafrica'],
    center: [303,569]
  },
  {
    continent: 'samerica',
    id: 'venezuela',
    name: 'Venezuela',
    points: [[292, 464], [220, 512], [177, 480],     [187, 460], [189, 432],   [227, 422]],
    connections: ['centralamerica', 'peru', 'brazil'],
    center: [235,475]
  },
  {
    continent: 'namerica',
    id: 'centralamerica',
    name: 'Central America',
    points: [[189, 432], [187, 460],    [92, 371], [73, 289], [113, 299], [138, 336], [149, 383], [179, 392]],
    connections: ['westernus', 'easternus', 'venezuela'],
    center: [122,360]
  },
  {
    continent: 'namerica',
    id: 'westernus',
    name: 'Western United States',
    points: [[113, 299], [73, 289],   [57, 241], [84, 190], [194, 190], [159, 254]],
    connections: ['easternus', 'ontario', 'alberta', 'centralamerica'],
    center: [122,250]
  },
  {
    continent: 'namerica',
    id: 'easternus',
    name: 'Eastern United States',
    points: [[113, 299], [159, 254], [194, 190],     [239, 212],   [280, 195], [284, 219], [230, 303], [239, 338], [179, 318], [138,336]],
    connections: ['westernus', 'ontario', 'alberta', 'centralamerica', 'quebec'],
    center: [215,274]
  },
  {
    continent: 'namerica',
    id: 'alberta',
    name: 'Alberta',
    points: [[84, 190], [87, 147], [75, 118], [190, 118], [177, 190]],
    connections: ['westernus', 'ontario', 'alaska', 'northwestterritory'],
    center: [146,164]
  },
  {
    continent: 'namerica',
    id: 'ontario',
    name: 'Ontario',
    points: [[177, 190], [190, 118], [225, 118], [252, 148], [258, 204], [239, 212], [194, 190] ],
    connections: ['easternus', 'alberta', 'westernus', 'quebec', 'northwestterritory', 'greenland'],
    center: [228,175]
  },
  {
    continent: 'namerica',
    id: 'quebec',
    name: 'Quebec',
    points: [[258, 204], [252, 148],  [285, 114], [320, 146], [280, 195] ],
    connections: ['easternus', 'ontario', 'greenland'],
    center: [292,165]
  },
  {
    continent: 'namerica',
    id: 'northwestterritory',
    name: 'Northwest Territory',
    points: [[75, 118], [91, 62], [170, 54],  [251, 76], [225, 118]],
    connections: ['alaska', 'alberta', 'ontario', 'greenland'],
    center: [168,96]
  },
  {
    continent: 'namerica',
    id: 'alaska',
    name: 'Alaska',
    points: [[87, 147], [55, 116], [35, 122], [22, 95],  [38, 78], [32, 57], [59, 47], [91, 62], [75, 118]],
    connections: ['kamchatka', 'alberta', 'northwestterritory'],
    center: [67,97]
  },
  {
    continent: 'europe',
    id: 'iceland',
    name: 'Iceland',
    points: [[338, 78], [384, 77], [385, 97], [352, 127], [328, 98]],
    connections: ['greatbritain', 'scandinavia', 'greenland'],
    center: [366,107]
  },
  {
    continent: 'europe',
    id: 'greatbritain',
    name: 'Great Britain',
    points: [[331, 167], [348, 170], [355, 220], [329, 239], [326, 227], [315, 223], [315, 201], [322, 194]],
    connections: ['westerneurope', 'iceland', 'scandinavia', 'northerneurope'],
    center: [343,221]
  },
  {
    continent: 'europe',
    id: 'westerneurope',
    name: 'Western Europe',
    points: [[342, 358], [309, 330], [316, 301], [339, 292],   [340, 255], [367, 235], [389, 252], [391, 285], [368, 314]],
    connections: ['northafrica', 'southerneurope', 'greatbritain', 'northerneurope'],
    center: [346,331]
  },
  {
    continent: 'europe',
    id: 'northerneurope',
    name: 'Northern Europe',
    points: [[389, 252], [367, 235],   [391, 200], [398, 183], [410, 189], [448, 183], [458, 232]],
    connections: ['ukraine', 'scandinavia', 'southerneurope', 'greatbritain', 'westerneurope'],
    center: [423,228]
  },
  {
    continent: 'europe',
    id: 'southerneurope',
    name: 'Southern Europe',
    points: [[391, 285], [389, 252], [458, 232], [495, 241],  [493, 273], [483, 287], [484, 322], [470, 322], [437, 294], [451, 323], [425, 336], [419, 326], [431, 314]],
    connections: ['ukraine', 'egypt', 'northafrica', 'middleeast', 'westerneurope', 'northerneurope'],
    center: [452,280]
  },
  {
    continent: 'europe',
    id: 'ukraine',
    name: 'Ukraine',
    points: [[495, 241], [458, 232], [448, 183], [471, 115],    [478, 48], [506, 64], [630, 43], [629, 159],   [579, 199], [581, 225], [583, 270], [557, 275],   [527, 230]],
    connections: ['ural', 'afghanistan', 'middleeast', 'scandinavia', 'northerneurope', 'southerneurope'],
    center: [542,157]
  },
  {
    continent: 'europe',
    id: 'scandinavia',
    name: 'Scandinavia',
    points: [[478, 48], [471, 103],    [445, 109], [435, 164], [421, 163],     [414, 149], [410, 156], [393, 149], [398, 123], [439, 49]],
    connections: ['ukraine', 'iceland', 'greatbritain', 'northerneurope'],
    center: [430,136]
  },
  {
    continent: 'africa',
    id: 'egypt',
    name: 'Egypt',
    points: [[412, 354], [486, 354],    [546, 361], [564, 383], [567, 418],     [504, 433], [435, 417]],
    connections: ['northafrica', 'middleeast', 'eastafrica', 'southerneurope'],
    center: [500,401]
  },
  {
    continent: 'africa',
    id: 'northafrica',
    name: 'North Africa',
    points: [[412, 354], [435, 417], [504, 433],    [512, 525],    [465, 590], [393, 575], [344, 467],     [351, 376], [400, 355]],
    connections: ['brazil', 'westerneurope', 'egypt', 'eastafrica', 'congo', 'southerneurope'],
    center: [438,492]
  },
  {
    continent: 'africa',
    id: 'eastafrica',
    name: 'East Africa',
    points: [[512, 525], [504, 433], [567, 418],    [611, 487], [650, 481], [606, 570],    [601, 637],    [556, 615], [553, 553]],
    connections: [ 'egypt', 'northafrica', 'congo', 'madagascar', 'southafrica'],
    center: [572,508]
  },
  {
    continent: 'africa',
    id: 'congo',
    name: 'Congo',
    points: [[465, 590], [512, 525], [553, 553], [556, 615],   [493, 653]],
    connections: ['northafrica', 'eastafrica', 'southafrica'],
    center: [521,599]
  },
  {
    continent: 'africa',
    id: 'southafrica',
    name: 'South Africa',
    points: [[493, 653], [556, 615], [601, 637],   [563, 772], [516, 788], [487, 704]],
    connections: ['congo', 'eastafrica', 'madagascar'],
    center: [548,702]
  },
  {
    continent: 'africa',
    id: 'madagascar',
    name: 'Madagascar',
    points: [[621, 670], [663, 636], [669, 674],   [635, 748], [608, 746]],
    connections: ['eastafrica', 'southafrica'],
    center: [651,693]
  },
  {
    continent: 'asia',
    id: 'ural',
    name: 'Ural',
    points: [[629, 159], [630, 43],  [655, 38], [740, 202], [720, 217]],
    connections: ['afghanistan', 'ukraine', 'china', 'siberia'],
    center: [673,148]
  },
  {
    continent: 'asia',
    id: 'afghanistan',
    name: 'Afghanistan',
    points: [[581, 225], [579, 199], [629, 159], [720, 217],   [709, 276], [658, 290], [620, 274], [604, 225]],
    connections: ['ural', 'ukraine', 'china', 'india', 'middleeast'],
    center: [670,245]
  },
  {
    continent: 'asia',
    id: 'middleeast',
    name: 'Middle East',
    points: [[564, 383], [546, 361], [544, 310], [503, 312],   [483, 287], [493, 273], [557, 275], [583, 270], [620, 274], [658, 290],      [663, 355], [645, 371],    [660, 400], [682, 410], [620, 444]],
    connections: ['southerneurope', 'eastafrica', 'egypt', 'afghanistan', 'ukraine', 'india'],
    center: [608,345]
  },
  {
    continent: 'asia',
    id: 'india',
    name: 'India',
    points: [[663, 355], [658, 290], [709, 276],     [823, 331], [815, 379], [754, 499], [715, 439],   [705, 390]],
    connections: ['middleeast', 'siam', 'afghanistan', 'china'],
    center: [757,368]
  },
  {
    continent: 'asia',
    id: 'siam',
    name: 'Siam',
    points: [[815, 379], [823, 331],  [876, 360], [889, 433],   [868, 427], [854, 440]],
    connections: ['india', 'indonesia', 'china'],
    center: [858,386]
  },
  {
    continent: 'asia',
    id: 'china',
    name: 'China',
    points: [[876, 360], [823, 331], [709, 276], [720, 217],  [740, 202], [769, 194], [798, 221], [878, 244],   [926, 309],  [902, 370]],
    connections: ['india', 'siam', 'mongolia', 'siberia', 'ural', 'afghanistan'],
    center: [828,288]
  },
  {
    continent: 'asia',
    id: 'siberia',
    name: 'Siberia',
    points: [[769, 194], [740, 202], [655, 38],   [706, 10], [776, 24], [764, 83], [763, 153]],
    connections: ['yakutsk', 'irkutsk', 'mongolia', 'china', 'ural'],
    center: [730,72]
  },
  {
    continent: 'asia',
    id: 'yakutsk',
    name: 'Yakutsk',
    points: [[764, 83], [776, 24], [807, 40], [888, 28], [836, 106]],
    connections: ['kamchatka', 'irkutsk', 'siberia'],
    center: [822,75]
  },
  {
    continent: 'asia',
    id: 'irkutsk',
    name: 'Irkutsk',
    points: [[763, 153], [764, 83], [836, 106],    [887, 174], [857, 162], [841, 169]],
    connections: ['kamchatka', 'yakutsk', 'siberia', 'mongolia'],
    center: [812,140]
  },
  {
    continent: 'asia',
    id: 'mongolia',
    name: 'Mongolia',
    points: [[878, 244], [798, 221], [769, 194], [763, 153],   [841, 169], [857, 162], [887, 174],   [916, 186], [912, 249]],
    connections: ['kamchatka', 'irkutsk', 'siberia', 'china', 'japan'],
    center: [860,211]
  },
  {
    continent: 'asia',
    id: 'kamchatka',
    name: 'Kamchatka',
    points: [[916, 186], [887, 174], [836, 106], [888, 28],    [951, 56], [900, 118]],
    connections: ['yakutsk', 'irkutsk', 'mongolia', 'alaska', 'japan'],
    center: [901,90]
  },
  {
    continent: 'asia',
    id: 'japan',
    name: 'Japan',
    points: [[945, 168], [980, 178], [974, 217], [981, 269],    [963, 313], [939, 296], [950, 245]],
    connections: ['kamchatka', 'mongolia'],
    center: [972,281]
  },
  {
    continent: 'australia',
    id: 'westernaus',
    name: 'Western Australia',
    points: [[773, 770], [759, 756], [756, 672], [877, 601], [877, 739]],
    connections: ['easternaus', 'indonesia', 'newguinea'],
    center: [824,708]
  },
  {
    continent: 'australia',
    id: 'easternaus',
    name: 'Eastern Australia',
    points: [[877, 739], [877, 601], [912, 635], [940, 611], [982, 694], [944, 774], [896, 783]],
    connections: ['westernaus', 'indonesia', 'newguinea'],
    center: [935,705]
  },
  {
    continent: 'australia',
    id: 'indonesia',
    name: 'Indonesia',
    points: [[800, 576], [772, 524], [810, 518], [840, 480], [856, 544], [835, 570]],
    connections: ['siam', 'westernaus', 'newguinea'],
    center: [828,552]
  },
  {
    continent: 'australia',
    id: 'newguinea',
    name: 'New Guinea',
    points: [[890, 501], [930, 505], [960, 528], [965, 577],  [912, 565]],
    connections: ['indonesia', 'westernaus', 'easternaus'],
    center: [941,549]
  },

];

export const connections = [
  [[928, 85],[1050, 85]],
  [[-50, 85],[70, 85]],
  [[590, 470],[623, 424]],
  
  [[255, 47],[217, 78]],
  [[253, 151],[294, 53]],
  [[307, 74],[294, 130]],
  
  [[325, 50],[355, 94]],
  [[316, 548],[386, 516]],
  [[398, 375],[440, 332]],
  [[500, 375],[485, 320]],
  [[370, 395],[330, 320]],

  [[340, 212],[367, 266]],
  [[340, 215],[427, 246]],
  [[343, 200],[368, 114]],
  [[343, 220],[414, 149]],
  [[375, 102],[443, 79]],

  [[676, 673],[596, 593]],
  [[627, 717],[552, 706]],

  [[867, 424],[845, 513]],
  [[921, 521],[851, 649]],
  [[959, 562],[948, 633]],
  [[813, 559],[811, 688]],
  [[844, 524],[911, 524]],

  [[889, 144],[979, 209]],
  [[911, 228],[965, 266]],
  [[435, 140],[445, 220]],
];