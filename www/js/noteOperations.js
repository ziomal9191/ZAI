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
function makeAndAddPhotoToDb()
{
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL });
}


function onSuccess(imageURI) {
    //alert(imageURI);
    var db = window.sqlitePlugin.openDatabase({name: "my.db"});
    var console;
    db.transaction(function(tx) {
      //tx.executeSql('DROP TABLE IF EXISTS test_table');
      tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data BLOB)');
      tx.executeSql("INSERT INTO test_table (data) VALUES (?)", [imageURI], function(tx, res) {
    	  alert( "insertId: " + res.insertId + " -- probably 1" + 
    	  "rowsAffected: " + res.rowsAffected + " -- should be 1");
      });
    });
    //alert('SQL END' + console);
    
}

function onFail(message) {
    alert('Failed because: ' + message);
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