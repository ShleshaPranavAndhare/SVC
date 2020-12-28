class Form2{
    constructor() {
        this.button0=createButton("Login as a Patient");
        this.button00=createButton("Login as a Doctor");
        this.greeting=createElement('h2');
        this.title=createElement('h2');
    }

    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
    }

    display(){
        this.title.html("Health Care App");
        this.title.position(displayWidth/3+200, 120);

        this.button0.position(displayWidth-850, displayHeight/2-120);
        this.button00.position(displayWidth-650, displayHeight/2-120);

        this.button0.mousePressed(()=>{
            form3=new Form3();
            form3.display();
            this.button0.hide();
            this.button00.hide();
        });

        //this.hour1=this.button1;

    }
}