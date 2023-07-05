import MenuItem from "./MenuItem";
import classes from "./Menu.module.css"
import {useEffect, useState} from "react"
// const MENU = [
//   {
//     id: 1,
//     name: "pizza",
//     price: 150,
//   },
//   {
//     id: 2,
//     name: "pasta",
//     price: 210,
//   },
//   {
//     id: 3,
//     name: "ice-cream",
//     price: 70,
//   },
// ];


function Menu() {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
    async function getMenuData(){
        const response = await fetch('https://react-http-4d312-default-rtdb.firebaseio.com/menu.json')

        if(!response.ok){
            console.log("Could not fetch menu data ")
            return
        }
        const menuData = await response.json()
        console.log(menuData)
        const loadedMenu = []
        for(let item in menuData){
            loadedMenu.push({
                id: menuData[item].id,
                name: menuData[item].name,
                description: menuData[item].description,
                price: menuData[item].price,

            })
        }
        console.log(loadedMenu)
        setMenu(loadedMenu)
        setLoading(false)


    }
    getMenuData()
    
},[])



  return (
    <>
    <h2 className={classes["menu-heading"]}>MENU</h2>
    {loading && <p className={classes.loading}>Loading......</p>}
    {!loading && <div className={classes.menu}>
        
        {menu.map((item) => (
    
    <MenuItem id={item.id} name={item.name} price={item.price} description={item.description}/>
  ))}
    </div>}
    </>
  )
  
}


export default Menu; 