import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import styles from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
const CART = [
  {
    id: 1,
    name: "pizza",
    price: 150,
    quantity: 2,
  },
  {
    id: 2,
    name: "pasta",
    price: 210,
    quantity: 1,
  },
  {
    id: 3,
    name: "ice-cream",
    price: 70,
    quantity: 5,
  },
];
const Cart = () => {
  const dispatch = useDispatch();
  function closeCartHandler() {
    dispatch(cartActions.closeCart());
  }

  const cartItems = useSelector(state=>state.cartdata.cartItems)
  
  const cartAmount = useSelector(state=>state.cartdata.totalAmount)
  return (
    <div className={classes.cart}>
      <h2>Cart</h2>
      <li className={styles["cart-item"]}>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Amount</p>
      </li>
      {cartItems.map((cartItem) => (
        <CartItem
          id={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          amount={cartItem.amount}
        />
      ))}
      <Button>Place Order</Button>
      <Button onClick={closeCartHandler}>Close Cart</Button>
      <p>Total amount: {cartAmount}</p>
    </div>
  );
};

export default Cart;
