import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div className="max-w-screen-xl m-auto">
            <h1 className="text-6xl bg-red-500 text-white font-extrabold text-center p-5 my-10">404 ERROR</h1>
            <div className="flex justify-center items-center">
            <img  src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png" alt="error page" />
          
            </div>
            <p className="text-center text-xl font-bold mt-6 text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
            <Link to="/" className="flex justify-center items-center my-5">  <button className=" rounded-xl p-5 bg-blue-600 text-white text-xl font-bold">GO Home</button></Link>
        </div>
    );
};

export default Error;