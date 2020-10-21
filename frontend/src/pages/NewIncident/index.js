import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section, Form } from './styles';

import { ThemeContext } from 'styled-components'


export default function NewIncident() {

  const { logo } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Heor" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>
        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" />
           
          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}