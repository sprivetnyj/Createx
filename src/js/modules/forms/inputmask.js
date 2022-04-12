//================================================================================

import "inputmask/dist/inputmask.min.js";

const inputTelMasks = document.querySelectorAll('input[type="tel"]');
if (inputTelMasks.length) {
	inputTelMasks.forEach(input => {
		Inputmask({ "mask": '(999) 999-9999', showMaskOnHover: false }).mask(input);
	});
}
//================================================================================