let Book={
    title:"The Mountain",
    author:"Jenna",
    year:2013,
    isAvailable:true,
borrow:()=>{
    if(this.isAvailable===true){
     console.log("The Book is Available")
    }else{
        console.log("The Book is't Available")
    }
},
    puplisher:{
        name:"Rana",
        location:{
city:"Riyadh",
country:"KSA"
        }
    }
}
console.log(Book.borrow())
console.log(Book)
console.log(Book.title)
console.log(Book.puplisher)
console.log(Book.puplisher.location.city)
delete Book.author
console.log(Book)
Book.year=2025
console.log(Book)