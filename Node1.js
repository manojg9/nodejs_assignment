const axios = require('axios')
const fs = require('fs')
const handlebars = require('handlebars')
const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
const path = 'C:\\manoj\\intern\\'
const json_file = path + 'weatherdata.json'
const templatefile = path + 'weatherdata_template.html'
const outFile = path + 'weatherdata_report.html'


axios.get(url).then(function(response,data) 
{
 try {
 	  fs.writeFileSync(json_file,JSON.stringify(response.data),'utf8');
      const json_data = fs.readFileSync(json_file,{encoding:'utf8', flag:'r'}); 
      var source = fs.readFileSync(templatefile,{encoding:'utf8', flag:'r'}); 
      var tableTemplate = handlebars.compile(source);
      const result = tableTemplate(JSON.parse(json_data));
      fs.writeFileSync(outFile,result);
	
   }
    catch(err) { console.log(err) }

})
   .catch(function (error) {
    console.log('Error encountered while fetching data from '+ url + ' '+ error);
  });

