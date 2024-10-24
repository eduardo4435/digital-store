import Logo from "./Logo";
import RedeSociais from "../assets/redes-sociais.svg"

const Footer = () => {
    return (
        <>
            <div>
                <Logo/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <img src={RedeSociais} alt="" />
            </div>
            <div>
                <h6>Informações</h6>
                <ul>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus Pedidos</li>
                </ul>
            </div>
            <div>
                <h6>Categorias</h6>
                <ul>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>
                </ul>
            </div>
            <div>
                <h6>Contato</h6>
                <ul>
                    <li>Av. Santos Dumont, 1510 - 1<br/> andar - Aldeota, Fortaleza -<br/> CE, 60150-161</li>
                    <li>(85) 3051-3411</li>
                </ul>
            </div>
        </>
    );
}
 
export default Footer;