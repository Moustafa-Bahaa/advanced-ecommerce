import { useSelector } from "react-redux";
import "../../styles/shared.css"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()
    const getSpecificData = (state) => state.cart;
    const products = useSelector(getSpecificData)


    return (

        <header>

            <div className='logo' onClick={() => navigate("/")}>
                <img src="https://static.wixstatic.com/media/440950_ed6cff3b26bf4711a6189f47a7c2e504~mv2.png/v1/fill/w_578,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Walmart%20eCommerce%20Logo%5B1%5D.png" alt="" />
            </div>

            <div className='search'>
                <input type="text" placeholder='find products you want ....' />
            </div>

            <div className='cart' onClick={() => navigate("/CartItems")}>
                <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png" alt="" />
                <span>{products.totalQuantity}</span>
            </div>

        </header>
    )
}

export default Header
