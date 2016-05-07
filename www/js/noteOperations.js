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
		printNotePage();
	} 
}

function printNotes()
{
	for (var i = 0; i < localStorage.length; i++){
		var localStorageElement = localStorage.key(i);
		if(isNaN(localStorageElement)==false)
		{
			document.write('<a href="#menu" data-rel="popup" data-role="button">' + localStorage.getItem(localStorageElement)+'</a>');
		}
	}
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