let saudiaAirlines ={
    airlineName:"الخطوط الجوية السعودية",
    country:"السعودية",
    fleetSize:200,
    destenations:["نيويورك","جدة","دبي","الرياض"],
    inOperation:true,
    bookFlight:function(destenation){
        if(this.destenations.includes(destenation)){
            console.log(`تم حجز رحلة إلى ${destenation}`)
        }else{
            console.log(`عذرا لايوجد رحلات إلى ${destenation}حاليا`)
        }
    },
    addDestination: function(addnewDes) {
        if (!this.destenations.includes(addnewDes)) {
            this.destenations.push(addnewDes);
            console.log(`${addnewDes} تم إضافة وجهة جديدة !.`);
        } else {
            console.log("unknown");
        }
    },
    getSummary:()=>{
console.log("الخطوط الجوية السعودية تعمل في السعودية وتمتلك 120 طائرة وتطير إلى 20 وحهة")
    }
}
saudiaAirlines.getSummary();

saudiaAirlines.bookFlight("الرياض");
saudiaAirlines.addDestination("أبها")