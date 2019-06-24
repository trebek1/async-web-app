export default () => {
  Promise.resolve()
    .then(() => {
      const child = document.createElement("div");
      child.innerHTML = "-------------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
      const title = document.createElement("div");
      title.innerHTML = "Example Promise";
      document.getElementById("fetchWaterfall").appendChild(title);
    })
    .then(() => {
      const text = document.createElement("div");
      text.innerHTML = "Waiting 3 seconds for Promise....";
      document.getElementById("fetchWaterfall").appendChild(text);
      return new Promise(resolve =>
        setTimeout(() => {
          const text = document.createElement("div");
          text.innerHTML = "Promise in setTimout Returned";
          document.getElementById("fetchWaterfall").appendChild(text);
          return resolve("transported text");
        }, 3000)
      );
    })
    .then(res => {
      const child = document.createElement("div");
      const child2 = document.createElement("div");
      child2.innerHTML = res;
      child.innerHTML = "-------------------------";
      document.getElementById("fetchWaterfall").appendChild(child2);
      document.getElementById("fetchWaterfall").appendChild(child);
    });
};

// CallbackFn is called after Timeout_In_MS seconds
// setTimeout(callbackFn, Timeout_In_MS )
