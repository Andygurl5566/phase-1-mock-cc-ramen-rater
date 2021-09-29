// write your code here


// variables

let baseURL = "http://localhost:3000"
let urlResources = "http://localhost:3000/ramens"
let resourceImages = urlResources.images
let ramenMen = document.getElementById("ramen-menu")
let imgs = document.createElement("img")
let ramenDetails = document.getElementById("ramen-detail")
//let ratingBar = document.getElementById("new-rating")
let ratingBar2 = document.querySelectorAll("input")
let exactRatingBar = ratingBar2[3]

let createButton = ratingBar2[4].formTarget


// create fetch request

function fetchRequest(){
    fetch(urlResources)
    .then(response=>response.json())
    .then(function(urlResources){
    generateRamenImages(urlResources)
        
    })
}

// function that creates images

function generateRamenImages(image){
    for(let key in image ){
    document.createElement("img")

    console.log("image generated")
    return ramenMen.append("img")

    }
}



//ListnerEvents

// .addEventListener("click",function(){
//     return ramenDetails
// })

// //grab ramen form submit button


// .addEventListener("submit",function(){

// })


//fetchRequest()


// enpoints /ramens and /ramens/:id

// grab ramen-menu <--
// create img's <---
// attach api to imgs
// append img's to ramen menu

//grab form
//grab ramen detail div <---
//addlistner event click for ramen detail div
//form listner event for insert comment
//grab rating <---
//allow form event for insert rating


//grab form
//create new div for create ramen and add to #ramen-menu
//event listener submit