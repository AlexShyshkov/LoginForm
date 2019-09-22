'use strict';

window.addEventListener('DOMContentLoaded', function() {
	let checkboxInput = document.getElementById('remember-me'),
		usernameInput = document.getElementById('username');

	if (localStorage.checkbox && localStorage.checkbox != ""){
		checkboxInput.setAttribute("checked", "checked");
		usernameInput.value = localStorage.username;
	} else {
		checkboxInput.removeAttribute("checked");
		usernameInput.value = "";
	}

	function rememberMe(){
		if(checkboxInput.checked && usernameInput.value != ""){
			localStorage.username = usernameInput.value;
			localStorage.checkbox = checkboxInput.value;
		} else {
			localStorage.username = "";
			localStorage.checkbox = "";
		}
	}

	document.getElementById('login').addEventListener('click', rememberMe);
})