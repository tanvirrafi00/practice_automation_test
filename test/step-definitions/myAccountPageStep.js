import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import MyAccountPage from "../page-objects/MyAccountPage.js";

Then(/^I should see (.*) in my account page$/, async (username) => {
  console.log(username, "....................................");
  assert.include(await MyAccountPage.getUserName(), username, "User name not matched");
});
