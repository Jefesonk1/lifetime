var select = document.getElementById("days");
var array = new Array();
for(var i=1;i<=31;i++){
  array.push(i);
}
for(var i=0;i<array.length;i++){
    var option = document.createElement("OPTION");
    txt = document.createTextNode(array[i]);
    option.append(txt);
    select.insertBefore(option,select.lastChild);
}