import { Before } from "@wdio/cucumber-framework";
import Browser from "../../../framework/browser/Browser.js";
Before(async () => {
  await Browser.clearCookies();
});
