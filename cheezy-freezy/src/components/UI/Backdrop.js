import classes from "./Backdrop.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
const Backdrop = () => {
    const disptach = useDispatch()
    
    function closeCartHandler(){
        disptach(cartActions.closeCart())
    }
    return(
        <div className={classes.backdrop} onClick={closeCartHandler}></div>
    )
}

export default Backdrop;