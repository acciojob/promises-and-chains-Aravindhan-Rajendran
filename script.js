document.getElementById('btn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the form from being submitted normally
  
  let agevalue = Number(document.getElementById("age").value);
  let namevalue = document.getElementById("name").value;

  let agecheck = new Promise(function(resolve, reject) {
    if(agevalue >= 18){
      resolve();
    } else {
      reject();
    }
  });

  agecheck.then(function() {
    setTimeout(function() { alert("Welcome, " + namevalue + ". You can vote.") }, 4000);
  }).catch(function(){
    alert("Oh sorry " + namevalue+ "." + "You aren't old enough.")
  });
});