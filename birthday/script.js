function showFirstCard() {
    document.getElementById("modal1").classList.remove("hidden");
  }
  
  function nextCard() {
    document.getElementById("modal1").classList.add("hidden");
    document.getElementById("modal2").classList.remove("hidden");
  }
  
  function goToSurprise() {
    window.location.href = "surprise.html";
  }
  
  function nope() {
    alert("No?! 😤 Fine. But I still like you 😘");
  }

  function startMusic() {
    document.getElementById("musicPlayer").classList.remove("hidden");
    document.querySelector(".music-button").style.display = "none";
  }
  