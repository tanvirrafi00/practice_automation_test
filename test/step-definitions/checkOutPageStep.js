import { Given, When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import checkOutPage from "../page-objects/CheckOutPage.js";

Then(/^I should be on the check out page$/, async () => {
  assert.isTrue(await checkOutPage.isPageOpened());
});
