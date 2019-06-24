import config from "../exampleConfig";
// Load async

export default () =>
  Promise.all(
    config.one.map(({ path, index, message }) =>
      fetch(path)
        .then(response => ({
          blob: response.blob(),
          index,
          message
        }))
        .catch(err => console.log("err ", err))
    )
  )
    .then(songs => {
      const child = document.createElement("div");
      child.innerHTML = "-------------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
      const title = document.createElement("div");
      title.innerHTML = "Example Three - Synchronous Print After Async Load";
      document.getElementById("fetchWaterfall").appendChild(title);
      return songs;
    })
    .then(songs =>
      songs.forEach(song => {
        console.log("what is song ", song);
        const child = document.createElement("div");
        child.innerHTML = song.index;
        document.getElementById("fetchWaterfall").appendChild(child);
        console.log(song.message);
      })
    )
    .then(() => {
      const child = document.createElement("div");
      child.innerHTML = "-------------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
    });
