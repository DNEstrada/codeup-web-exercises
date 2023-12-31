const users = [
     {
          id: 1,
          name: 'ryan',
          email: 'ryan@codeup.com',
          languages: ['clojure', 'javascript'],
          yearsOfExperience: 5
     },
     {
          id: 2,
          name: 'luis',
          email: 'luis@codeup.com',
          languages: ['java', 'scala', 'php'],
          yearsOfExperience: 6
     },
     {
          id: 3,
          name: 'zach',
          email: 'zach@codeup.com',
          languages: ['javascript', 'bash'],
          yearsOfExperience: 7
     },
     {
          id: 4,
          name: 'fernando',
          email: 'fernando@codeup.com',
          languages: ['java', 'php', 'sql'],
          yearsOfExperience: 8
     },
     {
          id: 5,
          name: 'justin',
          email: 'justin@codeup.com',
          languages: ['html', 'css', 'javascript', 'php'],
          yearsOfExperience: 9
     }
];
(()=>{
     const threeLngUsers = users.filter(user=>{
          return user.languages.length >= 3;
     });
     console.log(threeLngUsers);

     const arrEmails = users.map(user=>{
          return user.email;
     });
     console.log(arrEmails);

     const totalYrsExp = users.reduce((accumulator, user)=>{
          // * can add if statement if at last index.html, return the average yrs
          return accumulator + user.yearsOfExperience;
     }, 0);
     console.log(totalYrsExp);
     const avgYrsExp = (totalYrsExp / users.length);
     console.log(avgYrsExp);

     const longestEmail = users.reduce((accumulator, user)=>{
          if (user.email.length > accumulator.length) {
               return user.email;
          } else {
               return accumulator;
          }
     }, ''); // * start with index.html 0
     console.log(longestEmail);

     const listOfUsers = users.reduce((accumulator, user)=>{
        return accumulator + user.name + ',';
     }, '');
     let sepUsersNames = listOfUsers.split(",");
     sepUsersNames.pop();
     console.log('Your instructors are: ', sepUsersNames.join(', ') + '.');

     const fullList = users.reduce((accumulator, user)=> {
          return accumulator + user.languages.join(',') + ',';
     }, []);
     let orderedList = fullList.split(',');
     orderedList.pop();
     const finalList = [... new Set(orderedList)];
     console.log(finalList);
})();