import "./Menu.css"
import {menu_list} from '../../assets/assets'

const Menu = (category, setCategory) => {
    return (
        <div  className="menu" id="menu">
             <h1>Menu</h1>
             <p className="menu-text">Choose from a diverse menu featuring a delecteable array of dishes crafted with the finest ingredients and expertise. Our mission to satisfy your cravings and elevte your dining experence , one delicious at a time.</p>
              <div className="menu-list">
                 {
                    menu_list.map((item , index) => {
                        return(
                            <div onClick={() => setCategory(pre === item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
                                   <img className= {category === item.menu_name?"active": ""} src={item.menu_image}alt="" />
                                   <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                 }
              </div>
              <hr />
        </div>
    );
};

export default Menu;