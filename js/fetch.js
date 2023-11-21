import { keys } from "./keys.js";

const getCommitDate = (username) => {
     const url = `https://api.github.com/users/${username}/events`;
     const options = {
          method: "GET",
          headers: {
               "Content-Type": "application/json",
               'Authorization': `Bearer ${keys.github}`
          }
     }
     return fetch (url, options)
          .then((response) => {
               return response.json();
          })
          .then((data) => {
               const pushEvents = data.filter((data)=> {
                    return data.type = "PushEvent";
               });
               console.log(pushEvents);
               const commitDate = new Date(pushEvents[0].created_at);
               console.log(commitDate.toString());
          })
          .catch ((error)=> {
               console.log(error);
          });
};

(()=> {
     getCommitDate("DNEstrada");
})();