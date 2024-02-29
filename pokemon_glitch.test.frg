#lang forge

open "pokemon_glitch.frg"




// test expect { opposingPreds: {noInvalidBuffers and someInvalidBuffer} for exactly 1 Buffer is unsat }

    // test expect {knownLockKeySat: {known} for exactly 5 Lock is sat }

    // test expect {knownWrongTest: {known and known_wrong} for exactly 5 Lock is unsat }

    // test expect {knownLockKeyPlusSat: {known and manufacturer_standard and wellformed} for exactly 5 Lock is sat }

-- Check for sat valid pokemon, invalid levels

// pred correctNumberofMasterKeys {
//     (#{ l: Lock | lockOpenedWith[l, Key.cut0, Key.cut1, Key.cut2, Key.cut3, Key.cut4] } = 5)
// }

// assert noNegativeBreaks is sufficient for wellformed



test suite for isValidCharacter {

}

test suite for isInvalidCharacter {
    
}

test suite for isValidLevel {
    
}

test suite for isInvalidLevel {
    
}

test suite for isInvalidPokemonID {
    
}

test suite for isValidPokemonID {
    
}

test suite for isMissingNoID {
    
}

pred isInvalidBuffer {
    -- True if the buffer contains ANY invalid IDs or Levels.
    -- Invalid Levels
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_0] or
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_2] or
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_4] or
    isInvalidLevel[GameWorld.wildPokemonBuffer.buff_6] or
    -- Invalid Pokemon IDs
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_1] or
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_3] or
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_5] or
    isInvalidPokemonID[GameWorld.wildPokemonBuffer.buff_7]
}

pred isNotInvalidBuffer {
    not isInvalidBuffer
}

test suite for wellformedBuffer {
    -- There can be no single invalid value (level or ID) in a wellformed buffer.
    test expect {no_invalid_values_in_wellformed_buffer: {isInvalidBuffer and wellformedBuffer} for exactly 1 GameWorld, 9 Int is unsat }

    assert isNotInvalidBuffer is necessary for wellformedBuffer
    
}

pred isNotInvalidPName {
    not isInvalidPName
}

pred isInvalidPName {
    -- True if the Player Name contains any invalid characters.
    isInvalidCharacter[GameWorld.player.name_0] or
    isInvalidCharacter[GameWorld.player.name_1] or
    isInvalidCharacter[GameWorld.player.name_2] or
    isInvalidCharacter[GameWorld.player.name_3] or
    isInvalidCharacter[GameWorld.player.name_4] or
    isInvalidCharacter[GameWorld.player.name_5] or
    isInvalidCharacter[GameWorld.player.name_6] or
    isInvalidCharacter[GameWorld.player.name_7]
}

test suite for wellformedPlayerName {
    -- There can be no single invalid character in a wellformed player name.
    test expect {no_invalid_values_in_wellformed_buffer: {isInvalidPName and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }

    assert isNotInvalidPName is necessary for wellformedPlayerName
    
}

pred someBufferValueUnmatched {
    GameWorld.wildPokemonBuffer.buff_0 != GameWorld.player.name_0 or
    GameWorld.wildPokemonBuffer.buff_1 != GameWorld.player.name_1 or
    GameWorld.wildPokemonBuffer.buff_2 != GameWorld.player.name_2 or
    GameWorld.wildPokemonBuffer.buff_3 != GameWorld.player.name_3 or
    GameWorld.wildPokemonBuffer.buff_4 != GameWorld.player.name_4 or
    GameWorld.wildPokemonBuffer.buff_5 != GameWorld.player.name_5 or
    GameWorld.wildPokemonBuffer.buff_6 != GameWorld.player.name_6 or
    GameWorld.wildPokemonBuffer.buff_7 != GameWorld.player.name_7
}

test suite for oldManGlitch {
    -- There cannot be any unmatched buffers between player name & encounter buffer after the glitch.
    test expect {no_unmatched_buffers: {oldManGlitch and someBufferValueUnmatched} for exactly 1 GameWorld, 9 Int is unsat }

    -- Assuming the player's name is valid, encounters after the Old Man glitch will ALWAYS be glitched encounters (b/c characters are all > 100).
    test expect {no_valid_pokemon_after_glitch_1: {oldManGlitch and wellformedBuffer and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }

}

pred differentLettersAndOMGlitch {
    allDifferentLetters and oldManGlitch
}

pred differentBuffersAndOMGlitch {
    allDifferentBufferValues and oldManGlitch
}

test suite for allDifferentLetters {
    -- After the old man glitch, all different buffer values implies all different letters.
    -- assert differentBuffersAndOMGlitch is sufficient for allDifferentLetters
}

test suite for allDifferentBufferValues {
    -- After the old man glitch, all different letters implies all different buffer values.
    -- assert differentLettersAndOMGlitch is sufficient for allDifferentBufferValues
    
}

pred notWellformedBuffer {
    not wellformedBuffer
}

test suite for guaranteedInvalidEncounter {
    -- Assuming the player's name is valid, encounters after the Old Man glitch will ALWAYS be glitched encounters (b/c characters are all > 100).
    --test expect {no_valid_pokemon_after_glitch_2: {oldManGlitch and guaranteedInvalidEncounter and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is sat }

    -- An invalid buffer is necessary to guarantee an invalid encounter.
    --assert notWellformedBuffer is necessary for guaranteedInvalidEncounter
}

pred normalPokemonEncounterInBuffer {
    GameWorld.wildPokemonBuffer.buff_0 = 17 or -- Valid Level
    GameWorld.wildPokemonBuffer.buff_1 = 17 -- Valid Pokemon
}

pred allMissingNoInBuffer {
    GameWorld.wildPokemonBuffer.buff_1 = 67
    GameWorld.wildPokemonBuffer.buff_3 = 67
    GameWorld.wildPokemonBuffer.buff_5 = 67
    GameWorld.wildPokemonBuffer.buff_7 = 67
}

pred allTrainersInBuffer {
    GameWorld.wildPokemonBuffer.buff_1 = 67
    GameWorld.wildPokemonBuffer.buff_3 = 67
    GameWorld.wildPokemonBuffer.buff_5 = 67
    GameWorld.wildPokemonBuffer.buff_7 = 67
}

test suite for guaranteedMissingNoEncounter {
    --test expect {no_valid_pokemon_and_guarantee: {normalPokemonEncounterInBuffer and guaranteedInvalidEncounter } for exactly 1 GameWorld, 9 Int is unsat }
    --test expect {all_missing_no_guarantee: {normalPokemonEncounterInBuffer and allMissingNoInBuffer } for exactly 1 GameWorld, 9 Int is sat }
}

test suite for guaranteedTrainerEncounter {
    
}