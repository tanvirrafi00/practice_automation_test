import { When, Then, Given } from "@wdio/cucumber-framework";
import { assert } from "chai";
import ShopPage from "../page-objects/ShopPage.js";

Then(/^I should be on the shop page$/, async () => {
  assert.isTrue(await ShopPage.isPageOpened(), "shop page is opened");
});

When(/^I click on the home menu$/, async () => {
  await ShopPage.clickOnHomeLink();
});
