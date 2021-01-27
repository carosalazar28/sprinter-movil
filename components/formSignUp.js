import React, { useState } from 'react'
import { TextInput } from 'react-native'

export function FormSignUp() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleSubmit() {
    console.log(username, email, password, passwordConfirm)
  }

  
}