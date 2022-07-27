import React from "react";
import Form from "./Form";
import { CurrencyProvider } from "hooks/useCurrency";

/*
    Component entry point
*/

const Window = () => (
    <div className="window">
        <h1 className="window__title">Currency converter</h1>
        <div className="window__divider"></div>
        <CurrencyProvider>
            <Form />
        </CurrencyProvider>
    </div>
);

export default Window;