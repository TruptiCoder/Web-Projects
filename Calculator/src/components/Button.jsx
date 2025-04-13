import React from 'react'

function Button({num, changeVal}) {

    return (
        <button onClick={() => changeVal(num)} className='bg-purple-500 w-[5rem] h-[5rem] rounded-sm font-semibold text-[1.2rem]'>{num}</button>
    )
}

export default Button
