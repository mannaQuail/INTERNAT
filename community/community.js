let num = JSON.parse(localStorage.getItem("numcom"));

for(var i = 1; i<=num; i++){
	title = localStorage.getItem("titlecom" + i);
	writer = localStorage.getItem("writercom" + i);
	date = localStorage.getItem("datecom" + i);
	document.getElementById(String(i)).querySelector("#_num").innerText = String(i);
	document.getElementById(String(i)).querySelector("#_title").innerText = title;
	document.getElementById(String(i)).querySelector("#_name").innerText = writer;
	document.getElementById(String(i)).querySelector("#_date").innerText = date;
}
document.getElementById("1").querySelector("#_title").addEventListener("click", () => {
	localStorage.setItem("writingNum", JSON.stringify(1));
	location.herf = "./chating/chating.html";
	location.replace("./chating/chating.html");
});
document.getElementById("2").querySelector("#_title").addEventListener("click", () => {
	localStorage.setItem("writingNum", JSON.stringify(2));
	location.herf = "./chating/chating.html";
	location.replace("./chating/chating.html");
});
document.getElementById("3").querySelector("#_title").addEventListener("click", () => {
	localStorage.setItem("writingNum", JSON.stringify(3));
	location.herf = "./chating/chating.html";
	location.replace("./chating/chating.html");
});
document.getElementById("4").querySelector("#_title").addEventListener("click", () => {
	localStorage.setItem("writingNum", JSON.stringify(4));
	location.herf = "./chating/chating.html";
	location.replace("./chating/chating.html");
});