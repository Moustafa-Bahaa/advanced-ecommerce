import { useDispatch, useSelector } from "react-redux"
import "../../styles/shared.css"
import { removeFromCart, handleIncrement, handleDecrement } from "../../redux/productSlice";
import { Button } from "primereact/button";

const CartItems = (props) => {

  const getSpecificData = (state) => state.cart;
  const products = useSelector(getSpecificData)

  let total = 0;
  products.cartItems.forEach((item) => {
    total += item.totalPrice
  })

  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleInc = (id) => {
    dispatch(handleIncrement(id))
  }

  const handleDec = (id) => {
    dispatch(handleDecrement(id))
  }

  return (
    <div className='mobiles'>
      <div className="contain">
        {products.cartItems.map((product) => (

          <div className="card-container" key={product.id}>
            <div className="card-products">
              <div className="card-product">
                <img src={product.image} width="250px" height="250px" alt="" />
                <div className="card-content">
                  <h3><a href="#">{product.name}</a></h3>
                  <span><a href="#">{product.price}$</a></span>
                </div>
                <div className="info">
                  <div className="delete-product">
                    <Button onClick={() => handleRemoveFromCart(product.id)} tooltip="Remove From Cart" severity="warning" tooltipOptions={{ position: 'bottom' }}>Remove</Button>
                  </div>
                  <div className="quantity">
                    <i className="fa fa-minus-circle" aria-hidden="true" onClick={() => handleDec(product.id)}></i>
                    <div>  {product.quantity}</div>
                    <i className="fa fa-plus-circle" aria-hidden="true" onClick={() => handleInc(product.id)} ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="total">
        <button>
          <span className=''>Total Price : </span>
          <label >{total} $</label>
        </button>
      </div>

    </div>
  )
}

export default CartItems
