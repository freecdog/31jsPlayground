describe('jApp', function() {

    describe('Phone list view', function() {

        beforeEach(function() {
            browser.get('ang1');
        });

        var elemList = element.all(by.repeater('elem in jElements'));
        var query = element(by.model('jQuery'));

        it('should filter the phone list as user types into the search box', function() {
            expect(elemList.count()).toBe(3);

            query.sendKeys('q');
            expect(elemList.count()).toBe(1);

            query.clear();
            query.sendKeys('s');
            expect(elemList.count()).toBe(2);
        });

        it('should display the current filter value in the title bar', function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/ang1\s*$/);

            //query.sendKeys('nexus');
            //expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });
    });
});