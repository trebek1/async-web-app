// Load them synchronously - blocking
// If you don't return anything, you are effectively returning a
// resolved promise for the value undefined.
export default () => {
  Promise.resolve()
    .then(() => {
      const child = document.createElement("div");
      child.innerHTML = "--------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
      const title = document.createElement("div");
      title.innerHTML = "Example Two";
      document.getElementById("fetchWaterfall").appendChild(title);
    })
    .then(() =>
      fetch("static/trance1.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 1;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance2.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 2;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance3.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 3;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance4.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 4;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance5.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 5;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance6.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 6;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance7.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 7;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance8.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 8;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() =>
      fetch("static/trance9.m4a")
        .then(response => response.blob())
        .catch(err => console.log("err ", err))
    )
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = 9;
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .then(() => {
      const child = document.createElement("div");
      child.innerHTML = "--------------------";
      document.getElementById("fetchWaterfall").appendChild(child);
    })
    .catch(err => console.log("error happened ", err));
};
