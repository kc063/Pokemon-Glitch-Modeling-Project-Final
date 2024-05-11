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
  
 
  
function imageCooker(val) {  
  return new ImageBox({  
    coords: { x: 0, y: 0 }, // Adjust coordinates as needed  
    url: pkDict[val],  
    width: 200, // Adjust width as needed  
    height: 200, // Adjust height as needed  
  });  
}  
  
const pkDict = {};  
const namePkDict = {};
const soundPkDict = {};
  
// Adding key-value pairs to the object  
pkDict[0] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
namePkDict[0] = "000";  
soundPkDict[0] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3"
pkDict[1] = "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_112.png";  
namePkDict[1] = "Rhydon";  
soundPkDict[1] = "https://jackofalltrades.neocities.org/1710_final_project/rhydon.mp3";
pkDict[2] = "https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_115.png";  
namePkDict[2] = "Kangaskhan";  
soundPkDict[2] = "https://jackofalltrades.neocities.org/1710_final_project/kangaskhan.mp3";
pkDict[3] = "https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_032.png";  
namePkDict[3] = "Nidoran M";  
soundPkDict[3] = "https://jackofalltrades.neocities.org/1710_final_project/nidoranm.mp3";
pkDict[4] = "https://archives.bulbagarden.net/media/upload/0/08/Spr_1b_035.png";  
namePkDict[4] = "Clefairy";  
soundPkDict[4] = "https://jackofalltrades.neocities.org/1710_final_project/clefairy.mp3";
pkDict[5] = "https://archives.bulbagarden.net/media/upload/8/81/Spr_1b_021.png";  
namePkDict[5] = "Spearow";  
soundPkDict[5] = "https://jackofalltrades.neocities.org/1710_final_project/spearow.mp3";
pkDict[6] = "https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_100.png";  
namePkDict[6] = "Voltorb";  
soundPkDict[6] = "https://jackofalltrades.neocities.org/1710_final_project/spearow.mp3";
pkDict[7] = "https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_034.png";  
namePkDict[7] = "Nidoking";  
soundPkDict[7] = "https://jackofalltrades.neocities.org/1710_final_project/nidoking.mp3";
pkDict[8] = "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_080.png";  
namePkDict[8]= "Slowbro";  
soundPkDict[8] = "https://jackofalltrades.neocities.org/1710_final_project/slowbro.mp3";
pkDict[9] = "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_002.png";  
namePkDict[9] = "Ivysaur";  
soundPkDict[9] = "https://jackofalltrades.neocities.org/1710_final_project/ivysaur.mp3";
pkDict[10] =   
  "https://archives.bulbagarden.net/media/upload/d/d2/Spr_1b_103.png";  
namePkDict[10] = "Exeggutor";  
soundPkDict[10] = "https://jackofalltrades.neocities.org/1710_final_project/exeggutor.mp3";
pkDict[11] =  
  "https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_108.png";  
namePkDict[11] = "Lickitung"; 
soundPkDict[11] = "https://jackofalltrades.neocities.org/1710_final_project/lickitung.mp3";
pkDict[12] =  
  "https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_102.png";  
namePkDict[12] = "Exeggcute";  
soundPkDict[12] = "https://jackofalltrades.neocities.org/1710_final_project/exeggcute.mp3";
pkDict[13] =  
  "https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_088.png";  
namePkDict[13] = "Grimer";  
soundPkDict[13] = "https://jackofalltrades.neocities.org/1710_final_project/grimer.mp3";
pkDict[14] =  
  "https://archives.bulbagarden.net/media/upload/b/b9/Spr_1b_094.png";  
namePkDict[14] = "Gengar";  
soundPkDict[14] = "https://jackofalltrades.neocities.org/1710_final_project/gengar.mp3";
pkDict[15] =  
  "https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_029.png";  
namePkDict[15] = "Nidoran (F)";  
soundPkDict[15] = "https://jackofalltrades.neocities.org/1710_final_project/nidoranf.mp3";
pkDict[16] =  
  "https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_031.png";  
  namePkDict[16] = "Nidoqueen";  
soundPkDict[16] = "https://jackofalltrades.neocities.org/1710_final_project/nidoqueen.mp3";
  pkDict[17] =  
  "https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_104.png";  
  namePkDict[17] = "Cubone";  
soundPkDict[17] = "https://jackofalltrades.neocities.org/1710_final_project/cubone.mp3";
pkDict[18] =  
  "https://archives.bulbagarden.net/media/upload/9/90/Spr_1b_111.png";  
  namePkDict[18] = "Rhyhorn";  
soundPkDict[18] = "https://jackofalltrades.neocities.org/1710_final_project/rhyhorn.mp3";
pkDict[19] =  
  "https://archives.bulbagarden.net/media/upload/7/77/Spr_1b_131.png";  
  namePkDict[19] = "Lapras";
  soundPkDict[19] = "https://jackofalltrades.neocities.org/1710_final_project/lapras.mp3";  
pkDict[20] =  
  "https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_059.png";  
  namePkDict[20] = "Arcanine";  
  soundPkDict[20] = "https://jackofalltrades.neocities.org/1710_final_project/arcanine.mp3";
pkDict[21] =  
  "https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_151.png";  
  namePkDict[21] = "Mewtwo";  
  soundPkDict[21] = "https://jackofalltrades.neocities.org/1710_final_project/mewtwo.mp3";

pkDict[22] =  
  "https://archives.bulbagarden.net/media/upload/0/05/Spr_1b_130.png";  
  namePkDict[22] = "Gyarados";  
  soundPkDict[22] = "https://jackofalltrades.neocities.org/1710_final_project/gyarados.mp3";

pkDict[23] =  
  "https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_090.png";  
  namePkDict[23] = "Shellder";  
  soundPkDict[23] = "https://jackofalltrades.neocities.org/1710_final_project/shellder.mp3";

pkDict[24] =  
  "https://archives.bulbagarden.net/media/upload/d/df/Spr_1b_072.png";  
  namePkDict[24] = "Tentacool";  
  soundPkDict[24] = "https://jackofalltrades.neocities.org/1710_final_project/tentacool.mp3";

pkDict[25] =  
  "https://archives.bulbagarden.net/media/upload/c/ce/Spr_1b_092.png";  
namePkDict[25] = "Gastly"; 
soundPkDict[25] = "https://jackofalltrades.neocities.org/1710_final_project/gastly.mp3";

pkDict[26] =  
  "https://archives.bulbagarden.net/media/upload/0/0f/Spr_1b_123.png";  
  namePkDict[26] = "Scyther";  
  soundPkDict[26] = "https://jackofalltrades.neocities.org/1710_final_project/scyther.mp3";

pkDict[27] =  
  "https://archives.bulbagarden.net/media/upload/9/9f/Spr_1b_120.png";  
  namePkDict[27] = "Staryu";  
  soundPkDict[27] = "https://jackofalltrades.neocities.org/1710_final_project/staryu.mp3";
  
pkDict[28] =  
  "https://archives.bulbagarden.net/media/upload/2/2c/Spr_1b_009.png";  
  namePkDict[28] = "Blastoise";  
  soundPkDict[28] = "https://jackofalltrades.neocities.org/1710_final_project/blastoise.mp3";

pkDict[29] =  
  "https://archives.bulbagarden.net/media/upload/7/70/Spr_1b_127.png";  
  namePkDict[29] = "Pinsir";  
  soundPkDict[29] = "https://jackofalltrades.neocities.org/1710_final_project/pinsir.mp3";

pkDict[30] =  
  "https://archives.bulbagarden.net/media/upload/e/e3/Spr_1b_114.png";  
  namePkDict[30] = "Tangela";  
  soundPkDict[30] = "https://jackofalltrades.neocities.org/1710_final_project/tangela.mp3";

pkDict[31] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[31] = "MISSINGNO";  
soundPkDict[31] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[32] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[32] = "MISSINGNO";  
soundPkDict[32] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[33] =  
  "https://archives.bulbagarden.net/media/upload/c/cc/Spr_1b_058.png";  
namePkDict[33] = "Growlithe";  
soundPkDict[33] = "https://jackofalltrades.neocities.org/1710_final_project/growlithe.mp3";

pkDict[34] =  
  "https://archives.bulbagarden.net/media/upload/f/f1/Spr_1b_095.png";  
namePkDict[34] = "Onix";
soundPkDict[34] = "https://jackofalltrades.neocities.org/1710_final_project/onix.mp3";

pkDict[35] =  
  "https://archives.bulbagarden.net/media/upload/8/8c/Spr_1b_022.png";  
  namePkDict[35] = "Fearow";  
  soundPkDict[35] = "https://jackofalltrades.neocities.org/1710_final_project/fearow.mp3";

pkDict[36] =  
  "https://archives.bulbagarden.net/media/upload/c/cd/Spr_1b_016.png";  
  namePkDict[36] = "Pidgey";  
  soundPkDict[36] = "https://jackofalltrades.neocities.org/1710_final_project/pidgey.mp3";

pkDict[37] =  
  "https://archives.bulbagarden.net/media/upload/0/0c/Spr_1b_079.png";  
  namePkDict[37] = "Slowpoke";  
  soundPkDict[37] = "https://jackofalltrades.neocities.org/1710_final_project/slowpoke.mp3";

pkDict[38] =  
  "https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_064.png";  
  namePkDict[38] = "Kadabra";  
  soundPkDict[38] = "https://jackofalltrades.neocities.org/1710_final_project/kadabra.mp3";

pkDict[39] =  
  "https://archives.bulbagarden.net/media/upload/3/3c/Spr_1b_075.png";  
  namePkDict[39] = "Graveler";  
  soundPkDict[39] = "https://jackofalltrades.neocities.org/1710_final_project/graveler.mp3";

pkDict[40] =  
  "https://archives.bulbagarden.net/media/upload/c/cf/Spr_1b_113.png";  
  namePkDict[40] = "Chansey";  
  soundPkDict[40] = "https://jackofalltrades.neocities.org/1710_final_project/chansey.mp3";

pkDict[41] =  
  "https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_067.png";  
  namePkDict[41] = "Machoke";  
  soundPkDict[41] = "https://jackofalltrades.neocities.org/1710_final_project/machoke.mp3";

pkDict[42] =  
  "https://archives.bulbagarden.net/media/upload/8/80/Spr_1b_122.png";  
  namePkDict[42] = "Mr. Mime";  
  soundPkDict[42] = "https://jackofalltrades.neocities.org/1710_final_project/mrmime.mp3";

pkDict[43] =  
  "https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_106.png";  
  namePkDict[43] = "Hitmonlee"; 
  soundPkDict[43] = "https://jackofalltrades.neocities.org/1710_final_project/hitmonlee.mp3";
 
pkDict[44] =  
  "https://archives.bulbagarden.net/media/upload/6/6c/Spr_1b_107.png";  
  namePkDict[44] = "Hitmonchan"; 
  soundPkDict[44] = "https://jackofalltrades.neocities.org/1710_final_project/hitmonchan.mp3";
 
pkDict[45] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_024.png";  
  namePkDict[45] = "Arbok";  
  soundPkDict[45] = "https://jackofalltrades.neocities.org/1710_final_project/arbok.mp3";

pkDict[46] =  
  "https://archives.bulbagarden.net/media/upload/5/54/Spr_1b_047.png";  
  namePkDict[46] = "Parasect";  
  soundPkDict[46] = "https://jackofalltrades.neocities.org/1710_final_project/parasect.mp3";

pkDict[47] =  
  "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_054.png";  
  namePkDict[47] = "Psyduck";  
  soundPkDict[47] = "https://jackofalltrades.neocities.org/1710_final_project/psyduck.mp3";

pkDict[48] =  
  "https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_096.png";  
  namePkDict[48] = "Drowsee";  
  soundPkDict[48] = "https://jackofalltrades.neocities.org/1710_final_project/drowsee.mp3";

pkDict[49] =  
  "https://archives.bulbagarden.net/media/upload/9/9c/Spr_1b_076.png";  
  namePkDict[49] = "Onix";  
  soundPkDict[49] = "https://jackofalltrades.neocities.org/1710_final_project/onix.mp3";

pkDict[50] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[50] = "MISSINGNO";  
soundPkDict[50] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[51] =  
  "https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_126.png";  
  namePkDict[51] = "Magmar";  
  soundPkDict[51] = "https://jackofalltrades.neocities.org/1710_final_project/magmar.mp3";

pkDict[52] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
namePkDict[52] = "MISSINGNO";  
soundPkDict[52] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[53] =  
  "https://archives.bulbagarden.net/media/upload/1/1e/Spr_1b_125.png";  
  namePkDict[53] = "Electabuzz"; 
  soundPkDict[53] = "https://jackofalltrades.neocities.org/1710_final_project/electabuzz.mp3";
 
pkDict[54] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_082.png";  
  namePkDict[54] = "Magneton"; 
  soundPkDict[54] = "https://jackofalltrades.neocities.org/1710_final_project/magneton.mp3";
 
pkDict[55] =  
  "https://archives.bulbagarden.net/media/upload/e/e9/Spr_1b_109.png";  
  namePkDict[55] = "Koffing";  
  soundPkDict[55] = "https://jackofalltrades.neocities.org/1710_final_project/koffing.mp3";

pkDict[56] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[56] = "MISSINGNO";  
  soundPkDict[56] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[57] =  
  "https://archives.bulbagarden.net/media/upload/f/f5/Spr_1b_056.png";  
  namePkDict[57] = "Mankey";
  soundPkDict[57] = "https://jackofalltrades.neocities.org/1710_final_project/mankey.mp3";
  
pkDict[58] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_086.png";  
  namePkDict[58] = "Seel";
  soundPkDict[58] = "https://jackofalltrades.neocities.org/1710_final_project/seel.mp3";
  
pkDict[59] =  
  "https://archives.bulbagarden.net/media/upload/8/85/Spr_1b_050.png";  
  namePkDict[59] = "Diglett";
  soundPkDict[59] = "https://jackofalltrades.neocities.org/1710_final_project/diglett.mp3";
  
pkDict[60] =  
  "https://archives.bulbagarden.net/media/upload/1/14/Spr_1b_128.png";  
  namePkDict[60] = "Tauros"; 
  soundPkDict[60] = "https://jackofalltrades.neocities.org/1710_final_project/tauros.mp3"; 

  pkDict[61] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[61] = "MISSINGNO";  
  soundPkDict[61] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[62] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[62] = "MISSINGNO";
  soundPkDict[62] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
  
pkDict[63] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[63] = "MISSINGNO";  
  soundPkDict[63] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[64] =  
  "https://archives.bulbagarden.net/media/upload/e/eb/Spr_1b_083.png";  
  namePkDict[64] = "Farfetch'd";  
  soundPkDict[64] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[65] =  
  "https://archives.bulbagarden.net/media/upload/d/d7/Spr_1b_048.png";  
  namePkDict[65] = "Venonat";  
  soundPkDict[65] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[66] =  
  "https://archives.bulbagarden.net/media/upload/c/ca/Spr_1b_149.png";  
  namePkDict[66] = "Dragonite"; 
  soundPkDict[66] = "https://jackofalltrades.neocities.org/1710_final_project/dragonite.mp3";
 
pkDict[67] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[67] = "MISSINGNO";  
  soundPkDict[67] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[68] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[68] = "MISSINGNO";  
  soundPkDict[68] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[69] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[69] = "MISSINGNO"; 
  soundPkDict[69] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[70] =  
  "https://archives.bulbagarden.net/media/upload/b/b0/Spr_1b_084.png";  
  namePkDict[70] = "Doduo";  
  soundPkDict[70] = "https://jackofalltrades.neocities.org/1710_final_project/doduo.mp3";

pkDict[71] =  
  "https://archives.bulbagarden.net/media/upload/c/c9/Spr_1b_060.png";  
  namePkDict[71] = "Poliwag";  
  soundPkDict[71] = "https://jackofalltrades.neocities.org/1710_final_project/poliwag.mp3";

pkDict[72] =  
  "https://archives.bulbagarden.net/media/upload/2/27/Spr_1b_124.png";  
  namePkDict[72] = "Jynx";  
  soundPkDict[72] = "https://jackofalltrades.neocities.org/1710_final_project/jynx.mp3";

pkDict[73] =  
  "https://archives.bulbagarden.net/media/upload/4/4e/Spr_1b_146.png";  
  namePkDict[73] = "Moltres"; 
  soundPkDict[73] = "https://jackofalltrades.neocities.org/1710_final_project/moltres.mp3";
 
pkDict[74] =  
  "https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_144.png";  
  namePkDict[74] = "Articuno";  
  soundPkDict[74] = "https://jackofalltrades.neocities.org/1710_final_project/articuno.mp3";

pkDict[75] =  
  "https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_145.png";  
  namePkDict[75] = "Zapdos"; 
  soundPkDict[75] = "https://jackofalltrades.neocities.org/1710_final_project/zapdos.mp3";
 
pkDict[76] =  
  "https://archives.bulbagarden.net/media/upload/b/bd/Spr_1b_132.png";  
  namePkDict[76] = "Ditto";  
  soundPkDict[76] = "https://jackofalltrades.neocities.org/1710_final_project/ditto.mp3";

pkDict[77] =  
  "https://archives.bulbagarden.net/media/upload/4/4d/Spr_1b_052.png";  
  namePkDict[77] = "Meowth";  
  soundPkDict[77] = "https://jackofalltrades.neocities.org/1710_final_project/meowth.mp3";

pkDict[78] =  
  "https://archives.bulbagarden.net/media/upload/a/a8/Spr_1b_098.png";  
  namePkDict[78] = "Krabby";  
  soundPkDict[78] = "https://jackofalltrades.neocities.org/1710_final_project/krabby.mp3";

pkDict[79] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[79] = "MISSINGNO";  
  soundPkDict[79] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[80] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[80] = "MISSINGNO";  
  soundPkDict[80] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[81] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[81] = "MISSINGNO";  
  soundPkDict[81] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[82] =  
  "https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_037.png";  
  namePkDict[82] = "Vulpix";  
  soundPkDict[82] = "https://jackofalltrades.neocities.org/1710_final_project/vulpix.mp3";

pkDict[83] =  
  "https://archives.bulbagarden.net/media/upload/4/48/Spr_1b_038.png";  
  namePkDict[83] = "Ninetales";  
  soundPkDict[83] = "https://jackofalltrades.neocities.org/1710_final_project/ninetales.mp3";

pkDict[84] =  
  "https://archives.bulbagarden.net/media/upload/b/ba/Spr_1b_025.png";  
  namePkDict[84] = "Pikachu";  
  soundPkDict[84] = "https://jackofalltrades.neocities.org/1710_final_project/pikachu.mp3";

pkDict[85] =  
  "https://archives.bulbagarden.net/media/upload/5/53/Spr_1b_026.png";  
  namePkDict[85] = "Raichu";  
  soundPkDict[85] = "https://jackofalltrades.neocities.org/1710_final_project/raichu.mp3";

pkDict[86] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[86] = "MISSINGNO";  
  soundPkDict[86] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[87] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[87] = "MISSINGNO";  
  soundPkDict[87] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[88] =  
  "https://archives.bulbagarden.net/media/upload/e/ed/Spr_1b_147.png";  
  namePkDict[88] = "Dratini"; 
  soundPkDict[88] = "https://jackofalltrades.neocities.org/1710_final_project/dratini.mp3";
 
pkDict[89] =  
  "https://archives.bulbagarden.net/media/upload/e/ec/Spr_1b_148.png";  
  namePkDict[89] = "Dragonair"; 
  soundPkDict[89] = "https://jackofalltrades.neocities.org/1710_final_project/dragonair.mp3";
 
pkDict[90] =  
  "https://archives.bulbagarden.net/media/upload/c/c8/Spr_1b_140.png";  
  namePkDict[90] = "Kabuto";  
  soundPkDict[90] = "https://jackofalltrades.neocities.org/1710_final_project/kabuto.mp3";

pkDict[91] =  
  "https://archives.bulbagarden.net/media/upload/f/f8/Spr_1b_141.png";  
  namePkDict[91] = "Kabutops";  
  soundPkDict[91] = "https://jackofalltrades.neocities.org/1710_final_project/kabutops.mp3";

pkDict[92] =  
  "https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_116.png";  
  namePkDict[92] = "Horsea";  
  soundPkDict[92] = "https://jackofalltrades.neocities.org/1710_final_project/horsea.mp3";

pkDict[93] =  
  "https://archives.bulbagarden.net/media/upload/d/de/Spr_1b_117.png";  
  namePkDict[93] = "Seadra";  
  soundPkDict[93] = "https://jackofalltrades.neocities.org/1710_final_project/seadra.mp3";

pkDict[94] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[94] = "MISSINGNO";  
  soundPkDict[94] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[95] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[95] = "MISSINGNO"; 
  soundPkDict[95] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[96] =  
  "https://archives.bulbagarden.net/media/upload/f/fe/Spr_1b_027.png";  
  namePkDict[96] = "Sandshrew";  
  soundPkDict[96] = "https://jackofalltrades.neocities.org/1710_final_project/sandshrew.mp3";

pkDict[97] =  
  "https://archives.bulbagarden.net/media/upload/6/60/Spr_1b_028.png";  
  namePkDict[97] = "Sandslash";  
  soundPkDict[97] = "https://jackofalltrades.neocities.org/1710_final_project/sandslash.mp3";

pkDict[98] =  
  "https://archives.bulbagarden.net/media/upload/5/59/Spr_1b_138.png";  
  namePkDict[98] = "Omanyte";  
  soundPkDict[98] = "https://jackofalltrades.neocities.org/1710_final_project/omanyte.mp3";

pkDict[99] =  
  "https://archives.bulbagarden.net/media/upload/6/68/Spr_1b_139.png";  
  namePkDict[99] = "Omastar"; 
  soundPkDict[99] = "https://jackofalltrades.neocities.org/1710_final_project/omastar.mp3";
 
pkDict[100] =  
  "https://archives.bulbagarden.net/media/upload/2/2f/Spr_1b_039.png";  
  namePkDict[100] = "Jigglypuff";  
  soundPkDict[100] = "https://jackofalltrades.neocities.org/1710_final_project/jigglypuff.mp3";

pkDict[101] =  
  "https://archives.bulbagarden.net/media/upload/3/39/Spr_1b_040.png";  
  namePkDict[101] = "Wigglytuff";  
  soundPkDict[101] = "https://jackofalltrades.neocities.org/1710_final_project/wigglytuff.mp3";

pkDict[102] =  
  "https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_133.png";  
  namePkDict[102] = "Eevee";  
  soundPkDict[102] = "https://jackofalltrades.neocities.org/1710_final_project/eevee.mp3";

pkDict[103] =  
  "https://archives.bulbagarden.net/media/upload/1/1f/Spr_1b_136.png";  
  namePkDict[103] = "Flareon";  
  soundPkDict[103] = "https://jackofalltrades.neocities.org/1710_final_project/flareon.mp3";

pkDict[104] =  
  "https://archives.bulbagarden.net/media/upload/2/26/Spr_1b_135.png";  
  namePkDict[104] = "Jolteon";  
  soundPkDict[104] = "https://jackofalltrades.neocities.org/1710_final_project/jolteon.mp3";

pkDict[105] =  
  "https://archives.bulbagarden.net/media/upload/5/50/Spr_1b_134.png";  
  namePkDict[105] = "Vaporeon";  
  soundPkDict[105] = "https://jackofalltrades.neocities.org/1710_final_project/vaporeon.mp3";

pkDict[106] =  
  "https://archives.bulbagarden.net/media/upload/b/b2/Spr_1b_066.png";  
  namePkDict[106] = "Machop"; 
  soundPkDict[106] = "https://jackofalltrades.neocities.org/1710_final_project/machop.mp3";
 
pkDict[107] =  
  "https://archives.bulbagarden.net/media/upload/f/f7/Spr_1b_041.png";  
  namePkDict[107] = "Zubat";  
  soundPkDict[107] = "https://jackofalltrades.neocities.org/1710_final_project/zubat.mp3";

pkDict[108] =  
  "https://archives.bulbagarden.net/media/upload/5/58/Spr_1b_023.png";  
  namePkDict[108] = "Ekans";
  soundPkDict[108] = "https://jackofalltrades.neocities.org/1710_final_project/ekans.mp3";
  
pkDict[109] =  
  "https://archives.bulbagarden.net/media/upload/7/74/Spr_1b_046.png";  
  namePkDict[109] = "Paras";  
  soundPkDict[109] = "https://jackofalltrades.neocities.org/1710_final_project/paras.mp3";

pkDict[110] =  
  "https://archives.bulbagarden.net/media/upload/b/bf/Spr_1b_061.png";  
  namePkDict[110] = "Poliwhirl";  
  soundPkDict[110] = "https://jackofalltrades.neocities.org/1710_final_project/poliwhirl.mp3";

pkDict[111] =  
  "https://archives.bulbagarden.net/media/upload/6/67/Spr_1b_062.png";  
  namePkDict[111] = "Poliwrath";  
  soundPkDict[111] = "https://jackofalltrades.neocities.org/1710_final_project/poliwrath.mp3";

pkDict[112] =  
  "https://archives.bulbagarden.net/media/upload/d/da/Spr_1b_013.png";  
  namePkDict[112] = "Weedle";  
  soundPkDict[112] = "https://jackofalltrades.neocities.org/1710_final_project/weedle.mp3";

pkDict[113] =  
  "https://archives.bulbagarden.net/media/upload/0/06/Spr_1b_014.png";  
  namePkDict[113] = "Kakuna";  
  soundPkDict[113] = "https://jackofalltrades.neocities.org/1710_final_project/kakuna.mp3";

pkDict[114] =  
  "https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_015.png";  
  namePkDict[114] = "Beedrill";  
  soundPkDict[114] = "https://jackofalltrades.neocities.org/1710_final_project/beedrill.mp3";

pkDict[115] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[115] = "MISSINGNO";  
  soundPkDict[115] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[116] =  
  "https://archives.bulbagarden.net/media/upload/4/43/Spr_1b_085.png";  
  namePkDict[116] = "Dodrio";  
  soundPkDict[116] = "https://jackofalltrades.neocities.org/1710_final_project/dodrio.mp3";

pkDict[117] =  
  "https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_057.png";  
  namePkDict[117] = "Primeape";  
  soundPkDict[117] = "https://jackofalltrades.neocities.org/1710_final_project/primeape.mp3";

pkDict[118] =  
  "https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_051.png";  
  namePkDict[118] = "Dugtrio";  
  soundPkDict[118] = "https://jackofalltrades.neocities.org/1710_final_project/dugtrio.mp3";

pkDict[119] =  
  "https://archives.bulbagarden.net/media/upload/2/28/Spr_1b_049.png";  
  namePkDict[119] = "Venomoth";
  soundPkDict[119] = "https://jackofalltrades.neocities.org/1710_final_project/venomoth.mp3";
  
pkDict[120] =  
  "https://archives.bulbagarden.net/media/upload/6/64/Spr_1b_087.png";  
  namePkDict[120] = "Dewgong";  
  soundPkDict[120] = "https://jackofalltrades.neocities.org/1710_final_project/dewgong.mp3";

pkDict[121] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[121] = "MISSINGNO";
  soundPkDict[121] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
  
pkDict[122] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[122] = "MISSINGNO";  
  soundPkDict[122] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[123] =  
  "https://archives.bulbagarden.net/media/upload/5/5a/Spr_1b_010.png";  
  namePkDict[123] = "Caterpie";  
  soundPkDict[123] = "https://jackofalltrades.neocities.org/1710_final_project/caterpie.mp3";

pkDict[124] =  
  "https://archives.bulbagarden.net/media/upload/e/ef/Spr_1b_011.png";  
  namePkDict[124] = "Metapod"; 
  soundPkDict[124] = "https://jackofalltrades.neocities.org/1710_final_project/metapod.mp3";
 
pkDict[125] =  
  "https://archives.bulbagarden.net/media/upload/f/fa/Spr_1b_012.png";  
  namePkDict[125] = "Butterfree";  
  soundPkDict[125] = "https://jackofalltrades.neocities.org/1710_final_project/butterfree.mp3";

pkDict[126] =  
  "https://archives.bulbagarden.net/media/upload/d/d9/Spr_1b_068.png";  
  namePkDict[126] = "Machamp";  
  soundPkDict[126] = "https://jackofalltrades.neocities.org/1710_final_project/machamp.mp3";

pkDict[127] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[127] = "MISSINGNO";  
  soundPkDict[127] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[128] =  
  "https://archives.bulbagarden.net/media/upload/5/51/Spr_1b_055.png";  
  namePkDict[128] = "Golduck";  
  soundPkDict[128] = "https://jackofalltrades.neocities.org/1710_final_project/golduck.mp3";

pkDict[129] =  
  "https://archives.bulbagarden.net/media/upload/0/09/Spr_1b_097.png";  
  namePkDict[129] = "Hypno";  
  soundPkDict[129] = "https://jackofalltrades.neocities.org/1710_final_project/hypno.mp3";

pkDict[130] =  
  "https://archives.bulbagarden.net/media/upload/2/23/Spr_1b_042.png";  
  namePkDict[130] = "Golbat";  
  soundPkDict[130] = "https://jackofalltrades.neocities.org/1710_final_project/golbat.mp3";

pkDict[131] =  
  "https://archives.bulbagarden.net/media/upload/0/04/Spr_1b_150.png";  
  namePkDict[131] = "Mewtwo";  
  soundPkDict[131] = "https://jackofalltrades.neocities.org/1710_final_project/mewtwo.mp3";

pkDict[132] =  
  "https://archives.bulbagarden.net/media/upload/1/11/Spr_1b_143.png";  
  namePkDict[132] = "Snorlax"; 
  soundPkDict[132] = "https://jackofalltrades.neocities.org/1710_final_project/snorlax.mp3";
 
pkDict[133] =  
  "https://archives.bulbagarden.net/media/upload/1/1a/Spr_1b_129.png";  
  namePkDict[133] = "Magikarp";  
  soundPkDict[133] = "https://jackofalltrades.neocities.org/1710_final_project/magikarp.mp3";

pkDict[134] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[134] = "MISSINGNO";  
  soundPkDict[134] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[135] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[135] = "MISSINGNO";  
  soundPkDict[135] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[136] =  
  "https://archives.bulbagarden.net/media/upload/a/af/Spr_1b_089.png";  
  namePkDict[136] = "Muk";  
  soundPkDict[136] = "https://jackofalltrades.neocities.org/1710_final_project/muk.mp3";

pkDict[137] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[137] = "MISSINGNO";  
  soundPkDict[137] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[138] =  
  "https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_099.png";  
  namePkDict[138] = "Kingler";  
  soundPkDict[138] = "https://jackofalltrades.neocities.org/1710_final_project/kingler.mp3";

pkDict[139] =  
  "https://archives.bulbagarden.net/media/upload/4/45/Spr_1b_091.png";  
  namePkDict[139] = "Cloyster";  
  soundPkDict[139] = "https://jackofalltrades.neocities.org/1710_final_project/cloyster.mp3";

pkDict[140] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[140] = "MISSINGNO";  
  soundPkDict[140] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[141] =  
  "https://archives.bulbagarden.net/media/upload/f/f9/Spr_1b_101.png";  
  namePkDict[141] = "Electrode";  
  soundPkDict[141] = "https://jackofalltrades.neocities.org/1710_final_project/electrode.mp3";

pkDict[142] =  
  "https://archives.bulbagarden.net/media/upload/2/25/Spr_1b_036.png";  
  namePkDict[142] = "Clefable";  
  soundPkDict[142] = "https://jackofalltrades.neocities.org/1710_final_project/clefable.mp3";

pkDict[143] =  
  "https://archives.bulbagarden.net/media/upload/1/1b/Spr_1b_110.png";  
  namePkDict[143] = "Weezing";  
  soundPkDict[143] = "https://jackofalltrades.neocities.org/1710_final_project/weezing.mp3";

pkDict[144] =  
  "https://archives.bulbagarden.net/media/upload/5/55/Spr_1b_053.png";  
  namePkDict[144] = "Persian";  
  soundPkDict[144] = "https://jackofalltrades.neocities.org/1710_final_project/persian.mp3";

pkDict[145] =  
  "https://archives.bulbagarden.net/media/upload/9/93/Spr_1b_105.png";  
  namePkDict[145] = "Marowak";  
  soundPkDict[145] = "https://jackofalltrades.neocities.org/1710_final_project/marowak.mp3";

pkDict[146] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[146] = "MISSINGNO";  
  soundPkDict[146] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[147] =  
  "https://archives.bulbagarden.net/media/upload/e/e5/Spr_1b_093.png";  
  namePkDict[147] = "Haunter";  
  soundPkDict[147] = "https://jackofalltrades.neocities.org/1710_final_project/haunter.mp3";

pkDict[148] =  
  "https://archives.bulbagarden.net/media/upload/3/36/Spr_1b_063.png";  
  namePkDict[148] = "Abra";  
  soundPkDict[148] = "https://jackofalltrades.neocities.org/1710_final_project/abra.mp3";

pkDict[149] =  
  "https://archives.bulbagarden.net/media/upload/d/d6/Spr_1b_065.png";  
  namePkDict[149] = "Alakazam";  
  soundPkDict[149] = "https://jackofalltrades.neocities.org/1710_final_project/alakazam.mp3";

pkDict[150] =  
  "https://archives.bulbagarden.net/media/upload/0/07/Spr_1b_017.png";  
  namePkDict[150] = "Pidgeotto";  
  soundPkDict[150] = "https://jackofalltrades.neocities.org/1710_final_project/pidgeotto.mp3";

pkDict[151] =  
  "https://archives.bulbagarden.net/media/upload/c/c0/Spr_1b_018.png";  
  namePkDict[151] = "Pidgeot"; 
  soundPkDict[151] = "https://jackofalltrades.neocities.org/1710_final_project/pidgeot.mp3";
 
pkDict[152] =  
  "https://archives.bulbagarden.net/media/upload/f/fd/Spr_1b_121.png";  
  namePkDict[152] = "Starmie";  
  soundPkDict[152] = "https://jackofalltrades.neocities.org/1710_final_project/starmie.mp3";

pkDict[153] =  
  "https://archives.bulbagarden.net/media/upload/a/a3/Spr_1b_001.png";  
  namePkDict[153] = "Bulbasaur";  
  soundPkDict[153] = "https://jackofalltrades.neocities.org/1710_final_project/bulbasaur.mp3";

pkDict[154] =  
  "https://archives.bulbagarden.net/media/upload/f/f6/Spr_1b_003.png";  
  namePkDict[154] = "Venusaur";  
  soundPkDict[154] = "https://jackofalltrades.neocities.org/1710_final_project/venusaur.mp3";

pkDict[155] =  
  "https://archives.bulbagarden.net/media/upload/8/8e/Spr_1b_073.png";  
  namePkDict[155] = "Tentacruel";  
  soundPkDict[155] = "https://jackofalltrades.neocities.org/1710_final_project/tentacruel.mp3";

pkDict[156] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[156] = "MISSINGNO";  
  soundPkDict[156] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[157] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Spr_1b_118.png";  
  namePkDict[157] = "Goldeen";  
  soundPkDict[157] = "https://jackofalltrades.neocities.org/1710_final_project/goldeen.mp3";

pkDict[158] =  
  "https://archives.bulbagarden.net/media/upload/d/dd/Spr_1b_119.png";  
  namePkDict[158] = "Seaking";  
  soundPkDict[158] = "https://jackofalltrades.neocities.org/1710_final_project/seaking.mp3";

pkDict[159] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[159] = "MISSINGNO";  
  soundPkDict[159] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[160] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[160] = "MISSINGNO";  
  soundPkDict[160] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[161] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[161] = "MISSINGNO";  
  soundPkDict[161] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[162] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[162] = "MISSINGNO";  
  soundPkDict[162] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[163] =  
  "https://archives.bulbagarden.net/media/upload/a/a4/Spr_1b_077.png";  
  namePkDict[163] = "Ponyta";  
  soundPkDict[163] = "https://jackofalltrades.neocities.org/1710_final_project/ponyta.mp3";

pkDict[164] =  
  "https://archives.bulbagarden.net/media/upload/3/33/Spr_1b_078.png";  
  namePkDict[164] = "Rapidash";  
  soundPkDict[164] = "https://jackofalltrades.neocities.org/1710_final_project/rapidash.mp3";

pkDict[165] =  
  "https://archives.bulbagarden.net/media/upload/9/95/Spr_1b_019.png";  
  namePkDict[165] = "Rattata";  
  soundPkDict[165] = "https://jackofalltrades.neocities.org/1710_final_project/rattata.mp3";

pkDict[166] =  
  "https://archives.bulbagarden.net/media/upload/e/ea/Spr_1b_020.png";  
  namePkDict[166] = "Raticate";  
  soundPkDict[166] = "https://jackofalltrades.neocities.org/1710_final_project/raticate.mp3";

pkDict[167] =  
  "https://archives.bulbagarden.net/media/upload/5/5b/Spr_1b_033.png";  
  namePkDict[167] = "Nidorino";  
  soundPkDict[167] = "https://jackofalltrades.neocities.org/1710_final_project/nidorino.mp3";

pkDict[168] =  
  "https://archives.bulbagarden.net/media/upload/b/b3/Spr_1b_030.png";  
  namePkDict[168] = "Nidorina";  
  soundPkDict[168] = "https://jackofalltrades.neocities.org/1710_final_project/nidorina.mp3";

pkDict[169] =  
  "https://archives.bulbagarden.net/media/upload/4/4c/Spr_1b_074.png";  
  namePkDict[169] = "Geodude";  
  soundPkDict[169] = "https://jackofalltrades.neocities.org/1710_final_project/geodude.mp3";

pkDict[170] =  
  "https://archives.bulbagarden.net/media/upload/d/d4/Spr_1b_137.png";  
  namePkDict[170] = "Porygon";  
  soundPkDict[170] = "https://jackofalltrades.neocities.org/1710_final_project/porygon.mp3";

pkDict[171] =  
  "https://archives.bulbagarden.net/media/upload/6/63/Spr_1b_142.png";  
  namePkDict[171] = "Aerodactyl";  
  soundPkDict[171] = "https://jackofalltrades.neocities.org/1710_final_project/aerodactyl.mp3";

pkDict[172] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[172] = "MISSINGNO";  
  soundPkDict[172] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[173] =  
  "https://archives.bulbagarden.net/media/upload/1/10/Spr_1b_081.png";  
  namePkDict[173] = "Magnemite";  
  soundPkDict[173] = "https://jackofalltrades.neocities.org/1710_final_project/magnemite.mp3";

pkDict[174] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[174] = "MISSINGNO";  
  soundPkDict[174] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[175] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  namePkDict[175] = "MISSINGNO";  
  soundPkDict[175] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[176] =  
  "https://archives.bulbagarden.net/media/upload/9/9d/Spr_1b_004.png";  
  namePkDict[176] = "Charmander";  
  soundPkDict[176] = "https://jackofalltrades.neocities.org/1710_final_project/charmander.mp3";

pkDict[177] =  
  "https://archives.bulbagarden.net/media/upload/3/30/Spr_1b_007.png";  
  namePkDict[177] = "Squirtle";  
  soundPkDict[177] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[178] =  
  "https://archives.bulbagarden.net/media/upload/6/6a/Spr_1b_005.png";  
  namePkDict[178] = "Charmeleon";  
  soundPkDict[178] = "https://jackofalltrades.neocities.org/1710_final_project/charmeleon.mp3";

pkDict[179] =  
  "https://archives.bulbagarden.net/media/upload/d/d3/Spr_1b_008.png";  
  soundPkDict[179] = "https://jackofalltrades.neocities.org/1710_final_project/wartortle.mp3";
  namePkDict[179] = "Wartortle";  

pkDict[180] =  
  "https://archives.bulbagarden.net/media/upload/5/56/Spr_1b_006.png"; 
  soundPkDict[180] = "https://jackofalltrades.neocities.org/1710_final_project/charizard.mp3"; 
  namePkDict[180] = "Charizard";  

pkDict[181] =  
  "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";  
  soundPkDict[181] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
  namePkDict[181] = "MISSINGNO";  

pkDict[182] =  
  "https://archives.bulbagarden.net/media/upload/a/aa/Spr_1b_141_f.png";  
  soundPkDict[182] = "https://jackofalltrades.neocities.org/1710_final_project/kabutops.mp3";
  namePkDict[182] = "MISSINGNO [Kabutops Fossil]";  

pkDict[183] =  
  "https://archives.bulbagarden.net/media/upload/b/bb/Spr_1b_142_f.png";  
  namePkDict[183] = "MISSINGNO [Aerodactyl Fossil]";  
  soundPkDict[183] = "https://jackofalltrades.neocities.org/1710_final_project/aerodactyl.mp3";

pkDict[184] = "https://archives.bulbagarden.net/media/upload/9/9e/Ghost_I.png";  
namePkDict[184] = "MISSINGNO [Ghost]";  
soundPkDict[184] = "https://jackofalltrades.neocities.org/1710_final_project/marowak.mp3";

pkDict[185] =  
  "https://archives.bulbagarden.net/media/upload/a/a6/Spr_1b_043.png";  
  namePkDict[185] = "Oddish";  
  soundPkDict[185] = "https://jackofalltrades.neocities.org/1710_final_project/oddish.mp3";

pkDict[186] =  
  "https://archives.bulbagarden.net/media/upload/3/32/Spr_1b_044.png";  
  namePkDict[186] = "Gloom";  
  soundPkDict[186] = "https://jackofalltrades.neocities.org/1710_final_project/gloom.mp3";

pkDict[187] =  
  "https://archives.bulbagarden.net/media/upload/2/20/Spr_1b_045.png";  
  namePkDict[187] = "Vileplume";  
  soundPkDict[187] = "https://jackofalltrades.neocities.org/1710_final_project/vileplume.mp3";

pkDict[188] =  
  "https://archives.bulbagarden.net/media/upload/8/86/Spr_1b_069.png";  
  namePkDict[188] = "Bellsprout"; 
  soundPkDict[188] = "https://jackofalltrades.neocities.org/1710_final_project/bellsprout.mp3";
 
pkDict[189] =  
  "https://archives.bulbagarden.net/media/upload/a/ad/Spr_1b_070.png";  
  soundPkDict[189] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
  namePkDict[189] = "Weepinbell";  

pkDict[190] =  
  "https://archives.bulbagarden.net/media/upload/c/c4/Spr_1b_071.png";  
  namePkDict[190] = "Victreebel";
  soundPkDict[190] = "https://jackofalltrades.neocities.org/1710_final_project/victreebel.mp3";
  
pkDict[191] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[191] = "INVALID";  
  soundPkDict[191] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[192] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[192] = "INVALID";  
  soundPkDict[192] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[193] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[193] = "INVALID";  
  soundPkDict[193] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[194] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[194] = "INVALID";  
  soundPkDict[194] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[195] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[195] = "INVALID";  
  soundPkDict[195] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[196] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[196] = "INVALID";  
  soundPkDict[196] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[197] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[197] = "INVALID";  
  soundPkDict[197] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[198] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[198] = "INVALID";  
  soundPkDict[198] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[199] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[199] = "INVALID";  
  soundPkDict[199] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[200] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[200] = "INVALID";  
  soundPkDict[200] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[201] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[201] = "INVALID";  
  soundPkDict[201] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[202] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[202] = "INVALID";
  soundPkDict[202] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
  
pkDict[203] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[203] = "INVALID";  
  soundPkDict[203] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[204] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[204] = "INVALID";  
  soundPkDict[204] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[205] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[205] = "INVALID";  
  soundPkDict[205] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[206] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[206] = "INVALID";  
  soundPkDict[206] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[207] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[207] = "INVALID";  
  soundPkDict[207] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[208] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[208] = "INVALID";  
  soundPkDict[208] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[209] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[209] = "INVALID";  
  soundPkDict[209] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[210] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[210] = "INVALID";  
  soundPkDict[210] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[211] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[211] = "INVALID"; 
  soundPkDict[211] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[212] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[212] = "INVALID";  
  soundPkDict[212] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[213] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[213] = "INVALID";  
  soundPkDict[213] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[214] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[214] = "INVALID";  
  soundPkDict[214] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[215] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[215] = "INVALID";  
  soundPkDict[215] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[216] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[216] = "INVALID";  
  soundPkDict[216] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[217] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[217] = "INVALID"; 
  soundPkDict[217] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[218] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[218] = "INVALID";  
  soundPkDict[218] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[219] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[219] = "INVALID";  
  soundPkDict[219] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[220] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[220] = "INVALID";  
  soundPkDict[220] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[221] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[221] = "INVALID";  
  soundPkDict[221] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[222] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[222] = "INVALID"; 
  soundPkDict[222] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[223] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[223] = "INVALID"; 
  soundPkDict[223] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[224] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[224] = "INVALID";  
  soundPkDict[224] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[225] =  
  "https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Blue_1.png";  
  namePkDict[225] = "Rival Blue 1";  
  soundPkDict[225] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[226] =  
  "https://archives.bulbagarden.net/media/upload/1/1e/Spr_RG_Oak.png";  
  namePkDict[226] = "Prof. Oak";  
  soundPkDict[226] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[227] =  
  "https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Scientist.png";  
  namePkDict[227] = "Chief";  
  soundPkDict[227] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[228] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[228] = "INVALID";  
  soundPkDict[228] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[229] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[229] = "INVALID";  
  soundPkDict[229] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[230] =  
  "https://archives.bulbagarden.net/media/upload/a/a1/Spr_RG_Rocket.png";  
  namePkDict[230] = "Rocket";  
  soundPkDict[230] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[231] =  
  "https://archives.bulbagarden.net/media/upload/0/0f/Spr_RG_Cooltrainer_M.png";  
  namePkDict[231] = "Cooltrainer M";  
  soundPkDict[231] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[232] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[232] = "INVALID"; 
  soundPkDict[232] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[233] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[233] = "INVALID";  
  soundPkDict[233] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[234] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[234] = "INVALID";  
  soundPkDict[234] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[235] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[235] = "INVALID";  
  soundPkDict[235] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[236] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[236] = "INVALID"; 
  soundPkDict[236] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[237] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[237] = "INVALID";  
  soundPkDict[237] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[238] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[238] = "INVALID";  
  soundPkDict[238] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[239] =  
  "https://archives.bulbagarden.net/media/upload/6/6e/Spr_RG_Blaine.png";  
  namePkDict[239] = "Blaine";  
  soundPkDict[239] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[240] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[240] = "INVALID";  
  soundPkDict[240] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[241] =  
  "https://archives.bulbagarden.net/media/upload/0/08/Spr_RG_Gentleman.png";  
  namePkDict[241] = "Gentleman";  
  soundPkDict[241] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[242] =  
  "https://archives.bulbagarden.net/media/upload/3/38/Spr_RG_Blue_2.png";  
  namePkDict[242] = "Rival Blue 2";  
  soundPkDict[242] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[243] =  
  "https://archives.bulbagarden.net/media/upload/5/51/Spr_RG_Blue_3.png";  
  namePkDict[243] = "Rival Blue 3";  
  soundPkDict[243] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[244] =  
  "https://archives.bulbagarden.net/media/upload/5/58/Spr_RG_Lorelei.png";  
  namePkDict[244] = "Lorelei";  
  soundPkDict[244] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[245] =  
  "https://archives.bulbagarden.net/media/upload/9/92/Spr_RG_Channeler.png";  
  namePkDict[245] = "Channeler";  
  soundPkDict[245] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[246] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[246] = "INVALID";  
  soundPkDict[246] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[247] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[247] = "INVALID";  
  soundPkDict[247] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[248] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[248] = "INVALID";  
  soundPkDict[248] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[249] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[249] = "INVALID";  
  soundPkDict[249] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[250] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[250] = "INVALID";  
  soundPkDict[250] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[251] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[251] = "INVALID";  
  soundPkDict[251] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[252] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[252] = "INVALID";  
  soundPkDict[252] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[253] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[253] = "INVALID";  
  soundPkDict[253] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[254] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[254] = "INVALID";  
  soundPkDict[254] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

pkDict[255] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[255] = "INVALID"; 
  soundPkDict[255] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";
 
pkDict[256] =  
  "https://archives.bulbagarden.net/media/upload/4/47/RBGlitchMissingno._b.png";  
  namePkDict[256] = "INVALID";  
  soundPkDict[256] = "https://jackofalltrades.neocities.org/1710_final_project/none.mp3";

  
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

const plBuff = [  
  fam(Player.join(name_0)),  
  fam(Player.join(name_1)),  
  fam(Player.join(name_2)),  
  fam(Player.join(name_3)),  
  fam(Player.join(name_4)),  
  fam(Player.join(name_5)),  
  fam(Player.join(name_6)),  
  fam(Player.join(name_7)),  
]; 
  
let txt = "";  
  
  
pkcrybuff = [];
pkmnbuff = [];
pklvbuff = [];
idxbuff = [];

plBuff.forEach((val,idx) =>{
  txt += charArray[val];
  if (idx % 2 == 0) {  
      pkmnbuff[idx/2]=namePkDict[buf[idx]] 
      pkcrybuff[idx/2]=soundPkDict[buf[idx]]
      idxbuff[idx/2] = val
    }
  else{
    pklvbuff[Math.floor(idx/2)]=val;
  }
});
  
  
const stage = new Stage();  

stage.add(new ImageBox({
  coords:{x:300,y:400},
  url: "https://jackofalltrades.neocities.org/1710_final_project/pkmn.png",
  width: 400, 
  height: 400,
}))

// return new ImageBox({  
//   coords: { x: 0, y: 0 }, // Adjust coordinates as needed  
//   url: pkDict[val],  
//   width: 200, // Adjust width as needed  
//   height: 200, // Adjust height as needed  
// });  

//stage.add(encounterGrid);  

var allElements = document.querySelectorAll('*');

var divWithSVG = document.getElementById('svg-container');

// Find the SVG container within the div
var svgContainer = divWithSVG.querySelector('svg');

var audio = new Audio("https://jackofalltrades.neocities.org/1710_final_project/rbybattle.mp3");

 

let rect = new Rectangle({
  coords: {x: 200, y:600},
  height: 50,
  width: 150,
  color: "pink",
  borderColor: "black",
  borderWidth: 2,
  label: "Start Encounter"
})

stage.add(rect);


stage.add(new TextBox({  
  text: `Possible Encounters for name  ${txt}`,   
  coords: {x:300, y:50},  
  color: 'black',  
  fontSize: 30  
}))  
  
stage.render(svg);  


let rectElement = document.querySelector('rect');

// Add click event listener
rectElement.addEventListener("click", () => {
  // Handle the encounter initiation here
  var i = Math.floor(Math.random() * 4);
  stopAudio(); // Stop and reset the audio
  console.log("Encounter started! for ", i);
  stage.add(new ImageBox({
    coords:{x:400,y:275},
    url: pkDict[idxbuff[i]],
    width: 100, 
    height: 100,
  }))
  console.log(idxbuff[i])
  console.log(pkDict[idxbuff[i]])
  audio.play(); // Start playing the audio
  a = new Audio(pkcrybuff[i]);
  a.play();
  stage.add(new TextBox({  
    text: `A wild ${pkmnbuff[i]}, Level ${pklvbuff[i]} appeared!`,   
    coords: {x:300, y:500},  
    color: 'black',  
    fontSize: 20  
  }))  
  stage.render(svg);  

});

// Function to stop and reset the audio
function stopAudio() {
  audio.pause(); // Pause the audio
  audio.currentTime = 0; // Reset audio to the beginning
}
