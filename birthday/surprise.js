function startSurprise() {
    const music = document.getElementById('music');
    music.play().catch(() => {
      const clickToPlay = document.createElement('div');
      clickToPlay.innerHTML = "Click anywhere to start the music 🎵";
      clickToPlay.style = "position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:white;color:#8B0000;padding:20px;border-radius:10px;z-index:999;";
      document.body.appendChild(clickToPlay);
      document.body.addEventListener('click', () => {
        music.play();
        clickToPlay.remove();
      }, { once: true });
    });
  }
  