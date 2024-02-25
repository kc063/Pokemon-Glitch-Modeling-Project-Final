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

/*
Letters:
-16 - #
-15 - #
-14 - #
-13 - A
-12 - B
-11 - C
-10 - D
 -9 - E
 -8 - F
 -7 - G
 -6 - H 
 -5 - I
 -4 - J
 -3 - K
 -2 - L
 -1 - M
  0 - N
  1 - O
  2 - P
  3 - Q
  4 - R
  5 - S
  6 - T
  7 - U
  8 - V
  9 - W
 10 - X
 11 - Y
 12 - Z
 13 - #
 14 - #
 15 - # 
*/

/*
Pokemon:
-16 - MissingNo
-15 - MissingNo
-14 - MissingNo
-13 - MissingNo
-12 - MissingNo
-11 - MissingNo
-10 - MissingNo
 -9 - MissingNo
 -8 - MissingNo
 -7 - MissingNo
 -6 - MissingNo
 -5 - MissingNo
 -4 - MissingNo
 -3 - MissingNo
 -2 - MissingNo
 -1 - MissingNo
  0 - Pikachu
  1 - Bulbasaur
  2 - Charmander
  3 - 
  4 - 
  5 - 
  6 - 
  7 - 
  8 - 
  9 - 
 10 - 
 11 - 
 12 - 
 13 - 
 14 - 
 15 - 
*/

/*
Level:
Invalid Levels: -16 to 0
Valid Levels: 1 to 15
*/

sig Encounter {
    pokemonID: one Int,
    level: one Int
}

one sig GameWorld {
    player: one Player,
    wildPokemonBuffer: one Buffer,
    encounters: pfunc Buffer -> Encounter
}

pred isInvalidBuffer[b: Buffer] {
    -- Invalid Levels (<= 0)
    (b.buff_0 <= 0) or
    (b.buff_2 <= 0) or
    (b.buff_4 <= 0) or
    (b.buff_6 <= 0) or
    -- Invalid Pokemon IDs
    (b.buff_1 <= -1) or
    (b.buff_3 <= -1) or
    (b.buff_5 <= -1) or
    (b.buff_7 <= -1)
}

pred isGlitchedEncounter[e: Encounter] {
    e.pokemonID <= -1 or e.level <= 0
}

pred someGlitchEncounter {
     some b: Buffer | isInvalidBuffer[b]
}

pred wellformedBuffer {
    all b: Buffer | not isInvalidBuffer[b]
}

pred allDifferentLetters {
    all p: Player | 
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

// abstract sig Pokemon {}

// one sig MissingNo, M extends Pokemon {}
// Define other Pokémon as needed



run {wellformedBuffer oldManGlitch} for exactly 1 Player, exactly 1 Buffer, exactly 0 Encounter, exactly 1 GameWorld, 5 Int