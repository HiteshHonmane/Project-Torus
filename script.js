
console.log("js working")
//Hamburger Click Function

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".navbar").style.right = "0%"
    console.log("clicked")
 })

 //Close side navbar
 document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".navbar").style.right = "-100%"
 })