import { When, Then, Given } from "@wdio/cucumber-framework";
import { assert } from "chai";
import ProductDescriptionPage from "../page-objects/ProductDescriptionPage.js";
import Browser from "../../framework/browser/Browser.js";
import message from "../../test data/message.json" assert { type: "json" };
Then(/^I should be on prodcut description page$/, async () => {
  assert.isTrue(await ProductDescriptionPage.isPageOpened(), "product description page is not opened");
});

Then(/^There should a basket button is visible$/, async () => {
  assert.isTrue(await ProductDescriptionPage.isAddToBasketDisplayed(), "add to basket button is not displayed");
});

When(/^I click on Description tab in prdouct description page$/, async () => {
  await ProductDescriptionPage.clickOnDescription();
});

Then(/^There should be a description regarding that book the user clicked on$/, async () => {
  assert.isTrue(await ProductDescriptionPage.isDescriptionDisplayed(), "product description is not displayed");
});

When(/^I click in review tab$/, async () => {
  await ProductDescriptionPage.clickOnReviewTab();
});

Then(/^There should be a review regarding that book the user clicked on$/, async () => {
  assert.isTrue(await ProductDescriptionPage.isReviewDetailsDisplayed(), "product review not displayed");
});

When(/^I click on the add to basket button$/, async () => {
  await ProductDescriptionPage.clickOnAddToBasketButton();
});

Then(/^i should see book added message$/, async () => {
  const bookName = await ProductDescriptionPage.getBookName();
  assert.include(await ProductDescriptionPage.getBookAddedMessage(), `“${bookName}” ${message.bookAdded}`);
});

Then(/^I should see (.*) in the menu$/, async (str) => {
  assert.include(await ProductDescriptionPage.getItemNumber(), str, "item not showing in the menu");
});

When(/^I click on the item from menu$/, async () => {
  await ProductDescriptionPage.clickOnMenuItem();
});
