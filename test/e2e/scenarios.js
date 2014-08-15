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


        it('should be possible to control element order via the drop down select box', function() {

            var elementsColumn = element.all(by.repeater('elem in jElements').column('{{elem.name}}'));
            var query = element(by.model('jQuery'));

            function getNames() {
                return elementsColumn.map(function(elm) {
                    return elm.getText();
                });
            }

            query.sendKeys('w'); //let's narrow the dataset to make the test assertions shorter

            // ":" was moved to special block, because parser got names with ":" in the end ("Qwe:")
            expect(getNames()).toEqual([
                "Qwe",
                "Zxc"
            ]);

            element(by.model('jOrderProp')).element(by.css('option[value="date"]')).click();

            expect(getNames()).toEqual([
                "Zxc",
                "Qwe"
            ]);
        });

    });
});