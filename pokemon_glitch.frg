#lang forge

option run_sterling "pokemon_vis_basic.js"

-- TODO: Is there a way to extend the Int class to make named Ints?
// sig Level, PokemonID extends Int {}

one sig Buffer {
    -- Possible Pokemon Encounters Memory Buffer
    buff_0: one Int, -- level
    buff_1: one Int, -- pkmn id
    buff_2: one Int, -- level
    buff_3: one Int, -- pkmn id
    buff_4: one Int, -- level
    buff_5: one Int, -- pkmn id
    buff_6: one Int, -- level
    buff_7: one Int  -- pkmn id
}

one sig Player {
    -- Player Name Memory Buffer
    name_0: one Int, -- level
    name_1: one Int, -- pkmn id
    name_2: one Int, -- level
    name_3: one Int, -- pkmn id
    name_4: one Int, -- level
    name_5: one Int, -- pkmn id
    name_6: one Int, -- level
    name_7: one Int  -- pkmn id
}

one sig GameWorld {
    -- A specific game world with one Buffer & one Player.
    player: one Player,
    wildPokemonBuffer: one Buffer
    -- TODO: We don't really make use of this pfunc...
    -- encounters: pfunc Buffer -> Encounter
}

pred isValidCharacter[i: Int] {
    -- VALID Player Name Characters
    -- Valid Characters (alphanumerics & a few symbols, not like ASCII mapping):
        -- 127 to 185
        -- 224 to 227
        -- 230, 231, & 239
        -- 241 to 245
    ((i >= 127) and (i <= 185)) or 
    ((i >= 224) and (i <= 227)) or 
    (i = 230) or (i = 231) or (i = 239) or 
    ((i >= 241) and (i <= 245))
}

pred isInvalidCharacter[i: Int] {
    -- INVALID Player Name Characters
    (i <= 126) or 
    ((i >= 186) and (i <= 223)) or 
    (i = 228) or (i = 229) or 
    ((i >= 232) and (i <= 238)) or 
    (i = 240) or (i >= 246)
}

pred isValidLevel[i: Int] {
    -- VALID Pokemon Levels
    (i >= 1) and (i <= 100)
}

pred isInvalidLevel[i: Int] {
    -- INVALID Pokemon Levels
    (i <= 0) or (i >= 101)
}

pred isMissingNoID[i: Int] {
    -- Pokemon ID is both invalid and specifically corresponds with a MissingNo.
    isInvalidPokemonID[i] and (i >= 0) and (i <= 184)
}

pred isGlitchTrainerID[i: Int] {
    -- Pokemon ID is both invalid and specifically corresponds with a glitched Trainer encounter.
    -- TODO: The > 191 is the range specifically for this glitch, but there are obviously other trainer encounters.
    isInvalidPokemonID[i] and (i >= 191)
}

pred isInvalidPokemonID[i: Int] {
    -- MissingNo or otherwise INVALID IDs
    (i <= 0) or (i = 31) or (i = 32) or (i = 50) or
    (i = 52) or (i = 56) or (i = 61) or (i = 62) or
    (i = 63) or (i = 67) or (i = 68) or (i = 69) or
    (i = 79) or (i = 80) or (i = 81) or (i = 86) or
    (i = 87) or (i = 94) or (i = 95) or (i = 115) or
    (i = 121) or (i = 122) or (i = 127) or (i = 134) or
    (i = 135) or (i = 137) or (i = 140) or (i = 146) or
    (i = 156) or (i = 159) or (i = 160) or (i = 161) or
    (i = 162) or (i = 172) or (i = 174) or (i = 175) or
    (i = 181) or (i = 182) or (i = 183) or (i = 184) or
    (i >= 191)
}

pred isValidPokemonID[i: Int] {
    -- Check that a given pokemon ID is valid.
    not isInvalidPokemonID[i]
}

// pred isGlitchedEncounter[e: Encounter] {
//     -- Predicate to check if a given encounter is glitched.
//     -- TODO: We don't really use this.
//     isInvalidPokemonID[e.pokemonID] or isInvalidLevel[e.level]
// }

pred wellformedBuffer {
    isValidLevel[GameWorld.wildPokemonBuffer.buff_0]
    isValidLevel[GameWorld.wildPokemonBuffer.buff_2]
    isValidLevel[GameWorld.wildPokemonBuffer.buff_4]
    isValidLevel[GameWorld.wildPokemonBuffer.buff_6]
    -- Invalid Pokemon IDs
    isValidPokemonID[GameWorld.wildPokemonBuffer.buff_1]
    isValidPokemonID[GameWorld.wildPokemonBuffer.buff_3]
    isValidPokemonID[GameWorld.wildPokemonBuffer.buff_5]
    isValidPokemonID[GameWorld.wildPokemonBuffer.buff_7]
}

pred wellformedPlayerName {
    isValidCharacter[GameWorld.player.name_0]
}

pred allDifferentLetters {
    -- Ensures that every character in the player name is different.
    some disj c0,c1,c2,c3,c4,c5,c6,c7: Int | {
        GameWorld.player.name_0 = c0 and
        GameWorld.player.name_1 = c1 and
        GameWorld.player.name_2 = c2 and
        GameWorld.player.name_3 = c3 and
        GameWorld.player.name_4 = c4 and
        GameWorld.player.name_5 = c5 and
        GameWorld.player.name_6 = c6 and
        GameWorld.player.name_7 = c7
    }
}

pred allDifferentBufferValues {
    -- Ensures that every character in the player name is different.
    some disj c0,c1,c2,c3,c4,c5,c6,c7: Int | {
        GameWorld.wildPokemonBuffer.buff_0 = c0 and
        GameWorld.wildPokemonBuffer.buff_1 = c1 and
        GameWorld.wildPokemonBuffer.buff_2 = c2 and
        GameWorld.wildPokemonBuffer.buff_3 = c3 and
        GameWorld.wildPokemonBuffer.buff_4 = c4 and
        GameWorld.wildPokemonBuffer.buff_5 = c5 and
        GameWorld.wildPokemonBuffer.buff_6 = c6 and
        GameWorld.wildPokemonBuffer.buff_7 = c7
    }
}

pred oldManGlitch {
    -- Models the Old Man glitch occuring, where the encounter buffer is overwritten with the player's name.
    GameWorld.wildPokemonBuffer.buff_0 = GameWorld.player.name_0
    GameWorld.wildPokemonBuffer.buff_1 = GameWorld.player.name_1
    GameWorld.wildPokemonBuffer.buff_2 = GameWorld.player.name_2
    GameWorld.wildPokemonBuffer.buff_3 = GameWorld.player.name_3
    GameWorld.wildPokemonBuffer.buff_4 = GameWorld.player.name_4
    GameWorld.wildPokemonBuffer.buff_5 = GameWorld.player.name_5
    GameWorld.wildPokemonBuffer.buff_6 = GameWorld.player.name_6
    GameWorld.wildPokemonBuffer.buff_7 = GameWorld.player.name_7
}

pred guaranteedInvalidEncounter {
    oldManGlitch 
    -- ALL INVALID Levels
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_0]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_2]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_4]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_6]
    -- ALL INVALID Pokemon IDs
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_1]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_3]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_5]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_7]
    -- TODO: Overconstraint b/c this requires both an invalid ID AND Level.
}

pred validEncounterAfterGlitch {
    oldManGlitch 
    -- ALL VALID Levels
    not isInvalidLevel[GameWorld.wildPokemonBuffer.buff_0]
    not isInvalidLevel[GameWorld.wildPokemonBuffer.buff_2]
    not isInvalidLevel[GameWorld.wildPokemonBuffer.buff_4]
    not isInvalidLevel[GameWorld.wildPokemonBuffer.buff_6]
    -- ALL VALID Pokemon IDs
    not isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_1]
    not isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_3]
    not isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_5]
    not isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_7]
    -- TODO: Overconstraint b/c this requires invalid ID AND Level.
    -- TODO: Test that this should be impossible!
}

pred guaranteedMissingNoEncounter {
    oldManGlitch
    -- ALL MissingNo Pokemon IDs
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_1]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_3]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_5]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_7]
}

pred guaranteedTrainerEncounter {
    oldManGlitch
    -- ALL Trainer Pokemon IDs
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_1]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_3]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_5]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_7]
}

-- TODO: Add the character name to the visualizer?

-- Step 1: This run should show you four different pokemon at different valid levels (0 to 100)!
run {
    wellformedBuffer
    wellformedPlayerName
    allDifferentBufferValues
} for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 2: Perform the old man glitch and add a constraint that ensures a glitched encounter.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedInvalidEncounter
//     oldManGlitch
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 3: Perform the old man glitch and add a constraint that ensures all MissingNo encounters.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedMissingNoEncounter
//     oldManGlitch
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 4: Perform the old man glitch and add a constraint that ensures all glitched trainer encounters.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedTrainerEncounter
//     oldManGlitch
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- TODO: Distinguish between totally invalid buffer & glitched buffer in preds, same with player name?