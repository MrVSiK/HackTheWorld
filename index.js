var xmlhttp = new XMLHttpRequest();
var myObj;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/HackTheWorld/data.json", true);
xmlhttp.send();
document.getElementById('Json').innerHTML=obj[Sheet1][0].name;
