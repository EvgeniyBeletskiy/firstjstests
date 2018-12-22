describe ('BBC tests', function() {
    it ("input something in search area", function () {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-search-q")).sendKeys("sport");
        element(by.css("#orb-search-button")).click();
        
        expect(browser.getTitle()).toEqual("BBC - Search results for sport");
    })

    it ("click on first link", function () {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-nav-links li:first-child > a")).click();
    
        expect(browser.getTitle()).toEqual("BBC - Homepage");
    })

    it ("check search field enable status", function() {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        var search = element(by.css("#orb-search-q"));
        
        expect(search.isEnabled()).toBe(true);
    })

    it ("check search field dislayed status", function() {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        var search = element(by.css("#orb-search-q"));
        
        expect(search.isDisplayed()).toBe(true);
    })    
})