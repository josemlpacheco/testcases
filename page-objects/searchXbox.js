let xpathSelector = function (selector) {
    return {
        selector: selector, 
        locateStrategy: 'xpath'
    }
};
module.exports = {
    url: 'https://www.microsoft.com/en-us/',
    elements: {
        btnSearch: {
            selector: '#search'
        },
        inputSearch: {
            selector: '#cli_shellHeaderSearchInput'
        },
        firstOption: xpathSelector('//a[@href="//www.microsoft.com/en-us/store/p/xbox-series-x/8wj714n3rbtl"]'),
        urlExpect: 'https://www.xbox.com/en-US/consoles/xbox-series-x'
    }
}