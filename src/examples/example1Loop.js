import config from "../exampleConfig";

export default () => {
  const child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML =
    "Example One - Async Load Without Promises - Written with ForEach Loop";
  document.getElementById("fetchWaterfall").appendChild(title);

  config.one.forEach(({ path, index, message }) =>
    fetch(path)
      .then(response => response.blob())
      .then(blob => {
        const child = document.createElement("div");
        child.innerHTML = index;
        document.getElementById("fetchWaterfall").appendChild(child);
        console.log(message, blob);
      })
      .catch(err => console.log("err ", err))
  );

  setTimeout(() => {
    const child = document.createElement("div");
    child.innerHTML = "-------------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
  }, 7000);
};
