export default () => {
  const child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example Callback";
  document.getElementById("fetchWaterfall").appendChild(title);

  const text = document.createElement("div");
  text.innerHTML = "Waiting 3 seconds for callback....";
  document.getElementById("fetchWaterfall").appendChild(text);
  setTimeout(() => {
    const child = document.createElement("div");
    child.innerHTML = "-------------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
  }, 3000);
};

// CallbackFn is called after Timeout_In_MS seconds
// setTimeout(callbackFn, Timeout_In_MS )
