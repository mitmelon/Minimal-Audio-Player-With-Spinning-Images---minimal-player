$(document).ready(function () {
    var musicQuene = [];
    var prevup = [];
    $('.player__album').children('.player__albumImg').each(function () {
        var song = $(this).attr('data-src');
        musicQuene.push(song);
    });

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', musicQuene[0]);

    var tl = new TimelineMax();
    tl.to('.player__albumImg', 3, {
        rotation: '360deg',
        repeat: -1,
        ease: Power0.easeNone
    }, '-=0.2');
    tl.pause();

    function inPlayer() {
        if (musicQuene.length > 0) {
            if ($('.player .player__albumImg.active-song').is(':last-child')) {
                $('.player__albumImg.active-song').removeClass('active-song');
                $('.player .player__albumImg:first-child').addClass('active-song');
                if (musicQuene.length > 1) {
                    $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
                }
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage * 4 + 'px';
                });
            } else {
                $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage + '%';
                });
            }
            updateInfo();
            audioElement.setAttribute('src', musicQuene[0]);
            audioElement.play();
            audioElement.addEventListener('ended', function () {
                prevup.unshift(musicQuene[0]);
                musicQuene.shift();
                updateInfo();
                inPlayer();
            })
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1.1,
                ease: Power0.easeNone
            })
            tl.resume();
        }
    }
    $('.player__play').click(function () {

        if ($('.player').hasClass('play')) {
            $('.player').removeClass('play');
            audioElement.pause();
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1,
                ease: Power0.easeNone
            })
            tl.pause();
        } else {
            $('.player').addClass('play');
            audioElement.play();
            audioElement.addEventListener('ended', function () {
                prevup.unshift(musicQuene[0]);
                musicQuene.shift();
                inPlayer();
            })
            TweenMax.to('.player__albumImg', 0.2, {
                scale: 1.1,
                ease: Power0.easeNone
            })
            tl.resume();
        }

    });
    var playhead = document.getElementById("playhead");
    audioElement.addEventListener("timeupdate", function () {
        var duration = this.duration;
        var currentTime = this.currentTime;
        var percentage = (currentTime / duration) * 100;
        playhead.style.width = percentage * 4 + 'px';
    });

    function updateInfo() {
        $('.player__author').text($('.active-song').attr('data-author'));
        $('.player__song').text($('.active-song').attr('data-song'));
    }
    updateInfo();

    $('.player__next').click(function () {
        if (musicQuene.length > 0) {
            if ($('.player .player__albumImg.active-song').is(':last-child')) {
                $('.player__albumImg.active-song').removeClass('active-song');
                $('.player .player__albumImg:first-child').addClass('active-song');
                if (musicQuene.length > 1) {
                    $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
                }
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage * 4 + 'px';
                });
            } else {
                $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage + '%';
                });
            }
            if (musicQuene.length > 1) {
                updateInfo();
                prevup.unshift(musicQuene[0]);
                musicQuene.shift();
                audioElement.setAttribute('src', musicQuene[0]);
                audioElement.play();
            }
        }
    });

    $('.player__prev').click(function () {
        if (prevup.length > 0) {
            if ($('.player .player__albumImg.active-song').is(':first-child')) {
                $('.player__albumImg.active-song').removeClass('active-song');
                $('.player .player__albumImg:last-child').addClass('active-song');
                $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage * 4 + 'px';
                });
            } else {
                $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage + 'px';
                });
            }
            updateInfo();
            musicQuene.unshift(prevup[0]);
            audioElement.setAttribute('src', prevup[0]);
            audioElement.play();
            prevup.shift();
        }
    });
});