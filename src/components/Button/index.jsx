import React from 'react'
import styles from "./style.module.scss"

export const Button = ({children}) => {
  return (
    <button className={styles.btnBox}>
    {children}
    </button>
  )
}
