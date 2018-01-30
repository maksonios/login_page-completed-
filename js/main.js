function clicked() {
	var user = document.getElementById('username');
	var password = document.getElementById('password');

	var coruser = "test";
	var corpass = "123";

	if(user.value == coruser) {

		if(password.value == corpass) {

			window.alert("You are logged in as " + user.value);
			window.open("https://maksonios.github.io/login_page/");

		} else {

			window.alert("Incorrect username or password");

		}

	} else {

		window.alert("Incorrect username or password");
	}
}
