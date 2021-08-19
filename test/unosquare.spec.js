var expect = require('chai').expect;

module.exports = {
    'Unosquare test case': function (browser) {
        let unosquare = browser.page.unosquare();
        let expectedNavElements = ['Careers', 'services', 'practice areas', 'industries', 'our dna', 'articles & events', 'about', 'blog'];
       
        function testNavElements(elements) {
          elements.value.forEach(function (element, index) {
            browser.elementIdText(element.ELEMENT, function(res) {
              expect(res.value).to.equal(expectedNavElements[index]);
            });
          });
        }
        unosquare.navigate();
        browser.elements('css selector', "#navbarSupportedContent > .nav-link", testNavElements);
        unosquare.useXpath().click("//a[@href='/Services']");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('AGILE SOFTWARE DEVELOPMENT');
        unosquare.useXpath().click("//a[@href='/PracticeAreas']");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('PARTNER WITH EXPERIENCED SOFTWARE DEVELOPMENT EXPERTS');
        unosquare.useXpath().click("//a[@href='/Industries']");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('OUR EXPERTISE');
        unosquare.expect.elements("a[href = '/Industries/Bfsi']").count.to.equal(3);
        unosquare.moveToElement('//*[@class="row"]',10,10).assert.visible('//*[@class="row"]');
        unosquare.useXpath().click("(//a[@class='link-blue'])[1]");
        unosquare.expect.element('//*[@class="header-title"]').text.to.contain('BANKING, FINANCIAL SERVICES AND INSURANCE');
        unosquare.useXpath().click("(//a[text()='Industries'])[2]");
        unosquare.useXpath().click("(//a[@class='link-blue'])[2]");
        unosquare.expect.element('//*[@class="header-title"]').text.to.contain('BIOTECH, MOLECULAR DIAGNOSTICS, & MEDICAL DEVICES');
        unosquare.useXpath().click("(//a[text()='Industries'])[2]");
        unosquare.useXpath().click("(//a[@class='link-blue'])[3]");
        unosquare.expect.element('//*[@class="header-title"]').text.to.contain('SHAPING THE FUTURE BY PARTNERING WITH INNOVATIVE TECH COMPANIES');
        unosquare.useXpath().click("(//a[@class='nav-link link-blue'])[1]");
        unosquare.setValue("//input[@name='name']",'Jose');
        unosquare.setValue("//input[@name='email']",'jose.pacheco@unosquare.com');
        unosquare.setValue("//input[@name='company']",'Unosquare');
        unosquare.setValue("//input[@name='phone']",'2381808326');
        unosquare.setValue("//textarea[@name='message']",'This is a test message');
        unosquare.pause(1000);
    }
}