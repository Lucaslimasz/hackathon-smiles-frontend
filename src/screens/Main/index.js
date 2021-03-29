import React, { useState } from "react";

import {
  Wrapper,
  Container,
  Top,
  Title,
  Description,
  Middle,
  Bot,
  Illustration,
} from "./styles";

import IllustrationOne from "../../assets/main/IllustrationOne.png";
import IllustrationTwo from '../../assets/main/IllustrationTwo.png'
import IllustrationThree from '../../assets/main/IllustrationThree.png'
import IllustrationFour from '../../assets/main/IllustrationFour.png'


import Button from "../../components/button";
import OptionsIllustration from "../../components/optionsIllustration";

export default function Main({navigation}) {
  const [positionInformation, setPositionInformation] = useState(0);

  const Informations = [
    {
      title: "A viagem dos seus sonhos",
      description: "Mais econômica do que você imagina.",
      illustration: IllustrationOne
    },
    {
      title: "Jogue e ganhe",
      description: "Você aprende jogando e ainda pode acumular milhas!",
      illustration: IllustrationTwo
    },
    {
      title: "Interaja e ganhe",
      description: "Compartilhe suas experiências com a gente e ganhe milhas!",
      illustration: IllustrationThree
    },
    {
      title: "Saia do aperto",
      description:
        "Dicas de planejamento financeiro para aproveitar o seu sonho ao máximo.",
      illustration: IllustrationFour
    },
  ];

  function NextInformation() {
    positionInformation < Informations.length - 1
      ? setPositionInformation((prev) => prev + 1)
      : navigation.navigate('Login');
  }

  return (
    <Wrapper>
      <Container>
        <Top>
          <Title>{Informations[positionInformation].title}</Title>
          <Description>{Informations[positionInformation].description}</Description>
        </Top>
        <Middle>
          <Illustration source={Informations[positionInformation].illustration} alt="Illustration" />
          <OptionsIllustration arraySize={Informations.length} position={positionInformation} />
        </Middle>
        <Bot>
          <Button onPress={NextInformation}>{ positionInformation === Informations.length - 1 ? 'Começar' : 'Próximo' }</Button>
        </Bot>
      </Container>
    </Wrapper>
  );
}
