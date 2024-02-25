#lang forge

open "pokemon_glitch.frg"

test expect { opposingPreds: {noInvalidBuffers and someInvalidBuffer} for exactly 1 Buffer is unsat }

-- Check for sat valid pokemon, invalid levels