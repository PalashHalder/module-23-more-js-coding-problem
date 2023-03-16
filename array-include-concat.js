const country = 'Bangladesh';
const age = 25;
const isIndependent = true;
const student = {
    id: 23,
    class: 12,
    name: 'Palash'
};

const friends = [25, 14, 13, 12, 21,];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using array
console.log(Array.isArray(friends));
console.log(typeof add);



//=================================
console.log(friends.includes(12));
console.log(friends.includes(27));

if (friends.indexOf(21) !== -1) {
    
}

const newFriendsAge = [31, 52, 65];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
