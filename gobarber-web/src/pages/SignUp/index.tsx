import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, BackGround } from './style';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <BackGround />
        <Content>
          <img src={logoImg} alt="logo GoBarber" />

          <Form onSubmit={handleSubmit}>
            <h1> Faça seu cadastro</h1>
            <Input name="nome" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="criarconta">
            <FiArrowLeft />
            Voltar para o login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
