const { When, Then, After } = require('@cucumber/cucumber');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

When('go to {string}', { timeout: 10 * 5000 }, async function (string) {
    const binary = new firefox.Binary();
    binary.addArguments("--headless");    
    this.driver = new Builder().forBrowser('firefox')
                               .setFirefoxOptions(new firefox.Options().setBinary(binary))
                               .build();
    await this.driver.get('https://www.google.com/ncr');
});
       
When('search for {string}', async function (string) {
    await this.driver.findElement(By.name('q')).sendKeys(string, Key.RETURN);
});

Then('the page title will become {string}', async function (string) {
    await this.driver.wait(until.titleIs(string), 5000);
    let title = await this.driver.getTitle();
    assert.equal(title, string);
});

After(async function() {
    await this.driver.close();
});
