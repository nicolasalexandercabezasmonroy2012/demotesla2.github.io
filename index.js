var plusValue = 0;

function changeimages(srcImages, colorValue, monthvalue,backgroundvalue) {
  var car = document.getElementById("car");
  var price = document.getElementById("price");
  var cost = document.getElementById("cost");
  var month = document.getElementById("month");
  var card = document.getElementById("card");

  var finalvalue = 62190 + colorValue;

  month.innerHTML = monthvalue;
  card.style.backgroundColor=backgroundvalue

  car.src = srcImages;
  price.innerHTML = `$ ${colorValue}`;
  cost.innerHTML = `$ ${finalvalue}`;
}
function addPlus() {
  var plus = document.getElementById("plus");

  plusValue += 7800;
  plus.innerHTML = `$ ${plusValue}`;
}
function showShorts() {
  var shorts = document.getElementById("shorts");

  if (shorts.style.visibility == "hidden") {
    shorts.style.visibility = "visible";
  } else {
    shorts.style.visibility = "hidden";
  }
}
