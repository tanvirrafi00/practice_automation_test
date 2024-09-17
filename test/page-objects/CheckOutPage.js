import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class CheckOutPage extends BasePage {
  constructor() {
    super(new Label(`//table[@class="shop_table shop_table_responsive cart"]`), "Check out page");
  }
}

export default new CheckOutPage();
