let xpathSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: 'xpath'
    }
};
module.exports = {
    elements: {
        overviewItem: xpathSelector('//a[@href="#overview"]'),
        gamesItem: xpathSelector('//a[@href="#games"]'),
        specsItem: xpathSelector('//a[@href="#specs"]'),
        galleryItem: xpathSelector('//a[@href="#gallery"]'),
        unboxItem: xpathSelector('//a[@href="#galleryunbox"]'),
        inputSearch: {
            selector: '#cli_shellHeaderSearchInput'
        },
        firstOption: xpathSelector('//a[@href="//www.microsoft.com/en-us/store/p/xbox-series-x/8wj714n3rbtl"]'),
        menuBtn: xpathSelector('//button[@data-bi-name="xbox series x"]'),
        availabilityBtn: xpathSelector('//button[@data-cta-href="#purchase"]'),
        firstImg: xpathSelector('(//img[@class="c-image"])[2]'),
        secondImg: xpathSelector('(//img[@class="c-image"])[3]'),
        thirdImg: xpathSelector('(//img[@class="c-image"])[4]'),
        fourthImg: xpathSelector('(//img[@class="c-image"])[5]'),
    }
}