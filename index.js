// Primera parte del ejercicio

function miDoors(left,rigth,back){
    return left + rigth + back;
}
console.log(miDoors(1,1,1));


// Segunda parte del ejercicio

class myCarDoors{
    constructor(doorL, doorR, doorBack){
        this.doorL = doorL;
        this.doorR = doorR;
        this.doorBack =  doorBack;
    }
        get doors(){
            return this.sumDoors();
        }

        sumDoors() {
            return this.doorL + this.doorR + this.doorBack;
        }
}

const car = new myCarDoors(2,2,1);
console.log(car.doors);
