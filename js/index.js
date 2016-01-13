$(document).ready(function() {
	$(":submit[value=Login]").click(function() {
		var username = $("#signin-email").val();
		var passw = $("#signin-password").val();

		var dataString = 'username=' + username + '&password=' + passw;

		var login = $.ajax({
			type : "POST",
			dataType : "text",
			url : "php/login.php",
			data : dataString,
			cache : false,
			success : function(result) {
				result = strip(result);
				if (result == "admin") {
					window.location.replace("AdminLogin.html");
				} else if (result == "user") {
					window.location.replace("UserLogin.html");
				} else {
					alert(result);
				}
			}
		});
	});

	$(":submit[value='Create account']").click(function() {
		if (!$(".has-error").length) {
			var name = $("#signup-fullname").val();
			var username = $("#signup-username").val();
			var email = $("#signup-email").val();
			var passw = $("#password").val();

			var dataString = 'name=' + name + '&username=' + username + '&password=' + passw + '&email=' + email;

			var create = $.ajax({
				type : "POST",
				url : "php/createAccount.php",
				data : dataString,
				cache : false,
				success : function(result) {
					result = strip(result);
					if (result == "success") {
						window.location.replace("UserLogin.html");
					} else {
						alert(result);
					}
				}
			});
		}
	});
});
function strip(html) {
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || "";
}