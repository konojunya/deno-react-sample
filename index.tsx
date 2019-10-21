import React from "https://dev.jspm.io/react";
import ReactDomServer from "https://dev.jspm.io/react-dom/server";

import { View } from "./View.tsx";

const html = ReactDomServer.renderToString(<View msg="World" />);
console.log(html);
