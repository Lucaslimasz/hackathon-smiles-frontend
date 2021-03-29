import React, { useState, useEffect } from "react";

import api from "../../config/api";

import {
  Wrapper,
  Container,
  Card,
  Logotipo,
  Title,
  Form,
  Input,
  Buttons,
  ButtonForgot,
  TextForgot,
  Visitor,
} from "./styles";

import Button from "../../components/button";

import Bg from "../../assets/login/bg.png";
import Logo from "../../assets/login/logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    const informations = { email, password };
    api
      .post("/auth/signin", informations)
      .then(() => {
        navigation.navigate('Onboard')
      })
      .catch(() => {
        alert('Login ou senha incorreto')
      });
  }

  return (
    <Wrapper source={Bg}>
      <Container>
        <Card>
          <Logotipo source={Logo} />

          <Title>Entre e comece sua jornada com a gente!</Title>

          <Form>
            <Input
              placeholder="E-mail"
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </Form>
          <Buttons>
            <Button onPress={onSubmit}>Começar</Button>
            <Button
              buttonType="outline"
              onPress={() => navigation.navigate("Register")}
            >
              Cadastrar
            </Button>
            <ButtonForgot>
              <TextForgot>Esqueci minha senha</TextForgot>
            </ButtonForgot>
          </Buttons>

          <Visitor>Continuar como visitante</Visitor>
        </Card>
      </Container>
    </Wrapper>
  );
}
