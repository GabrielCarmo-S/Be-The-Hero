import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'
import { Container, Content, Section, Form } from './styles';

import { ThemeContext } from 'styled-components'


export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();

    const data= {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso')
    }

  }

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
        <Form onSubmit={handleNewIncident}> 
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso" />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em Reais" />
           
          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  )
}