import React from 'react'
import styles from './Input.module.css'

const Input = ({label,type,name,value,onChange,error,onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input 

      onChange={onChange} 
      value={value} 
      id={name} 
      name={name} 
      className={styles.input} 
      type={type}
      onBlur={onBlur}
      />
  

      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
