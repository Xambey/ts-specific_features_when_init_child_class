class Base {
    key: string;
    constructor(props?: Partial<Base>) {
        console.log('Base')
        console.log(this);
        if(props) {
            console.log(props);
            Object.assign(this, props);
            console.log(this);
        }
    }
}

class Child extends Base {
    _a: string = this.key;
    get a(): string {
        return this._a;
    }
    set a(val: string) {
        this._a = val;
    }
    constructor(props?: Partial<Child>) {
        super(props);
        console.log('Child')
        console.log(this);
        if(props) {
            console.log(props);
            Object.assign(this, props);
            console.log(this);
        }
    }
}

console.log('START');

var child = new Child({  
    //a: 'targetKey',
    key: "key",
    
})

console.log(child.key)
console.log(child.a);