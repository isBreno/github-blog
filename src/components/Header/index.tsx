import * as Styled from './styles'
import Logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <Styled.HeaderCover>
        <img src={Logo} alt="Github Blog" />
    </Styled.HeaderCover>
  )
}