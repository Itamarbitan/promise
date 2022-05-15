

let p1 = new Promise((resolve, reject) => {

    console.log("loading...")
    setTimeout(function(){
        let num = Math.random()
        if (num > 0.3) {
            resolve("First file loaded sucessesful")
        }
        else {reject("Error loading file")}
    },3000)

})

.then((message) => {document.getElementById("first").innerHTML = message},
(Emessage) => {document.getElementById("first").innerHTML = Emessage})

let p2 = new Promise((resolve, reject) => {

    console.log("loading...")
    setTimeout(function(){
        let num = Math.random()
        if (num > 0.3) {
            resolve("Second file loaded sucessesful")
        }
        else {reject("Error loading file")}
    },3000)

})

.then((message) => {document.getElementById("second").innerHTML = message},
(Emessage) => {document.getElementById("second").innerHTML = Emessage})

let p3 = new Promise((resolve, reject) => {

    console.log("loading...")
    setTimeout(function(){
        let num = Math.random()
        if (num > 0.3) {
            resolve("Third file loaded sucessesful")
        }
        else {reject("Error loading file")}
    },3000)

})

.then((message) => {document.getElementById("third").innerHTML = message},
(Emessage) => {document.getElementById("third").innerHTML = Emessage})


setInterval(function(){
    console.log(p1)
    console.log(p2)
    console.log(p3)
},1000)



