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
    div.innerText = tag.fields.Name;
    div.classList.add("grid-item");

    // var width = window.innerWidth;
    // if (width <= 400) {
    //
    // } else {
    //
    // }


    div.addEventListener("mouseover", () => {
        div.style.backgroundImage = `url(${tag.fields.image[0].url})`;
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

          }
          if (div.classList.contains("yellow")) {
            div.style.borderColor = "yellow";

          }
          if (div.classList.contains("orange")) {
            div.style.borderColor = "orange";

          }
          if (div.classList.contains("grey")) {
            div.style.borderColor = "grey";

          }
          if (div.classList.contains("pink")) {
            div.style.borderColor = "pink";

          }
          if (div.classList.contains("black")) {
            div.style.borderColor = "black";

          }
          div.style.color = "transparent";
    });
    div.addEventListener("mouseout", () => {
      div.style.backgroundImage = ``;
      if (div.classList.contains("blue")) {
        div.style.borderColor = "blue";

      }
      if (div.classList.contains("purple")) {
        div.style.borderColor = "purple";

      }
      if (div.classList.contains("green")) {
        div.style.borderColor = "green";

      }
      if (div.classList.contains("red")) {
        div.style.borderColor = "red";

      }
      if (div.classList.contains("yellow")) {
        div.style.borderColor = "yellow";

      }
      if (div.classList.contains("orange")) {
        div.style.borderColor = "orange";

      }
      if (div.classList.contains("grey")) {
        div.style.borderColor = "grey";

      }
      if (div.classList.contains("pink")) {
        div.style.borderColor = "pink";

      }
      if (div.classList.contains("black")) {
        div.style.borderColor = "black";

      }
      div.classList.add("stay-animation");

    });
    div.addEventListener("click", () => {
      document.location.href = 'tag.html?id=' + tag.id;
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
