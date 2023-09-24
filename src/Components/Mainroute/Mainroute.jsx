import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Mainroute = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Mainroute;