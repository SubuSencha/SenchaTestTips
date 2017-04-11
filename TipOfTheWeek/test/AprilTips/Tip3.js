describe("Simplecombobox", function() {
    
    it("should check if combobox generates the correct value", function() {
    
        ST.comboBox('combo[reference="states"]')
            .expand()
            .element('boundlist => [data-recordindex="1"]')
            .click();
    
        ST.field('displayfield[fieldLabel=\"Selected State\"]')
            .value("Alaska");

    });

});