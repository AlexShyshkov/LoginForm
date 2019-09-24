'use strict';

window.addEventListener('DOMContentLoaded', function() {
	let	login = document.getElementById('login');

	function checkUser(userData){
		let username = document.getElementById('username').value,
			password = document.getElementById('password').value;

		if(username == null || username == ""){
			alert("Enter the username");
			return false;
		} else if (password == null || password == ""){
			alert("Enter the password");
			return false;
		} 
		
		for (let i = 0; i < userData.length; i++){
			if(username == userData[i].username && password == userData[i].password){
				alert("Welcome!");
				break;
			} else {
				alert("Incorrect username or password");
			}
		}
		
	}

	login.addEventListener('click', function(){
		let request = new XMLHttpRequest();
		request.open('GET', 'js/users.json');
		request.onload = function(){
			let user = JSON.parse(this.response);
			checkUser(user);
		};
		request.send();	
	});
})