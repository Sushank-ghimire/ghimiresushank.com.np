document.addEventListener("DOMContentLoaded", () => {
  const visitors = document.querySelector("visitors");
  fetch("https://portfilio-visitors.onrender.com/api/v1/visitors/")
    .then((res) => {
      console.log("Response : ", res);
      return res.json();
    })
    .then((data) => {
      console.log("Data : ", data);
      visitors.innerHTML = `${data.data.visits || 50}`;
    })
    .catch((err) => {
      console.log(`Error while fetching profile visitors : ${err.message}`);
    });
});

/** 
 * 
 * 
 * 

 */
