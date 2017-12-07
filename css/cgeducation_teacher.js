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

function getAvgRating (rating){
  var sum = 0;
  for (var i=0; i<rating.length; i++){
    sum += rating[i];
  }
  var avg = sum / rating.length;
  avg = Math.round(avg * 100) / 100;
  return avg;
}

function addTeacherRating (rating, newRating) {
  rating.push(newRating);
  return rating;
}

var newRating = prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?"){
  if (newRating >=0 && <=5){
    
  }
}
