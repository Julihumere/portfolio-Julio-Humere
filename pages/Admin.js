import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/admin.module.css'
import Cookies from 'universal-cookie'

export default function Admin() {
    const router = useRouter()
    const cookie = new Cookies()
    const adminUser = {
        email: "julihumere10@gmail.com",
        password: "Julio41796255",
    }

    const [form, setForm] = useState({
        email: '',
        password:''
    })

    const handleOnChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })     
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(adminUser.email === form.email && adminUser.password === form.password){
            cookie.set('inicio', 'true')
            router.push('/PanelAdmin')
        } 
    }
  return (
    <div className={styles.Admin__container}>
        <h1>Bienvenido Julio!</h1>
        <form onSubmit={e => handleSubmit(e)} className={styles.Admin__form}>
            <div className={styles.Admin__div__form}>
                <label className={styles.Admin__label}>Email</label>
                <input className={styles.Admin__input} name='email' value={form.email} onChange={handleOnChange} />
            </div>
            <div className={styles.Admin__div__form}>
                <label className={styles.Admin__label}>Password</label>
                <input className={styles.Admin__input} type='password' name='password' value={form.password} onChange={handleOnChange} />
            </div>    
            <button className={styles.Admin__button} type='submit'>Entrar</button>
        </form>
    </div>
  )
}
