import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    background: ${(props) => props.theme.colors.content};;
    box-shadow: 0 0 100px rgba(0,0,0,0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
`

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    font-size: 18px;
    color: #999;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    margin-right: 8px;
  }
`
export const Form = styled.form `
  width: 100%;
  max-width: 450px;

  input{
    margin-top: 8px;
  }

`