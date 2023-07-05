import classes from "./Header.module.css"

function Header(){
    return(
        <header className={classes.header}>            
            <h1 className={classes.heading}><span className={classes.headtext}>Cheezy Freezy</span></h1>
        </header>
    )
}

export default Header;