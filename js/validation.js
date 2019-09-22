'use strict';

window.addEventListener('DOMContentLoaded', function() {
	let	login = document.getElementById('login');

	let programUsers = [
		{
			username: "user123",
			password: "12345"
		},
		{
			username: "night-elf",
			password: "second_password"
		}
	]

	function checkUser(userDataBase){
		let username = document.getElementById('username').value,
			password = document.getElementById('password').value;

		if(username == null || username == ""){
			alert("Enter the username");
			return false;
		} else if (password == null || password == ""){
			alert("Enter the password");
			return false;
		} 
		
		for (let i = 0; i < userDataBase.length; i++){
			if(username == userDataBase[i].username && password == userDataBase[i].password){
				alert("Welcome!");
				break;
			} else {
				alert("Incorrect username or password");
			}
		}
		
	}

	login.addEventListener('click', function(){
		checkUser(programUsers)
	});
})