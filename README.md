# Pokemon Old Man Glitch Model

For our project, we chose to model the Old Man glitch from the first generation of Pokemon games.  This glitch, among other things, allows the player to encounter MissingNo pokemon and invalid Pokemon Trainers.

### The Wild Pokemon Buffer
Gen 1 Pokemon games use a small buffer to store the possible Pokemon encounters in a given area.  A particular encounter is chosen randomly from this buffer for each battle.

Our model simplifies the game's buffer slightly, but the structure of alternating levels and Pokemon IDs is identical to that of the game.

Buffer elements 0, 2, 4, and 6 contain the levels of the Pokemon IDs stored in buffer elements 1, 3, 5, and 7.

In other words, each buffer represents four possible encounters:
- Pokemon with ID `buff_1` at level `buff_0`
- Pokemon with ID `buff_3` at level `buff_2`
- Pokemon with ID `buff_5` at level `buff_4`
- Pokemon with ID `buff_7` at level `buff_6`

### MissingNo
Although there are 151 Pokemon in the generation 1 Pokemon games, Pokemon IDs can range from 0 to 255, meaning there are more possible IDs than valid Pokemon.

https://bulbapedia.bulbagarden.net/wiki/Old_man_glitch

These remaining IDs, should they somehow be encountered by the player, appear with names like "MissingNo" and "'M," but are all collectively referred to as MissingNo. Furthermore, the glitches that are encounterable using specifically the old man glitch are limited to a subset of all the glitched Pokemon, which we have correctly modeled here.

MissingNo can take one of five sprites depending on its (invalid) ID.

Most of them will appear as one of two static-looking sprites.  However, three other sprites for MissingNo exist: a ghost and two fossilized Pokemon.  These three sprites appear elsewhere in the game map but are not (or rather, should not be) used for legitimate Pokemon.

### The Player's Name Buffer
We have simplified the in-game logic slightly so that the player's name buffer is the same size as the wild encounter buffer, and each element represents a letter in the player's name.

Character IDs, like Pokemon IDs, are ints ranging from 0 to 255, but only some in that range are valid characters.

### The Old Man Glitch
The Old Man glitch occurs when a tutorial is activated (represented by the oldMan predicate) that moves the name of the player to the wild Pokemon encounter buffer. The game assumes that this buffer will be overwritten before entering a wild Pokemon encounter, since locations intended to have Pokemon will write Pokemon to this buffer, overwriting the name (which makes it a theoretically safe place to store data).

While some letter IDs correspond with valid Pokemon IDs, all enterable characters are invalid Pokemon levels.  (Valid Pokemon levels are 0 to 100, and there are no valid character IDs in that range).

After the glitch occurs, the player will have unusual encounters, including legitimate Pokemon at invalid levels, encounters with MissingNo, and even encounters with trainers despite there being none to interact with in the game area.

## Testing Details
We have a large series of tests checking both properties and modeling. The majority of our test suite handles testing properties for the individual predicates of our model. Our two most important tests handle testing traces, these are invalidBufferOnlyfGlitch and notinvalidGlitch which test our traces. Both are meant to verify that a buffer will only be not wellformed if the glitch occurs. So the former verifies that it is sat to have a not wellformed buffer if the glitch occurred and the second verifies that it will be unsat to have a wellformed buffer after the glitch occurs. Our test suites take a considerable amount of time to run so it is highly recommended that you run the test suites one at a time, we have left all test suites commented out by default.

Apart from the usual logical tests for our predicates, a few tests confirm the behavior we expected to see from a realistic model of this glitch. Namely:

```
test expect {no_valid_pokemon_after_glitch_1: {oldManGlitch and wellformedBuffer and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is unsat }
```
The Old Man glitch occuring with a valid player name means that the resulting encounter buffer will always be malformed!

which means...
```
test expect {no_valid_pokemon_after_glitch_2: {oldManGlitch and guaranteedInvalidEncounter and wellformedPlayerName} for exactly 1 GameWorld, 9 Int is sat }
```

Players will always have some variety of glitched encounter after the Old Man glitch (because character IDs are all 0 or > 100).

## Steps for Running

To run our model, run the glitch file and use the overhauled_vis.js to visualize a sample encounter based on the name buffer after the old man glitch has occurred.  Be aware that the overhauled visualizer assumes the glitch has happened and draws Pokemon directly from the name, and not the wild Pokemon buffer at any specific time. 

 The difference between overhauled and basic is that basic shows all of the Pokemon available for a player name and overhauled shows one encounter, but with a fun little Pokemon cry and music in a relatively game accurate format. It chooses one of the four encounters possible from the name at random. The basic visualizer is drawing from the first instance of buffer it finds and as such is deprecated, however we have left it in as it does offer useful auxiliary information for someone looking to see the WHOLE buffer, and serves as an in-between for the playfully immersive visualizer and the simple code model. 



The character-number mappings can be found here:

https://bulbapedia.bulbagarden.net/wiki/Old_man_glitch

## Other Simplifications and Additional Information

We have slightly simplified the name generation process as pre-chosen names are handled differently by the game than ones the player inserts themselves from the name select screen. We have also chosen to exclude minor special rules around the terminal character for the player's name (essentially, it produces a valid level (80) and can only appear once, at the end). For readability and better visibility of what's going on under the hood, we have chosen to keep levels on the trainers, although the trainers that appear by Old Man glitch actually take their teams from elsewhere in the game data. Since this was extraneous to the project we made, we chose to exclude it. 

Simplifications we made to location data include only using two locations-- "Cinnibar" and "Wild". There are, for the purposes of the demonstration, only two kinds of locations that matter-- locations that were programmed to have Pokemon encounters and thusly overwrite the buffer with Pokemon data, and those that don't, which provide the conditions for the name data to be read as Pokemon data, due to never clearing it from the wild Pokemon buffer. We also allow triggering of the demo (oldMan) arbitrarily and in any location, since what we are most interested in modeling are the two transition states (moving the name of the player to the buffer, and drawing from that invalid buffer when encountering Pokemon). 

## Tradeoffs



## Assumptions

## Goals 