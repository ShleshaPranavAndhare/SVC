class Form1{
    constructor(){
        this.greeting=createElement('h2');
        this.title=createElement('h2');
        this.button12=createButton("Next");
    }

    hide(){
        this.button12.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Health Care App");
        this.greeting.html("Welcome to Health Care App");
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.title.position(displayWidth/3+200, 120);
        this.button12.position(displayWidth-850, displayHeight/2-120);

        this.button12.mousePressed(()=>{
            form2=new Form2();
            form2.display();
            this.button12.hide();
            this.greeting.hide();
        });
    }


}