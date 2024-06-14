import { useLocation } from "react-router-dom";
import Comment1 from "../components/Comment1";

const Layout = () => {

    const location = useLocation()

    console.log(location);

    return (
        <div>
            <Comment1/>
            <h1>dasa</h1>
        </div>
    );
}

export default Layout;
