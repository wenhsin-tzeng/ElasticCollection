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
    //Goal:
    //I don't want records that has "none" for their "record.fields.URL" to be shown
    //However, the code below doesn't work
    //----------
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
    //----------
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

//This entire section below is me trying to use Math.random() to pull up a random record from airtable
//my thought process:
//1: Get a random number from 1-100 with Math.random()
//2: Pull up the specific record with the same number through "record.fields.Number"
//3. Change info that is shown on the website into the info of the random record that is generated
//--------however, the code below is not working


function myFunction() {
  // console.log("Random Number:", x);
  base('Tags').select({}).eachPage(gotPageOfTags, gotAllTags);
  // var tagNum = url.searchParams.get("Number");
  // console.log(id);
}

const tags = [];

function gotPageOfTags(records, fetchNextPage){
  console.log("gotPageOfTags()");
  tags.push(...records);
  fetchNextPage();
}

function gotAllTags(err){
  console.log("gotAllTags()");

  if (err){
  console.log("error loading tags");
  console.error(err);
  return;
  }

  consoleLogTags();
  try {
    showTags();
  } catch(err) {
    console.error(err);
  }
}

function consoleLogTags(){
  console.log("consoleLogTags()");
  tags.forEach((tag) => {
    console.log("Tag:", tag);
  });
}

function showTags() {
  console.log("showTags()");
  tags.forEach((tag) => {
    // let tagNum = tag.fields.Number;
    // console.log(tagNum);
    let x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
    // if (x = tag.fields.Number){
    //   var tagCaption = url.searchParams.get("Name");
    //
    //   // base('Tags').find(tagNum, function(err, record) {
    //   //   if (err) { console.error(err); return; }
    //   console.log(tagCaption);
    //   // });
    // }
  })
}
