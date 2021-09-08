import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

function resetSize() {
    // reset the body height to that of the inner browser
    // document.body.style.height = window.innerHeight + "px";
    // document.body.style.width = window.innerWidth + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetSize);
// called to initially set the height.
resetSize();
