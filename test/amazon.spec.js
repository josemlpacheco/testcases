module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },
    'Sign up Amazon': function (browser) {
        let amazon = browser.page.amazon();
        let apiUrl = 'http://dummy.restapiexample.com/api/v1/employee/1';
        amazon
        .navigate()
        .moveToElement('@btnSignin', 10, 10)
        .click('@btnStartHere')
        .assert.visible('@titleAccount')
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            amazon
            .assert.equal(response.statusCode, '200')
            .assert.equal(data.data.employee_name, 'Tiger Nixon')
            .setValue('@inputName',data.data.employee_name)
            .setValue('@inputEmail','Firstname.Lastname@fake.com')
        })
         .click('@linkConditionsOfUse')
         .assert.visible('@barSearch')
         .setValue('@barSearch', ['Echo support', browser.Keys.ENTER])
         .click('@linkEchoSupport')
         .assert.visible('@linkGettingStarted')
         .assert.visible('@linkWifiAndBlue')
         .assert.visible('@linkDevSoftHard')
         .assert.visible('@linkTroubleshooting')
         .assert.visible('@linkLearnMore');
    }
}