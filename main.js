console.log ("Traveler")



class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true
    }
    hunt () {
       this.food +=2;
    }   
    eat () {
    //    this.food -= 1; 
       if (this.food === 0){
           this.isHealthy = false;

       } else {
           this.food -= 1;
       }
    }   
}


class Wagon {
    constructor (capacity){
        this.capacity= capacity;
        this.passangers = [];
    }

getAvailableSeatCount(){

    return this.capacity - this.passangers.length;
}


join(traveler) {
if (this.passangers.length < this.capacity){
    this.passangers.push (traveler);
    }
}
shouldQuarantine(){
for (let i= 0; i < this.passangers.length; i++){
    
if (this.passangers[i].isHealthy === false){
return true;
} 
}
    
  return false;
}
totalFood() {
    let total = 0;
    for (let i= 0; i < this.passangers.length; i++){
        total += this.passangers[i].food; 
    }
    return total; 
    }
}