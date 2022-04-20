function onSignIn(userProfile) {
    console.log(userProfile);
  const profile = userProfile.getBasicProfile();
  console.log(profile);
  const userName = profile.getName();
  console.log(userName);

  const email =profile.getEmail();
  console.log(email);
}


// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }