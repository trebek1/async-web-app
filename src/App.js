import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./prism.css";
import promiseAllAsync from "./examples/example1";
import promiseAsync from "./examples/example2";
import promises from "./examples/example3";
import example1Loop from "./examples/example1Loop";
import example2NoReduce from "./examples/example2NoReduce";
import example2Break from "./examples/example2.5BreakChain";
import exampleZero from "./examples/example0";
import exampleZeroHell from "./examples/example0hell";
import callback from "./examples/callback";
import promise from "./examples/promise";

// fetch(`static/jason.json`)
//   .then(response => response.json())
//   .then(json => console.log("this is the json ", json))
//   .catch(err => console.log("err ", err));

// The code snippet you want to highlight, as a string
// var code = "var data = 1;";

// Returns a highlighted HTML string

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={"/static/sf2.jpg"} alt="sf" />
    </header>
    <div>
      <h1> Base Example - The Problem - No Async Control - Many Requests </h1>
      <button onClick={promiseAllAsync}>Run Base Example - Async Load</button>
      <h1> Example Callback </h1>
      <p>
        What is a callback? - A callback function is a function passed into
        another function as an argument, which is then invoked inside the outer
        function to complete some kind of routine or action.
      </p>
      <button onClick={callback}>Run Example Callback</button>
      <h1> Example Promise </h1>
      <p>
        What is a promise? - The Promise object represents the eventual
        completion (or failure) of an asynchronous operation, and its resulting
        value.
      </p>
      <button onClick={promise}>Run Example Promise</button>
      <h1> Example 0 </h1>
      <button onClick={exampleZero}>
        Run Example Zero - Load With Callback
      </button>
      <h1> Example 0 Hell </h1>
      <button onClick={exampleZeroHell}>
        Run Example Zero Hell - Callback Hell
      </button>
      <h1> Example 1 - Loop </h1>
      <button onClick={example1Loop}>
        Run Example One - Async Load Without Promises - With Loop
      </button>
      <h1> Example 2 - No Reduce </h1>
      <button onClick={example2NoReduce}>
        Run Example Two - Syncronous Load and Synchronous Print - Without Reduce
      </button>
      <h1> Example 2.5 - No Reduce Break Chain </h1>
      <button onClick={example2Break}>
        Run Example Two - Syncronous Load and Synchronous Print - Without Reduce
        - Break Chain
      </button>
      <h1> Example 2 </h1>
      <button onClick={promiseAsync}>
        Run Example Two - Syncronous Load and Synchronous Print
      </button>
      <h1> Example 3</h1>
      <button onClick={promises}>
        Run Example Three - Synchronous Print After Async Load
      </button>
      <div id="fetchWaterfall">
        <h1>Order of Load: </h1>
      </div>
      <br />
      <div />
      <img src={"/static/salesforce1.jpg"} alt="salesforce" />
      <h1> Loading an image with an img tag </h1>
      <p>
        How hard it can be? Just using an img tag To load an image, the easiest
        way is to use an img tag. You are absolutely correct. So how the browser
        renders your page with an image tag? The simplify the case, we will
        focus on the common rendering engine flow while ignoring different
        browser’s details implementations. First of all, browser will start to
        parse your HTML markup and build DOM (Document Object Model) tree.
        Browser will then process styles and build CSSOM (CSS Object Model).
        After those two steps, browser will combine DOM and CSSOM to build a
        render tree. Finally browser will run layout on render tree and compute
        space needed then start to paint each node. As we mentioned before,
        browser will need to combine DOM and CSSOM to build the render tree, so
        the first paint happens after DOMContentLoaded. Image will not block the
        first paint (critical rendering path). Load event, however, is blocked
        by the image. The DOMContentLoaded event is fired when the initial HTML
        document has been completely loaded and parsed, without waiting for
        stylesheets, images, and subframes to finish loading. — MDN The load
        event is fired when a resource and its dependent resources have finished
        loading. — MDN Furthermore, as we didn’t specify the image dimensions,
        loading image will cause browser to reflow after the image loaded. In
        our example here, the reflow area is unfortunately the whole “document”
        as there is no fixed dimension on any ancestors of this node. Reflow
        happens when a browser must process and draw part or all of a webpage
        again, such as after an update on an interactive site. — MDN We are
        facing two issues when it comes to the simple image tag loading
        strategy. load event is blocked. browser is recalculating the layout. If
        you have text below the image, the page could jump (Chrome implements
        Scroll Anchoring to solve this common problem, but its not yet commonly
        adopted) -
        https://medium.com/@roderickhsiao/performance-101-i-know-how-to-load-images-a262d556250f
      </p>
    </div>
  </div>
);

export default App;

/* <pre>
    <code className="language-js">{code}</code>
  </pre> 
*/
