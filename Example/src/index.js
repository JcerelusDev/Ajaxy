var ajax =  getfile("src/00000info.json","text");

function output(data){

 data = JSON.parse(data)
for(dat of data.cars){
document.write(" Brand : "+dat.brand+"<br>" +" Year : "+dat.year+ "<br>"+" Speed : "+dat.speed +"<br><br><br>")
}





}
