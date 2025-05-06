import React, { useEffect, useState } from 'react'
import "../css/auth.css"
import { AuthForm } from '../components/AuthForm';

export const Authentication = () => {

  const [mode, setMode] = useState("signup");

  return (
    <main>
      <AuthForm mode={mode} setMode={setMode} />
    </main>
  )
}
