import React, { useContext } from 'react'
import { FiLogIn } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import './styles.css'
import heroesImg from '../../assets/heroes.png'

import { ThemeContext } from 'styled-components'

export default function Logon() {
  const { logo } = useContext(ThemeContext)

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>  
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}