import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h3 className="text-2xl font-bold text-red-600">Oppss!!!</h3>
            <Link to='/'><button className="btn btn-ghost font-bold mt-6">Goo Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;