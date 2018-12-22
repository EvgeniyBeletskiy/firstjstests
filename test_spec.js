describe ('Input in search area and click on first link', function() {
    it ("input something in search area", function () {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-search-q")).sendKeys("sport");
    })

    it ("click on first link", function () {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-nav-links li.orb-nav-home > a")).click();
    })
})