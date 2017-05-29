var addbtn = document.querySelector(".addbtn");
var input = document.querySelector(".regAdd");
var plate = document.querySelector(".plate");
var regionBtn = document.querySelector(".regions");


addbtn.addEventListener("click", function(){
  var text = input.value;
  if(text.length >0){
  var li = document.createElement('li');
  li.innerHTML = (text).toUpperCase();

  li.classList.add("plate")

  plate.appendChild(li);
}
});

regionBtn.addEventListener('change',function(e){
  var allRegNums = document.querySelectorAll('li');
  for(var i=0;i < allRegNums.length;i++){
    if(e.target.value === "all"){
      allRegNums[i].style.display="block";
    }
    else if(!allRegNums[i].innerHTML.startsWith(e.target.value)){
      allRegNums[i].style.display ="none";
    }
  }
  // console.log(e.target.value);
});
