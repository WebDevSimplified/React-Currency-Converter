import React from "react";
import Currency from "components/Currency";
import Input from "components/Input";
import Loading from "components/Loading";

/*
    Currency form
*/

const list = [
    "USD", "EUR", "MGA"
];

const Form = () => {
    return (
        <form className="form">
            <div className="form__group">
                <Input />
                <Currency list={list} />
            </div>
            <p className="form__equals">=</p>
            {/* <Loading /> */}
            <div className="form__group">
                <Input />
                <Currency list={list} />
            </div>
        </form>
    );
};

export default Form;