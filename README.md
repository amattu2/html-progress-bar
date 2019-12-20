# Introduction
Just a simple HTML5/CSS3 based progress bar. Features a simple UI with optional status text. Includes a provided simple controller script to demonstrate it's usage. 

# Usage
Find this block of code:
```
<div class='progress-case'>
	<div class='progress-status' id='progress-text'></div>
	<div class='progress-bar' id='progress-bar' data-progress="0"></div>
</div>
```

To use, simply set the data-progress of the progress-bar element (0-100).
```
<div class='progress-bar' id='progress-bar' data-progress="75"></div>
```

To include a message, set the text of the progress-status element
```
<div class='progress-status' id='progress-text'>Hey.. so we're uploading the file now</div>
```

# Previews
![preview image](https://github.com/amattu2/html-progress-bar/blob/master/previews/preview.png)

# Notes
