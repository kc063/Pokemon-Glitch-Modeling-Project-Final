sig GameWorld {
    player: one Player,
    wildPokemonBuffer: pfunc Byte[] -> EncounterData[], // Represents the memory buffer for encounters
    playerNameData: one NameData // To simulate data that can influence the wildPokemonBuffer
}

sig Player {
//    location: one Location,
    name: one String
}

sig EncounterData {
    pokemonID: one Int,
    level: one Int
}

sig Byte{
    value: one Int
}

sig NameData {
    data: one String // How do we want to represent hex data here?  Should probably be a number, not string.
}

//WHAT FUNCTIONS

//valid Byte data

//valid NAME data 
--must be player inputtable
--must be of size player inputtable
--we will also be handling conversions under the hood between bytes and the gameboy characters for a US version of PKMN red



// Simulates filling the wild Pokémon buffer with data influenced by player's name
pred fillEncounterBufferWithPlayerNameData[pre: GameWorld, post: GameWorld] {
    post.wildPokemonBuffer = nameDataToEncounterData(pre.playerNameData)
    // Ensure other aspects of the world remain consistent
    post.player = pre.player
}

// Remember that the logic for encounters in this model isn't about picking one, it's about all the possibilities.
// Should we pick one name and roll with the possibilities of it, then fill in more options if there's time?

// Helper function to simulate conversion of name data to encounter data
fun nameDataToEncounterData(nameData: NameData): pfunc Int -> EncounterData {
    // Map certain characters or patterns in the name to specific Pokémon IDs and levels
}

// Check if the current buffer state could lead to a MissingNo or other glitched Pokémon encounter
// Could also just pass in EncounterData directly.
pred isGlitchedEncounter[g: EncounterData] {
    some id: Int, level: Int | (g.wildPokemonBuffer[id]).pokemonID = MissingNoID() and (g.wildPokemonBuffer[id]).level > 100
    // Additional conditions to identify other unusual or glitched encounters
}

// Helper function to see if an ID equates to MissingNo or not.
fun MissingNoID(): Int {
    // Assign an ID to MissingNo that reflects its glitched nature
}