describe("customHello", function() {
    var hello;
    //Create the hello world panel with the button using the alias defined in the source code
    beforeEach(function(){
        hello = Ext.create('widget.binding-hello-world', {
        width: 600,
        height: 800,
        renderTo:Ext.getBody() //renders on the page
        });
    });
    afterEach(function(){
        Ext.destroy(hello);    
    });
    
    it("should say hello world", function () {
        ST.component('title').text("Hello World");//checks if the title has the text Hello World
    });
        it("button should be enabled", function () {
        ST.button('button[text=A button]').enabled(); //verifies if the button is enabled
    });
        it("user should be able to click", function () {
        ST.button('button[text=A button]').click();//clicks on the button
    });
});