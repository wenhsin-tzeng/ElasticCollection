var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key3HvxrMD4oBsB4C'}).base('applOVw32gRipkREK');

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
console.log(id);



base('Tags').find(id, function(err, record) {
  if (err) { console.error(err); return; }
  console.log('Retrieved', record);


    var tagName = document.createElement("div");
    tagName.innerHTML = record.fields.Name;
    document.body.append(tagName);
    console.log("Tag name:", tagName);
    tagName.classList.add("caption");

    let tagType =  document.createElement("div");
    tagType.innerHTML = record.fields.type[0];
    document.body.append(tagType);
    console.log("Tag category:", tagType);
    tagType.classList.add("category");

    let tagImage =  document.createElement("div");
    tagImage.style.backgroundImage = `url(${record.fields.image[0].url})`;
    document.body.append(tagImage);
    console.log("Tag Image:", tagImage);
    tagImage.classList.add("tag-image");


  // let tagName = record.fields.Name;
  // console.log("Tag name:", tagName);
  // tagName
  //
  // let tagImage = record.fields.image.url;
  // console.log(tagImage);
  //
  // var tagName = document.createElement("div");
  // tagName.innertext =
  // document.querySelector(".Name").append(tagName);

});

// function showInfo(){
//   var tagName = document.createElement("div");
//   tagName.innertext = record.fields.Name;
//   tagName.classList.add("Name");
//   document.body.append(tagName);
// }

// function showInfo(){
//   const tags = [];
//   tags.forEach(tag) => {
//     var tagName = document.createElement("div");
//     tagName.innertext = tag.fields.Name;
//     document.querySelector("Name").append(tagName);
//   });
//   console.log("showInfo()");
// }
