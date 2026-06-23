let age = parseInt(prompt("Enter your age : "));
if (age >= 18) {
  alert("Yes you can drive");
} else if (age < 0) {
  console.error(
    "You have entered negative number please enter correct detail again",
  );
} else {
  alert("You cann't drive because you are a baby ");
}
let ans = prompt("Do you want to see the prompt again : (Y/N)");
if (ans == "Y") {
  let age = parseInt(prompt("Enter your age : "));
  if (age >= 18) {
    alert("Yes you can drive");
  } else if (age < 0) {
    console.error(
      "You have entered negative number please enter correct detail again",
    );break;
  } else {
    alert("You cann't drive because you are a baby ");
  }
} else {
  alert("Thank youu");
}
