// rafc react functional coponent
import React, { Fragment, useState } from 'react'
import { AddCounter } from './AddCounter';
import { ShowCounter } from './ShowCounter';
import { RestCounter } from './RestCounter';



export const Main = () => {
    const [number, setNumber]= useState(0);
    const onAdd =() => {
        setNumber (number + 1);
        console.log('I  added one')
    }
    const onRest =() => {
        if (number <= 0) 
        {
            setNumber (number );
        }
        else {
            setNumber (number - 1);
        }
        
        console.log('I  minus one')

    }
    //solo devulve 1 item
    return (
        <>
        <ShowCounter number={number}/>
        <AddCounter onAddPress={onAdd}/>
        <RestCounter onAddPress={onRest}/>
        </>
  );
};

