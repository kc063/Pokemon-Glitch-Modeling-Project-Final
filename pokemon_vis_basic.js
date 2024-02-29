// HELPERS  
  
/** Helper to extract the atom from a singleton  
 *  Note: this does not convert to the atom's id(); may get wrapping [] */  
function firstAtomOf(expr) {  
  if (!expr.empty()) return expr.tuples()[0].atoms()[0];  
  return "none";  
}  
const fam = firstAtomOf; // shorthand  
/** Helper that returns a filter-function that filters for a specific set of atom IDs */  
function atomIdIn(idArr) {  
  return (atomObj) => atomObj.id() in idArr;  
}  
  
//Now we're good!  
  
const gw = instance.signature("GameWorld").atoms()[0];  
  
const buff = instance.field("wildPokemonBuffer");  
  
const encounterGridConfig = {  
  // Absolute location in parent (here, of the stage itself)  
  grid_location: { x: 10, y: 150 },  
  // How large is each cell?  
  cell_size: { x_size: 200, y_size: 200 },  
  // How many rows and columns?  
  grid_dimensions: {  
    y_size: 2,  
    x_size: 4,  
  },  
};  
  
function imageCooker(val) {  
  return new ImageBox({  
    coords: { x: 0, y: 0 }, // Adjust coordinates as needed  
    url: pkDict[val],  
    width: 200, // Adjust width as needed  
    height: 200, // Adjust height as needed  
  });  
}  
  
const pkDict = {};  
const namePkDict = {}  
  
// Adding key-value pairs to the object  
pkDict[0] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
namePkDict[0] = "000";  
pkDict[1] = "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_112.png";  
namePkDict[1] = "Rhydon";  
pkDict[2] = "https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_115.png";  
namePkDict[2] = "Kangaskhan";  
pkDict[3] = "https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_032.png";  
namePkDict[3] = "Nidoran M";  
pkDict[4] = "https://archives.bulbagarden.net/media/upload/0/08/Spr_1b_035.png";  
namePkDict[4] = "Clefairy";  
pkDict[5] = "https://archives.bulbagarden.net/media/upload/8/81/Spr_1b_021.png";  
namePkDict[5] = "Spearow";  
pkDict[6] = "https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_100.png";  
namePkDict[6] = "Voltorb";  
pkDict[7] = "https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_034.png";  
namePkDict[7] = "Nidoking";  
pkDict[8] = "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_080.png";  
namePkDict[8]= "Slowbro";  
pkDict[9] = "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_002.png";  
namePkDict[9] = "Ivysaur";  
pkDict[10] =   
  "https://archives.bulbagarden.net/media/upload/d/d2/Spr_1b_103.png";  
namePkDict[10] = "Exeggutor";  
pkDict[11] =  
  "https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_108.png";  
namePkDict[11] = "Lickitung";  
pkDict[12] =  
  "https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_102.png";  
namePkDict[12] = "Exeggcute";  
pkDict[13] =  
  "https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_088.png";  
namePkDict[13] = "Grimer";  
pkDict[14] =  
  "https://archives.bulbagarden.net/media/upload/b/b9/Spr_1b_094.png";  
namePkDict[14] = "Gengar";  
pkDict[15] =  
  "https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_029.png";  
namePkDict[15] = "Nidoran (F)";  
pkDict[16] =  
  "https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_031.png";  
  namePkDict[16] = "Nidoqueen";  
  pkDict[17] =  
  "https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_104.png";  
  namePkDict[17] = "Cubone";  
pkDict[18] =  
  "https://archives.bulbagarden.net/media/upload/9/90/Spr_1b_111.png";  
  namePkDict[18] = "Rhyhorn";  
pkDict[19] =  
  "https://archives.bulbagarden.net/media/upload/7/77/Spr_1b_131.png";  
  namePkDict[19] = "Lapras";  
pkDict[20] =  
  "https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_059.png";  
  namePkDict[20] = "Arcanine";  
pkDict[21] =  
  "https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_151.png";  
  namePkDict[21] = "Mewtwo";  
pkDict[22] =  
  "https://archives.bulbagarden.net/media/upload/0/05/Spr_1b_130.png";  
  namePkDict[130] = "Gyarados";  
pkDict[23] =  
  "https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_090.png";  
  namePkDict[23] = "Shellder";  
pkDict[24] =  
  "https://archives.bulbagarden.net/media/upload/d/df/Spr_1b_072.png";  
  namePkDict[24] = "Tentacool";  
pkDict[25] =  
  "https://archives.bulbagarden.net/media/upload/c/ce/Spr_1b_092.png";  
namePkDict[25] = "Gastly";  
pkDict[26] =  
  "https://archives.bulbagarden.net/media/upload/0/0f/Spr_1b_123.png";  
  namePkDict[26] = "Scyther";  
pkDict[27] =  
  "https://archives.bulbagarden.net/media/upload/9/9f/Spr_1b_120.png";  
  namePkDict[27] = "Staryu";  
pkDict[28] =  
  "https://archives.bulbagarden.net/media/upload/2/2c/Spr_1b_009.png";  
  namePkDict[28] = "Blastoise";  
pkDict[29] =  
  "https://archives.bulbagarden.net/media/upload/7/70/Spr_1b_127.png";  
  namePkDict[29] = "Pinsir";  
pkDict[30] =  
  "https://archives.bulbagarden.net/media/upload/e/e3/Spr_1b_114.png";  
  namePkDict[30] = "Tangela";  
pkDict[31] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[31] = "MISSINGNO";  
pkDict[32] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[32] = "MISSINGNO";  
pkDict[33] =  
  "https://archives.bulbagarden.net/media/upload/c/cc/Spr_1b_058.png";  
namePkDict[33] = "Growlithe";  
pkDict[34] =  
  "https://archives.bulbagarden.net/media/upload/f/f1/Spr_1b_095.png";  
namePkDict[34] = "Onix";  
pkDict[35] =  
  "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_022.png";  
  namePkDict[35] = "Fearow";  
pkDict[36] =  
  "https://archives.bulbagarden.net/media/upload/c/cd/Spr_1b_016.png";  
  namePkDict[36] = "Pidgey";  
pkDict[37] =  
  "https://archives.bulbagarden.net/media/upload/0/0c/Spr_1b_079.png";  
  namePkDict[37] = "Slowpoke";  
pkDict[38] =  
  "https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_064.png";  
  namePkDict[38] = "Kadabra";  
pkDict[39] =  
  "https://archives.bulbagarden.net/media/upload/3/3c/Spr_1b_075.png";  
  namePkDict[39] = "Graveler";  
pkDict[40] =  
  "https://archives.bulbagarden.net/media/upload/c/cf/Spr_1b_113.png";  
  namePkDict[40] = "Chansey";  
pkDict[41] =  
  "https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_067.png";  
  namePkDict[41] = "Machoke";  
pkDict[42] =  
  "https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_122.png";  
  namePkDict[42] = "Mr. Mime";  
pkDict[43] =  
  "https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_106.png";  
  namePkDict[43] = "Hitmonlee";  
pkDict[44] =  
  "https://archives.bulbagarden.net/media/upload/6/6c/Spr_1b_107.png";  
  namePkDict[44] = "Hitmonchan";  
pkDict[45] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_024.png";  
  namePkDict[45] = "Arbok";  
pkDict[46] =  
  "https://archives.bulbagarden.net/media/upload/5/54/Spr_1b_047.png";  
  namePkDict[46] = "Parasect";  
pkDict[47] =  
  "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_054.png";  
  namePkDict[47] = "Psyduck";  
pkDict[48] =  
  "https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_096.png";  
  namePkDict[48] = "Drowsee";  
pkDict[49] =  
  "https://archives.bulbagarden.net/media/upload/9/9c/Spr_1b_076.png";  
  namePkDict[49] = "Onix";  
pkDict[50] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[50] = "MISSINGNO";  
pkDict[51] =  
  "https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_126.png";  
  namePkDict[51] = "Magmar";  
pkDict[52] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[52] = "MISSINGNO";  
pkDict[53] =  
  "https://archives.bulbagarden.net/media/upload/1/1e/Spr_1b_125.png";  
  namePkDict[53] = "Electabuzz";  
pkDict[54] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_082.png";  
  namePkDict[54] = "Magneton";  
pkDict[55] =  
  "https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_109.png";  
  namePkDict[55] = "Koffing";  
pkDict[56] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[56] = "MISSINGNO";  
pkDict[57] =  
  "https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_056.png";  
  namePkDict[57] = "Mankey";  
pkDict[58] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_086.png";  
  namePkDict[58] = "Seel";  
pkDict[59] =  
  "https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_050.png";  
  namePkDict[59] = "Diglett";  
pkDict[60] =  
  "https://archives.bulbagarden.net/media/upload/1/14/Spr_1b_128.png";  
  namePkDict[60] = "Tauros";  
pkDict[61] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[61] = "MISSINGNO";  
pkDict[62] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[62] = "MISSINGNO";  
pkDict[63] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[63] = "MISSINGNO";  
pkDict[64] =  
  "https://archives.bulbagarden.net/media/upload/e/eb/Spr_1b_083.png";  
  namePkDict[64] = "Farfetch'd";  
pkDict[65] =  
  "https://archives.bulbagarden.net/media/upload/d/d7/Spr_1b_048.png";  
  namePkDict[65] = "Venonat";  
pkDict[66] =  
  "https://archives.bulbagarden.net/media/upload/c/ca/Spr_1b_149.png";  
  namePkDict[149] = "Dragonite";  
pkDict[67] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[67] = "MISSINGNO";  
pkDict[68] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[68] = "MISSINGNO";  
pkDict[69] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[69] = "MISSINGNO";  
pkDict[70] =  
  "https://archives.bulbagarden.net/media/upload/b/b0/Spr_1b_084.png";  
  namePkDict[70] = "Doduo";  
pkDict[71] =  
  "https://archives.bulbagarden.net/media/upload/c/c9/Spr_1b_060.png";  
  namePkDict[71] = "Poliwag";  
pkDict[72] =  
  "https://archives.bulbagarden.net/media/upload/2/27/Spr_1b_124.png";  
  namePkDict[72] = "Jynx";  
pkDict[73] =  
  "https://archives.bulbagarden.net/media/upload/4/4e/Spr_1b_146.png";  
  namePkDict[73] = "Moltres";  
pkDict[74] =  
  "https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_144.png";  
  namePkDict[74] = "Articuno";  
pkDict[75] =  
  "https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_145.png";  
  namePkDict[75] = "Zapdos";  
pkDict[76] =  
  "https://archives.bulbagarden.net/media/upload/b/bd/Spr_1b_132.png";  
  namePkDict[76] = "Ditto";  
pkDict[77] =  
  "https://archives.bulbagarden.net/media/upload/4/4d/Spr_1b_052.png";  
  namePkDict[77] = "Meowth";  
pkDict[78] =  
  "https://archives.bulbagarden.net/media/upload/a/a8/Spr_1b_098.png";  
  namePkDict[78] = "Krabby";  
pkDict[79] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[79] = "MISSINGNO";  
pkDict[80] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[80] = "MISSINGNO";  
pkDict[81] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[81] = "MISSINGNO";  
pkDict[82] =  
  "https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_037.png";  
  namePkDict[82] = "Vulpix";  
pkDict[83] =  
  "https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_038.png";  
  namePkDict[83] = "Ninetales";  
pkDict[84] =  
  "https://archives.bulbagarden.net/media/upload/b/ba/Spr_1b_025.png";  
  namePkDict[84] = "Pikachu";  
pkDict[85] =  
  "https://archives.bulbagarden.net/media/upload/5/53/Spr_1b_026.png";  
  namePkDict[85] = "Raichu";  
pkDict[86] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[86] = "MISSINGNO";  
pkDict[87] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[87] = "MISSINGNO";  
pkDict[88] =  
  "https://archives.bulbagarden.net/media/upload/e/ed/Spr_1b_147.png";  
  namePkDict[88] = "Dratini";  
pkDict[89] =  
  "https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_148.png";  
  namePkDict[89] = "Dragonair";  
pkDict[90] =  
  "https://archives.bulbagarden.net/media/upload/c/c8/Spr_1b_140.png";  
  namePkDict[90] = "Kabuto";  
pkDict[91] =  
  "https://archives.bulbagarden.net/media/upload/f/f8/Spr_1b_141.png";  
  namePkDict[91] = "Kabutops";  
pkDict[92] =  
  "https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_116.png";  
  namePkDict[92] = "Horsea";  
pkDict[93] =  
  "https://archives.bulbagarden.net/media/upload/d/de/Spr_1b_117.png";  
  namePkDict[93] = "Seadra";  
pkDict[94] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[94] = "MISSINGNO";  
pkDict[95] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[95] = "MISSINGNO";  
pkDict[96] =  
  "https://archives.bulbagarden.net/media/upload/f/fe/Spr_1b_027.png";  
  namePkDict[96] = "Sandshrew";  
pkDict[97] =  
  "https://archives.bulbagarden.net/media/upload/6/60/Spr_1b_028.png";  
  namePkDict[97] = "Sandslash";  
pkDict[98] =  
  "https://archives.bulbagarden.net/media/upload/5/59/Spr_1b_138.png";  
  namePkDict[98] = "Omanyte";  
pkDict[99] =  
  "https://archives.bulbagarden.net/media/upload/6/68/Spr_1b_139.png";  
  namePkDict[99] = "Omastar";  
pkDict[100] =  
  "https://archives.bulbagarden.net/media/upload/2/2f/Spr_1b_039.png";  
  namePkDict[100] = "Jigglypuff";  
pkDict[101] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_040.png";  
  namePkDict[101] = "Wigglytuff";  
pkDict[102] =  
  "https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_133.png";  
  namePkDict[102] = "Eevee";  
pkDict[103] =  
  "https://archives.bulbagarden.net/media/upload/1/1f/Spr_1b_136.png";  
  namePkDict[103] = "Flareon";  
pkDict[104] =  
  "https://archives.bulbagarden.net/media/upload/2/26/Spr_1b_135.png";  
  namePkDict[104] = "Jolteon";  
pkDict[105] =  
  "https://archives.bulbagarden.net/media/upload/5/50/Spr_1b_134.png";  
  namePkDict[105] = "Vaporeon";  
pkDict[106] =  
  "https://archives.bulbagarden.net/media/upload/b/b2/Spr_1b_066.png";  
  namePkDict[106] = "Machop";  
pkDict[107] =  
  "https://archives.bulbagarden.net/media/upload/f/f7/Spr_1b_041.png";  
  namePkDict[107] = "Zubat";  
pkDict[108] =  
  "https://archives.bulbagarden.net/media/upload/5/58/Spr_1b_023.png";  
  namePkDict[108] = "Ekans";  
pkDict[109] =  
  "https://archives.bulbagarden.net/media/upload/7/74/Spr_1b_046.png";  
  namePkDict[109] = "Paras";  
pkDict[110] =  
  "https://archives.bulbagarden.net/media/upload/b/bf/Spr_1b_061.png";  
  namePkDict[110] = "Poliwhirl";  
pkDict[111] =  
  "https://archives.bulbagarden.net/media/upload/6/67/Spr_1b_062.png";  
  namePkDict[111] = "Poliwrath";  
pkDict[112] =  
  "https://archives.bulbagarden.net/media/upload/d/da/Spr_1b_013.png";  
  namePkDict[112] = "Weedle";  
pkDict[113] =  
  "https://archives.bulbagarden.net/media/upload/0/06/Spr_1b_014.png";  
  namePkDict[113] = "Kakuna";  
pkDict[114] =  
  "https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_015.png";  
  namePkDict[114] = "Beedrill";  
pkDict[115] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[115] = "MISSINGNO";  
pkDict[116] =  
  "https://archives.bulbagarden.net/media/upload/4/43/Spr_1b_085.png";  
  namePkDict[34] = "Dodrio";  
pkDict[117] =  
  "https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_057.png";  
  namePkDict[117] = "Primeape";  
pkDict[118] =  
  "https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_051.png";  
  namePkDict[118] = "Dugtrio";  
pkDict[119] =  
  "https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_049.png";  
  namePkDict[119] = "Venomoth";  
pkDict[120] =  
  "https://archives.bulbagarden.net/media/upload/6/64/Spr_1b_087.png";  
  namePkDict[120] = "Dewgong";  
pkDict[121] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[121] = "MISSINGNO";  
pkDict[122] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[122] = "MISSINGNO";  
pkDict[123] =  
  "https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_010.png";  
  namePkDict[123] = "Caterpie";  
pkDict[124] =  
  "https://archives.bulbagarden.net/media/upload/e/ef/Spr_1b_011.png";  
  namePkDict[124] = "Metapod";  
pkDict[125] =  
  "https://archives.bulbagarden.net/media/upload/f/fa/Spr_1b_012.png";  
  namePkDict[125] = "Butterfree";  
pkDict[126] =  
  "https://archives.bulbagarden.net/media/upload/d/d9/Spr_1b_068.png";  
  namePkDict[126] = "Machamp";  
pkDict[127] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[127] = "MISSINGNO";  
pkDict[128] =  
  "https://archives.bulbagarden.net/media/upload/5/51/Spr_1b_055.png";  
  namePkDict[128] = "Golduck";  
pkDict[129] =  
  "https://archives.bulbagarden.net/media/upload/0/09/Spr_1b_097.png";  
  namePkDict[129] = "Hypno";  
pkDict[130] =  
  "https://archives.bulbagarden.net/media/upload/2/23/Spr_1b_042.png";  
  namePkDict[130] = "Golbat";  
pkDict[131] =  
  "https://archives.bulbagarden.net/media/upload/0/04/Spr_1b_150.png";  
  namePkDict[131] = "Mewtwo";  
pkDict[132] =  
  "https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_143.png";  
  namePkDict[132] = "Snorlax";  
pkDict[133] =  
  "https://archives.bulbagarden.net/media/upload/1/1a/Spr_1b_129.png";  
  namePkDict[133] = "Magikarp";  
pkDict[134] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[134] = "MISSINGNO";  
pkDict[135] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[135] = "MISSINGNO";  
pkDict[136] =  
  "https://archives.bulbagarden.net/media/upload/a/af/Spr_1b_089.png";  
  namePkDict[136] = "Muk";  
pkDict[137] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[137] = "MISSINGNO";  
pkDict[138] =  
  "https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_099.png";  
  namePkDict[138] = "Kingler";  
pkDict[139] =  
  "https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_091.png";  
  namePkDict[139] = "Cloyster";  
pkDict[140] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[140] = "MISSINGNO";  
pkDict[141] =  
  "https://archives.bulbagarden.net/media/upload/f/f9/Spr_1b_101.png";  
  namePkDict[141] = "Electrode";  
pkDict[142] =  
  "https://archives.bulbagarden.net/media/upload/2/25/Spr_1b_036.png";  
  namePkDict[142] = "Clefable";  
pkDict[143] =  
  "https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_110.png";  
  namePkDict[143] = "Weezing";  
pkDict[144] =  
  "https://archives.bulbagarden.net/media/upload/5/55/Spr_1b_053.png";  
  namePkDict[144] = "Persian";  
pkDict[145] =  
  "https://archives.bulbagarden.net/media/upload/9/93/Spr_1b_105.png";  
  namePkDict[145] = "Marowak";  
pkDict[146] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[146] = "MISSINGNO";  
pkDict[147] =  
  "https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_093.png";  
  namePkDict[147] = "Haunter";  
pkDict[148] =  
  "https://archives.bulbagarden.net/media/upload/3/36/Spr_1b_063.png";  
  namePkDict[148] = "Abra";  
pkDict[149] =  
  "https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_065.png";  
  namePkDict[149] = "Alakazam";  
pkDict[150] =  
  "https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_017.png";  
  namePkDict[150] = "Pidgeotto";  
pkDict[151] =  
  "https://archives.bulbagarden.net/media/upload/c/c0/Spr_1b_018.png";  
  namePkDict[151] = "Pidgeot";  
pkDict[152] =  
  "https://archives.bulbagarden.net/media/upload/f/fd/Spr_1b_121.png";  
  namePkDict[152] = "Starmie";  
pkDict[153] =  
  "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_001.png";  
  namePkDict[153] = "Bulbasaur";  
pkDict[154] =  
  "https://archives.bulbagarden.net/media/upload/f/f6/Spr_1b_003.png";  
  namePkDict[154] = "Venusaur";  
pkDict[155] =  
  "https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_073.png";  
  namePkDict[155] = "Tentacruel";  
pkDict[156] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[156] = "MISSINGNO";  
pkDict[157] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_118.png";  
  namePkDict[157] = "Goldeen";  
pkDict[158] =  
  "https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_119.png";  
  namePkDict[159] = "Seaking";  
pkDict[159] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[159] = "MISSINGNO";  
pkDict[160] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[160] = "MISSINGNO";  
pkDict[161] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[161] = "MISSINGNO";  
pkDict[162] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[162] = "MISSINGNO";  
pkDict[163] =  
  "https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_077.png";  
  namePkDict[163] = "Ponyta";  
pkDict[164] =  
  "https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_078.png";  
  namePkDict[164] = "Rapidash";  
pkDict[165] =  
  "https://archives.bulbagarden.net/media/upload/9/95/Spr_1b_019.png";  
  namePkDict[165] = "Rattata";  
pkDict[166] =  
  "https://archives.bulbagarden.net/media/upload/e/ea/Spr_1b_020.png";  
  namePkDict[166] = "Raticate";  
pkDict[167] =  
  "https://archives.bulbagarden.net/media/upload/5/5b/Spr_1b_033.png";  
  namePkDict[167] = "Nidorino";  
pkDict[168] =  
  "https://archives.bulbagarden.net/media/upload/b/b3/Spr_1b_030.png";  
  namePkDict[168] = "Nidorina";  
pkDict[169] =  
  "https://archives.bulbagarden.net/media/upload/4/4c/Spr_1b_074.png";  
  namePkDict[169] = "Geodude";  
pkDict[170] =  
  "https://archives.bulbagarden.net/media/upload/d/d4/Spr_1b_137.png";  
  namePkDict[170] = "Porygon";  
pkDict[171] =  
  "https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_142.png";  
  namePkDict[171] = "Aerodactyl";  
pkDict[172] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[172] = "MISSINGNO";  
pkDict[173] =  
  "https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_081.png";  
  namePkDict[173] = "Magnemite";  
pkDict[174] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[174] = "MISSINGNO";  
pkDict[175] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[175] = "MISSINGNO";  
pkDict[176] =  
  "https://archives.bulbagarden.net/media/upload/9/9d/Spr_1b_004.png";  
  namePkDict[176] = "Charmander";  
pkDict[177] =  
  "https://archives.bulbagarden.net/media/upload/3/30/Spr_1b_007.png";  
  namePkDict[177] = "Squirtle";  
pkDict[178] =  
  "https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_005.png";  
  namePkDict[178] = "Charmeleon";  
pkDict[179] =  
  "https://archives.bulbagarden.net/media/upload/d/d3/Spr_1b_008.png";  
  namePkDict[179] = "Wartortle";  
pkDict[180] =  
  "https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_006.png";  
  namePkDict[180] = "Charizard";  
pkDict[181] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[181] = "MISSINGNO";  
pkDict[182] =  
  "https://archives.bulbagarden.net/media/upload/a/aa/Spr_1b_141_f.png";  
  namePkDict[182] = "MISSINGNO [Kabutops Fossil]";  
pkDict[183] =  
  "https://archives.bulbagarden.net/media/upload/b/bb/Spr_1b_142_f.png";  
  namePkDict[183] = "MISSINGNO [Aerodactyl Fossil]";  
pkDict[184] = "https://archives.bulbagarden.net/media/upload/9/9e/Ghost_I.png";  
namePkDict[184] = "MISSINGNO [Ghost]";  
pkDict[185] =  
  "https://archives.bulbagarden.net/media/upload/a/a6/Spr_1b_043.png";  
  namePkDict[185] = "Oddish";  
pkDict[186] =  
  "https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_044.png";  
  namePkDict[186] = "Gloom";  
pkDict[187] =  
  "https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_045.png";  
  namePkDict[187] = "Vileplume";  
pkDict[188] =  
  "https://archives.bulbagarden.net/media/upload/8/86/Spr_1b_069.png";  
  namePkDict[188] = "Bellsprout";  
pkDict[189] =  
  "https://archives.bulbagarden.net/media/upload/a/ad/Spr_1b_070.png";  
  namePkDict[34] = "Weepinbell";  
pkDict[190] =  
  "https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_071.png";  
  namePkDict[34] = "Victreebell";  
pkDict[191] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[191] = "INVALID";  
pkDict[192] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[192] = "INVALID";  
pkDict[193] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[193] = "INVALID";  
pkDict[194] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[194] = "INVALID";  
pkDict[195] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[195] = "INVALID";  
pkDict[196] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[196] = "INVALID";  
pkDict[197] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[197] = "INVALID";  
pkDict[198] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[198] = "INVALID";  
pkDict[199] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[199] = "INVALID";  
pkDict[200] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[200] = "INVALID";  
pkDict[201] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[201] = "INVALID";  
pkDict[202] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[202] = "INVALID";  
pkDict[203] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[203] = "INVALID";  
pkDict[204] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[204] = "INVALID";  
pkDict[205] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[205] = "INVALID";  
pkDict[206] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[206] = "INVALID";  
pkDict[207] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[207] = "INVALID";  
pkDict[208] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[208] = "INVALID";  
pkDict[209] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[209] = "INVALID";  
pkDict[210] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[210] = "INVALID";  
pkDict[211] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[211] = "INVALID";  
pkDict[212] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[212] = "INVALID";  
pkDict[213] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[213] = "INVALID";  
pkDict[214] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[214] = "INVALID";  
pkDict[215] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[215] = "INVALID";  
pkDict[216] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[216] = "INVALID";  
pkDict[217] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[217] = "INVALID";  
pkDict[218] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[218] = "INVALID";  
pkDict[219] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[219] = "INVALID";  
pkDict[220] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[220] = "INVALID";  
pkDict[221] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[221] = "INVALID";  
pkDict[222] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[222] = "INVALID";  
pkDict[223] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[223] = "INVALID";  
pkDict[224] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[224] = "INVALID";  
pkDict[225] =  
  "https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Blue_1.png";  
  namePkDict[225] = "Rival Blue 1";  
pkDict[226] =  
  "https://archives.bulbagarden.net/media/upload/1/1e/Spr_RG_Oak.png";  
  namePkDict[226] = "Prof. Oak";  
pkDict[227] =  
  "https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Scientist.png";  
  namePkDict[227] = "Chief";  
pkDict[228] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[228] = "INVALID";  
pkDict[229] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[229] = "INVALID";  
pkDict[230] =  
  "https://archives.bulbagarden.net/media/upload/a/a1/Spr_RG_Rocket.png";  
  namePkDict[230] = "Rocket";  
pkDict[231] =  
  "https://archives.bulbagarden.net/media/upload/0/0f/Spr_RG_Cooltrainer_M.png";  
  namePkDict[231] = "Cooltrainer M";  
pkDict[232] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[232] = "INVALID";  
pkDict[233] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[233] = "INVALID";  
pkDict[234] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[234] = "INVALID";  
pkDict[235] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[235] = "INVALID";  
pkDict[236] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[236] = "INVALID";  
pkDict[237] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[237] = "INVALID";  
pkDict[238] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[238] = "INVALID";  
pkDict[239] =  
  "https://archives.bulbagarden.net/media/upload/6/6e/Spr_RG_Blaine.png";  
  namePkDict[239] = "Blaine";  
pkDict[240] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[240] = "INVALID";  
pkDict[241] =  
  "https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Gentleman.png";  
  namePkDict[241] = "Gentleman";  
pkDict[242] =  
  "https://archives.bulbagarden.net/media/upload/3/38/Spr_RG_Blue_2.png";  
  namePkDict[242] = "Rival Blue 2";  
pkDict[243] =  
  "https://archives.bulbagarden.net/media/upload/5/51/Spr_RG_Blue_3.png";  
  namePkDict[243] = "Rival Blue 3";  
pkDict[244] =  
  "https://archives.bulbagarden.net/media/upload/5/58/Spr_RG_Lorelei.png";  
  namePkDict[244] = "Lorelei";  
pkDict[245] =  
  "https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Channeler.png";  
  namePkDict[245] = "Channeler";  
pkDict[246] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[246] = "INVALID";  
pkDict[247] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[247] = "INVALID";  
pkDict[248] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[248] = "INVALID";  
pkDict[249] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[249] = "INVALID";  
pkDict[250] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[250] = "INVALID";  
pkDict[251] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[251] = "INVALID";  
pkDict[252] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[252] = "INVALID";  
pkDict[253] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[253] = "INVALID";  
pkDict[254] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[254] = "INVALID";  
pkDict[255] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[255] = "INVALID";  
pkDict[256] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[256] = "INVALID";  
  
const img = new ImageBox({  
  coords: { x: 100, y: 100 },  
  url: "example.png",  
  width: 200,  
  height: 200,  
});  
  
const charArray = {}  
charArray[0] = "_"  
charArray[80] = "[TERMINATE]"  
charArray[127] = " "  
charArray[128] = "A"  
charArray[129] = "B"  
charArray[130] = "C"  
charArray[131] = "D"  
charArray[132] = "E"  
charArray[133] = "F"  
charArray[134] = "G"  
charArray[135] = "H"  
charArray[136] = "I"  
charArray[137] = "J"  
charArray[138] = "K"  
charArray[139] = "L"  
charArray[140] = "M"  
charArray[141] = "N"  
charArray[142] = "O"  
charArray[143] = "P"  
charArray[144] = "Q"  
charArray[145] = "R"  
charArray[146] = "S"  
charArray[147] = "T"  
charArray[148] = "U"  
charArray[149] = "V"  
charArray[150] = "W"  
charArray[151] = "X"  
charArray[152] = "Y"  
charArray[153] = "Z"  
charArray[154] = "("  
charArray[155] = ")"  
charArray[156] = ":"  
charArray[157] = ";"  
charArray[158] = "["  
charArray[159] = "]"  
charArray[160] = "a"  
charArray[161] = "b"  
charArray[162] = "c"  
charArray[163] = "d"  
charArray[164] = "e"  
charArray[165] = "f"  
charArray[166] = "g"  
charArray[167] = "h"  
charArray[168] = "i"  
charArray[169] = "j"  
charArray[170] = "k"  
charArray[171] = "l"  
charArray[172] = "m"  
charArray[173] = "n"  
charArray[174] = "o"  
charArray[175] = "p"  
charArray[176] = "q"  
charArray[177] = "r"  
charArray[178] = "s"  
charArray[179] = "t"  
charArray[180] = "u"  
charArray[181] = "v"  
charArray[182] = "w"  
charArray[183] = "x"  
charArray[184] = "y"  
charArray[185] = "z"  
charArray[225] = "[PK]"  
charArray[226] = "[MN]"  
charArray[227] = "-"  
charArray[230] = "?"  
charArray[231] = "!"  
charArray[239] = "♂"  
charArray[241] = "×"  
charArray[242] = "."  
charArray[243] = "/"  
charArray[244] = ","  
charArray[245] = "♀"  
  
  
  
  
const buf = [  
  fam(Buffer.join(buff_0)),  
  fam(Buffer.join(buff_1)),  
  fam(Buffer.join(buff_2)),  
  fam(Buffer.join(buff_3)),  
  fam(Buffer.join(buff_4)),  
  fam(Buffer.join(buff_5)),  
  fam(Buffer.join(buff_6)),  
  fam(Buffer.join(buff_7)),  
];  
  
const encounterGrid = new Grid(encounterGridConfig);  
let txt = "";  
  
buf.forEach((val, idx) => {  
  if (idx % 2 == 0) {  
    encounterGrid.add(  
      { x: Math.floor(idx / 2), y: 1 },  
      new TextBox({ text: `${namePkDict[buf[idx+1]] }
      Level: ${val}` })  
    );  
    
  } else {  
    encounterGrid.add({ x: Math.floor(idx / 2), y: 0 }, imageCooker(val));  
  }  
  txt += charArray[val];  
});  
  
 
  
  
const stage = new Stage();  
stage.add(encounterGrid);  
 
  
stage.add(new TextBox({  
  text: `Possible Encounters for name  ${txt}`,   
  coords: {x:300, y:50},  
  color: 'black',  
  fontSize: 30  
}))  
  
stage.render(svg);  
