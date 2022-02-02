import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm(); // хук для работы с формами

const dispatch = useDispatch(); // хук возвращает dispatch для записи в state

    const submit = (data) => {  // data - данные введенные с инпута
        console.log(data);
        dispatch(addCar({data})) // в dispatch ложим функцию из carSlice
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <label>Model: <input type= "text" {...register('model')}/> </label>
            <label>Price: <input type= "text" {...register('price')}/> </label>
            <label>Year: <input type= "text" {...register('year')}/> </label>
            <button>Save</button>

        </form>
    );
};
export {Form};