import { Page } from "../../components";
import imageToAdd from "./gif.gif.gif";

import "./404.style.scss";
function Error() {

    return( 
    <Page>
        <h1> 404 Error: Not Found </h1>
        <img src={imageToAdd} alt="loading..." />
    </Page>);
}

export default Error;