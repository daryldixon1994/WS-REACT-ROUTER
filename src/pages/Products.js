import { Link } from "react-router-dom";
import data from "../data";
const Products = () => {
    return (
        <section className="section">
            <h2>products</h2>
            <div>
                {data.map((product) => {
                    return (
                        <article>
                            <h4>{product.name}</h4>
                            <Link to={`/products/${product.id}`}>
                                more info
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Products;
