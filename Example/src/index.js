var result = document.querySelector("#result");

var url ="src/info.json";

async function getCarInfo(){
var resp = await Ajaxy("get",url)
var data = await JSON.parse(resp)

data.cars.forEach(function(car){
result.innerHTML += 
car.brand +"&nbsp; &nbsp;"+car.year+"&nbsp; &nbsp;"+car.speed+"<br/>"
})

}

getCarInfo()
