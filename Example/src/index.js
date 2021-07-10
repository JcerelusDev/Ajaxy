ajaxy("src/info.json","text");

function output(resp){
  data = JSON.parse(resp)
  for(data of datas.cars){
     document.write(" Brand : "+data.brand+"<br>" +" Year : "+data.year+ "<br>"+" Speed : "+data.speed +"<br><br><br>")
  }

}
