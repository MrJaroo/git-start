function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`
    document.querySelector(d).innerHTML = b;
}

myAlert('misha', 'red', '.test');
myAlert('Nicolay', 'orange', '.test2')

class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`
    }
}

class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon
    }
    showIconAlert(){
        
    }
}

let m = new Alert('Hello world', 'red', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('My message','red','.test');