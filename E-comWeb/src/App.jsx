import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddItem } from './pages/AddItem'
import { ViewItems } from './pages/ViewItems'
import { Show } from './pages/Show'
import { useState } from 'react'
import { Notification } from './layouts/Notification'

export const App = () => {
  const [items, setItems] = useState([
    {
    id: 1,
    name: 'Classic Black T-shirt',
    type: 'shirt',
    desc: 'A comfortable black unisex t-shirt made of 100% organic cotton.',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUWmS-vkZuPLMcWzKbUPWUUG6HIypyHrZxA&s',
    additionalImages: [
      'https://rukminim2.flixcart.com/image/750/900/kumzpu80/t-shirt/n/k/2/l-blk-11-m-amsha-original-imag7ppuj4ggppkc.jpeg?q=90&crop=false',
      'https://aaptees.in/wp-content/uploads/2018/02/Black.jpg',
    ],
  },
  {
    id: 2,
    name: 'Slim Fit Blue Jeans',
    type: 'pant',
    desc: 'Stylish blue jeans with a slim fit design and a stretchable fabric.',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVUOyfXFE69KkKKreiJv8frC9XF-1lI95LA&s',
    additionalImages: [
      'https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/s/s/fit-in/1000x1333/ss-24_4000x5000-04-10-24_mft-29433-s-167-dark-indigo-blue_1_mft-29433-s-167-dark-indigo-blue.jpg',
    ],
  },
  {
    id: 3,
    name: 'Running Shoes - Red',
    type: 'shoes',
    desc: 'Lightweight and breathable running shoes with extra cushion support.',
    cover: 'https://cdn.shopify.com/s/files/1/0279/5133/3450/files/MG_5197_238360ad-0ad5-4107-8c24-bf32379ac6f4_1024x1024.jpg?v=1636197065',
    additionalImages: [
      'https://assets.ajio.com/medias/sys_master/root/20231019/hcR1/653151afddf77915194a2e26/-473Wx593H-469551513-red-MODEL.jpg',
      'https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/v/q/y/-original-imahd2zbqjgqyrmk.jpeg?q=90&crop=false',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5-OtdE6DNboeVSV_NrWmGbMOqY5j2cBh0A&s',
    ],
  },
  {
    id: 4,
    name: 'White Sports Jersey',
    type: 'sport',
    desc: 'Moisture-wicking jersey perfect for team sports or casual wear.',
    cover: 'https://imgecart.com/wp-content/uploads/2024/03/DA400.jpg',
    additionalImages: [
      'https://imgecart.com/wp-content/uploads/2025/01/DC684-800x800.jpg',
    ],
  },
  ]);
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
