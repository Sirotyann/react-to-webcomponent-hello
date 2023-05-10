// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// console.log("rootElement", rootElement)
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { createRoot } from "react-dom/client";

import React from "react";
import * as ReactDOM from "react-dom/client"
import reactToWebComponent from "react-to-webcomponent"
import Text from "./Text";

// customElements.define('tj-text', Text);

const TjText = reactToWebComponent(Text, React, ReactDOM)

customElements.define('tj-text', TjText);

