import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Pokelogo from '../../assets/pokeLogo.svg';
import Input from '../../components/Input';
import Content from './components/Content';
import Form from './components/Form';
import FormButton from './components/FormButton';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import { useAuth } from '../../context/auth';

const Login: React.FC = () => {
  const { login, token } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleLogin(): void {
    if (email === 'user' && password === '12345') {
      login();
      history.replace('/home');
    } else {
      console.error('Erro');
    }
  }

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <Content>
        <img src={Pokelogo} alt="Ppkemon" />
        <Title>Comece a coletar pokémons!</Title>
        <Form
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <FormButton type="submit">Entrar</FormButton>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Login;
