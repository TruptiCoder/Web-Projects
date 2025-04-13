import React from 'react'
import Button from './Button'

function Operation({changeVal, clearScr, del, compute}) {
    return (
        <div className='flex items-center justify-center flex-wrap mt-3 gap-2 w-[40%]'>
            <button onClick={() => clearScr()} className='bg-purple-500 w-[5rem] h-[5rem] rounded-sm font-semibold text-[1.2rem]'>Clr</button>
            <button onClick={() => del()} className='bg-purple-500 w-[5rem] h-[5rem] rounded-sm font-semibold text-[1.2rem]'>Del</button>
            <Button num={"+"} changeVal={changeVal}/>
            <Button num={"-"} changeVal={changeVal}/>
            <Button num={"*"} changeVal={changeVal}/>
            <Button num={"/"} changeVal={changeVal}/>
            <button onClick={() => compute()} className='bg-purple-800 h-[5rem] w-[10.5rem] rounded-sm text-[2rem] font-semibold text-zinc-200'>=</button>
        </div>
    )
}

export default Operation
