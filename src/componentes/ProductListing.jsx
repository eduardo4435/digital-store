import ProductCard from "../componentes/ProductCard"
import Tenis from "../assets/tenisCard.svg"

const ProductListing = () => {

    return (
        <>
        <ProductCard
        image={Tenis} 
        name="Nome do Produto" 
        price="$100" 
        priceDiscount="$80"
        />
        </>
    );
}
 
export default ProductListing;