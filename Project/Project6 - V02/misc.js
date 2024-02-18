class Misc {
    constructor() {
        this.array = [1,2,3];
        this.cNo = 0
    }

    netNo () {
        this.cNo += 1;
    }

    get aNo() {
        return this.array[this.cNo]
    }
}

let a = new Misc ();
console.log(a)
console.log(a.aNo)
a.netNo()
console.log(a)
console.log(a.aNo)