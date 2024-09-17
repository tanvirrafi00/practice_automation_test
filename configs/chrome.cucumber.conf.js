import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
  ...mainConfig,
  ...{
    framework: "cucumber",
    cucumberOpts: {
      require: ["./test/step-definitions/**/*.js"],
      tagExpression: "",
    },
    specs: ["../test/features/**/*.feature"],
    capabilities: [
      {
        browserName: "chrome",
        "goog:chromeOptions": {
          prefs: {
            "download.default_directory": downloadDir,
          },
        },
      },
    ],
  },
};
