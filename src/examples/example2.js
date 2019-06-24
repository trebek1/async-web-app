import config from "../exampleConfig";
// Load them synchronously - blocking
// Creating a sequence
export default () => {
  Promise.resolve().then(() => {
    const child = document.createElement("div");
    child.innerHTML = "--------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
    const title = document.createElement("div");
    title.innerHTML = "Example Two";
    document.getElementById("fetchWaterfall").appendChild(title);
  });
  config.one
    .reduce(
      (acc, { path, index, message }) =>
        acc
          .then(() =>
            fetch(path)
              .then(response => response.blob())
              .catch(err => console.log("err ", err))
          )
          .then(blob => {
            const child = document.createElement("div");
            child.innerHTML = index;
            document.getElementById("fetchWaterfall").appendChild(child);
            console.log(message, blob);
          }),
      Promise.resolve()
    )
    .then(() => {
      const child = document.createElement("div");
      child.innerHTML = "--------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
    });
};
