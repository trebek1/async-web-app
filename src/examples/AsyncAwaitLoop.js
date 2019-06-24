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
  // (async () => {
  //   for (let { path, index } of config.one) {
  //     const next = await fetch(path);
  //     const child = document.createElement("div");
  //     child.innerHTML = index;
  //     document.getElementById("fetchWaterfall").appendChild(child);
  //   }
  // })();

  (async () => {
    const promises = config.one.map(({ path }) => fetch(path));
    const values = await Promise.all(promises);
    values.forEach((value, index) => {
      const child = document.createElement("div");
      child.innerHTML = index + 1;
      document.getElementById("fetchWaterfall").appendChild(child);
    });
    child = document.createElement("div");
    child.innerHTML = "--------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
  })();

  // Note this will not work with forEach
  //   Array.prototype.forEach = function (callback) {
  //     // this represents our array
  //     for (let index = 0; index < this.length; index++) {
  //       // We call the callback for each entry
  //       callback(this[index], index, this);
  //     }
  //   };
  // Can make an async version of forEach

  // async function asyncForEach(array, callback) {
  //     for (let index = 0; index < array.length; index++) {
  //       await callback(array[index], index, array);
  //     }
  //   }
  // child = document.createElement("div");
  // child.innerHTML = "--------------------";
  // document.getElementById("fetchWaterfall").appendChild(child);
};
