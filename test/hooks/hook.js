import { Before } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
Before({ tagExpression: "@check-out" }, async () => {
  await Browser.clearCookies();
});
