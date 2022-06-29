import { useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
    let { productId } = useParams();
    let product = products.find((product) => product.id === productId);
    let { name, image } = product;
    return (
        <section className="section product">
            <img src={image} alt="product-image" />
            <h5> {name} </h5>
        </section>
    );
};

export default SingleProduct;
