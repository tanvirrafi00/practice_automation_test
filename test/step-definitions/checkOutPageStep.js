import { Given, When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import checkOutPage from "../page-objects/CheckOutPage.js";
import data from "../../test data/data.json" assert { type: "json" };
import message from "../../test data/message.json" assert { type: "json" };
import CheckOutPage from "../page-objects/CheckOutPage.js";

Then(/^I should be on the check out page$/, async () => {
  assert.isTrue(await checkOutPage.isPageOpened());
});

When(/^I enter Coupon code in coupon code field$/, async () => {
  await CheckOutPage.addCoupon(data.coupon);
});

When(/^I click on the apply coupon button$/, async () => {
  await checkOutPage.clickOnApplyCoupon();
});

Then(/^I should see coupon code added message$/, async () => {
  assert.include(await checkOutPage.getCouponAddedMessage(), message.couponCodeAdded, "Coupon code added message not showing or not matching");
});

Then(/^I should see "(.*)" basket totals table$/, async (couponAmmountMessage) => {
  assert.include(await checkOutPage.getCouponAmmount(), couponAmmountMessage, "Coupon ammount message not showing in the basket table");
});

When(/^I click on the remove icon$/, async () => {
  await checkOutPage.clickOnRemoveLink();
});

Then(/^I should see remove message on the message box$/, async () => {
  assert.include(await checkOutPage.getRemoveItemMessage(), `${message.remove}`);
});
