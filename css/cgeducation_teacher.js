console.log("This file is linked!");
var teacherName = "Mr. Paint";
var department = "Art";
var rating = [2.3, 1.2, 0.5];

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

var newRating = prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  if (newRating >=0 && <=5) {
    addTeacherRating;
    alert("Thanks for your review! " + teacherName + "average rating is now " + getAvgRating + ".");
  } else {
    prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  }
