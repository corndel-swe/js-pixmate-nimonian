# Contributing

Great work on the deep dive. Now let's make some art!

## Drawings

1. Run `node drawings/necklace.js` and behold the beauty!

1. Take a look at `necklace.js` to figure out what is going on.

1. Copy the code into a new `.js` file and hack around to make some different
   patterns. Have fun!

Take a look at `TODO.md` for some drawing challenges to try.

## Animate

We've provided a function `animate(frames, interval)` which accepts an array of
strings. It will print each frame with `interval` seconds in-between.

Have a look at `animations/loading.js` to see how `animate` can be used.

We use a loop to build up a string and push it into an array of `frames`. We
pass this array to `animate` with the desired interval.

Take a look at `TODO.md` for some animation challenges to try.
