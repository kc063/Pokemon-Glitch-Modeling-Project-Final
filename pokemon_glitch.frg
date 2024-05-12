#lang forge

option run_sterling "pokemon_vis_basic.js"
// option solver MiniSatProver
// option core_minimization hybrid // was: rce
// option logtranslation 1
// option coregranularity 1

abstract sig Boolean {}
one sig True, False extends Boolean {}

//next is linear ALWAYS
sig TIME {
    next: lone TIME
}
-- if we want to add in a new area option we can
sig Buffer {
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
sig Location{
    triggers:  one Boolean, --does it trigger a transfer?
    -- Add wild pokemon for location 
    pokemonInLocation: one Buffer
}
one sig Cinnibar, Wild extends Location {}
one sig GameWorld {
    -- A specific game world with one Buffer & one Player & one Location
    player: one Player,
    wildPokemonBuffer: pfunc TIME -> Buffer,
    location:  pfunc TIME -> Location,
    tutorialActivated: pfunc TIME -> Boolean
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

pred allDifferentBufferValues[b: Buffer] {
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
pred allDifferentPokemon[b: Buffer]{
    some disj c1, c3, c5, c7: Int | {
        b.buff_1 = c1
        b.buff_3 = c3
        b.buff_5 = c5
        b.buff_7 = c7
    }
}
pred allDifferentLevel[b: Buffer]{
    some disj c0, c2, c4, c6: Int | {
        b.buff_0 = c0
        b.buff_2 = c2
        b.buff_4 = c4
        b.buff_6 = c6
    }
}


//TODO: Move a location's data into the Pokemon Buffer. A location should have ints similar to the player and buffer.
-- all loc: Location | loc.town = cinibar => ...
--may want b1 and b2 to be the same thing
pred moveLocationPokemonDataToPokemonBuffer[l: Location, t1, t2: TIME, b: Buffer]{
        b.buff_0 = l.pokemonInLocation.buff_0 
        b.buff_1 = l.pokemonInLocation.buff_1 
        b.buff_2 = l.pokemonInLocation.buff_2
        b.buff_3 = l.pokemonInLocation.buff_3
        b.buff_4 = l.pokemonInLocation.buff_4
        b.buff_5 = l.pokemonInLocation.buff_5
        b.buff_6 = l.pokemonInLocation.buff_6
        b.buff_7 = l.pokemonInLocation.buff_7
}



//Old man glitch occurrence, in that data was moved to buffer
pred moveNameToBuffer[t1, t2: TIME, b: Buffer] { 
    -- Models the Old Man glitch occuring, where the encounter buffer is overwritten with the player's name.
    
        b.buff_0 = GameWorld.player.name_0
        b.buff_1 = GameWorld.player.name_1
        b.buff_2 = GameWorld.player.name_2
        b.buff_3 = GameWorld.player.name_3
        b.buff_4 = GameWorld.player.name_4
        b.buff_5 = GameWorld.player.name_5
        b.buff_6 = GameWorld.player.name_6
        b.buff_7 = GameWorld.player.name_7
        
}

//new location => move to table
pred moveLocations[l2:Location, t1, t2: TIME, b1, b2:Buffer]{
    (l2.triggers = True) => moveLocationPokemonDataToPokemonBuffer[l2, t1, t2, b2] else b1=b2
    GameWorld.location[t2] = l2
}

//TODO: Mainly for testing, just checks if a location does NOT trigger the glitch
pred locationNotTriggered{
    all loc: Location | loc.triggers = False
}

pred guaranteedInvalidEncounter[t1, t2: TIME, b: Buffer] {

    -- ALL INVALID Levels
    not isValidLevel[b.buff_0]
    not isValidLevel[b.buff_2]
    not isValidLevel[b.buff_4]
    not isValidLevel[b.buff_6]
    -- ALL INVALID Pokemon IDs
    not isValidPokemonID[b.buff_1]
    not isValidPokemonID[b.buff_3]
    not isValidPokemonID[b.buff_5]
    not isValidPokemonID[b.buff_7]
    -- TODO: Overconstraint b/c this requires both an invalid ID AND Level.
}

pred guaranteedMissingNoEncounter[t1, t2: TIME, b: Buffer] {

    -- ALL MissingNo Pokemon IDs
    isMissingNoID[b.buff_1]
    isMissingNoID[b.buff_3]
    isMissingNoID[b.buff_5]
    isMissingNoID[b.buff_7]

}

pred guaranteedTrainerEncounter[t1, t2: TIME, b: Buffer] {

    -- ALL Trainer Pokemon IDs
    isGlitchTrainerID[b.buff_1]
    isGlitchTrainerID[b.buff_3]
    isGlitchTrainerID[b.buff_5]
    isGlitchTrainerID[b.buff_7]

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
pred speakToOldMan[t1, t2: TIME, b: Buffer] {
    GameWorld.location[t2] = Cinnibar
    GameWorld.tutorialActivated[t2] = True
    moveNameToBuffer[t1, t2, b]
    GameWorld.location[t2] = GameWorld.location[t1]
}
//init
pred init[t: TIME] {
    wellformedPlayerName
    all loc: Location | {
        GameWorld.wildPokemonBuffer[t] != loc.pokemonInLocation
        wellformedBuffer[GameWorld.wildPokemonBuffer[t]]
        wellformedBuffer[loc.pokemonInLocation]
    }
    Cinnibar.triggers = False
    Wild.triggers = True
    GameWorld.tutorialActivated[t] = False
    GameWorld.location[t] = Wild
}

pred someLocation[t, t2: TIME, b, b2: Buffer]{
    all loc: Location|{
        GameWorld.tutorialActivated[t2] = GameWorld.tutorialActivated[t]
        some l: Location | moveLocations[l, t, t2, b, b2]
    }
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
                speakToOldMan[t, t.next, GameWorld.wildPokemonBuffer[t.next]] or
                someLocation[t, t.next, GameWorld.wildPokemonBuffer[t], GameWorld.wildPokemonBuffer[t.next]]
            }
    }      
}

run {
    // allDifferentPokemon[Cinnibar.pokemonInLocation]
    // nimName
    traces
    
} for exactly 1 Player, exactly 3 Buffer, exactly 1 GameWorld, 9 Int, 3 TIME for {next is linear}
