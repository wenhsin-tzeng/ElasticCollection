console.log("TAGS");

var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key3HvxrMD4oBsB4C'}).base('applOVw32gRipkREK');

base('Tags').select({
  view: "black_white"
}).eachPage(gotPageOfTags, gotAllTags);

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

  const gridcontainer = document.getElementById("grid-container");
  tags.forEach((tag) => {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${tag.fields.image[0].url})`;
    div.classList.add("grid-item");
    div.innerText = tag.fields.Name;
    div.style.borderColor = "transparent";

    div.addEventListener("mouseover", () => {
      div.style.backgroundImage = ``;
      div.innerText = tag.fields.Name;
      div.style.borderColor = "black";
      div.style.color = "black";

    });
    div.addEventListener("mouseout", () => {
      div.style.backgroundImage = `url(${tag.fields.image[0].url})`;
      div.style.color = "transparent";
      div.style.borderColor = "transparent";
    });
    div.addEventListener("click", () => {
      document.location.href = 'tag.html?id=' + tag.id;

    })
    gridcontainer.appendChild(div);
  });
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})
