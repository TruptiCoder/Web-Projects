import React, { useEffect } from 'react'

export const Notification = ({message, clearMessage}) => {
    useEffect(() => {
        if(message) {
            const timer = setTimeout(() => {
                clearMessage();
            }, 3000);

            return () => clearTimeout(timer)
        }
    }, [message, clearMessage]);

    if(!message) return null;

  return (
    <div className='notification'>
        {message}
    </div>
  )
}
