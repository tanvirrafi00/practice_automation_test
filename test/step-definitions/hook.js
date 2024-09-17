import { Before } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
Before({ tagExpression: "@check-out" }, async () => {
  console.log("i am running...................");
  await Browser.clearCookies();
});
