import { initialRender } from "./initialRender";
import listener from "./listeners";

class Shop {
    init() {
        console.log("e-commerce start");
        initialRender();
        listener();
    }
}

export default Shop;