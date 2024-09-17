import { Given, When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import HomePage from "../page-objects/HomePage.js";
import ProductDescriptionPage from "../page-objects/ProductDescriptionPage.js";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";

Given(/^I am on the home page$/, async () => {
  await Browser.openUrl(mainConfig.baseUrl);
  assert.isTrue(await HomePage.isPageOpened(), "Home page is not opened");
});

When(/^I click on shop menu$/, async () => {
  await HomePage.clickOnShopMenu();
});

Then(/^I should see home page has only (\d+) sliders$/, async (count) => {
  assert.strictEqual(await HomePage.getAllSlidersLength(), count);
});

Then(/^I should see home page has only (\d+) arrivals$/, async (count) => {
  assert.strictEqual(await HomePage.getAllArrivalsLength(), count);
});

When(/^I click on the first image in the arrivals$/, async () => {
  await HomePage.clickOnFirstArrivalImage();
});
