var express = require('express')
var fs = require('fs')
var app = express()
app.use(express.static('public'))
app.use(express.json())
app.post('/', function(req, res){
  res.send(req.body)
  console.log(req.body)
  var stringData = JSON.stringify(req.body)

  if (fs.existsSync('stockage.json')) {
    fs.readFile('stockage.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err)
      } else {
        tableData = JSON.parse(data)


        var alreadyExist = false
        for (var i = 0; i < tableData.notation.length; i++) {
          if (tableData.notation[i].currentCampus == req.body.currentCampus) {
            alreadyExist = true;
          }
        }
        if (alreadyExist == false) {
          tableData.notation.push(req.body)
          stringData = JSON.stringify(tableData, null, 2)
          fs.writeFileSync('stockage.json', stringData, 'utf8')
        } else {
          console.log("Campus deja noté")
        }

    }})
  } else {
    tableData = {
      notation : []
    }
    tableData.notation.push(req.body);
    stringData = JSON.stringify(tableData, null, 2)
    fs.writeFileSync('stockage.json', stringData, 'utf8')
  }

});


app.get('/workshop', function(req,res){
  if (req.query.name=="notation"){
    res.sendFile(__dirname + "/select.html")
  }
  else if (req.query.name=="css"){
    res.sendFile(__dirname + "/style.css")
  }
  else if (req.query.name=="js"){
    res.sendFile(__dirname + "/script.js")
  }
  else if (req.query.name=="stockage"){
    res.sendFile(__dirname + "/stockage.json")
  }
  else if (req.query.name=="seeRank"){
    res.sendFile(__dirname + "/seeRank.html")
  }
  else if (req.query.name=="display"){
    res.sendFile(__dirname + "/display.js")
  }
})

app.listen(3000, function(){
  console.log("Vous êtes bien sur le port : 3000")
})
