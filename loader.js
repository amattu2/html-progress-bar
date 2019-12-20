/*
	Produced 2019
	By https://github.com/amattu2
	Copy Alec M.
	License GNU Affero General Public License v3.0
*/

// Variables
let loader = document.getElementsByClassName('loader-bg')[0];
let bar = document.getElementById('progress-bar');
let text = document.getElementById('progress-text');
let messages = ["Not so random message", "Hey, we're at XYZ progress", "Please be patient...", "Eh.. Random messages?", "I use Atom.io, it's lovely", "Ok, no more messages", "Yes, this lasts forever"];

// Demo
setInterval(function() {
	setProgress(Math.floor(Math.random() * 100), messages[Math.floor(Math.random() * messages.length)], false);
}, 2500);

// Hide Loader
function hideLoader() {
	// Attributes
	loader.style.transition = "all 0.15s ease-in";

	// UI
	loader.classList.remove('visible');
}

// Display Loader
function showLoader() {
	// Attributes
	loader.style.transition = "all 0s linear";

	// UI
	loader.classList.add('visible');
}

// Set Loader Progress
function setProgress(progress, status = "") {
	// Checks
	if (progress < 0 || progress > 100) { return false }
	if (typeof(status) !== "string") { status = "" }

	// UI
	bar.dataset.progress = progress.toString();
	text.textContent = status;
}
