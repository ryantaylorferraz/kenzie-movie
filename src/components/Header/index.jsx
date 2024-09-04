import React from 'react'
import { Button } from '../Button'
import styles from "./style.module.scss"
import { Link } from 'react-router-dom'

export const Header = ({logo, text, button, link}) => {
  return (
    <header className={styles.headerContainer}>
        <Link to="/landingpage"><img src={logo} alt="logo" /></Link>
        <div>
        <Link to={link}><h1 className={styles.title}>{text} </h1></Link>
          <Button>{button}</Button>
        </div>
    </header>
  )
}
