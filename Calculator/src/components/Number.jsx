import React from 'react'
import Button from './Button'

function Number({changeVal}) {
    return (
        <div className='flex items-center justify-center flex-wrap mt-3 gap-2 w-[60%]'>
            <Button num={"1"} changeVal={changeVal}/>
            <Button num={"2"} changeVal={changeVal}/>
            <Button num={"3"} changeVal={changeVal}/>
            <Button num={"4"} changeVal={changeVal}/>
            <Button num={"5"} changeVal={changeVal}/>
            <Button num={"6"} changeVal={changeVal}/>
            <Button num={"7"} changeVal={changeVal}/>
            <Button num={"8"} changeVal={changeVal}/>
            <Button num={"9"} changeVal={changeVal}/>
            <Button num={"0"} changeVal={changeVal}/>
            <Button num={"00"} changeVal={changeVal}/>
            <Button num={"."} changeVal={changeVal}/>
        </div>
    )
}

export default Number
