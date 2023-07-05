import classes from "./CartItem.module.css";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { cartdataActions } from "../../store/cartdata-slice";
const CartItem = (props) => {

    const dispatch = useDispatch();

    function addHandler(){
        dispatch(cartdataActions.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
            amount: props.price,
          }))

    }

    function removeHandler(){
        dispatch(cartdataActions.removeItem({id: props.id, price: props.price}))

    }

    return(
        <li className={classes["cart-item"]}>
            <p>{props.name}</p>
            <p>{`Rs.${props.price}`}</p>
            <p><button onClick={addHandler}>+</button>{props.quantity}<button onClick={removeHandler}>-</button></p>
            <p>{`Rs.${props.amount}`}</p>
        </li>
    )


}

export default CartItem;