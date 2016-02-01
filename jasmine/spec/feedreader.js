/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
        it('have a URL and the URL is not empty', function() {
            //creates loop through allFeeds
            allFeeds.forEach(function(allFeeds) {
                //ensures URL is defined
                expect(allFeeds.url).toBeDefined();
                //ensures the URL is not empty
                expect(allFeeds.url.length).not.toBe(0);
            });
            
        });

      
        it('have a name and the name is not empty', function() {
            //creates loop through allFeeds
            allFeeds.forEach(function(allFeeds) {
                //ensures name is defined
                expect(allFeeds.name).toBeDefined();
                //ensures the name is not empty
                expect(allFeeds.name.length).not.toBe(0);
            });
        });
    });


    
    describe('The menu', function() {


        
        it('is hidden by default', function(){
            //ensures the body has a class of menu-hidden, and that it is the default
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        

        it('changes visibility when the menu icon is clicked', function() {
            //when the menu is clicked, checks that the menu is displayed
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //when the menu is clicked again, checks that the menu is hidden again
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
   

    describe('Initial Entries', function() {


        //ensures loadFeed is done
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has at least one feed', function(done) {
            //ensures the length of feed and entry is more that 0 and that loadFeed is done first
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
   

    describe('New Feed Selection', function () {



        var firstFeed;
        var secondFeed;

        //ensures loadFeed is done and stores the contents of the first two feeds
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                    done ();
                });
            });
        });
        //ensures the first feed is different from the second feed
        it('changes feed content', function() {
            expect(firstFeed).not.toBe(secondFeed);
            
        });
    });
}());
