var result = document.querySelector("#result");

var url ="src/info.json";

var ajax = new Ajaxy(url,"text")

ajax.output = function(resp){
 datas = JSON.parse(resp)
for(data of datas.cars){
result.innerHTML += " Brand : "+data.brand+"<br>" +" Year : "+data.year+ "<br>"+" Speed : "+data.speed +"<br><br>"

}


}
