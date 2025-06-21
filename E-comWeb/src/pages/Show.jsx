import React from 'react'
import { Nav } from '../layouts/Nav'
import { Footer } from '../layouts/Footer'
import { useParams } from 'react-router-dom'

export const Show = ({items}) => {
  const {id} = useParams();
  const item = items.find((itm) => itm.id == id);

  if(!item) {
    return (
      <div className='container'>
        <Nav />
        <p style={{textAlign: 'center', margin: '2rem'}}>Item not found.</p>
        <Footer />
      </div>
    )
  }

  return (
    <div className='container'>
        <Nav />
        
        <div className="show">
            <h3>{item.name}</h3>
            <p>Item type: {item.type}</p>
            <p>{item.desc}</p>
            <div className='gallery'>
                <img className='img-show' src={item.cover} alt="Cover" />
                {item.additionalImages.map((img, i) => (
                  <img className='img-show' src={img} alt={`img-${i}`} key={i} />
                ))}
            </div>
        </div>

        <Footer />
    </div>
  )
}
