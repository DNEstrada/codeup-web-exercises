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
     // * instructor walkthrough: variables can be outside of timer functions
     setTimeout(() => {
          let newProfilePic = document.querySelector('#profile-pic');
          newProfilePic.setAttribute('src', './img/codeup-logo-svg.svg');
     },2000);
     setTimeout(() => {
          let newProfileName = document.querySelector('#profile-name');
          // * can also use innerText here
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
          // * can also change it with profileCardSwitch.style.backgroundColor
          // * to keep pure put colorsArr in function argument and reference it each occurance of array
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