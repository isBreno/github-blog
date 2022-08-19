import styled from 'styled-components'
import Cover from "../../assets/Cover.svg";


export const HeaderCover = styled.header`
  background: url(${Cover}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 4rem;
  }
`;
