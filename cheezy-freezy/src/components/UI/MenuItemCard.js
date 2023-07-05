import classes from "./MenuItemCard.module.css";
const MenuItemCard = (props) => {
    return(
        <div className={classes.card}>
            {props.children}
        </div>
    )
    
}

export default MenuItemCard;