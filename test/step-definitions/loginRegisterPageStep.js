import { Then, When } from "@wdio/cucumber-framework";
import LoginRegisterPage from "../page-objects/LoginRegisterPage.js";
import { assert, use } from "chai";

Then(/^I should be on login-register page$/, async () => {
  assert.isTrue(await LoginRegisterPage.isPageOpened());
});

When(/^I type (.*) in the username field$/, async (username) => {
  await LoginRegisterPage.setusername(username);
});

When(/^I type (.*) in the password field$/, async (password) => {
  await LoginRegisterPage.setPassword(password);
});

When(/^I click on the login button$/, async () => {
  await LoginRegisterPage.clickOnLoginButton();
});

Then(/^I should see this (.*)$/, async (message) => {
  assert.include(await LoginRegisterPage.getErrorMessage(), message, "error message is not matching with the actual message");
});
