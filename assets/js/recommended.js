var searchButtonEl = document.querySelector("#searchIcon");
var userSearchInputEl = document.querySelector("#search");
var searchResultsWrapperEl = document.querySelector("#searchResultsWrapper")
var favouriteBtnEl = document.querySelector("#favouriteBtn");
// var searchIdCounter = 0;
var neighbourhoods = [
    "agincourt north", "agincourt south-malvern west", "alderwood", "annex", "banbury-don mills", "bathurst manor", "bay street corridor", "bayview village", "bayview woods-steeles", "bedford park-nortown", "beechborough-greenbrook", "bendale", "birchcliffe-Cliffside", "black creek", "blake-jones", "briar hill-belgravia", "bridle path-sunnybrook-york mills", "broadview north", "brookhaven-amesbury", "cabbagetown-south st. james town", "caledonia-fairbank", "casa loma", "centennial scarborough", "church-yonge corridor", "clairlea-birchmount", "clanton park", "cliffcrest", "corso italia-davenport", "crescent town", "danforth-east york", "danforth", "don valley village", "dorset park", "dovercourt-wallace emerson-junction", "downsview-roding-cfb", "dufferin grove", "east end-danforth", "edenbridge-humber valley", "eglinton east", "elms-old rexdale", "englemount-lawrence", "eringate-centennial-west deane", "etobicoke west mall", "flemingdon park", "forest hill north", "forest hill south", "glenfield-jane heights", "greenwood-coxwell", "guildwood", "henry farm", "high park north", "high park-swansea", "highland creek", "hillcrest village", "humber heights-westmount", "humber summit", "humbermede", "gumewood-cedarvale", "ionview", "islington-city centre west", "junction area", "keelesdale-eglinton west", "kennedy park", "kensington-chinatown", "kingsview village-the westway", "kingsway south", "l'amoreaux", "lambton baby point", "lansing-westgate", "lawrence park north", "lawrence park south", "leaside-bennington", "little portugal", "long branch", "malvern", "maple leaf", "markland wood", "milliken", "mimico", "morningside", "moss park",
    "mount dennis", "mount olive-silverstone-jamestown", "mount pleasant east", "mount pleasant west", "new toronto", "newtonbrook east", "newtonbrook west", "niagara", "north riverdale", "north st. james town", "o'connor-parkview", "oakridge", "oakwood village", "old east york", "palmerston-little italy", "parkwoods-donalda", "pelmo park-humberlea", "playter estates-danforth", "pleasant view", "princess-rosethorn", "regent park", "rexdale-kipling", "rockcliffe-smythe", "roncesvalles", "rosedale-moore park", "rouge", "runnymede-bloor west village", "rustic", "dcarborough village", "south riverdale", "south parkdale", "st. andrew-windfields", "steeles", "stonegate-queensway", "tam o'shanter-sullivan", "the beaches", "thistletown-beaumond heights", "thorncliffe park", "trinity-bellwoods", "university of toronto", "victoria village", "waterfront communities-the island", "west hill", "west humber-clairville", "westminster-branson", "weston", "weston-pelham park (carleton village)", "wexford-maryvale", "willowdale east", "willowdale west", "willowridge-martingrove-richview", "woburn", "woodbine corridor", "woodbine-lumsden", "wychwood", "yonge-eglinton", "deer park", "yonge-st. clair", "york university heights", "yorkdale-Glen Park"
];

function searchButtonHandler() {
  // query neighbourhoods based on user input
  userSearchInputEl = search.value.toLowerCase();
  localStorage.setItem('city search', userSearchInputEl);
  // need to add a way to save multiple searches, most likey with a for loop 
  console.log(userSearchInputEl);
  var searchResults = neighbourhoods.includes(userSearchInputEl);
  if (searchResults === false || searchResults === null) {
    window.alert("Invalid entry. Please try again!");
  } else {
    console.log(searchResults);
    generateSearchResults(userSearchInputEl);
  }
}

function generateSearchResults() {
  // make search results appear on page
  searchResultsWrapperEl.style.display = "block";
}

function favouriteBtnHandler() {
  localStorage.setItem('city search favorite', userSearchInputEl);
  console.log("This neighbourhood has been added to your favourites!")
}

searchButtonEl.addEventListener("click", searchButtonHandler);
favouriteBtnEl.addEventListener("click", favouriteBtnHandler);

/////////////////////////// extra /// code //////////////////////////////