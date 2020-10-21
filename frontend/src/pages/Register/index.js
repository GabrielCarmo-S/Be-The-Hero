import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import { Container, Content, Section, Form} from './styles';

import { ThemeContext } from 'styled-components'


export default function Register() {

  const { logo } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Heor" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Section>
        <Form>
          <input placeholder="Nome da Ong" />
          <input type="email" placeholder="E-mail"/>
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80}} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}