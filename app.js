// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)  // Returns promise, so .then
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile); // Because you're getting back data.profile @ line 18 from user data
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
