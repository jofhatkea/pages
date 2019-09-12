const spreadsheetID = "1CGm7lGyvAxCTsS47oC_wQbExyxgwbnHEKwd6w1ytXCE";
const endpoint = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;

fetch(endpoint).then(res=>res.json()).then(showStuff);


function sortByStyle(a,b){
  console.log(a,b)
  if (a.gsx$style.$t > b.gsx$style.$t) {
    return -1;
  }
  if (a.gsx$style.$t < b.gsx$style.$t) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
function showStuff(data){
  //
  const myArray = data.feed.entry;
  //sort here
  myArray.sort(sortByStyle)
  myArray.forEach(showBeer)
  //
}

function showBeer(beerData){
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  //console.table(beerData)
  copy.querySelector("h1").textContent=beerData.gsx$style.$t;
  document.querySelector("section").appendChild(copy)
}
