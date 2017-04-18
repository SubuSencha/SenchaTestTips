describe("Checkbox validation", function() {
    beforeAll(function(){
        //Navigate to the checkbox kitchensink example
        ST.navigate('http://examples.sencha.com/extjs/6.2.0/examples/kitchensink/#form-checkboxgroup');
    });
    it("should select the correct checkbox", function() {
        ST.checkBox('checkbox[name=fav-animal-cat]').check(); //check the checkbox corresponding to cat
        ST.checkBox('checkbox[name=fav-animal-monkey]').uncheck();//uncheck the checkbox corresponding to monkey
        ST.checkBox('checkbox[name=fav-animal-dog]').unchecked();//verify if checkbox corresponding to dog is unchecked
        
    });
    
    it("should select checkbox for dog and verify", function() {
        ST.checkBox('checkbox[name=fav-animal-dog]').check();//check the checkbox corresponding to dog
        ST.checkBox('checkbox[name=fav-animal-dog]').checked();//verify if checkbox corresponding to dog is checked
        
    });
});