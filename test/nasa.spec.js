let key = 'bq8kWNrNeLU8mXmmCvKJaikcH11tQMlFAkecsHyq'
module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },
    'Search APOD': function (browser) {
        let apiUrl = 'https://api.nasa.gov/planetary/apod?date=2021-09-06&api_key='+key;
        browser      
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode, '200')
            .assert.equal(data.copyright,'Anton Komlev')
        })
    },
    'Search Events': function (browser) {
        let apiUrl = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=1';
        browser       
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode, '200')
            .assert.equal(data.title,'EONET Events')
        })
    },
    'Search APOD': function (browser) {
        let apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='+key
        browser
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode, '200')
            .assert.equal(data['photos'][0].camera.full_name,'Front Hazard Avoidance Camera')
        })
    }
}