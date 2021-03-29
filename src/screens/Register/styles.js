import styled from "styled-components/native";

export const Wrapper = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin: auto;

  background: #fff;
  border-radius: 20px;
  padding: 50px 0;

  width: 90%;

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
  margin: 30px 0;
`;

export const Input = styled.TextInput`
  background: rgba(255, 90, 0, 0.2);
  padding: 15px 10px;
  width: 100%;
  margin: 5px 0;

  border-radius: 5px;
`;

export const Buttons = styled.View`
  margin-bottom: 15px;
`;

export const Visitor = styled.Text`
  color: #ff5a00;

  position: absolute;
  bottom: 20px;
`;