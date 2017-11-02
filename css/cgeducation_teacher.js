console.log("This file is linked!");
var teacherName = "Mr. Paint";
var department = "Art";
var rating = [2.3, 1.2, 0.5];

console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + rating);

var sum = 0;
for (var i=0; i<rating.length; i++){
  sum += rating[i];
  console.log(sum);
}

var avg = sum / rating.length;
console.log(avg);

avg = Math.round(avg * 100) / 100;
console.log(avg);
