// @ts-nocheck
// feedreader.js

$(function() {
 
    // Test suite for the RSS Feeds
    describe('RSS Feeds', function() {

        // Spec 1
        // Test to check that allFeeds object is defined and
        // is not an empty array
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Spec 2
        // Test to check that all our feeds from allFeeds object
        // have url's defined, and that they are not empty strings
        it('url is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
                // if `url.length === 0` or `url === undefined`, spec will fail
            });
        });

        // Spec 3
        // Test to make sure that all our feeds from our allFeeds
        // object have defined names and that they are not empty
         it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
         });
    });


    // Test suite for the menu
    describe('The menu', function() {

        // Spec 4
        // Test to check that the menu is hidden when the site loads
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Spec 5
        // Test to check that our menu will be shown when menu
        // icon is clicked, and hidden when clicked again
        it('shows when clicked', function() {
            const menu = $('.menu-icon-link');

            menu.click(); //click to show
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.click(); // click to hide
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    // Test for Initial Entry
    describe('Initial Entries', function() {

        //Spec 6
        // Test for at least one entry to load in our page
        // For this, we have to call loadFeed() before
        // we run our test spec
        beforeEach(function(done) {
            loadFeed(0,done);
        });

        it('checks for at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // Test for New Feed Selection
    describe('New Feed Selection', function() {

        // Spec 7
        // Test to see that whenever we call loadFeed() for a new feed,
        // we get different content loaded on the page.
        
        // from https://knowledge.udacity.com/questions/1667
        
         // create 2 variables to compare
        let firstFeed, secondFeed;

        beforeEach(function(done) {
            // load first feed (index 0) and store it to the first variable
            loadFeed(0, function() {
                firstFeed = $('.entry-link').html();
                done();
                // load next feed now that the first feed recieved data from the server
                loadFeed(1,function() {
                    secondFeed = $('.entry-link').html();
                    // async call done
                    done();
                });
            });
        });
        
        it('new feed loaded',function(done) {
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });
}());
