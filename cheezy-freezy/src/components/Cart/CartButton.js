import classes from "./CartButton.module.css";
import Button from "../UI/Button";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const dispatch = useDispatch();

  function cartOpenHandler() {
    dispatch(cartActions.openCart());
  }

  const cartQty = useSelector((state) => state.cartdata.totalQuantity);

  return (
    <div onClick={cartOpenHandler}>
      <span className={classes.cart}>Cart</span>
      <span className={classes.qty}>{cartQty}</span>
    </div>
  );
};

export default CartButton;
