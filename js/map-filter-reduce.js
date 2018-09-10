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


let threeLangs = users.filter(user => {
     return user.languages.length >= 3;
});
console.log(threeLangs);

const emails = users.map(m => m.email);
console.log(emails);

const totalYears = users.reduce(
    (total, years) => {
    return total + years.yearsOfExperience;
}, 0);
console.log(totalYears/users.length);


const userNames = users.reduce((longest, user) => {
    if (user.email.length > longest.length) return user.email;
    else return longest;
}, "");
console.log(userNames);

let nameString = users.reduce((user, message, i) => {
    if (i < users.length-1)
    return `${message}, ${user.name},`
    else return `${message} and ${user.name}.`
},"Your instructors are: ")
console.log(nameString);

