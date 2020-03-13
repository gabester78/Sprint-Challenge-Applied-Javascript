// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(response => {
//     console.log(response);
//   });

// const subjects = ["Javascript", "BootStrap", "Technology", "Jquery", "Node.js"];

function tab(data) {
  const div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = `${data.topics}`;
  topics.append(div);

  return div;
}
const topics = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.message.forEach(item => {
      topics.append(tab(item));
    });
  });

// subjects.map(topics => {
//   axios
//     .get("https://lambda-times-backend.herokuapp.com/topics" + topics)
//     .then(obj => tab(obj.data));
// });

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(obj => tab(obj.data));
