import React from "react";
import {
  StyledJogo,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledLink,
  StyledButton,
} from "../styles";

import ImgJogo from "../assets/jogo.jpeg";

export default function Jogo() {
  return (
    <StyledJogo>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>God of war</h1>
        <StyledGeneros>
          <StyledCategoria> Ação</StyledCategoria>
          <StyledCategoria> RPG</StyledCategoria>
          <StyledCategoria> Aventura</StyledCategoria>
        </StyledGeneros>
        <p>
          Com a vingança contra os deuses do Olimpo em um passado distante,
          Kratos agora vive como um mortal no reino dos deuses e monstros
          nórdicos. É nesse mundo duro e implacável que ele deve lutar para
          sobreviver... e ensinar seu filho a fazer o mesmo.
        </p>
        <StyledLink to="/login">
          <StyledButton noMargin>Comprar</StyledButton>
        </StyledLink>
      </StyledConteudo>
    </StyledJogo>
  );
}