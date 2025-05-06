
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
  ];



// 1
let title=movies.find(titleMov=>titleMov.year>2000)
if(title){
console.log(title.title)
}else{
console.log("unknown!")
}
console.log(title)
// 2
let title2=movies.find(title2Mov=>title2Mov.rating>9)
if(title2){
console.log(title2.title)
}else{
    console.log("unknown")
}
console.log(title2)
// 4
let agoMov=movies.find(moveago=>moveago.year>2010)
if(agoMov){
    console.log(agoMov.title)
}else{
    console.log("Unknown")
}
// 5
let allTitle=movies.map(tit=>tit.title)
console.log(allTitle)

// 3
let chirs=movies.filter(authou=>authou.director==="Christopher Nolan")
console.log(chirs)
// 6
let avrage=movies.reduce((sum,mov)=>sum+mov.rating,0)/movies.length
 console.log(avrage)
// 7
let sortold=movies.sort((a,b)=>a.year -b.year);
console.log(sortold)
// 8
let sortnew=movies.sort((a,b)=>b.year-a.year)
console.log(sortnew)
// 9
let moreThan=movies.every(more=>more.rating>8)
console.log(moreThan)
// 11
let puplish=movies.some(mov=>mov.year===1999)
console.log(puplish)
// 10
let sameaouthor=movies.every(mov=>mov.director===movies[0].director)
console.log(sameaouthor)
// 12
let someMov=movies.some(rate=>rate.rating<8.5)
console.log(someMov)
