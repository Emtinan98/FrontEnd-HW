// Question 1:
const friends = ["Melissa", "Marc", "Andrew", "Nick"];
friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase())

})

// Question 2:
const numbers = [1, 5, 8]
const timesTwo = numbers.map(num => num ** 2)
{
    console.log(timesTwo)
}

// Question 3:
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"]
arr=instructors.map(names=>names + " is awesome") 
    console.log(arr)

// Question 4: chick reduce
const nums = [25, 6, 8, 3]
let sum = nums.filter(x => x %2==0)
console.log(sum.length)

// Question 5:
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let result1 = people.filter((people) => people.includes("je")) 
console.log(result1);

// Arrow Methods 
// 1
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const result = average( [8, 2, 2, 4] ); 
console.log(result);
// 2 
let reverseWord =(word => word.split("").reverse().join(""));
console.log(reverseWord("caterpillar"));

// Objects Exercise: The Movie Database
function Movie(title, duration, stars) {
  this.title = title;
  this.duration = duration;
  this.stars= stars;
  this.info = function() {
    console.log(`${title}. lasts for ${duration} minutes  Stars: ${stars} Living Sneezes`)
  }
}

let movie1 = new Movie("Puff the Magic Dragon", 30, ["Puff"," Jackie"])
movie1.info();
