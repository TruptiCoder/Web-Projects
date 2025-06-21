import React, { useState } from 'react'
import { Nav } from '../layouts/Nav'
import { Footer } from '../layouts/Footer'
import { useNavigate } from 'react-router-dom';

export const AddItem = ({setItems, setMessage}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('shirt');
    const [desc, setDesc] = useState('');
    const [cover, setCover] = useState('');
    const [additionalImg, setAdditionalImg] = useState('');
    const [additionalImages, setAdditionalImages] = useState([]);

    const navigate = useNavigate();

    const handleAdditionalImage = (e) => {
        e.preventDefault();
        if(additionalImg.trim()) {
            setAdditionalImages([...additionalImages, additionalImg]);
            setAdditionalImg('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            name,
            type,
            desc,
            cover,
            additionalImages,
        };

        setItems(prev => [...prev, newItem]);
        setMessage('New item added successfully!');

        setName('');
        setType('shirt');
        setDesc('');
        setCover('');
        setAdditionalImages([]);

        navigate('/');
    }

  return (
    <div className='container'>
        <Nav />
        
        <div className="add">
            <form onSubmit={handleSubmit}>
                <h3>Add New Item</h3>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="type">Item Type</label>
                    <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="shirt">Shirt</option>
                        <option value="pant">Pant</option>
                        <option value="shoes">Shoes</option>
                        <option value="sport">Sport Gear</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="desc">Item Description</label>
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="desc" id="desc"></textarea>
                </div>
                <div>
                    <label htmlFor="cover">Item Cover Image URL</label>
                    <input value={cover} onChange={(e) => setCover(e.target.value)} type="text" name='cover' id='cover' required/>
                </div>
                <div>
                    <label htmlFor="additional">Item additional images</label>
                    <div className='ad-img'>
                        <input type="text" value={additionalImg} onChange={(e) => setAdditionalImg(e.target.value)} name='additional' id='additional'/>
                        <button onClick={handleAdditionalImage}>Add</button>
                    </div>
                    <ul>
                        {additionalImages.map((img, index) => (
                            <li key={index}>{img}</li>
                        ))}
                    </ul>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>

        <Footer />
    </div>
  )
}
