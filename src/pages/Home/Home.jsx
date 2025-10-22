import { useState } from 'react';
import Header from '../../component/Header/Header';
import Menu from '../../component/Menu/Menu';
import Navber from '../../component/Navber/Navber';
import './Home.css'
import FoodDisplay from '../../StoreContext/FoodDisplay/FoodDisplay';
import Footer from '../../component/Footer/Footer';

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
             <Header></Header>
             <Menu category ={category} setCategory={setCategory}></Menu>
             <FoodDisplay category={category}></FoodDisplay>
             {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;