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
		// Store
		localStorage.setItem(noteNumber, $('#noteText').val());
		// Retrieve
		//var surname = localStorage.getItem("lastname");
	} 
	else {
		// No Web Storage suport …
		alert("dupa");
	}
}