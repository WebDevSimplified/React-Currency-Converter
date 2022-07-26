import React from "react";
import Form from "./Form";

/*
    Component entry point
*/

const Window = () => (
    <div className="window">
        <h1 className="window__title">Currency converter</h1>
        <div className="window__divider"></div>
        <Form />
    </div>
);

export default Window;