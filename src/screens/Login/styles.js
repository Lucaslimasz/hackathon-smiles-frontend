import styled from "styled-components/native";

export const Wrapper = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Logotipo = styled.Image`
  position: absolute;
  top: -50px;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin: auto;

  background: #fff;
  border-radius: 20px;
  padding: 50px 0;

  width: 90%;
  min-height: 520px;

  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #565656;
  width: 250px;
  text-align: center;
`;

export const Form = styled.View`
  width: 80%;
`;

export const Input = styled.TextInput`
  background: rgba(255, 90, 0, 0.2);
  padding: 20px 10px;
  width: 100%;
  margin: 5px 0;

  border-radius: 10px;
`;

export const Buttons = styled.View`
  min-height: 130px;
  justify-content: space-between;
`;

export const ButtonForgot = styled.TouchableOpacity``;

export const TextForgot = styled.Text`
  text-align: center;
  color: #ff5a00;
`;

export const Visitor = styled.Text`
  color: #ff5a00;

  position: absolute;
  bottom: 20px;
`;