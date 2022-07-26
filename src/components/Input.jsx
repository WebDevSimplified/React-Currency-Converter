import React from "react";
import { useCurrency } from "hooks/useCurrency";

/*
    Input component
*/

const Input = () => {
    const { loading } = useCurrency();

    return (
        <input className="input" type="number" disabled={loading} />
    );
};

export default Input