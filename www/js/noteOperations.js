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
		// Retrieve);
		printNotePage();
	} 
	else {
		// No Web Storage suport …
		alert("dupa");
	}
	
}

function printNotes()
{
	//alert("dd");
	for (var i = 0; i < localStorage.length; i++){
	 //   $('body').append(localStorage.getItem(localStorage.key(i)));
		var localStorageElement = localStorage.key(i);
		//alert(localStorageElement);
		if(isNaN(localStorageElement)==false)
		{
			document.write('<button>' + localStorage.getItem(localStorageElement)+'</button>');
		}
	}
}