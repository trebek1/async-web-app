import config from "../exampleConfig";
// Load them synchronously - blocking
// Creating a sequence
export default () => {
  let child = document.createElement("div");
  child.innerHTML = "--------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example Two";
  document.getElementById("fetchWaterfall").appendChild(title);

  (async () => {
    const promises = config.two.map(src => fetch(src));
    const values = await Promise.all(promises);
    values.forEach(src => {
      console.log("what is src ", src);
      const child = new Image();
      child.src = src.url;
      document.getElementById("fetchWaterfall").appendChild(child);
    });
    child = document.createElement("div");
    child.innerHTML = "--------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
  })();
};
