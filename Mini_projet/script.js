var campus = { grade : [
              ["Paris", null],
              ["Lyon", null],
              ["Montpellier", null],
              ["Arras", null],
              ["Brest", null],
              ["Sens", null],
              ["Bordeaux", null],
              ["Grenoble", null],
              ["Lille", null],
              ["Nantes", null]
          ],
          currentCampus : ""
      };

function show() {
  var a = document.getElementById("select")
  a.setAttribute("style", "display:none;")
  var b = document.getElementById("rank")
  b.setAttribute("style", "display:block;")
}

function getCurrentCampus(select){
  campus.currentCampus = select
}

function getData(){
  var correctInput = true

  for (var i = 0; i < campus.grade.length; i++) {
    if (parseInt(document.getElementsByName("input")[i].value) > 20 || parseInt(document.getElementsByName("input")[i].value) < 0 || Number.isInteger(parseInt(document.getElementsByName("input")[i].value)) == false) {
      correctInput = false
    }
  }
  if (correctInput == true) {
    for (var i = 0; i < campus.grade.length; i++) {
      campus.grade[i][1] =parseInt(document.getElementsByName("input")[i].value)
    }
    var campusJSON = JSON.stringify(campus)

    var xhttp = new XMLHttpRequest()
    xhttp.open("POST","http://localhost:3000")
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhttp.send(campusJSON)
  }
  else{
    alert("Veuillez rentrez des valeurs valables ")
  }
}
