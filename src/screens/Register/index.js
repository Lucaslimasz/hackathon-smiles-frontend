import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Wrapper,
  Container,
  Card,
  Title,
  Form,
  Input,
  Buttons,
  Visitor,
} from "./styles";

import Button from "../../components/button";

import Bg from "../../assets/login/bg.png";

import api from "../../config/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  function onSubmit() {
    const informations = { name, email, password, location };
    api
      .post("/auth/signup", informations)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <Wrapper source={Bg}>
      <Container>
        <Card>
          <Title>Crie sua conta</Title>

          <Form>
            <Input
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              value={name}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setName(value)}
            />
            <Input
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <Input
              placeholder="Endereço"
              autoCorrect={false}
              autoCapitalize="none"
              value={location}
              onChangeText={(value) => setLocation(value)}
            />
          </Form>

          <Buttons>
            <Button onPress={onSubmit}>Criar</Button>
          </Buttons>

          <Visitor onPress={() => navigation.navigate("Login")}>
            Já tenho um conta
          </Visitor>
        </Card>
      </Container>
    </Wrapper>
  );
}
