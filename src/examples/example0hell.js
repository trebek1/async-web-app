export default () => {
  const child = document.createElement("div");
  child.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(child);
  const title = document.createElement("div");
  title.innerHTML = "Example Zero - Callback Chain 1";
  document.getElementById("fetchWaterfall").appendChild(title);
  function load(index) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("audio/m4a");
    req.open("GET", `static/trance${index}.m4a`, false); // XMLHttpRequest.open(method, url, async, user, password)
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        const child = document.createElement("div");
        child.innerHTML = index;
        index = index + 1;
        document.getElementById("fetchWaterfall").appendChild(child);
        var req2 = new XMLHttpRequest();
        req2.overrideMimeType("audio/m4a");
        req2.open("GET", `static/trance${index}.m4a`, false); // XMLHttpRequest.open(method, url, async, user, password)
        req2.onreadystatechange = function() {
          if (req.readyState === 4 && req.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            const child = document.createElement("div");
            child.innerHTML = index;
            index = index + 1;
            document.getElementById("fetchWaterfall").appendChild(child);
            var req3 = new XMLHttpRequest();
            req3.overrideMimeType("audio/m4a");
            req3.open("GET", `static/trance${index}.m4a`, false); // XMLHttpRequest.open(method, url, async, user, password)
            req3.onreadystatechange = function() {
              if (req.readyState === 4 && req.status === 200) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                const child = document.createElement("div");
                child.innerHTML = index;
                index = index + 1;
                document.getElementById("fetchWaterfall").appendChild(child);
                var req4 = new XMLHttpRequest();
                req4.overrideMimeType("audio/m4a");
                req4.open("GET", `static/trance${index}.m4a`, false); // XMLHttpRequest.open(method, url, async, user, password)
                req4.onreadystatechange = function() {
                  if (req.readyState === 4 && req.status === 200) {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    const child = document.createElement("div");
                    child.innerHTML = index;
                    index = index + 1;
                    document
                      .getElementById("fetchWaterfall")
                      .appendChild(child);
                    var req5 = new XMLHttpRequest();
                    req5.overrideMimeType("audio/m4a");
                    req5.open("GET", `static/trance${index}.m4a`, false); // XMLHttpRequest.open(method, url, async, user, password)
                    req5.onreadystatechange = function() {
                      if (req.readyState === 4 && req.status === 200) {
                        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                        const child = document.createElement("div");
                        child.innerHTML = index;
                        index = index + 1;
                        document
                          .getElementById("fetchWaterfall")
                          .appendChild(child);
                      }
                    };
                    req5.send();
                  }
                };
                req4.send();
              }
            };
            req3.send();
          }
        };
        req2.send();
      }
    };
    req.send();
  }
  load(1);
  const end = document.createElement("div");
  end.innerHTML = "-------------------------";
  document.getElementById("fetchWaterfall").appendChild(end);
};
