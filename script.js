document.getElementById('btn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the form from being submitted normally

  let ageValue = Number(document.getElementById("age").value);
  let nameValue = document.getElementById("name").value;

  let ageCheck = new Promise(function(resolve, reject) {
    if (ageValue >= 18) {
      resolve(nameValue);
    } else {
      reject(nameValue);
    }
  });

  ageCheck.then(function(name) {
    setTimeout(function() {
      alert(`Welcome, ${name}. You can vote.`);
    }, 4000);
  }).catch(function(name) {
    alert(`Oh sorry, ${name}. You aren't old enough.`);
  });
});