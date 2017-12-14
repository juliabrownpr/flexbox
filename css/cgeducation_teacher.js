console.log("This file is linked!");
var teacherName = "Mr. Paint";
var department = "Art";
var teacherRating = [2.3, 1.2, 0.5];

function addTeacherRating (teacherRating, newRating) {
  teacherRating.unshift(newRating);
  return teacherRating;
}

function getAvgRating (rating){
  var sum = 0;
  for (var i=0; i<addTeacherRating.length; i++){
    sum += addTeacherRating[i];
  }
  var avg = sum / addTeacherRating.length;
  avg = Math.round(avg * 100) / 100;
  return avg;
}

var newRating = parseInt(prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?"));
  if (newRating >=0 && newRating <=5) {
    console.log("Too many chickens");
    alert("Thanks for your review! " + teacherName + "'s average rating is now " + getAvgRating(addTeacherRating) + ".");
  } else {
    prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  }
