$(function () {
    userIsLoggedIn(function (loggedIn, retrievedUser) {
        console.log('START_______________', loggedIn);
    }, 88)
})


function userIsLoggedIn(cb, retrievedUser) {
    console.log('LOGGED___INI__________', typeof cb);
    console.log('retrievedUser____________________', retrievedUser);
    cb(2, 5)
}
