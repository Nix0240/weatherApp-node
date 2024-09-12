// console.log("This is from js file")

// fetch("http://localhost:3000/weather?address=boston").then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.address)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
// messageOne.textContent = "This is paragraph";
// messageTwo.textContent = "Rhsi second paragraph";

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent="Loading..."
  messageTwo.textContent=""
  // console.log(location)
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.address;
          messageTwo.textContent = data.forecast;
          console.log(data.address);
          console.log(data.forecast);
        }
      });
    }
  );
});
