import MenuItemCard from "../UI/MenuItemCard";
import classes from "./MenuItem.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import { cartdataActions } from "../../store/cartdata-slice";
import { useDispatch } from "react-redux";

function MenuItem(props) {
  const price = `Rs.${props.price}`;
  const [itemQty, setItemQty] = useState(0);

  const disptach = useDispatch();

  const amount = parseInt(props.price) * parseInt(itemQty);

  function submitHandler(event) {
    event.preventDefault();
    console.log("add item");
    console.log(itemQty);
    disptach(
      cartdataActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: parseInt(itemQty),
        amount: amount,
      })
    );
    setItemQty(0);
  }

  function changeHandler(event) {
    setItemQty(event.target.value);
  }

  const imagePath = "/images/img" + props.id + ".jpg";
  return (
    <section className={classes['menu-section']}>
      <div className={classes["img-container"]} >
        <img src={imagePath} alt={props.name} className={classes.img}/>
      </div>
      <li className={classes.item} key={props.id}>
        <h3>{props.name}</h3>
        <p>{price}</p>
        <p className={classes.description}>{props.description}</p>
      </li>
      <form className={classes.form} onSubmit={submitHandler}>
        <Button>Add to Cart</Button>
        <input
          className={classes.input}
          type="number"
          value={itemQty}
          step="1"
          min="1"
          max="5"
          onChange={changeHandler}
        />
      </form>
    </section>
  );
}

export default MenuItem;
