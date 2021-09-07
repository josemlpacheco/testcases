module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },
    'Search Xbox': function (browser) {
        let searchXbox = browser.page.searchXbox();
        searchXbox.navigate()
            .assert.visible('@btnSearch')
            .click('@btnSearch')
            .assert.visible('@inputSearch')
            .setValue('@inputSearch','xbox series x')
            .click('@firstOption')
            .assert.urlContains('https://www.xbox.com/en-US/consoles/xbox-series-x')
        // browser
        //     .url("https://www.microsoft.com/en-us/")
        //     .assert.visible("#search")
        //     .click('#search')
        //     .assert.visible("#cli_shellHeaderSearchInput")
        //     .setValue("#cli_shellHeaderSearchInput","xbox series x")
        //     .useXpath().click("//a[@href='//www.microsoft.com/en-us/store/p/xbox-series-x/8wj714n3rbtl']")
        //     .assert.urlContains("https://www.xbox.com/en-US/consoles/xbox-series-x");
    },
    'Verify information': function(browser) {
        let verifyInf = browser.page.verifyInformation();
        verifyInf
            .assert.not.visible('@overviewItem',results => {
                if(results.value) {
                    verifyInf
                        .click('@menuBtn')
                        .assert.visible('@overviewItem')
                        .assert.visible('@gamesItem')
                        .assert.visible('@specsItem')
                        .assert.visible('@galleryItem')
                        .assert.visible('@unboxItem')

                }
            })
            .click('@availabilityBtn')
            .click('@firstImg')
            .click('@secondImg')
            .click('@thirdImg')
            .click('@fourthImg');

        // browser
        //     .assert.not.visible("//a[@href='#overview']",results => {
        //         if (results.value ) {
        //             browser.useXpath().click("//button[@data-bi-name='xbox series x']")
        //             .assert.visible("//a[@href='#overview']")
        //             .assert.visible("//a[@href='#games']")
        //             .assert.visible("//a[@href='#specs']")
        //             .assert.visible("//a[@href='#gallery']")
        //             .assert.visible("//a[@href='#galleryunbox']");
        //         }
        //     })
        //     .useXpath().click("//button[@data-cta-href='#purchase']")
        //     .useXpath().click("(//img[@class='c-image'])[2]")
        //     .useXpath().click("(//img[@class='c-image'])[3]")
        //     .useXpath().click("(//img[@class='c-image'])[4]")
        //     .useXpath().click("(//img[@class='c-image'])[5]");
    }
}