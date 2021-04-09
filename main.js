console.log("TAGS");

var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key3HvxrMD4oBsB4C'}).base('applOVw32gRipkREK');

base('Tags').select({}).eachPage(gotPageOfTags, gotAllTags);

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
  showTags();
}

function consoleLogTags(){
  console.log("consoleLogTags()");
  tags.forEach((tag) => {
    console.log("Tag:", tag);
  });
}

function showTags() {
  console.log("showTags()");

  const gridcontainer = document.getElementById("grid-container");
  tags.forEach((tag) => {
    const div = document.createElement("div");
    div.innerText = tag.fields.Name;
    div.classList.add("grid-item");
    div.addEventListener("mouseover", () => {
      let tagImage = document.createElement("img");
      tagImage.src = tag.fields.image[0].url;
      gridcontainer.appendChild(tagImage);
      //div.src = tag.fields.image[0].url;
    });
    div.addEventListener("mouseout", () => {
      div.innerText = tag.fields.Name;
    });
    div.addEventListener("click", () => {
      document.location.href = 'tag.html';
    })
    gridcontainer.appendChild(div);

    // div.getElementByClassName("grid-item")[0].src = tag.fields.image[0].url;
    //
    // const h2 = document.createElement("h2");
    // h2.innerText = tag.fields.Name;
    // document.body.appendChild(h2);
  });
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
