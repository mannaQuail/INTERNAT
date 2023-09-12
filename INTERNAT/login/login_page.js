function move2main(){
	nickname = localStorage.getItem("nickname");
	password = localStorage.getItem("password");
	var nicknameInput = document.getElementById("nicknameInput").value;
	var passwordInput = document.getElementById("passwordInput").value;
	if(nicknameInput==nickname){
		if(passwordInput==password){
			alert("Welcome!");
			location.herf = "../INTERNAT_login.html";
			location.replace("../INTERNAT_login.html");
		}
		else{
			alert("Password is invalid!");
		}
	}
	else{
		alert("Nickname is invalid!");
	}
}
document.getElementById("go").addEventListener("click", move2main);