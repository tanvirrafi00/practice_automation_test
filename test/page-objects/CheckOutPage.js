import { Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class CheckOutPage extends BasePage {
  constructor() {
    super(new Label(`//table[@class="shop_table shop_table_responsive cart"]`), "Check out page");
    this.couponCodeField = new Input(`//input[@id="coupon_code"]`, "Coupon code field");
    this.applyCouponButton = new Input(`//input[@name="apply_coupon"]`, "Apply coupon button");
    this.couponAddedMessage = new Label(`//div[@class="woocommerce-message"]`, "Coupon added message");
    this.couponAmmount = new Label(`//td[@data-title='Coupon: krishnasakinala']`, "coupon ammount");
  }

  async addCoupon(coupon) {
    await this.couponCodeField.typeText(coupon);
  }

  async clickOnApplyCoupon() {
    await this.applyCouponButton.click();
  }

  async getCouponAddedMessage() {
    return await this.couponAddedMessage.getText();
  }

  async getCouponAmmount() {
    return await this.couponAmmount.getText();
  }
}

export default new CheckOutPage();
