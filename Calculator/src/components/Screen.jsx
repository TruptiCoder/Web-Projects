import React from 'react'

function Screen({val}) {
    return (
        <div className='bg-purple-900 p-3 rounded-sm text-zinc-200 font-semibold h-[4rem] text-[1.5rem] w-md'>
            <p>{val}</p>
        </div>
    )
}

export default Screen
