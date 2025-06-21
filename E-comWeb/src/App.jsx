import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddItem } from './pages/AddItem'
import { ViewItems } from './pages/ViewItems'
import { Show } from './pages/Show'
import { useState } from 'react'
import { Notification } from './layouts/Notification'

export const App = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  return (
    <div className='main'>
      <BrowserRouter>
        <Notification message={message} clearMessage={() => setMessage('')} />
        <Routes>

          <Route path='/add' element={<AddItem setItems={setItems} setMessage={setMessage} />} />

          <Route path='/' element={<ViewItems items={items} />} />

          <Route path='/show/:id' element={<Show items={items} />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
