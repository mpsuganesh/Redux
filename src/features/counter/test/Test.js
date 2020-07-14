import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Calculation from './Calculation';


const ADD = "ADD";
const SUB = "SUB";

export const Add = () =>({type:ADD})
export const sub = () =>({type:SUB})

const initialValue = {
    customAction:"not calculated",
    isSubscription:false,
}

// calculation reducer 
const calculation = (state = initialValue, actions) => {
    switch (actions.type) {
        case ADD:
            return {
                ...state,
                customAction:5+2
            }
        case SUB:
            return {
                ...state,
                customAction:5-2
            }
        default:
            return {
                ...state
            }
    }
}
let stores = createStore(calculation);

function Test() {
    return (
        <Provider store = {stores}>
            <Calculation />
        </Provider>
    )
}

export default Test;
