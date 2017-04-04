describe("Tip2", function() {

var page = {
    
    menuemail: function() {
        return ST.component('treelistitem[text=Email]');
    },
    composemenu: function() {
        return ST.component('menuitem[text=Compose]');
    },
    subjecttextfield: function() {
        return ST.component('textfield[fieldLabel=Subject]');
    },
    discardbutton: function() {
        return ST.component('button[text=Discard]');
    },
    savebutton: function() {
        return ST.component('button[text=Save]');
    },
    sendbutton: function() {
        return ST.component('button[text=Send]');
    }
    
};

    it("should pass", function() {
        //Click on the email list item
        page.menuemail()
        .click();
        //Click on the compose menu item
        page.composemenu()
        .click();
        //Enter a value in the text field
        page.subjecttextfield()
        .focus()
        .type("hello");
        //Check if discard, save and send buttons are visible on this page
        page.discardbutton().visible();
        page.savebutton().enabled();
        page.sendbutton().enabled();
        //Click on the discard button
        page.discardbutton().click();
    });
});