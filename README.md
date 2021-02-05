# Minimal Audio Player With Spinning Images - minimal-player version 2.0.0
 This is a minimal, clean audio/music/mp3 player with spinning cover images, built with jQuery, TweenMax.js and SVG images.

 This is an updated version of the Jquery plugin found here https://www.jqueryscript.net/other/Minimal-Audio-Player-Spinning-Images.html.

 ![alt text](https://github.com/alikinvv/minimal-player/blob/gh-pages/src/img/gif.gif?raw=true)

 # CHANGELOG 2.0.0

 1. Added Auto play feature (When one music ends another starts automatically without human touch. )
 2. Fix code bugs

 # How to use it:

1. Load the necessary jQuery and TweenMax.js JavaScript libraries in the document.

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>
```

2. Load the audio player's JavaScript and Stylesheet in the document. Done.

```
<link rel="stylesheet" href="css/main.css">
<script src="js/main.js"></script>
```

3. Build the HTML for the audio player and controls. Available data attributes:

data-author="Author 1": artist
data-song="Song 1": song name
data-src="song1.mp3": path to the song

You can load this from your database.

```
<div class="player">
  <div class="player__bar">
      <div class="player__album">
          <div class="player__albumImg active-song" data-author="Author 1" data-song="Song 1" data data-src="song1.mp3"
              style="background-image: url(album-1.jpg)">
          </div>
          <div class="player__albumImg active-song" data-author="Author 2" data-song="Song 2" data data-src="song2.mp3"
              style="background-image: url(album-2.jpg)">
          </div>
          <div class="player__albumImg active-song" data-author="Author 3" data-song="Song 3" data data-src="song3.mp3"
              style="background-image: url(album-3.jpg)">
          </div>
      </div>
      <div class="player__controls">

          <div class="player__prev">
              <svg class="icon">
                  <use xlink:href="img/sprite.svg#arrow"></use>
              </svg>
          </div>

          <div class="player__play">
              <svg class="icon play">
                  <use xlink:href="img/sprite.svg#play"></use>
              </svg>
              <svg class="icon pause">
                  <use xlink:href="img/sprite.svg#pause"></use>
              </svg>
          </div>

          <div class="player__next">
              <svg class="icon">
                  <use xlink:href="img/sprite.svg#arrow"></use>
              </svg>
          </div>
      </div>
  </div>
  <div class="player__timeline">
      <p class="player__author"></p>
      <p class="player__song"></p>
      <div class="player__timelineBar">
          <div id="playhead"></div>
      </div>
  </div>
</div>
```