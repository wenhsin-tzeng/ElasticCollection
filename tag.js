var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key3HvxrMD4oBsB4C'}).base('applOVw32gRipkREK');

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
console.log(id);

base('Tags').find(id, function(err, record) {
  if (err) { console.error(err); return; }
  console.log('Retrieved', record);
  //
  // var tagName = document.createElement("div");
  // tagName.innertext =
  // document.querySelector(".Name").append(tagName);
  showInfo();
});

function showInfo(){
  const tags = [];
  tags.forEach((tag) => {
    var tagName = document.createElement("div");
    tagName.innertext = tag.fields.Name;
    document.querySelector(".Name").append(tagName);
  });
  console.log("showInfo()");
}
