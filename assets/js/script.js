// var neighbourhoods = ["Agincourt North", "Agincourt South-Malvern West", "Alderwood", "Annex", "Banbury-Don Mills", "Bathurst Manor", "Bay Street Corridor", "Bayview Village", "Bayview Village", "Bayview Woods-Steeles", "Bedford Park-Nortown", "Beechborough-Greenbrook", "Bendale", "Birchcliffe-Cliffeside", "Black Creek", "Blake-Jones", "Briar Hill-Belgravia"]

var xhr = new XMLHttpRequest();

var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// Open a new connection using the GET request on the url endpoint
// provide 3 arguments (GET/POST, url, and Async true/false)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
  // parse the resquest into JSON
  var data = JSON.parse(this.response);

  // log the data object
  console.log(data);

  // log the page objets
  console.log (data.query.pages)

  // loop through the data object
  // pulling out the titles of each page
  for (var i in data.query.pages) {
    console.log(data.query.pages[i]).title;
  }
}
// Send request to server
xhr.send();