class Desk{
    constructor(){
        this.userName = "desk"
    }
    run(that){
        console.log(that===this,this.userName);// box
    }
}
class Box extends Desk{
    constructor(){
        super()
        this.userName = 'box';
    }
    run(){
        super.run(this);
    }
}
const obj = new Box();
console.log(obj.userName);
obj.run();