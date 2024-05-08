#lang forge

option run_sterling "pokemon_vis_basic.js"
abstract sig Boolean {}
one sig True, False extends Boolean {}

//next is linear ALWAYS
sig TIME {
    next: lone TIME
}
-- if we want to add in a new area option we can
abstract sig Town {}
one sig Cinnibar, Wild extends Town {}
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

-- potentially change town: one Int to town: Town
one sig Location{
    town: one Town, --simplified
    triggers:  one Boolean, --does it trigger a transfer?
    -- Add wild pokemon for location 
    pokemonInLocation: pfunc TIME -> Buffer
}


one sig GameWorld {
    -- A specific game world with one Buffer & one Player & one Location
    player: one Player,
    wildPokemonBuffer: pfunc TIME -> Buffer,
    location:  pfunc TIME -> Location,
    tutorialActivated: one Boolean
}

//Character + ID Predicates
pred isValidCharacter[i: Int] {
    -- VALID Player Name Characters
    -- Valid Characters (alphanumerics & a few symbols, not like ASCII mapping):
        -- 0
        -- 127 to 185
        -- 224 to 227
        -- 230, 231, & 239
        -- 241 to 245
    (i = 0) or -- Null
    ((i >= 127) and (i <= 185)) or 
    ((i >= 225) and (i <= 227)) or 
    (i = 230) or (i = 231) or (i = 239) or 
    ((i >= 241) and (i <= 245))
}


pred isValidLevel[i: Int] {
    -- VALID Pokemon Levels
    (i >= 1) and (i <= 100)
}

pred isMissingNoID[i: Int] {
    -- Pokemon ID is both invalid and specifically corresponds with a MissingNo.
    not isValidPokemonID[i] and (i >= 0) and (i <= 185)
}

pred isGlitchTrainerID[i: Int] {
    -- Pokemon ID is both invalid and specifically corresponds with a glitched Trainer encounter.
    not isValidPokemonID[i] and i >= 225
}

pred isValidPokemonID[i: Int] {
    -- MissingNo or otherwise INVALID IDs
    
    (i >= 1) and (i != 31) and (i != 32) and (i != 50) and
    (i != 52) and (i != 56) and (i != 61) and (i != 62) and
    (i != 63) and (i != 67) and (i != 68) and (i != 69) and
    (i != 79) and (i != 80) and (i != 81) and (i != 86) and
    (i != 87) and (i != 94) and (i != 95) and (i != 115) and
    (i != 121) and (i != 122) and (i != 127) and (i != 134) and
    (i != 135) and (i != 137) and (i != 140) and (i != 146) and
    (i != 156) and (i != 159) and (i != 160) and (i != 161) and
    (i != 162) and (i != 172) and (i != 174) and (i != 175) and
    (i != 181) and (i != 182) and (i != 183) and (i != 184) and
    (i < 191)

}

pred wellformedBuffer[b: Buffer] {

    isValidLevel[b.buff_0]
    isValidLevel[b.buff_2]
    isValidLevel[b.buff_4]
    isValidLevel[b.buff_6]
    -- Invalid Pokemon IDs
    isValidPokemonID[b.buff_1]
    isValidPokemonID[b.buff_3]
    isValidPokemonID[b.buff_5]
    isValidPokemonID[b.buff_7]

}

pred wellformedPlayerName {

    isValidCharacter[GameWorld.player.name_0]
    isValidCharacter[GameWorld.player.name_1]
    isValidCharacter[GameWorld.player.name_2]
    isValidCharacter[GameWorld.player.name_3]
    isValidCharacter[GameWorld.player.name_4]
    isValidCharacter[GameWorld.player.name_5]
    isValidCharacter[GameWorld.player.name_6]
    isValidCharacter[GameWorld.player.name_7]

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


//TODO: Move a location's data into the Pokemon Buffer. A location should have ints similar to the player and buffer.
-- all loc: Location | loc.town = cinibar => ...
--may want b1 and b2 to be the same thing
pred moveLocationPokemonDataToPokemonBuffer[t1, t2: TIME]{
    all loc: Location | {

        GameWorld.wildPokemonBuffer.buff_0[t2] = loc.pokemonInLocation.buff_0[t1] and
        GameWorld.wildPokemonBuffer.buff_1[t2] = loc.pokemonInLocation.buff_1[t1] and
        GameWorld.wildPokemonBuffer.buff_2[t2] = loc.pokemonInLocation.buff_2[t1] and
        GameWorld.wildPokemonBuffer.buff_3[t2] = loc.pokemonInLocation.buff_3[t1] and
        GameWorld.wildPokemonBuffer.buff_4[t2] = loc.pokemonInLocation.buff_4[t1] and
        GameWorld.wildPokemonBuffer.buff_5[t2] = loc.pokemonInLocation.buff_5[t1] and
        GameWorld.wildPokemonBuffer.buff_6[t2] = loc.pokemonInLocation.buff_6[t1] and
        GameWorld.wildPokemonBuffer.buff_7[t2] = loc.pokemonInLocation.buff_7[t1]

    }
}



//Old man glitch occurrence, in that data was moved to buffer
pred moveNameToBuffer[t1, t2: TIME] { 
    -- Models the Old Man glitch occuring, where the encounter buffer is overwritten with the player's name.
    
        GameWorld.wildPokemonBuffer.buff_0[t2] = GameWorld.player.name_0
        GameWorld.wildPokemonBuffer.buff_1[t2] = GameWorld.player.name_1
        GameWorld.wildPokemonBuffer.buff_2[t2] = GameWorld.player.name_2
        GameWorld.wildPokemonBuffer.buff_3[t2] = GameWorld.player.name_3
        GameWorld.wildPokemonBuffer.buff_4[t2] = GameWorld.player.name_4
        GameWorld.wildPokemonBuffer.buff_5[t2] = GameWorld.player.name_5
        GameWorld.wildPokemonBuffer.buff_6[t2] = GameWorld.player.name_6
        GameWorld.wildPokemonBuffer.buff_7[t2] = GameWorld.player.name_7
        
}

//new location => move to table
pred moveLocations[l2:Location, t1, t2: TIME]{
    (l2.triggers = True) => moveLocationPokemonDataToPokemonBuffer[t1, t2]}


//TODO: Mainly for testing, just checks if a location does NOT trigger the glitch
pred locationNotTriggered{
    all loc: Location | loc.triggers = False
}

pred guaranteedInvalidEncounter[t1, t2: TIME] {

    moveNameToBuffer[t1, t2]
    -- ALL INVALID Levels
    not isValidLevel[GameWorld.wildPokemonBuffer.buff_0[t2]]
    not isValidLevel[GameWorld.wildPokemonBuffer.buff_2[t2]]
    not isValidLevel[GameWorld.wildPokemonBuffer.buff_4[t2]]
    not isValidLevel[GameWorld.wildPokemonBuffer.buff_6[t2]]
    -- ALL INVALID Pokemon IDs
    not isValidPokemonID[GameWorld.wildPokemonBuffer.buff_1[t2]]
    not isValidPokemonID[GameWorld.wildPokemonBuffer.buff_3[t2]]
    not isValidPokemonID[GameWorld.wildPokemonBuffer.buff_5[t2]]
    not isValidPokemonID[GameWorld.wildPokemonBuffer.buff_7[t2]]
    -- TODO: Overconstraint b/c this requires both an invalid ID AND Level.
}

pred guaranteedMissingNoEncounter[t1, t2: TIME] {

    moveNameToBuffer[t1, t2]
    -- ALL MissingNo Pokemon IDs
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_1[t2]]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_3[t2]]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_5[t2]]
    isMissingNoID[GameWorld.wildPokemonBuffer.buff_7[t2]]

}

pred guaranteedTrainerEncounter[t1, t2: TIME] {

    moveNameToBuffer[t1, t2]
    -- ALL Trainer Pokemon IDs
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_1[t2]]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_3[t2]]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_5[t2]]
    isGlitchTrainerID[GameWorld.wildPokemonBuffer.buff_7[t2]]

}

pred skylerName{

    GameWorld.player.name_0 = 146
    GameWorld.player.name_1 = 138
    GameWorld.player.name_2 = 152
    GameWorld.player.name_3 = 139
    GameWorld.player.name_4 = 128
    GameWorld.player.name_5 = 145
    GameWorld.player.name_6 = 0
    GameWorld.player.name_7 = 0

}

pred jackName{

    GameWorld.player.name_0 = 137
    GameWorld.player.name_1 = 128
    GameWorld.player.name_2 = 130
    GameWorld.player.name_3 = 138
    GameWorld.player.name_4 = 0
    GameWorld.player.name_5 = 0
    GameWorld.player.name_6 = 0
    GameWorld.player.name_7 = 0

}

pred nimName{
    GameWorld.player.name_0 = 141
    GameWorld.player.name_1 = 136
    GameWorld.player.name_2 = 140
    GameWorld.player.name_3 = 147
    GameWorld.player.name_4 = 132
    GameWorld.player.name_5 = 139
    GameWorld.player.name_6 = 146
    GameWorld.player.name_7 = 142
}
pred speakToOldMan[t1, t2: TIME] {
    GameWorld.location[t1] = Cinnibar
    GameWorld.tutorialActivated = True
    moveNameToBuffer[t1, t2]
}
//init
pred init[t: TIME] {
    wellformedBuffer[GameWorld.wildPokemonBuffer[t]]
    wellformedPlayerName
}
-- unsure if this is what you meant for the time field
pred traces {
    //we want this to be more like traces
    //remember to run with next is linear
    //also with triggering, triggering only happens if the location moved to triggers
    //so if you remain in the same location, no trigger
    //which one can do, supposedly

    --skipping the wellformedness since that what our init does, will revise if more things break
    some firstState: TIME | some lastState: TIME | {
        init[firstState] 
        no t: TIME | t.next = firstState
            no lastState.next
            
            all t: TIME | t != lastState implies {
                // GameWorld.wildPokemonBuffer[t.next] = GameWorld.wildPokemonBuffer[t]
                moveNameToBuffer[t, t.next]
                -- want to implement some sort of thing that says l2 is 
                // some l1, l2: Location | {
                //     // (GameWorld.location[t] = l1 and GameWorld.location[t.next] = l2) 
                //     // => not moveLocations[l1, t, t.next] else moveLocations[l2, t, t.next]
                // }

                //speakToOldMan[t]
                // not wellformedBuffer[GameWorld.wildPokemonBuffer[t]] <=> speakToOldMan[t]
} 
    }
    //we should also make activating the tutorial a move that moves the name into the wild pokemon buffer
    // (init and not wellformedBuffer[GameWorld.wildPokemonBuffer]) <=> moveLocations
}
-- Step 1: This run should show you four different pokemon at different valid levels (0 to 100)!
run {
    //wellformedBuffer[GameWorld.wildPokemonBuffer]
    //wellformedPlayerName
    //allDifferentBufferValues
    // init
    traces
} for exactly 1 Player, exactly 1   Buffer, exactly 1 GameWorld, 9 Int, 2 TIME for {next is linear}

//for exactly 1 Player, exactly 4 Buffer, exactly 1 GameWorld, 9 Int

-- Step 2: Perform the old man glitch and add a constraint that ensures a glitched encounter.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedInvalidEncounter
//     moveNameToBuffer
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 3: Perform the old man glitch and add a constraint that ensures all MissingNo encounters.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedMissingNoEncounter
//     moveNameToBuffer
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 4: Perform the old man glitch and add a constraint that ensures all glitched trainer encounters.
// run {
//     wellformedPlayerName
//     allDifferentLetters
//     guaranteedTrainerEncounter
//     moveNameToBuffer
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- Step 5: Perform the old man glitch and put Nim's name in the buffer.
// run {
//     wellformedPlayerName
//     moveNameToBuffer
//     nimName
// } for exactly 1 Player, exactly 1 Buffer, exactly 1 GameWorld, 9 Int

-- TODO: Distinguish between totally invalid buffer & glitched buffer in preds, same with player name?