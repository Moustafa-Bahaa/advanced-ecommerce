import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom"
import { ProgressSpinner } from 'primereact/progressspinner';
import "../../styles/mobiles.css"

const Mobiles = ({ priceRange, loading, products, searchQuery, category, handleAddToCart, handelDelete }) => {
    const navigate = useNavigate()

    if (loading) {
        return <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />;
    }

    return (
        <div className='mobiles'>
            <div className="contain">
                {products.filter(product => { return product.price < parseInt(priceRange, 10) }).filter((product) => {
                    return product.name
                        .toLowerCase().includes(searchQuery.toLowerCase())
                }).filter((product) => {
                    if (category === "all") { return products } else {
                        return product.category === category
                    }
                }).map((product) => (
                    <div className="card-container" key={product.id}>
                        <div className="card-products">
                            <div className="card-product">
                                <img src={product.image} width="250px" height="250px" alt="" />
                                <div className="card-content">
                                    <h3><a >{product.name}</a></h3>
                                    <span><a >{product.price}$</a></span>
                                </div>
                                <div className="link">
                                    <button onClick={() => handelDelete(product.id)}>Delete Item</button>
                                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='add-item'>
                <Button label="Add New Item " onClick={() => navigate("/add")} />
            </div>
        </div>

    )
}

export default Mobiles
