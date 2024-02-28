// HELPERS

/** Helper to extract the atom from a singleton 
 *  Note: this does not convert to the atom's id(); may get wrapping [] */
function firstAtomOf(expr) {
  if(!expr.empty())
    return expr.tuples()[0].atoms()[0]
  return 'none'
}
const fam = firstAtomOf // shorthand
/** Helper that returns a filter-function that filters for a specific set of atom IDs */
function atomIdIn(idArr) {
  return atomObj => atomObj.id() in idArr
}

//Now we're good!

const gw = instance.signature('GameWorld').atoms()[0]

const buff = instance.field('wildPokemonBuffer')



const encounterGridConfig = {
    // Absolute location in parent (here, of the stage itself)
    grid_location: { x:10, y:150},
    // How large is each cell?
    cell_size: {x_size:200,y_size:200},
    // How many rows and columns?
    grid_dimensions: {
        y_size:2,
        x_size:4}}

    
function imageCooker(val) {
  return new ImageBox({
    coords: {x: 0, y: 0}, // Adjust coordinates as needed
    url: pkDict[val],
    width: 200, // Adjust width as needed
    height: 200 // Adjust height as needed
});
}



const pkDict = {};

// Adding key-value pairs to the object
pkDict[0] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png'
pkDict[1] = 'https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_112.png';
pkDict[2] = 'https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_115.png';
pkDict[3] = 'https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_032.png';
pkDict[4] = 'https://archives.bulbagarden.net/media/upload/0/08/Spr_1b_035.png';
pkDict[5] = 'https://archives.bulbagarden.net/media/upload/8/81/Spr_1b_021.png';
pkDict[6] = 'https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_100.png';
pkDict[7] = 'https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_034.png';
pkDict[8] = 'https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_080.png';
pkDict[9] = 'https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_002.png';
pkDict[10] = 'https://archives.bulbagarden.net/media/upload/d/d2/Spr_1b_103.png';
pkDict[11] = 'https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_108.png';
pkDict[12] = 'https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_102.png';
pkDict[13] = 'https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_088.png';
pkDict[14] = 'https://archives.bulbagarden.net/media/upload/b/b9/Spr_1b_094.png';
pkDict[15] = 'https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_029.png';
pkDict[16] = 'https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_031.png';
pkDict[17] = 'https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_104.png';
pkDict[18] = 'https://archives.bulbagarden.net/media/upload/9/90/Spr_1b_111.png';
pkDict[19] = 'https://archives.bulbagarden.net/media/upload/7/77/Spr_1b_131.png';
pkDict[20] = 'https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_059.png';
pkDict[21] = 'https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_151.png';
pkDict[22] = 'https://archives.bulbagarden.net/media/upload/0/05/Spr_1b_130.png';
pkDict[23] = 'https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_090.png';
pkDict[24] = 'https://archives.bulbagarden.net/media/upload/d/df/Spr_1b_072.png';
pkDict[25] = 'https://archives.bulbagarden.net/media/upload/c/ce/Spr_1b_092.png';
pkDict[26] = 'https://archives.bulbagarden.net/media/upload/0/0f/Spr_1b_123.png';
pkDict[27] = 'https://archives.bulbagarden.net/media/upload/9/9f/Spr_1b_120.png';
pkDict[28] = 'https://archives.bulbagarden.net/media/upload/2/2c/Spr_1b_009.png';
pkDict[29] = 'https://archives.bulbagarden.net/media/upload/7/70/Spr_1b_127.png';
pkDict[30] = 'https://archives.bulbagarden.net/media/upload/e/e3/Spr_1b_114.png';
pkDict[31] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[32] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[33] = 'https://archives.bulbagarden.net/media/upload/c/cc/Spr_1b_058.png';
pkDict[34] = 'https://archives.bulbagarden.net/media/upload/f/f1/Spr_1b_095.png';
pkDict[35] = 'https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_022.png';
pkDict[36] = 'https://archives.bulbagarden.net/media/upload/c/cd/Spr_1b_016.png';
pkDict[37] = 'https://archives.bulbagarden.net/media/upload/0/0c/Spr_1b_079.png';
pkDict[38] = 'https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_064.png';
pkDict[39] = 'https://archives.bulbagarden.net/media/upload/3/3c/Spr_1b_075.png';
pkDict[40] = 'https://archives.bulbagarden.net/media/upload/c/cf/Spr_1b_113.png';
pkDict[41] = 'https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_067.png';
pkDict[42] = 'https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_122.png';
pkDict[43] = 'https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_106.png';
pkDict[44] = 'https://archives.bulbagarden.net/media/upload/6/6c/Spr_1b_107.png';
pkDict[45] = 'https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_024.png';
pkDict[46] = 'https://archives.bulbagarden.net/media/upload/5/54/Spr_1b_047.png';
pkDict[47] = 'https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_054.png';
pkDict[48] = 'https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_096.png';
pkDict[49] = 'https://archives.bulbagarden.net/media/upload/9/9c/Spr_1b_076.png';
pkDict[50] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[51] = 'https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_126.png';
pkDict[52] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[53] = 'https://archives.bulbagarden.net/media/upload/1/1e/Spr_1b_125.png';
pkDict[54] = 'https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_082.png';
pkDict[55] = 'https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_109.png';
pkDict[56] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[57] = 'https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_056.png';
pkDict[58] = 'https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_086.png';
pkDict[59] = 'https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_050.png';
pkDict[60] = 'https://archives.bulbagarden.net/media/upload/1/14/Spr_1b_128.png';
pkDict[61] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[62] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[63] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[64] = 'https://archives.bulbagarden.net/media/upload/e/eb/Spr_1b_083.png';
pkDict[65] = 'https://archives.bulbagarden.net/media/upload/d/d7/Spr_1b_048.png';
pkDict[66] = 'https://archives.bulbagarden.net/media/upload/c/ca/Spr_1b_149.png';
pkDict[67] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[68] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[69] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[70] = 'https://archives.bulbagarden.net/media/upload/b/b0/Spr_1b_084.png';
pkDict[71] = 'https://archives.bulbagarden.net/media/upload/c/c9/Spr_1b_060.png';
pkDict[72] = 'https://archives.bulbagarden.net/media/upload/2/27/Spr_1b_124.png';
pkDict[73] = 'https://archives.bulbagarden.net/media/upload/4/4e/Spr_1b_146.png';
pkDict[74] = 'https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_144.png';
pkDict[75] = 'https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_145.png';
pkDict[76] = 'https://archives.bulbagarden.net/media/upload/b/bd/Spr_1b_132.png';
pkDict[77] = 'https://archives.bulbagarden.net/media/upload/4/4d/Spr_1b_052.png';
pkDict[78] = 'https://archives.bulbagarden.net/media/upload/a/a8/Spr_1b_098.png';
pkDict[79] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[80] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[81] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[82] = 'https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_037.png';
pkDict[83] = 'https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_038.png';
pkDict[84] = 'https://archives.bulbagarden.net/media/upload/b/ba/Spr_1b_025.png';
pkDict[85] = 'https://archives.bulbagarden.net/media/upload/5/53/Spr_1b_026.png';
pkDict[86] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[87] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[88] = 'https://archives.bulbagarden.net/media/upload/e/ed/Spr_1b_147.png';
pkDict[89] = 'https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_148.png';
pkDict[90] = 'https://archives.bulbagarden.net/media/upload/c/c8/Spr_1b_140.png';
pkDict[91] = 'https://archives.bulbagarden.net/media/upload/f/f8/Spr_1b_141.png';
pkDict[92] = 'https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_116.png';
pkDict[93] = 'https://archives.bulbagarden.net/media/upload/d/de/Spr_1b_117.png';
pkDict[94] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[95] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[96] = 'https://archives.bulbagarden.net/media/upload/f/fe/Spr_1b_027.png';
pkDict[97] = 'https://archives.bulbagarden.net/media/upload/6/60/Spr_1b_028.png';
pkDict[98] = 'https://archives.bulbagarden.net/media/upload/5/59/Spr_1b_138.png';
pkDict[99] = 'https://archives.bulbagarden.net/media/upload/6/68/Spr_1b_139.png';
pkDict[100] = 'https://archives.bulbagarden.net/media/upload/2/2f/Spr_1b_039.png';
pkDict[101] = 'https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_040.png';
pkDict[102] = 'https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_133.png';
pkDict[103] = 'https://archives.bulbagarden.net/media/upload/1/1f/Spr_1b_136.png';
pkDict[104] = 'https://archives.bulbagarden.net/media/upload/2/26/Spr_1b_135.png';
pkDict[105] = 'https://archives.bulbagarden.net/media/upload/5/50/Spr_1b_134.png';
pkDict[106] = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_1b_066.png';
pkDict[107] = 'https://archives.bulbagarden.net/media/upload/f/f7/Spr_1b_041.png';
pkDict[108] = 'https://archives.bulbagarden.net/media/upload/5/58/Spr_1b_023.png';
pkDict[109] = 'https://archives.bulbagarden.net/media/upload/7/74/Spr_1b_046.png';
pkDict[110] = 'https://archives.bulbagarden.net/media/upload/b/bf/Spr_1b_061.png';
pkDict[111] = 'https://archives.bulbagarden.net/media/upload/6/67/Spr_1b_062.png';
pkDict[112] = 'https://archives.bulbagarden.net/media/upload/d/da/Spr_1b_013.png';
pkDict[113] = 'https://archives.bulbagarden.net/media/upload/0/06/Spr_1b_014.png';
pkDict[114] = 'https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_015.png';
pkDict[115] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[116] = 'https://archives.bulbagarden.net/media/upload/4/43/Spr_1b_085.png';
pkDict[117] = 'https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_057.png';
pkDict[118] = 'https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_051.png';
pkDict[119] = 'https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_049.png';
pkDict[120] = 'https://archives.bulbagarden.net/media/upload/6/64/Spr_1b_087.png';
pkDict[121] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[122] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[123] = 'https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_010.png';
pkDict[124] = 'https://archives.bulbagarden.net/media/upload/e/ef/Spr_1b_011.png';
pkDict[125] = 'https://archives.bulbagarden.net/media/upload/f/fa/Spr_1b_012.png';
pkDict[126] = 'https://archives.bulbagarden.net/media/upload/d/d9/Spr_1b_068.png';
pkDict[127] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[128] = 'https://archives.bulbagarden.net/media/upload/5/51/Spr_1b_055.png';
pkDict[129] = 'https://archives.bulbagarden.net/media/upload/0/09/Spr_1b_097.png';
pkDict[130] = 'https://archives.bulbagarden.net/media/upload/2/23/Spr_1b_042.png';
pkDict[131] = 'https://archives.bulbagarden.net/media/upload/0/04/Spr_1b_150.png';
pkDict[132] = 'https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_143.png';
pkDict[133] = 'https://archives.bulbagarden.net/media/upload/1/1a/Spr_1b_129.png';
pkDict[134] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[135] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[136] = 'https://archives.bulbagarden.net/media/upload/a/af/Spr_1b_089.png';
pkDict[137] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[138] = 'https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_099.png';
pkDict[139] = 'https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_091.png';
pkDict[140] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[141] = 'https://archives.bulbagarden.net/media/upload/f/f9/Spr_1b_101.png';
pkDict[142] = 'https://archives.bulbagarden.net/media/upload/2/25/Spr_1b_036.png';
pkDict[143] = 'https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_110.png';
pkDict[144] = 'https://archives.bulbagarden.net/media/upload/5/55/Spr_1b_053.png';
pkDict[145] = 'https://archives.bulbagarden.net/media/upload/9/93/Spr_1b_105.png';
pkDict[146] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[147] = 'https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_093.png';
pkDict[148] = 'https://archives.bulbagarden.net/media/upload/3/36/Spr_1b_063.png';
pkDict[149] = 'https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_065.png';
pkDict[150] = 'https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_017.png';
pkDict[151] = 'https://archives.bulbagarden.net/media/upload/c/c0/Spr_1b_018.png';
pkDict[152] = 'https://archives.bulbagarden.net/media/upload/f/fd/Spr_1b_121.png';
pkDict[153] = 'https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_001.png';
pkDict[154] = 'https://archives.bulbagarden.net/media/upload/f/f6/Spr_1b_003.png';
pkDict[155] = 'https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_073.png';
pkDict[156] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[157] = 'https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_118.png';
pkDict[158] = 'https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_119.png';
pkDict[159] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[160] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[161] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[162] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[163] = 'https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_077.png';
pkDict[164] = 'https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_078.png';
pkDict[165] = 'https://archives.bulbagarden.net/media/upload/9/95/Spr_1b_019.png';
pkDict[166] = 'https://archives.bulbagarden.net/media/upload/e/ea/Spr_1b_020.png';
pkDict[167] = 'https://archives.bulbagarden.net/media/upload/5/5b/Spr_1b_033.png';
pkDict[168] = 'https://archives.bulbagarden.net/media/upload/b/b3/Spr_1b_030.png';
pkDict[169] = 'https://archives.bulbagarden.net/media/upload/4/4c/Spr_1b_074.png';
pkDict[170] = 'https://archives.bulbagarden.net/media/upload/d/d4/Spr_1b_137.png';
pkDict[171] = 'https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_142.png';
pkDict[172] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[173] = 'https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_081.png';
pkDict[174] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[175] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[176] = 'https://archives.bulbagarden.net/media/upload/9/9d/Spr_1b_004.png';
pkDict[177] = 'https://archives.bulbagarden.net/media/upload/3/30/Spr_1b_007.png';
pkDict[178] = 'https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_005.png';
pkDict[179] = 'https://archives.bulbagarden.net/media/upload/d/d3/Spr_1b_008.png';
pkDict[180] = 'https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_006.png';
pkDict[181] = 'https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png';
pkDict[182] = 'https://archives.bulbagarden.net/media/upload/a/aa/Spr_1b_141_f.png';
pkDict[183] = 'https://archives.bulbagarden.net/media/upload/b/bb/Spr_1b_142_f.png';
pkDict[184] = 'https://archives.bulbagarden.net/media/upload/9/9e/Ghost_I.png';
pkDict[185] = 'https://archives.bulbagarden.net/media/upload/a/a6/Spr_1b_043.png';
pkDict[186] = 'https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_044.png';
pkDict[187] = 'https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_045.png';
pkDict[188] = 'https://archives.bulbagarden.net/media/upload/8/86/Spr_1b_069.png';
pkDict[189] = 'https://archives.bulbagarden.net/media/upload/a/ad/Spr_1b_070.png';
pkDict[190] = 'https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_071.png';
pkDict[191] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[192] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[193] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[194] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[195] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[196] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[197] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[198] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[199] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[200] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[201] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[202] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[203] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[204] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[205] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[206] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[207] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[208] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[209] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[210] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[211] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[212] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[213] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[214] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[215] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[216] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[217] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[218] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[219] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[220] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[221] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[222] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[223] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[224] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[225] = 'https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Blue_1.png';
pkDict[226] = 'https://archives.bulbagarden.net/media/upload/1/1e/Spr_RG_Oak.png';
pkDict[227] = 'https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Scientist.png';
pkDict[228] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[229] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[230] = 'https://archives.bulbagarden.net/media/upload/a/a1/Spr_RG_Rocket.png';
pkDict[231] = 'https://archives.bulbagarden.net/media/upload/0/0f/Spr_RG_Cooltrainer_M.png';
pkDict[232] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[233] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[234] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[235] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[236] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[237] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[238] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[239] = 'https://archives.bulbagarden.net/media/upload/6/6e/Spr_RG_Blaine.png';
pkDict[240] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[241] = 'https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Gentleman.png';
pkDict[242] = 'https://archives.bulbagarden.net/media/upload/3/38/Spr_RG_Blue_2.png';
pkDict[243] = 'https://archives.bulbagarden.net/media/upload/5/51/Spr_RG_Blue_3.png';
pkDict[244] = 'https://archives.bulbagarden.net/media/upload/5/58/Spr_RG_Lorelei.png';
pkDict[245] = 'https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Channeler.png';
pkDict[246] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[247] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[248] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[249] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[250] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[251] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[252] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[253] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[254] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[255] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';
pkDict[256] = 'https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png';

const img = new ImageBox({
    coords: {x:100,y:100}, 
    url: "example.png", 
    width:200, 
    height:200})

const buf = [fam(Buffer.join(buff_0)),
  fam(Buffer.join(buff_1)),
  fam(Buffer.join(buff_2)),
  fam(Buffer.join(buff_3)),
  fam(Buffer.join(buff_4)),
  fam(Buffer.join(buff_5)),
  fam(Buffer.join(buff_6)),
  fam(Buffer.join(buff_7))]

const encounterGrid = new Grid(encounterGridConfig)

buf.forEach((val, idx) => {
  if(idx%2==0){
      encounterGrid.add({x: Math.floor(idx/2), y: 0}, imageCooker(val))
  }else{
    encounterGrid.add({x: Math.floor(idx/2), y: 1}, new TextBox({text: `Level: ${val}`}))
  }
})

const stage = new Stage()
stage.add(encounterGrid)

stage.render(svg)