function getData(){
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: 'GET',
  async: true,
  dataType: "json",
  contentType: 'application/json',
  success: function(data){ 
    var dataJson = [];
    for(var i=0; i < data.length; i++){
      dataJson.push(data[i].name);
      console.log(dataJson); 
    }
    console.log(dataJson);
    $("#location").autocomplete({
        source: dataJson,
        minLength:1
    });
 },
  error: function(error){
    console.log(error);
  }
});
}