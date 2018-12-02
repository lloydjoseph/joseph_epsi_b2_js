function displayRanking(ranking,i){
  var div1 =  document.createElement("div")
  var div2 =  document.createElement("div")
  var div3 =  document.createElement("div")
  var div4 =  document.createElement("div")
  var div5 =  document.createElement("div")
  var img1 = document.createElement("img")
  var span1 = document.createElement("span")
  var span2 = document.createElement("span")
  var division = document.getElementById("division")


  var strong1 = document.createElement("strong")
  var strong2 = document.createElement("strong")
  var h51 = document.createElement("h5")

  var ville = document.createTextNode(ranking[i][0])
  var points = document.createTextNode(ranking[i][1])
  var position = document.createTextNode(ranking.length - i)
  var classement = document.createTextNode(" Classement : ")
  var puntos = document.createTextNode("Points : ")

  var photo = ""
  if (ranking[i][0] == "Paris"){
    photo = "http://localhost:3000/Paris-epsi.jpg"
  }
  if (ranking[i][0] == "Lyon"){
    photo = "http://localhost:3000/Lyon-epsi.jpeg"
  }
  if (ranking[i][0] == "Montpellier"){
    photo = "http://localhost:3000/Montpellier-epsi.jpg"
  }
  if (ranking[i][0] == "Arras"){
    photo = "http://localhost:3000/Arras-epsi.jpg"
  }
  if (ranking[i][0] == "Brest"){
    photo = "http://localhost:3000/Brest-epsi.jpg"
  }
  if (ranking[i][0] == "Sens"){
    photo = "http://localhost:3000/Sens-epsi.jpg"
  }
  if (ranking[i][0] == "Bordeaux"){
    photo = "http://localhost:3000/Bordeaux-epsi.png"
  }
  if (ranking[i][0] == "Grenoble"){
    photo = "http://localhost:3000/Grenoble-epsi.png"
  }
  if (ranking[i][0] == "Lille"){
    photo = "http://localhost:3000/Lille-epsi.jpg"
  }
  if (ranking[i][0] == "Nantes"){
    photo = "http://localhost:3000/Nantes-epsi.jpg"
  }

  div1.setAttribute("class","d-flex m-4")
  img1.setAttribute("class","card-img-top")
  img1.setAttribute("style","width:200px;")
  img1.setAttribute("src",photo)
  img1.setAttribute("alt","Card image cap")
  div3.setAttribute("class","my-auto")
  div4.setAttribute("class","card-body")
  div5.setAttribute("class","ml-auto my-auto pr-5")
  strong1.setAttribute("margin","30px")



  div1.appendChild(div2)
  div2.appendChild(img1)
  div1.appendChild(div3)
  div3.appendChild(div4)
  div4.appendChild(h51)
  h51.appendChild(ville)
  div1.appendChild(div5)
  div5.appendChild(span1)
  span1.appendChild(strong1)
  strong1.appendChild(puntos)
  span1.appendChild(points)
  div5.appendChild(span2)
  span2.appendChild(strong2)
  strong2.appendChild(classement)
  span2.appendChild(position)
  division.appendChild(div1)


}
/*
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="d-flex m-4">
      <div>
        <img class="card-img-top" style="width:200px;" src="data/EPSI/Paris-epsi.jpg" alt="Card image cap">
      </div>
      <div class="my-auto">
        <div class="card-body">
          <h5 class="card-title text-left">Paris</h5>
        </div>
      </div>
      <div class="ml-auto my-auto pr-5">
        <span><strong>Position:</strong></span>
        <span><strong>Points:</strong></span>

      </div>
    </div>
  </body>
</html>
*/
