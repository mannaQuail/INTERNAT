let pagenum = JSON.parse(localStorage.getItem("writingNum"));
let title = localStorage.getItem("titleinfo"+pagenum);
let content = localStorage.getItem("contentinfo"+pagenum);
let writer = localStorage.getItem("writerinfo"+pagenum);
let date = localStorage.getItem("dateinfo"+pagenum);

document.getElementById("contentTitle").innerText = title;
document.getElementById("writer").innerText = writer;
document.getElementById("date").innerText = date;
document.getElementById("text").innerText = content;
let chatnum = localStorage.getItem("chatinfo" + pagenum + "num")
if(chatnum == null){
	localStorage.setItem("chatinfo" + pagenum + "num", JSON.stringify(0))
}else{
	document.querySelector(".publishBigContainer").remove();
	for(var i=1; i<=JSON.parse(chatnum); i++){
		document.querySelector(".content").innerHTML += '<div class="comments"><div id="id">' + localStorage.getItem("chatinfo" + pagenum + "writer" + i) + '</div><div>' + localStorage.getItem("chatinfo" + pagenum + "comment" + i) +'</div></div>'
	}
	document.querySelector(".content").innerHTML += '<div class="publishBigContainer"><div id="comments">Comments</div><div class="publishContainer"><textarea id="chat"></textarea><div id="publish">Publish</div>	</div><div id="report">Report</div></div>'
}

document.getElementById("publish").addEventListener("click", () => {
	chatnum++;
	localStorage.setItem("chatinfo" + pagenum + "num", JSON.stringify(chatnum))
	let text = document.getElementById("chat").value;
	localStorage.setItem("chatinfo" + pagenum + "comment" + JSON.parse(chatnum), text);
	localStorage.setItem("chatinfo" + pagenum + "writer" + JSON.parse(chatnum), localStorage.getItem("nickname") + '/' + localStorage.getItem("nationality"));
	location.herf = "chating.html";
	location.replace("chating.html");
});