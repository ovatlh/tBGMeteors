var tBGMeteors=tBGMeteors||(function () {
  const VERSION = "1.0.0";

  function getNumRandom(min, max) { // min and max included 
    return Math.random() * (max - min + 1) + min;
  }

  function numberToFixed(number, decimals) {
    return number.toFixed(decimals);
  }

  function init({
    selector = ".t-bg-meteors",
    durationSecMin = 3,
    durationSecMax = 13,
    positioYMin = -100,
    positioYMax = 100,
    totalMeteors = 30,
  } = {}) {
    try {
      const container_DOM = document.querySelector(selector);
      const totalMeteors_ARRAY = Array.from({ length: totalMeteors }, (_, index) => index);
      const meteorList_HTML = totalMeteors_ARRAY.map((item, index) => {
        const positionY = getNumRandom(positioYMin, positioYMax);
        const positionYFixed = numberToFixed(positionY, 2);
        const durationSec = getNumRandom(durationSecMin, durationSecMax);
        const durationSecFixed = numberToFixed(durationSec, 2);
        const item_HTML = `<div class="t-item-meteor" data-index="${index}" style="--position-y: ${positionYFixed}; --duration-sec: ${durationSecFixed}s;"></div>`;
  
        return item_HTML;
      });
      const meteor_HTML = meteorList_HTML.join("");
      container_DOM.innerHTML = meteor_HTML;
    } catch (e) {
      console.error({ error: `init`, e });
    }
  }

  return {
    VERSION,
    init,
  }
})();
