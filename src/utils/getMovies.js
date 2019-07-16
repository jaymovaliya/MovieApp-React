const request = require('request');
const async = require('async');
const fs = require('fs')

const movieNames = ["Escape Room", "American Hangman", "A Dog's Way Home", "The Upside", "Replicas", "Glass", "The Final Wish", "Serenity", "Miss Bala", "What Men Want", "Cold Pursuit", "The Prodigy", "	Alita: Battle Angel", "Greta", "titanic", "Captain Marvel", "Wonder Park", "Captive State", "The Aftermath", "Hotel Mumbai", "Dumbo", "Unplanned", "Pet Sematary", "Hellboy", "Missing Link", "Little", "After", "Breakthrough"]


// Map --> returns an array
// For/ForEach/For..of --> returns nothing
// Foreach,Map --> run function inside it but not for or for..of

let moviesArr = []

let startTimer = new Date().getTime()


// movieNames type(Array) collection to iterate over
// 10 --> concurrent api calls at a same time
// func(name,moviecb) --> Function to be called for each time in array
                        //:name --> each item in array
                        //:moviecb --> Callback to pick next item from an array
                                        //Without it only pick first item from array
//func(err,results) --> Callback --> if err occurs go to err section else data section
async.mapLimit(movieNames,10, function (name, moviecb) {
    const apiKey = `ce140d45`
    const plot = `full`
    const url = `http://www.omdbapi.com/?t=${name}&apikey=${apiKey}&plot=${plot}`
    request(url, function(err, res){
        if (err) {
            moviecb(err, null)
        }
        else {
            moviesArr.push(JSON.parse(res.body))
            moviecb(null, res.body)
        }
    });
}, function(err, results){
    if (err) {
        console.log(err)
    }
    else {
        // Synchronously write a file
        // FirstItem --> Name and location of file
        // data --> data to write on file
        fs.writeFileSync('movieData.json', JSON.stringify(moviesArr))
        let endTime = new Date().getTime()
        console.log(`Time taken is ${endTime - startTimer}`)
        // Write file asynchronously
        // fs.writeFile('movieData.json',JSON.stringify(moviesArr),(err,res)=>{
        //     if(err){
        //         console.log("File Write Error",err)
        //     }
        //     else{
        //         console.log("File written sucessfully")
        //     }
        // })
    }
})
