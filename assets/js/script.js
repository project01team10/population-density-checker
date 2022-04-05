// var neighbourhoodsOne = [
//   "Agincourt North", "Agincourt South-Malvern West", "Alderwood", "Annex", "Banbury-Don Mills", "Bathurst Manor," "Bay Street Corridor", "Bayview Village", "Bayview Woods-Steeles", "Bedford Park-Nortown", "Beechborough-Greenbrook", "Bendale", "Birchcliffe-Cliffside", "Black Creek", "Blake-Jones", "Briar Hill-Belgravia", "Bridle Path-Sunnybrook-York Mills", "Broadview North", "Brookhaven-Amesbury", "Cabbagetown-South St. James Town", "Caledonia-Fairbank", "Casa Loma", "Centennial Scarborough", "Church-Yonge Corridor", "Clairlea-Birchmount", "Clanton Park", "Cliffcrest", "Corso Italia-Davenport", "Crescent Town", "Danforth-East York", "Danforth", "Don Valley Village", "Dorset Park", "Dovercourt-Wallace Emerson-Junction", "Downsview-Roding-CFB", "Dufferin Grove", "East End-Danforth", "Edenbridge-Humber Valley", "Eglinton East", "Elms-Old Rexdale", "Englemount-Lawrence", "Eringate-Centennial-West Deane", "Etobicoke West Mall", "Flemingdon Park", "Forest Hill North", "Forest Hill South", "Glenfield-Jane Heights", "Greenwood-Coxwell", "Guildwood", "Henry Farm", "“North York", "Henry Farm", "High Park North", "High Park-Swansea", "Highland Creek", "Hillcrest Village", "Humber Heights-Westmount", "Humber Summit", "Humbermede", "Humewood-Cedarvale", "Ionview", "Islington-City Centre West", "Junction Area", "Keelesdale-Eglinton West", "Kennedy Park", "Kensington-Chinatown", "Kingsview Village-The Westway", "Kingsway South", "L’Amoreaux", "Lambton Baby Point", "Lansing-Westgate", "Lawrence Park North", "Lawrence Park South", "Leaside-Bennington", "Little Portugal", "Long Branch", "Malvern", "Maple Leaf", "Markland Wood", "Milliken", "Mimico", "Morningside", “Moss Park”,
//   "Mount Dennis”, “Mount Olive-Silverstone-Jamestown”, Mount Pleasant East”, “Mount Pleasant West”, “New Toronto", "Newtonbrook East" "" “Newtonbrook East”, “Newtonbrook West”, “Niagara”, "North Riverdale”, “North St. James Town”, “O’Connor-Parkview”, “Oakridge”, “Oakwood Village”, “Old East York”, “Palmerston-Little Italy”, “Parkwoods-Donalda”, “Pelmo Park-Humberlea", “Playter Estates-Danforth”, “Pleasant View”, “Princess-Rosethorn”, “Regent Park”, “Rexdale-Kipling”, “Rockcliffe-Smythe”, “Roncesvalles", Rosedale-Moore Park, Rouge, Runnymede-Bloor West Village, “Rustic", “Scarborough Village”, “South Riverdale", “South Parkdale”, “St. Andrew-Windfields”, “Steeles”, “Stonegate-Queensway”, “Tam O’Shanter-Sullivan”, “The Beaches”, “Thistletown-Beaumond Heights, Thorncliffe Park, Trinity-Bellwoods, University of Toronto, Victoria Village, Waterfront Communities-The Island”, “West Hill”, “West Humber-Clairville”, “Westminster-Branson", “Weston”, "Weston-Pelham Park (Carleton Village)”, “Wexford-Maryvale", “Willowdale East”, “Willowdale West”, “Willowridge-Martingrove-Richview”, “Woburn”, “Woodbine Corridor”, “Woodbine-Lumsden", “Wychwood”, “Yonge–Eglinton", "Deer Park”, “Yonge-St. Clair”, “York University Heights”, “Yorkdale-Glen Park”

// ]

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
    console.log(data.query.pages[i].title);
  }
}
// Send request to server
xhr.send();