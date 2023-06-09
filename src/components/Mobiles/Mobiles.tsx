import { useLayoutEffect, useState } from 'react';
import { MobilesModel } from '../../models/mobilesModel';
import { deleteProduct, getAllMobiles } from '../../services/mobilesService';
import "../../styles/shared.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom"

const Mobiles = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    const [products, setProducts] = useState<MobilesModel[]>()
    const [loading, setLoading] = useState(true);


    const fetchAllMobiles = () => {
        setLoading(true);
        getAllMobiles().then((mobiles: MobilesModel[]) => {
            setProducts(mobiles);
            setLoading(false);
        })
    }
    useLayoutEffect(() => {
        fetchAllMobiles();
    }, []);

    if (loading) {
        return <div >Loading ...</div>;
    }

    const handelDelete = (id) => {
        deleteProduct(id).then(() => {
            fetchAllMobiles()
        })
    }


    return (
        <div className='products'>
           

            <div className="container">
                {products.map((product) => (
                    < div className="product-container" key={product.id} >
                        <div className="product">
                            <img src={product.image} alt="" width="250px" height="250px" />
                            <div className="content">
                                <h4>{product.category}</h4>
                                <h3><a href="#">{product.name}</a></h3>
                                <p className='product-desc'>{product.desc}</p>
                                <span><a href="#">{product.price}$</a></span>
                            </div>
                            <div className="link">
                                <a href="#" onClick={() => handelDelete(product.id)}>Delete Product</a>
                                <a href="#" onClick={() => handleAddToCart(product)}>Add to Cart</a>
                            </div>
                        </div>
                    </div >

                ))}
            </div>
            <div>
                <Button label="Add New Mobile   " onClick={() => navigate("/add")} />
            </div>
        </div>

    )
}

export default Mobiles
