const axios = require('axios')
const fs = require('fs')
const handlebars = require('handlebars')
const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
//var json_data;
axios.get(url).then(function(response,data) 
//	console.log(data);
{
	//console.log(response.data)
	fs.writeFile('C:\\manoj\\intern\\weatherdata.json',JSON.stringify(response.data),function(err) {})
});
  const json_data = fs.readFileSync('C:\\manoj\\intern\\weatherdata.json', 
            {encoding:'utf8', flag:'r'}); 
  var source = fs.readFileSync('C:\\manoj\\intern\\weatherdata_template.html', 
          {encoding:'utf8', flag:'r'}); 
      //var source1 = $("#weatherdata_template").html();
      //var templateText = $("#tableTemplate").html();
    var tableTemplate = handlebars.compile(source);
    const result = tableTemplate(JSON.parse(json_data))
  //  const html_result=result.html;
    //console.log(html_result)

    fs.writeFileSync('C:\\manoj\\intern\\weatherdata_report.html',result)

    //var json_parsed = JSON.parse(json_data)
    //console.log(json_parsed.weather)
  //  console.log(tableTemplate)
    //var html = templateScript(json_data);
    //var html = tableTemplate(json_data);
//    $('body').append(tableTemplate(json_data));
    //console.log(html);
    //$("#content").html(html);
  //  console.log(json_data.name);
    // Display the file content 
    //json_data = data 

//var weather_data = document.getElementByID('weatherdata').innerHTML;

