function validateField(fieldElem, infoMessage, validateFn) {

	// TODO: Implement validateField.
	fieldElem.parent().append("<span></span>");
	fieldElem.parent().find("span").hide();
	
	//Edited
	//Info
	fieldElem.focus(function(){
		fieldElem.parent().find("span").show();
		fieldElem.parent().find("span").removeClass("error ok").addClass("info");
		fieldElem.parent().find("span").text(infoMessage);
	});

	//Not Edited
	//Empty
	fieldElem.blur(function(){
		if(fieldElem.val().length == 0){
			fieldElem.parent().find("span").removeClass("error info ok");
			fieldElem.parent().find("span").empty();
			fieldElem.parent().find("span").hide();
		}
		else{
			//Not Empty
			//Ok
			if(validateFn()){
				fieldElem.parent().find("span").show();
				fieldElem.parent().find("span").removeClass("error info").addClass("ok");
				fieldElem.parent().find("span").text("OK");
			}
			else{
				//Error
				fieldElem.parent().find("span").show();
				fieldElem.parent().find("span").removeClass("ok info").addClass("error");
				fieldElem.parent().find("span").text("Error");
			}
		}
	});
	
}

/*function validator_signin() {

	// TODO: Use validateField to validate form fields on the page.	
	validateField(
		$("#signin-password"), 
		"Enter your password", 
		function(){
		});
	

	validateField(
		$("#signin-email"),
		"Enter your Username",
		function(){
		});
}*/

function validator_login() {

	// TODO: Use validateField to validate form fields on the page.	
	validateField(
		$("#signup-fullname"),
		"Full name should contain only alphabets.",
		function(){
			return /^[A-Za-z]+$/.test($("#signup-fullname").val());
		});


	validateField(
		$("#signup-username"),
		"Username should contain only alphanumeric characters.",
		function(){
			return /^[0-9A-Za-z]+$/.test($("#signup-username").val());
		});
	


	validateField(
		$("#password"), 
		"Password should be at least 8 characters long.", 
		function(){
			var passLength = $("#password").val().length;
			if(passLength >= 8){
				return true;
			}
			else{
				return false;
			}
		});
	

	validateField(
		$("#signup-email"),
		"Enter a valid email address.",
		function(){
			var atpos = $("#signup-email").val().indexOf("@");
		    //var dotpos = $("#email").val().lastIndexOf(".");
		    if (atpos< 1) {
		    	return false;
		    }
		    else{
		    	return true;
		    }
		});
	
}