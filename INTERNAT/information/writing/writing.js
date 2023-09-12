function inputValueSave(id){
	var inputvalue = document.getElementById(id).value;
	return inputvalue;
}

let writer = localStorage.getItem("nickname") + '/' + localStorage.getItem("nationality");
document.getElementById("writer").innerText = writer;

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
day = year + "." + month + "." + date;
document.getElementById("date").innerText = String(day);

document.getElementById("text").addEventListener("input", () => {
	var pikabu = document.getElementById("text"); 
	var count = pikabu.value.length;
	document.getElementById("textnum").innerText = String(count);
})

let num = JSON.parse(localStorage.getItem("numinfo"));
let title = "default"
let content = "default"
document.getElementById("publish").addEventListener("click", () => {
	title = inputValueSave("contentTitle");
	content = inputValueSave("text");
	num = num + 1;
	localStorage.setItem("titleinfo" + num, title);
	localStorage.setItem("contentinfo" + num, content);
	localStorage.setItem("writerinfo" + num, writer);
	localStorage.setItem("dateinfo" + num, day)
	localStorage.setItem("numinfo", JSON.stringify(num))
	location.herf = "../information.html";
	location.replace("../information.html");
});