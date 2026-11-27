(function () {
  var quotes = window.QUOTES || [];
  var quoteEl = document.getElementById('quote');
  var nextBtn = document.getElementById('next');
  if (!quotes.length || !quoteEl) return;

  // Shuffle once so every quote shows before any repeats.
  var order = quotes.map(function (_, i) { return i; });
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = order[i]; order[i] = order[j]; order[j] = t;
  }

  var pos = 0;
  var busy = false;
  var FADE_MS = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600;

  function render() {
    quoteEl.textContent = '“' + quotes[order[pos]] + '”';
  }

  function go(step) {
    if (busy) return;
    busy = true;
    quoteEl.classList.add('is-leaving');
    setTimeout(function () {
      pos = (pos + step + order.length) % order.length;
      render();
      quoteEl.classList.remove('is-leaving');
      quoteEl.classList.add('is-entering');
      // Force a reflow so the entering state is painted before it is removed.
      void quoteEl.offsetWidth;
      quoteEl.classList.remove('is-entering');
      setTimeout(function () { busy = false; }, FADE_MS);
    }, FADE_MS);
  }

  render();
  nextBtn.addEventListener('click', function () { go(1); });
  quoteEl.addEventListener('click', function () { go(1); });
  document.addEventListener('keydown', function (e) {
    if (e.target.closest && e.target.closest('button, a, input, textarea')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  });

  // --- Beach sounds (YouTube, hidden player) ---------------------------
  var videoId = window.BEACH_VIDEO_ID;
  var wavesBtn = document.getElementById('waves');
  if (!videoId || !wavesBtn) return;

  var player = null;
  var playing = false;

  function setPressed(on) {
    playing = on;
    wavesBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function createPlayer() {
    player = new YT.Player('yt-player', {
      width: 200,
      height: 200,
      videoId: videoId,
      playerVars: { autoplay: 1, controls: 0, loop: 1, playlist: videoId, playsinline: 1 },
      events: {
        onReady: function (e) { e.target.setVolume(45); e.target.playVideo(); },
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.PLAYING) setPressed(true);
          if (e.data === YT.PlayerState.PAUSED) setPressed(false);
        }
      }
    });
  }

  // Browsers only allow sound after a click, so the player loads on the first press.
  wavesBtn.addEventListener('click', function () {
    if (player && player.getPlayerState) {
      if (playing) { player.pauseVideo(); setPressed(false); }
      else { player.playVideo(); setPressed(true); }
      return;
    }
    setPressed(true);
    if (window.YT && window.YT.Player) { createPlayer(); return; }
    window.onYouTubeIframeAPIReady = createPlayer;
    var s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  });
})();
