import React, { useEffect, useState } from 'react'
import "../css/auth.css"
import { AuthForm } from '../components/AuthForm';

export const Authentication = ({user, setUser, mode, setMode}) => {

  return (
    <main>
      <AuthForm mode={mode} setMode={setMode} user={user} setUser={setUser} />
    </main>
  )
}
