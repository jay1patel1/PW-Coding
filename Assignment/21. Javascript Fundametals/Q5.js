// Shipping application

class Courier {
    constructor(weight,distance,name,type,receiveDate) {
        this.weigth = weight;
        this.distance = distance;
        this.name = name;
        this.time = type;
        this.cost = ((this.costDelta(type))*(distance*0.5)*(weight*0.8));
        this.deliveryDate = this.dateCalculation(receiveDate,this.deliveryDateDelta,type);
        this.message = `Hello ${this.name}, your ${this.time} courier will be delivered on ${this.deliveryDate}. You have paid ₹${this.cost}`
    }

    costDelta (type) {
        switch (type) {
            case "Overnight":
                return 3;
            break;
            case "Express":
                return 2;
            break;
            default:
                return 1;
            break;
        }
    }

    deliveryDateDelta (type) {
        switch (type) {
            case "Overnight":
                return 1;
                break;
            case "Express":
                return 2;
                break;
            default:
                return 3;
                break;
        }
    }

    dateCalculation (date,fnToAddDate,type) {
        const dt = fnToAddDate(type);

        function addDaysToTimestamp(timestamp, daysToAdd) {
            const millisecondsInADay = 24 * 60 * 60 * 1000;
            const newTimestamp = timestamp + (daysToAdd * millisecondsInADay);
            return new Date(newTimestamp);
        }

        let dvDate = addDaysToTimestamp(date, dt);
        return `${dvDate.getDate()}/${dvDate.getMonth()+1}/${dvDate.getFullYear()}`;
    }

}

let courier1 = new Courier(1,200,"Jay Patel","Express",1673883900000);
console.log(courier1.message);
// Hello Jay Patel, your Express courier will be delivered on 18/1/2023. You have paid ₹160
let courier2 = new Courier(0.5,500,"Yogesh Prajapati","Overnight",1674796200000);
console.log(courier2.message);
// Hello Yogesh Prajapati, your Overnight courier will be delivered on 28/1/2023. You have paid ₹300
let courier3 = new Courier(4,500,"Priya Vaidh","Overnight",1675038300000);
console.log(courier3.message);
// Hello Priya Vaidh, your Overnight courier will be delivered on 31/1/2023. You have paid ₹2400
let courier4 = new Courier(4,500,"Mishti Patel","Standard",1675038300000);
console.log(courier4.message);
// Hello Mishti Patel, your Standard courier will be delivered on 2/2/2023. You have paid ₹800