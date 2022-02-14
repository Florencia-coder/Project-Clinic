import { useEffect, useState } from "react";
import getTest from '../actions/test.js';
import {useDispatch, useSelector} from 'react-redux';


export default function Test(){
    const dispatch = useDispatch();
    const test = useSelector((state)=> state.test);

    useEffect(()=>{
        dispatch(getTest())
    }, [])

    return(
        <div>
            {
                test?
                <h1>{test}</h1>:
                <h1>No encontro test</h1>
            }
        </div>
    )

}