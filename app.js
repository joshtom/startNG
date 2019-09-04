
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector("#msg");
const btnSubmit = document.querySelector("#btn-submit");
const spanMsg = document.querySelector(".message");

const getFormData = {
	'name': name,
	'email': email,
	'phone': phone,
	'msg': msg,
	'btnSubmit': btnSubmit
}
const fieldArray = [getFormData.name, getFormData.email, getFormData.phone, getFormData.msg];
const ifEmpty = (param) => {
		if (param === null) {
			alert("Field Cannot be left blank");
			return true;
		} else {
			return false;
		}
}	
const addEvent = (field,event,action) => {
	field.addEventListener(event,action);
}
for (const fields in fieldArray) {
	addEvent(fieldArray[fields],'keyup', function() { 
	if(fieldArray[fields].value.length <= 5) {
		fieldArray[fields].classList.add('inputDanger');
		fieldArray[fields].classList.remove('inputSuccess');
		spanMsg.textContent=`${fieldArray[fields].value} must be more than 4 characters`;

	 }
	else {

		if (fieldArray[1] > 2) {
		fieldArray[fields].classList.add('inputDanger');
		fieldArray[fields].classList.remove('inputSuccess');
		spanMsg.textContent=`${fieldArray[1].value} is not a valid email`;
	}
	 else {
		fieldArray[fields].classList.add('inputSuccess');
		fieldArray[fields].classList.remove('inputDanger');
		spanMsg.textContent="Wawoooooooo, you can proceed";
	}

	}
});
}



getFormData.btnSubmit.addEventListener('click', (event) => {
	event.preventDefault();
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getFormData.email.value)) {
		spanMsg.textContent="Please check your email you have entered an incorrect one";
	} else {
		alert("Success");
	}
})




