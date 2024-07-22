// // Example of JavaScript functionality for interactive features
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Document loaded");
//   // Add interactive functionality here
// });

// // Function to demonstrate conditional statements
// function showBranchInfo(branch) {
//   let info;
//   if (branch === "executive") {
//     info = "The Executive branch is responsible for enforcing laws.";
//   } else if (branch === "legislative") {
//     info = "The Legislative branch is responsible for making laws.";
//   } else if (branch === "judiciary") {
//     info = "The Judiciary branch is responsible for interpreting laws.";
//   } else {
//     info = "Select a valid branch.";
//   }
//   alert(info);
// }

// // Example of a loop and array
// const branches = ["Executive", "Legislative", "Judiciary"];
// branches.forEach((branch) => {
//   console.log(branch);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Document loaded');
//     // Add interactive functionality here
// });

// function showBranchInfo(branch) {
//     let info;
//     if (branch === 'executive') {
//         info = 'The Executive branch is responsible for enforcing laws.';
//     } else if (branch === 'legislative') {
//         info = 'The Legislative branch is responsible for making laws.';
//     } else if (branch === 'judiciary') {
//         info = 'The Judiciary branch is responsible for interpreting laws.';
//     } else {
//         info = 'Select a valid branch.';
//     }
//     alert(info);
// }

// const branches = ['Executive', 'Legislative', 'Judiciary'];
// branches.forEach(branch => {
//     console.log(branch);
// });

// function submitComment() {
//     const commentBox = document.getElementById('userComments');
//     const comment = commentBox.value;
//     if (comment) {
//         alert('Your comment has been submitted: ' + comment);
//         commentBox.value = '';
//     } else {
//         alert('Please enter a comment before submitting.');
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");
  // Add interactive functionality here
});

function showBranchInfo(branch) {
  let info;
  if (branch === "executive") {
    info = "The Executive branch is responsible for enforcing laws.";
  } else if (branch === "legislative") {
    info = "The Legislative branch is responsible for making laws.";
  } else if (branch === "judiciary") {
    info = "The Judiciary branch is responsible for interpreting laws.";
  } else {
    info = "Select a valid branch.";
  }
  alert(info);
}

const branches = ["Executive", "Legislative", "Judiciary"];
branches.forEach((branch) => {
  console.log(branch);
});

function submitComment() {
  const commentBox = document.getElementById("userComments");
  const comment = commentBox.value;
  if (comment) {
    alert("Your comment has been submitted: " + comment);
    commentBox.value = "";
  } else {
    alert("Please enter a comment before submitting.");
  }
}
