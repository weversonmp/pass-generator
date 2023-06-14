const passLength = document.querySelector("#pass");
const newPassword = document.querySelector("passResult");

function passGen() {
	let charset = `abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0123456789!@#$%&*()+=`;
	let pass = "";

	for (let i = 0, n = charset.length; i < passLength.value; i++) {
		pass += charset.charAt(Math.random() * n);
	}
	if (passLength.value === "") {
		alert("Digite um valor numérico");
		return;
	} else {
		document.getElementById("passResult").innerHTML = pass;
	}
}

// console.log(pass);

// let result = document.createTextNode(pass);
