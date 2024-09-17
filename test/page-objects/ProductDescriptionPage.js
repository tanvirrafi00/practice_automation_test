import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class ProductDescriptionPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Product Description`)), "Product description page");

    this.addToBasketButton = new Button(`//button[@class="single_add_to_cart_button button alt"]`, "add to basket button");

    this.descriptionTab = new Label(`//li[@class="description_tab"]`, "Description Tab");
    this.descriptonDetails = new Label(`//div[@id="tab-description"]`, "description details");
    this.reviewTab = new Label(`//li[@class="reviews_tab"]`, "Review tab");
    this.reviewDetails = new Label(`//div[@id="reviews"]`, "review Details");
    this.bookAddedMessage = new Label(`//div[@class="woocommerce-message"]`, "Book added message");
    this.bookName = new Label(`//h1[@class="product_title entry-title"]`, "Book Name");
    this.menuItem = new Label(`//li[@id="wpmenucartli"]`, "menu item");
    this.itemNumber = new Label(`//span[@class="cartcontents"]`, "item number from menu");
  }

  async isAddToBasketDisplayed() {
    return await this.addToBasketButton.state().isDisplayed();
  }

  async clickOnAddToBasketButton() {
    await this.addToBasketButton.click();
  }

  async clickOnDescription() {
    await this.descriptionTab.click();
  }

  async isDescriptionDisplayed() {
    await this.descriptonDetails.state().waitForDisplayed();
    return await this.descriptonDetails.state().isDisplayed();
  }
  async clickOnReviewTab() {
    await this.reviewTab.click();
  }

  async isReviewDetailsDisplayed() {
    await this.reviewDetails.state().waitForDisplayed();
    return await this.reviewDetails.state().isDisplayed();
  }

  async getBookName() {
    return await this.bookName.getText();
  }

  async getBookAddedMessage() {
    return await this.bookAddedMessage.getText();
  }

  async clickOnMenuItem() {
    await this.menuItem.click();
  }

  async getItemNumber() {
    return await this.itemNumber.getText();
  }
}

export default new ProductDescriptionPage();
