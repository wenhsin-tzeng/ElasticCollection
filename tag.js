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
    console.log("Show tag name", tagName);
    tagName.classList.add("caption");

    tagName.addEventListener("mouseover", () => {
      tagName.style.color = "yellow";
    })
    tagName.addEventListener("click", () => {
      tagName.classList.add("caption-move");
    })
    tagName.addEventListener("mouseout", () => {
      tagName.style.color = "black";
    })

    let tagType =  document.createElement("div");
    tagType.innerHTML = record.fields.type[0];
    document.body.append(tagType);
    console.log("Show tag category", tagType);
    tagType.classList.add("category");

    // var filterbyType = record.fields.type[0];
    // filterbyType.forEach(function(color) {
    //   tagType.classList.add(color)
    // })

    tagType.addEventListener("click", () => {
      if (tagType.innertext.contains("colorful")){
        document.location.href = 'colorful.html';
      }
      if (tagType.innerHTML = "black&white"){
        document.location.href = "blacknwhite.html";
      }
      if (tagType.innerHTML = "interesting"){
        document.location.href = "interesting.html";
      }
    })

    let tagImage =  document.createElement("div");
    tagImage.style.backgroundImage = `url(${record.fields.image[0].url})`;
    document.body.append(tagImage);
    console.log("Show tag image", tagImage);
    tagImage.classList.add("tag-image");

    let brandurl = document.createElement("div");
    brandurl.innerHTML = "Visit: " + record.fields.URL;
    console.log("Show Official website:", record.fields.URL);
    // document.body.append(brandurl);
    //
    //   if (brandurl.classList.contains("none")){
    //     brandurl.classList.add("url-style-white");
    //   } else {
    //     // brandurl.innerHTML = "Visit: " + record.fields.URL;
    //     // document.body.append(brandurl);
    //     brandurl.classList.add("url-style");
    //
    //     brandurl.addEventListener("click", () => {
    //       document.location.href = record.fields.URL;
    //     })
    //   }

    document.body.append(brandurl);
    brandurl.classList.add("url-style");

    brandurl.addEventListener("click", () => {
      document.location.href = record.fields.URL;
    })

    var cursor = document.querySelector(".cursor");
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    })


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
