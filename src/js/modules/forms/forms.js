//================================================================================

import JustValidate from 'just-validate';
import { popup } from "../components/popup.js";

if (document.querySelector('.question__form')) {
	const validateQuestion = new JustValidate('.question__form', {
		errorFieldCssClass: 'error',
		errorLabelCssClass: 'form__error',
		successFieldCssClass: 'success',
		successLabelCssClass: 'form__success',
		focusInvalidField: true,
	});

	validateQuestion
		.addField('#name-question', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#phone-question', [
			{ rule: 'required' },
			{
				rule: 'customRegexp',
				value: /[\(]?\d{3}[\)]?[-\.\s]?(\d{3})[-\.\s]?(\d{2})[-\.\s]?(\d{2})/,
				errorMessage: 'The field must contain a minimum of 10 digits'
			}
		], { successMessage: 'Looks good!' })
		.addField('#message-question', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.onSuccess(() => {
			popup('.question__form');
			(function () { validateQuestion.refresh(); }());
		})
}

if (document.querySelector('.application__form')) {
	const validateApplication = new JustValidate('.application__form', {
		errorFieldCssClass: 'error',
		errorLabelCssClass: 'form__error',
		successFieldCssClass: 'success',
		successLabelCssClass: 'form__success',
		focusInvalidField: true,
	});

	validateApplication
		.addField('#name-application', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#phone-application', [
			{ rule: 'required' },
			{
				rule: 'customRegexp',
				value: /[\(]?\d{3}[\)]?[-\.\s]?(\d{3})[-\.\s]?(\d{2})[-\.\s]?(\d{2})/,
				errorMessage: 'The field must contain a minimum of 10 digits'
			}
		], { successMessage: 'Looks good!' })
		.addField('#email-application', [
			{ rule: 'email' }
		], { successMessage: 'Looks good!' })
		.addField('#message-application', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#checkbox-application', [
			{ rule: 'required' }
		])
		.onSuccess(() => {
			popup('.application__form');
			(function () { validateApplication.refresh(); }());
		})
}

if (document.querySelector('.footer__form')) {
	const validateFooter = new JustValidate('.footer__form', {
		errorFieldCssClass: 'error',
		errorLabelCssClass: 'form__error',
		successFieldCssClass: 'success',
		successLabelCssClass: 'form__success',
		focusInvalidField: true,
	});

	validateFooter
		.addField('#email-footer', [
			{ rule: 'email' }
		], { successMessage: 'Looks good!' })
		.onSuccess(() => {
			popup('.footer__form');
			(function () { validateFooter.refresh(); }());
		})
}

if (document.querySelector('.post__form')) {
	const validatePost = new JustValidate('.post__form', {
		errorFieldCssClass: 'error',
		errorLabelCssClass: 'form__error',
		successFieldCssClass: 'success',
		successLabelCssClass: 'form__success',
		focusInvalidField: true,
	});

	validatePost
		.addField('#name-post', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#email-post', [
			{ rule: 'email' }
		], { successMessage: 'Looks good!' })
		.addField('#message-post', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.onSuccess(() => {
			popup('.post__form');
			(function () { validatePost.refresh(); }());
		})
}

if (document.querySelector('.contact__form')) {
	const validateContact = new JustValidate('.contact__form', {
		errorFieldCssClass: 'error',
		errorLabelCssClass: 'form__error',
		successFieldCssClass: 'success',
		successLabelCssClass: 'form__success',
		focusInvalidField: true,
	});

	validateContact
		.addField('#name-contact', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#post-contact', [
			{ rule: 'required' }
		], { successMessage: 'Looks good!' })
		.addField('#phone-contact', [
			{ rule: 'required' },
			{
				rule: 'customRegexp',
				value: /[\(]?\d{3}[\)]?[-\.\s]?(\d{3})[-\.\s]?(\d{2})[-\.\s]?(\d{2})/,
				errorMessage: 'The field must contain a minimum of 10 digits'
			}
		], { successMessage: 'Looks good!' })
		.addField('#post-location', [
			{ rule: 'required' }
		], { successMessage: 'Looks good!' })
		.addField('#email-contact', [
			{ rule: 'email' }
		], { successMessage: 'Looks good!' })
		.addRequiredGroup('#radio-contact-group')
		.addField('#message-contact', [
			{ rule: 'required' },
			{ rule: 'minLength', value: 3 },
			{ rule: 'maxLength', value: 30 }
		], { successMessage: 'Looks good!' })
		.addField('#checkbox-contact', [
			{ rule: 'required' }
		])
		.onSuccess(() => {
			popup('.contact__form');
			(function () { validateContact.refresh(); }());
		})
}

//================================================================================