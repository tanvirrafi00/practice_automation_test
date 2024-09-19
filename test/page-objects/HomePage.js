import BasePage from "../../framework/page/BasePage.js";
import { Button, ElementsList, Label } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
import Browser from "../../framework/browser/Browser.js";

class HomePage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`new arrivals`)), "Home Page");

    this.shopLink = new Label(`//a[contains(text(),"Shop")]`, "Shop link");
    this.myAccountLink = new Label(`//*[text()="My Account"]`, "my account link");
    this.allSliders = new ElementsList(Label, `//div[@data-gutter="gutter-default"]`, "all sliders");
    this.allArrivals = new ElementsList(Label, `//a[@class="woocommerce-LoopProduct-link"]`, "All arrivals");
    this.firstArrival = new Label(`//a[@href='https://practice.automationtesting.in/product/selenium-ruby/']`, "first arrival");
  }

  async getAllSlidersLength() {
    return (await this.allSliders.getListOfElements()).length;
  }

  async getAllArrivalsLength() {
    return (await this.allArrivals.getListOfElements()).length;
  }

  async clickOnShopMenu() {
    await this.shopLink.click();
  }

  async clickOnFirstArrivalImage() {
    await this.firstArrival.click();
  }

  async clickOnMyaccont() {
    await this.myAccountLink.state().waitForClickable();
    await this.myAccountLink.click();
  }
}

export default new HomePage();
