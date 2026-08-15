(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.AudioCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function createTrackVariant(number) {
    const suffix = String(number).padStart(2, "0");
    return {
      id: `track-${suffix}`,
      label: `Wariant ${suffix}`,
      src: `assets/track${suffix}.mp3`
    };
  }

  function bindExclusivePlayback(audioElements) {
    const players = [...audioElements];
    players.forEach((current) => {
      current.addEventListener("play", () => {
        players
          .filter((other) => other !== current)
          .forEach((other) => other.pause());
      });
    });
  }

  return { createTrackVariant, bindExclusivePlayback };
});
