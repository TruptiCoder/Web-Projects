import React, { useState } from 'react'
import Screen from './Screen'
import Number from './Number'
import Operation from './Operation'

function Calculator() {
    const [val, setVal] = useState('');

    const changeVal = (num) => {
        if(num == '+' || num == '-' || num == '/' || num == '*') {
            let op = val.charAt(val.length-1);

            if(op == '+' || op == '-' || op == '*' || op == '/') {
                setVal((curr) => curr.slice(0, -1) + num);
            }
            else setVal((curr) => curr+num);
        }
        else setVal((curr) => curr+num);
    }

    const compute = () => {
        let op = val.charAt(val.length-1);

        if(op == '+' || op == '-' || op == '*' || op == '/') {
            setVal(() => "Error");
        }
        else setVal((curr) => (eval(curr)).toString());
    }

    const clearScr = () => {
        setVal('');
    }

    const del = () => {
        setVal((curr) => curr.slice(0,-1))
    }

    return (
        <div className='bg-purple-300 p-5 rounded-sm w-lg flex items-center flex-col'>
            <Screen val={val}/>
            <div className='flex items-center justify-center'>
                <Number changeVal={changeVal}/>
                <Operation changeVal={changeVal} clearScr={clearScr} del={del} compute={compute}/>
            </div>
        </div>
    )
}

export default Calculator
