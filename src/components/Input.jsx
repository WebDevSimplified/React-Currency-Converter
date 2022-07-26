import React from "react";
import { useCurrency } from "hooks/useCurrency";

/*
    Input component
*/

const Input = ({ name }) => {
    const { loading, value1, value2, updateValue } = useCurrency();

    const handleChange = (e) => updateValue(name, e.target.value);

    return (
        <input className="input" type="number" disabled={loading} value={name === "value1" ? value1 : value2} onChange={handleChange} />
    );
};

export default Input