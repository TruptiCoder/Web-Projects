import React from 'react'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className='bg-purple-100 w-full h-screen flex items-center justify-center flex-col'>
      <h1 className='text-[3rem] font-semibold text-purple-600'>Calculator</h1>

      <Calculator />
    </div>
  )
}

export default App
