const cardTimers = () => {
     const rainbowBG = [
         "lightcoral",
         "lightsalmon",
         "lightyellow",
         "lightgreen",
         "lightblue",
         "lightsteelblue",
         "lightslategrey"
     ]
     setTimeout(() => {
          let newProfilePic = document.querySelector('#profile-pic');
          newProfilePic.setAttribute('src', './img/codeup-logo-svg.svg');
     },2000);
     setTimeout(() => {
          let newProfileName = document.querySelector('#profile-name');
          newProfileName.innerHTML = "CodeUp Logo";
     },4000);
     setTimeout(() => {
          let newProfileDesc = document.querySelector('#profile-desc');
          newProfileDesc.classList.add('desc-green-sans');
     },6000);
     setInterval(()=> {
          let profileCardSwitch = document.querySelector('#profile-card');
          // if (profileCardSwitch.classList.contains('card-lime')) {
          //      profileCardSwitch.classList.remove('card-lime');
          // } else {
          //      profileCardSwitch.classList.add('card-lime');
          // }
          let randomColor = rainbowBG[(Math.floor(Math.random() * rainbowBG.length))];
          profileCardSwitch.setAttribute("style", `background-color:${randomColor}`);
     },2000);
     setTimeout(() => {
          let profileInput = prompt("Please select a new profile name");
          document.querySelector('#profile-name').innerHTML = `${profileInput}`;
     },8000);
}

(() => {
     cardTimers();
})();