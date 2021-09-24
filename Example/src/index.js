var result = document.querySelector("#result");

var url ="src/info.json";

var ajax = new Ajaxy("get",url,"text")

ajax.output = function(resp){
 var datas = JSON.parse(resp)
for(var data of datas.cars){
result.innerHTML += " Brand : "+data.brand+"<br>" +" Year : "+data.year+ "<br>"+" Speed : "+data.speed +"<br><br>"

}


}
