import React from "react";
import { useCurrency } from "hooks/useCurrency";

/*
    Input component
*/

const Input = ({ name, disabled }) => {
    const { loading, value1, value2, updateValue, convert } = useCurrency();

    const handleChange = (e) => e.target.value > 0 && updateValue(name, e.target.value);

    return (
        <input className="input" type="number" disabled={typeof disabled === "boolean" ? disabled : loading} value={name === "value1" ? value1 : value2} onChange={handleChange} onBlur={convert} />
    );
};

export default Input