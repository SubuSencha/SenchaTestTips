describe("Simplecombobox", function() {
    
    it("should check if combobox generates the correct value", function() {
    
        ST.comboBox('combo[reference="states"]')//locate the combobox
            .expand()//wait for the list to be available
            .element('boundlist => [data-recordindex="1"]')//select using data record index
            .click();//click on the desired value
    
        ST.field('displayfield[fieldLabel=\"Selected State\"]')
            .value("Alaska");//check if the data displayed value is as expected

    });

});