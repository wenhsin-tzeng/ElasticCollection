console.log("TAGS");

var Airtable = require('airtable');
console.log(Airtable);

var base = new Airtable({apiKey: 'key3HvxrMD4oBsB4C'}).base('applOVw32gRipkREK');

base('Tags').select({
  view: "interesting"
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

    div.addEventListener("mouseover", () => {
      div.style.backgroundImage = ``;
      div.innerText = tag.fields.Name;
      var tagColor = tag.fields.color;
      tagColor.forEach(function(color) {
        div.classList.add(color)
      })
        if (div.classList.contains("blue")) {
          div.style.borderColor = "blue";
          div.style.color = "blue";
        }
        if (div.classList.contains("purple")) {
          div.style.borderColor = "purple";
          div.style.color = "purple";
        }
        if (div.classList.contains("green")) {
          div.style.borderColor = "green";
          div.style.color = "green";
        }
        if (div.classList.contains("red")) {
          div.style.borderColor = "red";
          div.style.color = "red";
        }
        if (div.classList.contains("yellow")) {
          div.style.borderColor = "yellow";
          div.style.color = "yellow";
        }
        if (div.classList.contains("orange")) {
          div.style.borderColor = "orange";
          div.style.color = "orange";
        }
        if (div.classList.contains("grey")) {
          div.style.borderColor = "grey";
          div.style.color = "grey";
        }
        if (div.classList.contains("pink")) {
          div.style.borderColor = "pink";
          div.style.color = "pink";
        }
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
