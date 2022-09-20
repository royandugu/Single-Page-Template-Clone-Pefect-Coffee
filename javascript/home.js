document.querySelector("#forWard").addEventListener("click",fn1);
document.querySelector("#backWard").addEventListener("click",fn2);
document.querySelector("#backLgWard").addEventListener("click",fn2);
document.querySelector("#forLgWard").addEventListener("click",fn1);
function fn1(){
	document.querySelector(".theMainOne").style.background='url("Images/coffee2.jpg")';
	document.querySelector("#forWard").style.color="orange";
	document.querySelector("#forLgWard").style.color="orange";
	document.querySelector("#backWard").style.color="white";
	document.querySelector("#backLgWard").style.color="white";
}
function fn2(){
	document.querySelector(".theMainOne").style.background='url("Images/coffee.jpg")';
	document.querySelector("#forWard").style.color="white";
	document.querySelector("#backWard").style.color="orange";
	document.querySelector("#forLgWard").style.color="white";
	document.querySelector("#backLgWard").style.color="orange";
}