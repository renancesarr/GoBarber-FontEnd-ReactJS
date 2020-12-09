import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, BackGround } from './style';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="logo GoBarber" />

        <form>
          <h1> Faça seu logon</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="criarconta">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <BackGround />
    </Container>
  </>
);

export default SignIn;
