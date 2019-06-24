export default async () => {
  let child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example One - Async Load Without Promises";
  document.getElementById("fetchWaterfall").appendChild(title);
  await fetch(`static/trance1.m4a`);
  child = document.createElement("div");
  child.innerHTML = "1";
  document.getElementById("fetchWaterfall").appendChild(child);
  await fetch(`static/trance2.m4a`);
  child = document.createElement("div");
  child.innerHTML = "2";
  document.getElementById("fetchWaterfall").appendChild(child);
  await fetch(`static/trance3.m4a`);
  child = document.createElement("div");
  child.innerHTML = "3";
  document.getElementById("fetchWaterfall").appendChild(child);
  try {
    const value = await fetch(`alex.m4a`);
    if (!value.ok)
      // or check for response.status
      throw new Error(value.statusText);
    child = document.createElement("div");
    child.innerHTML = "4";
    document.getElementById("fetchWaterfall").appendChild(child);
  } catch (e) {
    console.log("this is the error ", e);
    child = document.createElement("div");
    child.innerHTML = "Error Will Robinson";
    document.getElementById("fetchWaterfall").appendChild(child);
    // if you return here the final awat will not be called
  }
  await fetch(`static/trance5.m4a`);
  child = document.createElement("div");
  child.innerHTML = "5";
  document.getElementById("fetchWaterfall").appendChild(child);
  const end = document.createElement("div");
  end.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(end);
};
