//modal
function openModal(){
	document.getElementById("modal").style.display = "block";
}
function closeModal(){
	document.getElementById("modal").style.display = "none";
}
document.getElementById("signIn").addEventListener("click", openModal);
document.getElementById("x").addEventListener("click", closeModal);

//saving input value
function inputValueSave(id){
	var inputvalue = document.getElementById(id).value;
	return inputvalue;
}
let nickname = "defalt";
let password = "defalt";
let phone = "defalt";
let mail = "defalt";
let nationality = "defalt";
let age = 0;
document.getElementById("lego").addEventListener("click", () => {
	nickname = inputValueSave("nickname");
});
document.getElementById("lego").addEventListener("click", () => {
	password = inputValueSave("password");
});
document.getElementById("lego").addEventListener("click", () => {
	phone = inputValueSave("phone");
});
document.getElementById("lego").addEventListener("click", () => {
	mail = inputValueSave("mail");
});
document.getElementById("lego").addEventListener("click", () => {
	nationality = inputValueSave("nationality");
});
document.getElementById("lego").addEventListener("click", () => {
	age = inputValueSave("age");
});
document.getElementById("lego").addEventListener("click", () => {
	if(nickname==""){
		alert("Please enter your nickname!");
	}
	else if(password==""){
		alert("Please enter your password!");
	}
	else if(phone==""){
		alert("Please enter your phone number!");
	}
	else if(mail==""){
		alert("Please enter your mail address!");
	}
	else if(nationality==""){
		alert("Please enter your nationality!");
	}
	else if(age==0){
		alert("Please enter yout age!");
	}
	else{
		console.log(nickname);
		console.log(password);
		console.log(phone);
		console.log(mail);
		console.log(nationality);
		console.log(age);
		closeModal();
		localStorage.setItem("nickname", nickname);
		localStorage.setItem("password", password);
		localStorage.setItem("nationality", nationality);
		alert("Success!");
		location.herf = "./login/login_page.html";
		location.replace("./login/login_page.html");
	}
});