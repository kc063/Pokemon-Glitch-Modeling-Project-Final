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
How the Old Man glitch occurs isn't important to this model, but the result is that the wild encounter buffer is overwritten by the player's name buffer.

While some letter IDs correspond with valid Pokemon IDs, all enterable characters are invalid Pokemon levels.  (Valid Pokemon levels are 0 to 100, and there are no valid character IDs in that range).

After the glitch occurs, the player will have unusual encounters, including legitimate Pokemon at invalid levels, encounters with MissingNo, and even encounters with trainers despite there being none to interact with in the game area.

## Testing Details
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

To run our model, sequentially comment out the 5 run statements in our Forge model.

After each run, please navigate to the visualizer and run it to see the Pokemon sprites & characters rendered based on the player name & encounter buffers.

P.S., the 5th run is a cool Nim Telson easter egg!  Feel free to fill in your own name if you'd like to see what glitched Pokemon you would encounter :).

The character-number mappings can be found here:

https://bulbapedia.bulbagarden.net/wiki/Old_man_glitch

## Other Simplifications and Additional Information

We have slightly simplified the name generation process as pre-chosen names are handled differently by the game than ones the player inserts themselves from the name select screen. We have also chosen to exclude minor special rules around the terminal character for the player's name (essentially, it produces a valid level (80) and can only appear once, at the end). For readability and better visibility of what's going on under the hood, we have chosen to keep levels on the trainers, although the trainers that appear by Old Man glitch actually take their teams from elsewhere in the game data. Since this was extraneous to the project we made, we chose to exclude it. 