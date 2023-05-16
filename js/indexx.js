(function invo(){
setInterval(function () {
  var box = ``
  let today = new Date();
  let timer_now=today.toLocaleTimeString()
  box+=`
  <p class="py-2 fs-4">${timer_now}</p>
  `

  document.getElementById("child_timer").innerHTML=box;

}, 1000)
})()



var count_search=document.getElementById("search")


 async function getloction(title_search){ 
  var arr=[]
    var res =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a7c0c74465b141cba24203345231802&q=${title_search}&days=7&lang=all`)
           var finalres=await res.json()
          arr.push(finalres)
          //  console.log(arr)
          display1(arr)
 }   
 getloction("cairo")
 count_search.addEventListener("input",()=>{
  getloction(count_search.value)
 })

function display1(arr){
 
    var box=` `;
    arr.forEach(item => {
         box+=`
         <div class="count mt-4 text-center border rounded-5 w-75 m-auto p-4" id="count">
         <h2>${item.location.country}</h2>
         <h2>${item.location.name} , ${item.location.region}</h2>
         <h3>${item.location.tz_id}</h3>
         <h3>lat : ${item.location.lat}<span class="text-warning fs-5">o-c</span></h3>
         <h3>temp_c : ${item.current.temp_c}<span class="text-warning fs-5">o-c</span></h3>
         <h3>temp_f : ${item.current.temp_f}<span class="text-warning fs-5">o-f</span></h3>
         <h3>${item.current.condition.text}</h3>
         <p>${item.location.localtime}</p>
     </div>
     
                  `
    })
    document.getElementById("contant_cart").innerHTML=box
}