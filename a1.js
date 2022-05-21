
/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Precious Marie E. Malinnag Student ID: 147010219 Date: May 20, 2022
*
********************************************************************************/ 

console.log("Hello World")

//variable 1
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
console.log(serverVerbs) //print the array in variable 1
console.log(serverVerbs[0])
console.log(serverVerbs[1])
console.log(serverVerbs[2])
console.log(serverVerbs[3])
console.log(serverVerbs[4])
console.log(serverVerbs[5])

//variable 2
var serverPaths = [ "/", "/about", "/contact", "/login", "/panel", "/logout"]
console.log(serverPaths) //print the array in variable 2
console.log(serverPaths[0])
console.log(serverPaths[1])
console.log(serverPaths[2])
console.log(serverPaths[3])
console.log(serverPaths[4])
console.log(serverPaths[5])

//variable 3
var serverResponse = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Precious Marie Malinnag", 
"Student Name: Precious Marie Malinnag Student Email: pmalinnag@myseneca.ca", "User Looged In", "Main Panel", "Logout Complete"]
console.log(serverResponse) //print the array in variable 3
console.log(serverResponse[0])
console.log(serverResponse[1])
console.log(serverResponse[2])
console.log(serverResponse[3])
console.log(serverResponse[4])
console.log(serverResponse[5])

// The web server simulator function, 
function httpRequest(httpVerb,path){ 
    var httpVerb = serverVerbs();
    var path = serverPaths();
    if (httpVerb in serverVerbs(), path in serverPaths()){ //condition 1, parameters can be found in array
        console.log(serverVerbs)
        console.log(serverPaths)
        console.log("200 : OK!")}
    elif (httpVerb != serverVerbs.indexOf(), path != serverPaths.indexOf())
    {//condition 2, if there is a mismatch, print an error prompt
        console.log("404: Unable to process httpVerb request for path")
    } //Hi Professor, I am a bit lost with how to implement the conditions with the parameter index match checking
}

