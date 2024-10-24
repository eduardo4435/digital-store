import Logo from "./Logo";
import Carrinho from "../assets/carrinho.svg"
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import "primereact/resources/themes/lara-light-blue/theme.css"
import { InputText } from "primereact/inputtext";

const HeaderConteiner = styled.header`
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    } & div {
        display: flex;
        justify-content: space-around;
        gap:10px;
        margin-top: 40px;
    } & input {
        width: 1000px;
    }

    & ul { 
        display: flex;
        justify-content: left;
        margin-top: 30px;
    } & li {
        padding: 15px;
    } & a{
        border-bottom: 1px;
    } & a.active {
        border-bottom: solid pink;
    }
`;

const Header = () => {
    return (
        <HeaderConteiner>
            <div>
                <Logo/>
                <InputText variant="filled" placeholder="Pesquisar produto..."/>
                <a href="#" rel="noopener noreferrer">
                    Cadastre-se
                </a>
                
<a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button primary">
    Entrar
</a>
            </div>
            <nav>
                <ul>
                    <BrowserRouter>
                        <li><NavLink to={"/1"}>Home</NavLink></li>
                        <li><NavLink to={"/2"}>Produtos</NavLink></li>
                        <li><NavLink to={"/3"}>Categorias</NavLink></li>
                        <li><NavLink to={"/4"}>Meus pedidos</NavLink></li>
                    </BrowserRouter>
                </ul>
            </nav>
        </HeaderConteiner>
    );
}
 
export default Header;