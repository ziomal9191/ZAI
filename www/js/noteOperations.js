function addNoteToDb()
{
	if (typeof(Storage) != "undefined") {
		if(localStorage.getItem("noteNumber") === null)
		{

			localStorage.setItem("noteNumber", "0");
		}
		var noteNumber = localStorage.getItem("noteNumber");
		noteNumber++;
		localStorage.setItem("noteNumber",noteNumber );
		localStorage.setItem(noteNumber, $('#noteText').val());
		if (!window.sqlitePlugin.openDatabase) {
			  alert('Databases are not supported in this browser.');
			  return;
			 }
		printNotePage();
		
	} 
}

function getQrCode()
{
    alert("begin");
	
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				var currText = $('#noteText').val();
				alert(currText);
				document.getElementById("skanerp").innerHTML = currText+"\n" + "We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled + 
					"Success: " + success + "\n" +
					"Fail: " + fail + "\n";
				}, 
			function (error) {
				alert("Cannot get qr code") ;
			}
		);	
	
}


function printNotes()
{
	 
	 document.write('<form class="ui-filterable"><input id="filterBasic-input" data-type="search"></form>');
	 document.write('<ul data-role="listview" data-filter="true" data-input="#filterBasic-input">');
	 for (var i = 0; i < localStorage.length; i++){
		var localStorageElement = localStorage.key(i);
		if(isNaN(localStorageElement)==false)
		{
			document.write('<li><a href="#menu" data-rel="popup" data-role="button">' + localStorage.getItem(localStorageElement)+'</a></li>');

		}
	 }	 
	 document.write('</ul>');	 
	 
}
function deleteNote()
{
	for (var i = 0; i < localStorage.length; i++){
		var localStorageElement = localStorage.key(i);
		if(isNaN(localStorageElement)==false)
		{
			if(currentKey == localStorage.getItem(localStorageElement))
			{
				localStorage.removeItem(localStorageElement);
				printNotePage();
				return;
			}
		}
	}
}

function modifyNoteInDb()
{
	var currentKey = window.sessionStorage.getItem("currentKey");

	for (var i = 0; i < localStorage.length; i++){
		var localStorageElement = localStorage.key(i);
		if(isNaN(localStorageElement)==false)
		{
			if(currentKey == localStorage.getItem(localStorageElement))
			{
				localStorage.setItem(localStorageElement, $('#noteText').val());
				printNotePage();
				return;
			}
		}
	} 
}
