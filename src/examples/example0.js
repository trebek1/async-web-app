export default () => {
  const child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example Zero - Callback Chain 1";
  document.getElementById("fetchWaterfall").appendChild(title);
  function load(callback, number, path) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("audio/m4a");
    req.open("GET", path, false); // XMLHttpRequest.open(method, url, async, user, password)
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        console.log(number);
        const child = document.createElement("div");
        child.innerHTML = number;
        document.getElementById("fetchWaterfall").appendChild(child);
        if (callback) callback();
      }
    };
    req.send();
  }
  load(
    load(load(() => {}, 3, "static/trance3.m4a"), 2, "static/trance2.m4a"),
    1,
    "static/trance1.m4a"
  );
  const end = document.createElement("div");
  end.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(end);
};
