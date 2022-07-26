import React from "react";
import Currency from "components/Currency";
import Input from "components/Input";
import Loading from "components/Loading";
import { useCurrency } from "hooks/useCurrency";

/*
    Currency form
*/

const list = [
    "USD", "EUR", "MGA"
];

const Form = () => {
    const { loading } = useCurrency();

    return (
        <form className="form">
            <div className="form__group">
                <Input />
                <Currency list={list} />
            </div>
            {!loading && <p className="form__equals">=</p>}
            {loading && <Loading />}
            <div className="form__group">
                <Input />
                <Currency list={list} />
            </div>
        </form>
    );
};

export default Form;