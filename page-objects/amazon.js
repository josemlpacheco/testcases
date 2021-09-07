let xpathSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: 'xpath'
    }
};
module.exports = {
    url: 'http://www.amazon.com',
    elements: {
        btnSignin: {
            selector: '#nav-link-accountList',
        },
        btnStartHere: xpathSelector('//a[contains(text(),"Start here.")]'),
        titleAccount: xpathSelector('//h1[contains(text(),"Create account")]'),
        inputEmail: {
            selector: '#ap_email'
        },
        inputName: {
            selector: '#ap_customer_name'
        },
        linkConditionsOfUse: xpathSelector('//a[text()="Conditions of Use"]'),
        barSearch: {
            selector: '#helpsearch'
        },
        result: xpathSelector('(//h2//a[@class="a-link-normal"])[1]'),
        linkEchoSupport: xpathSelector('//a[contains(text(),"Echo Support")]'),
        linkGettingStarted: xpathSelector('//h3[text()="Getting Started"]'),
        linkWifiAndBlue: xpathSelector('//h3[text()="Wi-Fi and Bluetooth"]'),
        linkDevSoftHard: xpathSelector('//h3[text()="Device Software and Hardware"]'),
        linkTroubleshooting: xpathSelector('//h3[text()="Troubleshooting"]'),
        linkLearnMore: xpathSelector('//h3[text()="Learn More"]')
    }
}