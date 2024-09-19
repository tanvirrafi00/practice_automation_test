import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
import { use } from "chai";
class LoginRegisterPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Login`)), "Login/Register Page");
    this.usernameField = new Input(`//input[@id="username"]`, "username field");
    this.passwordField = new Input(`//input[@id="password"]`, "Password field");
    this.LoginButton = new Button(`//input[@name="login"]`, "Login Button");
    this.errorMessage = new Label(`//ul[@class="woocommerce-error"]//li`, "Error message");
  }

  async setusername(username) {
    await this.usernameField.typeText(username);
  }

  async setPassword(password) {
    await this.passwordField.typeSecret(password);
  }

  async clickOnLoginButton() {
    await this.LoginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.getText();
  }
}

export default new LoginRegisterPage();
