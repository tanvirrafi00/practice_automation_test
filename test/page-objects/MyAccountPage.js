import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
class MyAccountPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Dashboard`)), "My account page");
    this.username = new Label(`//div[@class="woocommerce-MyAccount-content"]/p[1]`, "user name ");
  }

  async getUserName() {
    return await this.username.getText();
  }
}

export default new MyAccountPage();
