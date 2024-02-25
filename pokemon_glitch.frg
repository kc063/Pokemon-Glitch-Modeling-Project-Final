#lang forge

one sig Buffer {
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
    name_0: one Int, -- level
    name_1: one Int, -- pkmn id
    name_2: one Int, -- level
    name_3: one Int, -- pkmn id
    name_4: one Int, -- level
    name_5: one Int, -- pkmn id
    name_6: one Int, -- level
    name_7: one Int  -- pkmn id
}

sig Encounter {
    pokemonID: one Int,
    level: one Int
}

one sig GameWorld {
    player: one Player,
    wildPokemonBuffer: one Buffer,
    encounters: pfunc Buffer -> Encounter
}

pred isInvalidCharacter[i: Int] {
    -- Invalid Player Name Characters
    -- VALID Characters:
        -- 127 to 185
        -- 224 to 227
        -- 230, 231, & 239
        -- 241 to 245
    (i <= 126) or ((i >= 186) and (i <= 223)) or (i = 228) or (i = 229) or ((i >= 232) and (i <= 238)) or (i = 240) or (i >= 246)

}

pred isInvalidLevel[i: Int] {
    -- Invalid Levels (<= 0 or >= 101)
    (i <= 0) or (i >= 101)
}

pred isMissingNoID[i: Int] {
    isInvalidPokemonID[i] and (i >= 0) and (i <= 184)
}

pred isGlitchTrainerID[i: Int] {
    -- True for all ENTERABLE characters, but some in the range could be non-trainer.
    isInvalidPokemonID[i] and (i >= 191)
}

pred isInvalidPokemonID[i: Int] {
    -- MissingNo/Invalid IDs
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

pred isInvalidBuffer[b: Buffer] {
    -- Invalid Levels
    isInvalidLevel[b.buff_0] or
    isInvalidLevel[b.buff_2] or
    isInvalidLevel[b.buff_4] or
    isInvalidLevel[b.buff_6] or
    -- Invalid Pokemon IDs
    isInvalidPokemonID[b.buff_1] or
    isInvalidPokemonID[b.buff_3] or
    isInvalidPokemonID[b.buff_5] or
    isInvalidPokemonID[b.buff_7]
}

pred isInvalidPName[p: Player] {
    isInvalidCharacter[p.name_0] or
    isInvalidCharacter[p.name_1] or
    isInvalidCharacter[p.name_2] or
    isInvalidCharacter[p.name_3] or
    isInvalidCharacter[p.name_4] or
    isInvalidCharacter[p.name_5] or
    isInvalidCharacter[p.name_6] or
    isInvalidCharacter[p.name_7]
}

pred isGlitchedEncounter[e: Encounter] {
    isInvalidPokemonID[e.pokemonID] or isInvalidLevel[e.level]
}

pred someGlitchEncounter {
     some b: Buffer | isInvalidBuffer[b]
}

pred wellformedBuffer {
    all b: Buffer | not isInvalidBuffer[b]
}

pred wellformedPlayerName {
    all p: Player | not isInvalidPName[p]
}

pred allDifferentLetters {
    some disj c0,c1,c2,c3,c4,c5,c6,c7: Int | {
        Player.name_0 = c0 and
        Player.name_1 = c1 and
        Player.name_2 = c2 and
        Player.name_3 = c3 and
        Player.name_4 = c4 and
        Player.name_5 = c5 and
        Player.name_6 = c6 and
        Player.name_7 = c7
    }
}

pred oldManGlitch {
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
    -- ALL Invalid Levels
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_0]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_2]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_4]
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_6]
    -- ALL Invalid Pokemon IDs
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_1]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_3]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_5]
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_7]
    -- Overconstraint b/c this requires invalid ID AND Level.
}

pred guaranteedValidEncounter {
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
    -- Overconstraint b/c this requires invalid ID AND Level.
}

pred guaranteedMissingNoEncounter {
    oldManGlitch
    -- ALL MissingNo Pokemon IDs
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_1]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_3]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_5]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_7]
}


// abstract sig Pokemon {}

// one sig MissingNo, M extends Pokemon {}
// Define other Pokémon as needed



run {
    not wellformedBuffer
    --wellformedBuffer
    --guaranteedInvalidEncounter
    guaranteedMissingNoEncounter
    --guaranteedValidEncounter
    oldManGlitch
    allDifferentLetters
    wellformedPlayerName
} for exactly 1 Player, exactly 1 Buffer, exactly 0 Encounter, exactly 1 GameWorld, 9 Int

-- NO VALID LEVELS IN GLITCH < 100
-- TODO: Distinguish between totally invalid buffer & glitched buffer in preds, same with player name?