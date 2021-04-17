var React = require("react");
var ReactDOM = require("react-dom");
var name = "Vidit Awasthi";
var d = new Date();
var n = d.getFullYear();
ReactDOM.render(
  <div>
    <p> Created By {name}</p>
    <p> Copyright {n} </p>
  </div>,
  document.getElementById("root")
);
