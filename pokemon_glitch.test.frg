#lang forge

open "pokemon_glitch.frg"

pred characterIsZero[i: Int] {
    i = 0
}

pred characterIsNegative[i: Int] {
    i < 0
}

pred isInvalidCharacter[i: Int] {
    -- INVALID Player Name Characters
    (i < 0) or
    ((i >= 1) and (i <= 126)) or
    ((i >= 186) and (i <= 224)) or 
    (i = 228) or (i = 229) or 
    ((i >= 232) and (i <= 238)) or 
    (i = 240) or (i >= 246)
}

pred validAndInvalidCharacter {
    all c: Int | {isInvalidCharacter[c] and isValidCharacter[c]}
}

test suite for isValidCharacter {
    -- Confirms that a character of 0 is valid.
    test expect {
        zeroIsValid: { all c: Int | {
            characterIsZero[c] => isValidCharacter[c]}
        } for 9 Int is theorem
    }

    -- Confirms that negative characters are invalid.
    test expect {
        negativeIsNotValid: { all c: Int | {
            characterIsNegative[c] => not isValidCharacter[c]}
        } for 9 Int is theorem
    }

    -- Confirms a character cannot be both valid and invalid (where invalid is a predicate with the logic flipped).
    test expect {bothValidAndInvalildChar: {validAndInvalidCharacter} for exactly 1 GameWorld, 9 Int is unsat }
}

pred levelIsOne[i: Int] {
    i = 1
}

pred levelIsTooLarge[i: Int] {
    i >= 101
}

pred isInvalidLevel[i: Int] {
    -- INVALID Pokemon Levels
    (i <= 0) or (i >= 101)
}

pred validAndInvalidLevel {
    all l: Int | {isInvalidLevel[l] and isValidLevel[l]}
}

test suite for isValidLevel {

    test expect {
        oneIsValid: { all c: Int | {
            levelIsOne[c] => isValidLevel[c]}
        } for 9 Int is theorem
    }

    test expect {
        tooLargeIsNotValid: { all c: Int | {
            levelIsTooLarge[c] => not isValidLevel[c]}
        } for 9 Int is theorem
    }

    test expect {bothValidAndInvalildLevel: {validAndInvalidLevel} for exactly 1 GameWorld, 9 Int is unsat }
    
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

pred validAndInvalidID {
    all i: Int | {isInvalidPokemonID[i] and isValidPokemonID[i]}
}

pred IDIsTwo[i: Int] {
    i = 2
}

pred IDIsTooLarge[i: Int] {
    i >= 191
}

pred IDIsTooSmall[i: Int] {
    i >= -1
}

test suite for isValidPokemonID {

    test expect {
        twoIsValid: { all c: Int | {
            IDIsTwo[c] => isValidPokemonID[c]}
        } for 9 Int is theorem
    }

    test expect {
        tooLargeIDIsNotValid: { all c: Int | {
            IDIsTooLarge[c] => not isValidPokemonID[c]}
        } for 9 Int is theorem
    }

    test expect {bothValidAndInvalildID: {validAndInvalidID} for exactly 1 GameWorld, 9 Int is unsat }
}

pred IDIsMissingNo[i: Int] {
    i = 156
}

test suite for isMissingNoID {

    -- Confirms trainer numbers aren't counted as MissingNo.
    test expect {
        tooLargeIsntMissingno: { all c: Int | {
            IDIsTooLarge[c] and isMissingNoID[c]}
        } for 9 Int is unsat
    }

    -- Confirms no valid Pokemon IDs are MissingNo.
    test expect {
        validIsntMissingno: { all c: Int | {
            isValidPokemonID[c] and isMissingNoID[c]}
        } for 9 Int is unsat
    }

    -- Confirms that a verified MissingNo number satisfies the predicate.
    test expect {
        missingNoIDISMissingNo: { all c: Int | {
            IDIsMissingNo[c] => isMissingNoID[c]}
        } for 9 Int is theorem
    }
    
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

pred knownValidBuffer {
    -- Level 50 Rapidashes, Skyler's favorite Pokemon :)

    GameWorld.wildPokemonBuffer.buff_0 = 50
    GameWorld.wildPokemonBuffer.buff_2 = 50
    GameWorld.wildPokemonBuffer.buff_4 = 50
    GameWorld.wildPokemonBuffer.buff_6 = 50

    GameWorld.wildPokemonBuffer.buff_1 = 164
    GameWorld.wildPokemonBuffer.buff_3 = 164
    GameWorld.wildPokemonBuffer.buff_5 = 164
    GameWorld.wildPokemonBuffer.buff_7 = 164
}

test suite for wellformedBuffer {
    -- There can be no single invalid value (level or ID) in a wellformed buffer.
    test expect {no_invalid_values_in_wellformed_buffer: {isInvalidBuffer and wellformedBuffer} for exactly 1 GameWorld, 9 Int is unsat }

    -- Confirms that a known valid buffer satisfies the predicate.
    test expect {known_valid_buffer_is_wellformed: {knownValidBuffer and wellformedBuffer} for exactly 1 GameWorld, 9 Int is sat }
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

pred isNotInvalidPName {
    not isInvalidPName
}

test suite for wellformedPlayerName {
    -- There can be no single invalid character in a wellformed player name.
    test expect {no_invalid_char_in_wellformed_name: {isInvalidPName and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }

    -- Asserts that a Not Invalid Player name is necessary for a wellformed player name.
    assert isNotInvalidPName is necessary for wellformedPlayerName for exactly 1 GameWorld, 9 Int
    
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
    --assert differentBuffersAndOMGlitch is necessary for allDifferentLetters for exactly 1 GameWorld, 9 Int
    -- This took forever to run so we took it out.
}

pred notWellformedBuffer {
    not wellformedBuffer
}

pred normalPokemonEncounterInBuffer {
    GameWorld.wildPokemonBuffer.buff_0 = 17 or -- Valid Level
    GameWorld.wildPokemonBuffer.buff_1 = 17 -- Valid Pokemon
}

test suite for guaranteedInvalidEncounter {
    -- Assuming the player's name is valid, encounters after the Old Man glitch will ALWAYS be glitched encounters (b/c characters are all > 100).
    test expect {no_valid_pokemon_after_glitch_2: {oldManGlitch and guaranteedInvalidEncounter and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is sat }

    -- An invalid buffer is necessary to guarantee an invalid encounter.
    assert notWellformedBuffer is necessary for guaranteedInvalidEncounter for exactly 1 GameWorld, 9 Int
    test expect {no_valid_pokemon_and_guarantee: {normalPokemonEncounterInBuffer and guaranteedInvalidEncounter } for exactly 1 GameWorld, 9 Int is unsat }
}

pred allMissingNoInBuffer {
    GameWorld.wildPokemonBuffer.buff_1 = 67
    GameWorld.wildPokemonBuffer.buff_3 = 67
    GameWorld.wildPokemonBuffer.buff_5 = 67
    GameWorld.wildPokemonBuffer.buff_7 = 67
}

pred allTrainersInBuffer {
    GameWorld.wildPokemonBuffer.buff_1 = 225
    GameWorld.wildPokemonBuffer.buff_3 = 225
    GameWorld.wildPokemonBuffer.buff_5 = 225
    GameWorld.wildPokemonBuffer.buff_7 = 225
}

test suite for guaranteedMissingNoEncounter {
    -- A buffer filled with all trainers guarantees no MissingNo encounter.
    test expect {allTrainersInBuffBad: {allTrainersInBuffer and guaranteedMissingNoEncounter} for exactly 1 GameWorld, 9 Int is unsat }

    -- A buffer that contains a normal pokemon encounter cannot guarantee a MissingNo encounter.
    -- The normalPokemonEncounterInBuffer is only for 1 of the 4 Pokemon, so wellformedPlayerName ensures the other 3 fill realistically.
    test expect {normalPokemonInMissingNo: {normalPokemonEncounterInBuffer and guaranteedMissingNoEncounter and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }

    -- An all-MissingNo buffer guarantees a MissingNo encounter.
    test expect {allMissingNoInBuffGood: {allMissingNoInBuffer and guaranteedMissingNoEncounter} for exactly 1 GameWorld, 9 Int is sat }
}

test suite for guaranteedTrainerEncounter {
    -- A buffer filled with all trainers guarantees a Trainer encounter.
    test expect {allTrainersInBuffGood: {allTrainersInBuffer and guaranteedTrainerEncounter} for exactly 1 GameWorld, 9 Int is sat }

    -- A buffer that co ntains a normal pokemon encounter cannot guarantee a Trainer encounter.
    -- The normalPokemonEncounterInBuffer is only for 1 of the 4 Pokemon, so wellformedPlayerName ensures the other 3 fill realistically.
    test expect {normalPokemonInTrainer: {normalPokemonEncounterInBuffer and guaranteedTrainerEncounter and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }

    -- A buffer filled with all MissingNo guarantees no Trainer encounter.
    test expect {allMissingNoInBuffBad: {allMissingNoInBuffer and guaranteedTrainerEncounter} for exactly 1 GameWorld, 9 Int is unsat }
}