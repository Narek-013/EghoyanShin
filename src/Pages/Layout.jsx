import { useLocation } from "react-router-dom";
import Comment1 from "../components/Comment1";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";

const Layout = () => {

    const location = useLocation()

    console.log(location);

    return (
        <div>
            <NavigationMenu/>
            <Comment1/>
            <h1>dasa</h1>
        </div>
    );
}

export default Layout;
