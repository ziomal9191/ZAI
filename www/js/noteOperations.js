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
    var db = window.sqlitePlugin.openDatabase({name: "my.db"});
    var console;
    db.transaction(function(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data BLOB)');
      tx.executeSql("INSERT INTO test_table ( data) VALUES (?)", [imageURI], function(tx, res) {
    	  alert( "insertId: " + res.insertId + " -- probably 1" + 
    	  "rowsAffected: " + res.rowsAffected + " -- should be 1");
      });
    });
	document.write('<img style=\'display:block; width:100px;height:100px;\' id=\'base64image\''+                 
		       'src=\'data:image/jpeg;base64,\'' + imageURI + '/>');
	
    
}

function onFail(message) {
    alert('Failed because: ' + message);
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