export default () => {
  const child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example One - Async Load Without Promises";
  document.getElementById("fetchWaterfall").appendChild(title);
  fetch(`static/trance1.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "1";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob1 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance2.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "2";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob2 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance3.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "3";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob3 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance4.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "4";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob4 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance5.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "5";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob5 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance6.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "6";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob6 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance7.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "7";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob7 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance8.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "8";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob8 ", blob);
    })
    .catch(err => console.log("err ", err));
  fetch(`static/trance9.m4a`)
    .then(response => response.blob())
    .then(blob => {
      const child = document.createElement("div");
      child.innerHTML = "9";
      document.getElementById("fetchWaterfall").appendChild(child);
      console.log("this is the blob9 ", blob);
    })
    .catch(err => console.log("err ", err));
  setTimeout(() => {
    const child = document.createElement("div");
    child.innerHTML = "-------------------------";
    document.getElementById("fetchWaterfall").appendChild(child);
  }, 7000);

  //   fetch(`http://www.omdbapi.com/?t=Tron&apikey=${process.env.OMDB_API_KEY}`)
  //     .then(response => console.log("response ", response))
  //     .catch(err => console.log("err ", err));

  //   fetch(`http://private.omdbapi.com/?t=Tron&apikey=${process.env.OMDB_API_KEY}`)
  //     .then(resp => resp.json())
  //     .then(json => console.log("response ", json))
  //     .catch(err => console.log("err ", err));

  //   fetch(`static/salesforce1.jpg`)
  //     .then(resp => resp.blob())
  //     .then(pic => console.log(pic))
  //     .catch(err => console.log("err ", err));
};
