describe("Tip1", function() {
    xit("should pass", function() {
        //Click on the email list item
        ST.component('treelistitem[text=Email]').click();
        //Click on the compose menu item
        ST.component('menuitem[text=Compose]').click();
        //Enter a value in the text field
        ST.textField('textfield[fieldLabel=Subject]')
        .click()
        .type("hello");
        //Check if discard, save and send buttons are visible on this page
        ST.button('button[text=Discard]').visible();
        ST.button('button[text=Save]').enabled();
        ST.button('button[text=Send]').enabled();
        
        //Click on the discard button
        ST.button('button[text=Discard]').click();
        
    });
});