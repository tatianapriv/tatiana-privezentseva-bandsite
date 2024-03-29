//   {
//     ,
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//
//   },
//   {
//     title1: "date",
//     title2: "venue",
//     title3: "location",
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     title1: "date",
//     title2: "venue",
//     title3: "location",
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     title1: "date",
//     title2: "venue",
//     title3: "location",
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     title1: "date",
//     title2: "venue",
//     title3: "location",
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
//   {
//     title1: "date",
//     title2: "venue",
//     title3: "location",
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//     button: "Buy Tickets",
//   },
// ];
// const showData = []

const showList = document.getElementById("schedule__list");
function createEntry(show) {
  const showItem = document.createElement("li");
  showItem.classList.add("schedule__item");

  const showBox = document.createElement("div");
  showBox.classList.add("schedule__info");

  const showDate = document.createElement("p");
  showDate.innerText = "Date";
  showDate.classList.add("schedule__main");

  const showDay = document.createElement("p");
  showDay.innerText = show.date;
  const dateObj = new Date(show.date);

  showDay.innerText = dateObj.toDateString();
  showDay.classList.add("schedule__secondary");
  showDay.classList.add("schedule__secondary--bold");

  const showVenue = document.createElement("p");
  showVenue.innerText = "Venue";
  showVenue.classList.add("schedule__main");

  const showPlace = document.createElement("p");

  showPlace.innerText = show.place;
  showPlace.classList.add("schedule__secondary");

  const showLocation = document.createElement("p");
  showLocation.innerText = "Location";
  showLocation.classList.add("schedule__main");

  const showCity = document.createElement("p");
  showCity.innerText = show.location;
  showCity.classList.add("schedule__secondary");

  const showButton = document.createElement("button");
  showButton.innerText = "buy tickets";
  showButton.classList.add("schedule__btn");

  showBox.appendChild(showDate);
  showBox.appendChild(showDay);
  showBox.appendChild(showVenue);
  showBox.appendChild(showPlace);
  showBox.appendChild(showLocation);
  showBox.appendChild(showCity);
  showBox.appendChild(showButton);

  showItem.appendChild(showBox);
  showList.appendChild(showItem);
}

const apiKey = `bb2d5188-5244-467d-b438-53e12d25d7ba`;
const getRequest = "showdates";
const showdatesURL = `https://project-1-api.herokuapp.com`;

let showData = [];

function getAPIData() {
  axios
    .get(`${showdatesURL}/${getRequest}?api_key=${apiKey}`)
    .then((response) => {
      showData = response.data;
      showData.forEach((showdates) => {
        displayEntries(
          showdates.date,
          showdates.place,
          showdates.location,
          showList
        );
        // function attachEventListener(paragraph) {
        //   paragraph.addEventListener("click", paragraphClick);
        // }
        // paragraphs.forEach(attachEventListener);

        const paragraphs = document.querySelectorAll(".schedule__item");
        paragraphs.forEach((paragraph) => {
          paragraph.addEventListener("click", paragraphClick);
        });
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
getAPIData();

function displayEntries() {
  showList.innerText = "";
  for (let i = 0; i < showData.length; i++) {
    //console.log("date", showData[0].date);
    //console.log("location", showData[0].location);
    //console.log("place", showData[0].place);
    createEntry(showData[i]);
  }
}
displayEntries();

function paragraphClick(event) {
  const paragraphs = document.querySelectorAll(".schedule__item");

  paragraphs.forEach((paragraph) => {
    paragraph.classList.remove("selected");
  });
  console.log("paragraph", paragraphs);
  event.currentTarget.classList.add("selected");
}
