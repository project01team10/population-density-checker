var searchButtonEl = document.querySelector("#searchIcon");
var userSearchInputEl = document.querySelector("#search");
var neighbourhoods = [
    "Agincourt North", "Agincourt South-Malvern West", "Alderwood", "Annex", "Banbury-Don Mills", "Bathurst Manor", "Bay Street Corridor", "Bayview Village", "Bayview Woods-Steeles", "Bedford Park-Nortown", "Beechborough-Greenbrook", "Bendale", "Birchcliffe-Cliffside", "Black Creek", "Blake-Jones", "Briar Hill-Belgravia", "Bridle Path-Sunnybrook-York Mills", "Broadview North", "Brookhaven-Amesbury", "Cabbagetown-South St. James Town", "Caledonia-Fairbank", "Casa Loma", "Centennial Scarborough", "Church-Yonge Corridor", "Clairlea-Birchmount", "Clanton Park", "Cliffcrest", "Corso Italia-Davenport", "Crescent Town", "Danforth-East York", "Danforth", "Don Valley Village", "Dorset Park", "Dovercourt-Wallace Emerson-Junction", "Downsview-Roding-CFB", "Dufferin Grove", "East End-Danforth", "Edenbridge-Humber Valley", "Eglinton East", "Elms-Old Rexdale", "Englemount-Lawrence", "Eringate-Centennial-West Deane", "Etobicoke West Mall", "Flemingdon Park", "Forest Hill North", "Forest Hill South", "Glenfield-Jane Heights", "Greenwood-Coxwell", "Guildwood", "Henry Farm", "“North York", "Henry Farm", "High Park North", "High Park-Swansea", "Highland Creek", "Hillcrest Village", "Humber Heights-Westmount", "Humber Summit", "Humbermede", "Humewood-Cedarvale", "Ionview", "Islington-City Centre West", "Junction Area", "Keelesdale-Eglinton West", "Kennedy Park", "Kensington-Chinatown", "Kingsview Village-The Westway", "Kingsway South", "L'Amoreaux", "Lambton Baby Point", "Lansing-Westgate", "Lawrence Park North", "Lawrence Park South", "Leaside-Bennington", "Little Portugal", "Long Branch", "Malvern", "Maple Leaf", "Markland Wood", "Milliken", "Mimico", "Morningside", "Moss Park",
    "Mount Dennis", "Mount Olive-Silverstone-Jamestown", "Mount Pleasant East", "Mount Pleasant West", "New Toronto", "Newtonbrook East", "Newtonbrook West", "Niagara", "North Riverdale", "North St. James Town", "O’Connor-Parkview", "Oakridge", "Oakwood Village", "Old East York", "Palmerston-Little Italy", "Parkwoods-Donalda", "Pelmo Park-Humberlea", "Playter Estates-Danforth", "Pleasant View", "Princess-Rosethorn", "Regent Park", "Rexdale-Kipling", "Rockcliffe-Smythe", "Roncesvalles", "Rosedale-Moore Park", "Rouge", "Runnymede-Bloor West Village", "Rustic", "Scarborough Village", "South Riverdale", "South Parkdale", "St. Andrew-Windfields", "Steeles", "Stonegate-Queensway", "Tam O'Shanter-Sullivan", "The Beaches", "Thistletown-Beaumond Heights", "Thorncliffe Park", "Trinity-Bellwoods", "University of Toronto", "Victoria Village", "Waterfront Communities-The Island", "West Hill", "West Humber-Clairville", "Westminster-Branson", "Weston", "Weston-Pelham Park (Carleton Village)", "Wexford-Maryvale", "Willowdale East", "Willowdale West", "Willowridge-Martingrove-Richview", "Woburn", "Woodbine Corridor", "Woodbine-Lumsden", "Wychwood", "Yonge-Eglinton", "Deer Park", "Yonge-St. Clair", "York University Heights", "Yorkdale-Glen Park"
  ];

function searchButtonHandler () {
  // query neighbourhoods based on user input
  var userSearchInput = search.value.trim();
  var neighbourhoods = [
    "Agincourt North", "Agincourt South-Malvern West", "Alderwood", "Annex", "Banbury-Don Mills", "Bathurst Manor", "Bay Street Corridor", "Bayview Village", "Bayview Woods-Steeles", "Bedford Park-Nortown", "Beechborough-Greenbrook", "Bendale", "Birchcliffe-Cliffside", "Black Creek", "Blake-Jones", "Briar Hill-Belgravia", "Bridle Path-Sunnybrook-York Mills", "Broadview North", "Brookhaven-Amesbury", "Cabbagetown-South St. James Town", "Caledonia-Fairbank", "Casa Loma", "Centennial Scarborough", "Church-Yonge Corridor", "Clairlea-Birchmount", "Clanton Park", "Cliffcrest", "Corso Italia-Davenport", "Crescent Town", "Danforth-East York", "Danforth", "Don Valley Village", "Dorset Park", "Dovercourt-Wallace Emerson-Junction", "Downsview-Roding-CFB", "Dufferin Grove", "East End-Danforth", "Edenbridge-Humber Valley", "Eglinton East", "Elms-Old Rexdale", "Englemount-Lawrence", "Eringate-Centennial-West Deane", "Etobicoke West Mall", "Flemingdon Park", "Forest Hill North", "Forest Hill South", "Glenfield-Jane Heights", "Greenwood-Coxwell", "Guildwood", "Henry Farm", "“North York", "Henry Farm", "High Park North", "High Park-Swansea", "Highland Creek", "Hillcrest Village", "Humber Heights-Westmount", "Humber Summit", "Humbermede", "Humewood-Cedarvale", "Ionview", "Islington-City Centre West", "Junction Area", "Keelesdale-Eglinton West", "Kennedy Park", "Kensington-Chinatown", "Kingsview Village-The Westway", "Kingsway South", "L'Amoreaux", "Lambton Baby Point", "Lansing-Westgate", "Lawrence Park North", "Lawrence Park South", "Leaside-Bennington", "Little Portugal", "Long Branch", "Malvern", "Maple Leaf", "Markland Wood", "Milliken", "Mimico", "Morningside", "Moss Park",
    "Mount Dennis", "Mount Olive-Silverstone-Jamestown", "Mount Pleasant East", "Mount Pleasant West", "New Toronto", "Newtonbrook East", "Newtonbrook West", "Niagara", "North Riverdale", "North St. James Town", "O’Connor-Parkview", "Oakridge", "Oakwood Village", "Old East York", "Palmerston-Little Italy", "Parkwoods-Donalda", "Pelmo Park-Humberlea", "Playter Estates-Danforth", "Pleasant View", "Princess-Rosethorn", "Regent Park", "Rexdale-Kipling", "Rockcliffe-Smythe", "Roncesvalles", "Rosedale-Moore Park", "Rouge", "Runnymede-Bloor West Village", "Rustic", "Scarborough Village", "South Riverdale", "South Parkdale", "St. Andrew-Windfields", "Steeles", "Stonegate-Queensway", "Tam O'Shanter-Sullivan", "The Beaches", "Thistletown-Beaumond Heights", "Thorncliffe Park", "Trinity-Bellwoods", "University of Toronto", "Victoria Village", "Waterfront Communities-The Island", "West Hill", "West Humber-Clairville", "Westminster-Branson", "Weston", "Weston-Pelham Park (Carleton Village)", "Wexford-Maryvale", "Willowdale East", "Willowdale West", "Willowridge-Martingrove-Richview", "Woburn", "Woodbine Corridor", "Woodbine-Lumsden", "Wychwood", "Yonge-Eglinton", "Deer Park", "Yonge-St. Clair", "York University Heights", "Yorkdale-Glen Park"  
  ];
  var searchResults
}
searchButtonEl.addEventListener("click", searchButtonHandler);