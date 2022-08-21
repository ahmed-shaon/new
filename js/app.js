function isBestFriend(friends) {
    const check = typeof(friends)
    if (check !== 'object') {
        return "this input is not valid";
    }
    const names = friends[0].name;
    const names1 = friends[1].name;
    const namesfriend = friends[0].friend;
    const namesfriend1 = friends[1].friend;
    if (names == namesfriend1 && names1 == namesfriend) {
        return true;
    } else {
        return false;
    }
}
const total = [
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "bbul" }
]
const a = isBestFriend(total);
console.log(a);