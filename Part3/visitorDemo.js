var carVariable = function(){
    var seats = 5;
    var doors = 4;
    this.accept = function(visitorObject){
        visitorObject.visit(this); 
    }
}
var truckVariable = function()
{
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}
var monsterTruckVariable = function()
{
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}



var CarVisitor = function()
{
    this.visit = function(carVariable)
    {
         //do some operations on carVariable
         if(carVariable.seats> 2){
             console.log('This is clearly a car for old people')
         }
         else{
             console.log('My bet is this car has at least 2 cylinders')
         }
    }
}

var TruckVisitor = function()
{
    this.visit = function(truckVariable)
    {
        //do some operations on truckVariable
        if(truckVariable.towPackage){
            console.log('We need to buy a boat.')
        }
    }
}

var MonsterTruckVisitor = function()
{
    this.visit = function(monsterTruckVariable)
    {
        //do some operations on monsterTruckVariable
        if(monsterTruckVariable.looksLikeADragon){
            console.log('This is a badass monser truck.')
        }
        else{
            console.log('Loser.')
        }
    }
}

var myCar = new carVariable(); 
myCar.seats = 2;
myCar.accept(new CarVisitor()); 
var myCar2 = new carVariable();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor()); 