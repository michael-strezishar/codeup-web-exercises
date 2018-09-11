// function wait (n) {
//     const numPromise = new Promise ((resolve, reject) => {
//         setTimeout(() => resolve(), n);
//     });
//     return numPromise;
//     };
//
// wait(1000).then(()=> console.log("You\ll see this after 1 second"));
// wait(4000).then(()=> console.log("You\ll see this after 4 seconds"));

// fetch(www.github.com, {headers: {"Authorization": " token d093c2881d261c18ad2f25e2fe96a6d3b00bd891"}})
//
// function gitHubName () {
//     return fetch("https://api.github.com/michael-strezishar")
//         .then(response => response.json())
//
//
//
// }
//
// console.log(gitHubName());

const lastPush = username => {

    return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token '}})
        .then(response => response.json())
        .then(e => e.filter(event => event.type === 'PushEvent'))
        .then (event => event[0].created_at.substr(0, 10))
        .catch(err => console.log(err));
};

    lastPush('michael-strezishar')
    .then(data => console.log('Last Push:', data));

