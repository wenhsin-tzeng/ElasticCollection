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

  //put tag collection in a grid
  const gridcontainer = document.getElementById("grid-container");
  tags.forEach((tag) => {
    const div = document.createElement("div");

  //each individual tag is essentially a grid-item
    div.innerText = tag.fields.Name;
    div.classList.add("grid-item");

  //when mouseover, the image and border of the tag is shown
  //border color goes with the color category that is established in airtable
    div.addEventListener("mouseover", () => {
        div.style.backgroundImage = `url(${tag.fields.image[0].url})`;
        var tagColor = tag.fields.color;
        tagColor.forEach(function(color) {
          div.classList.add(color)
        })
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
          div.style.color = "transparent";
    });

    //when mouseout, image will disappear and an animation will be triggered
    div.addEventListener("mouseout", () => {
      div.style.backgroundImage = ``;
      div.classList.add("stay-animation");

    //when click, the user is directed to a new page showing the individual tag info
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
