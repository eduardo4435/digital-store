import DigitalStore from "../assets/logo.svg"
import styled from "styled-components";

const LogoConteiner = styled.header`
    & {
        width: 253px;
        height: 44px;
    }
`

const Logo = () => {
    return (
        <LogoConteiner>
            <img src={DigitalStore} alt="imagem" />
        </LogoConteiner>
    );
}
 
export default Logo;