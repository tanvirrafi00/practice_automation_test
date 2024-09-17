import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class ShopPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Filter by price`)), "Shop Page");

    this.homeLink = new Label(`//a[contains(text(),"Home")]`, "Home Link");
  }
  async clickOnHomeLink() {
    await this.homeLink.click();
  }
}
export default new ShopPage();
