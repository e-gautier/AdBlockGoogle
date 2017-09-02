  if ("duckduckgo.com" === window.location.hostname && document.contains(document.getElementById("ads"))) {
    let ads = document.getElementById("ads");
    // prevent ajax calls
    let watch = setInterval(() => {
      if (!ads.classList.contains('is-hidden')) {
        ads.remove();
        clearInterval(watch);
      }
    }, 50);
  } else if (document.contains(document.getElementById("tads"))) {
    document.getElementById("tads").remove();
  }
