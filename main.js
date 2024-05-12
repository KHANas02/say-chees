'use strict';

const body = document.querySelector('body');
const checkboxTheme = document.querySelector('#change-theme');
const rangeInput = document.querySelector('#size-icon');

const init = () => {
	if (!body.classList.contains('light') && !body.classList.contains('dark')) {
		body.classList.add('dark');
	}
	feather.replace();
};

const handleTheme = (event) => {
	if (event.currentTarget.checked && body.classList.contains('light')) {
		body.classList.remove('light');
		body.classList.add('dark');
	} else if (!event.currentTarget.checked && body.classList.contains('dark')) {
		body.classList.remove('dark');
		body.classList.add('light');
	}
};

const handleUpdate = (event) => {
	const suffix = event.currentTarget.dataset.sizing || '';
	
	document.documentElement.style.setProperty(`--${event.currentTarget.name}`, event.currentTarget.value + suffix);
}

init();
checkboxTheme.addEventListener('change', handleTheme);
rangeInput.addEventListener('change', handleUpdate);