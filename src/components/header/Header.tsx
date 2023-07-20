import { useDispatch, useSelector } from "react-redux";
import "../../styles/header.css"
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaShoppingCart } from 'react-icons/fa';

const Header = () => {

    const navigate = useNavigate()
    const getSpecificData = (state) => state.cart;
    const products = useSelector(getSpecificData)

    return (

        <header>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src="https://static.wixstatic.com/media/440950_ed6cff3b26bf4711a6189f47a7c2e504~mv2.png/v1/fill/w_578,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Walmart%20eCommerce%20Logo%5B1%5D.png" alt="" onClick={() => navigate("/")} />
                    </Link>
                   
                </div>

                <ul className='nav-links'>

                    <li>
                        <Link to="/" className="links">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="links">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/products" className="links">
                            Products
                        </Link>
                    </li>

                </ul>

                <div className='cart-btn-wrapper'>

                    <Link to='/CartItems' onClick={() => navigate("/CartItems")} className='cart-btn'>
                        Cart
                        <span className='cart-container'>
                            <FaShoppingCart />
                            <span className='cart-value'>{products.totalQuantity}</span>
                        </span>
                    </Link>

                </div>

            </div>

        </header>
    )
}

export default Header
