import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tlRows = [
  {
    id: "1",
    date: "Building Applications in React and Flux",
    img: "https://github.com/fckey/shapit/blob/master/resources/pictures/fckey.png?raw=true",
    result: "improve",
    memo: "test",
  },
  {
    id: "2",
    date: "Building Applications in React and Flux",
    img: "https://github.com/fckey/shapit/blob/master/resources/pictures/fckey.png?raw=true",
    result: "good",
    memo: "test2",
  },
  {
    id: "3",
    date: "Building Applications in React and Flux",
    img: "https://github.com/fckey/shapit/blob/master/resources/pictures/fckey.png?raw=true",
    result: "outstanding",
    memo: "test3",
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (tlRow) => {
  return replaceAll(tlRow.img, ' ', '-');
};

class TimelineApi {
  static getAllTimeline() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tlRows));
      }, delay);
    });
  }

  static saveTimelineRow(tlRow) {
    tlRow = Object.assign({}, tlRow); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUrlLength = 1;
        if (tlRow.img.length < minUrlLength) {
          reject(`Title must be at least ${minUrlLength} characters.`);
        }

        if (tlRow.id) {
          const existingTimelineRowIndex = tlRows.findIndex(a => a.id == tlRow.id);
          tlRows.splice(existingTimelineRowIndex, 1, tlRow);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new tlRows in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          tlRow.id = generateId(tlRow);
          tlRows.push(tlRow);
        }
        resolve(tlRow);
      }, delay);
    });
  }

  static deleteTimeLineRow(tlRowId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTimeLineRowToDelete = tlRows.findIndex(tlRow => {
          tlRow.Id == tlRowId;
        });
        tlRows.splice(indexOfTimeLineRowToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TimelineApi;
