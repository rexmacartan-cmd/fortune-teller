const fortunes = [
  "A new oppurtunity is approaching. Stay Focused and be ready to act when it appears.",
  "A meaningful connection may grow stronger soon. Be open and honest with the people around you.",
  "Your patience with money and your willingness to learn can create better oppurtunities ahead.",
  "Your hardwork is building towards something bigger. Keep developing your skills.",
  "A change of environment could bring fresh ideas and unexpected experiences.",
  "Something that once confused you may soon become clearer. Trust the lessons you've gained",
  "A difficult moment may test your discipline but overcoming it can make you stronger.",
  "You are entering a period where a small decisions can lead to a completely new direction"
];
const pastReadings = []

function check(){
  let firstName = document.getElementById("First-Name").value;
  let lastName = document.getElementById("Last-Name").value;

  if(firstName == "" && lastName == ""){
    document.getElementById("results").textContent = "Input Personal Details"
  }
  else if (firstName == ""){
    document.getElementById("results").textContent = "Input First Name"
  }
  else if(lastName == ""){
    document.getElementById("results").textContent = "Input Last Name"
  }else{

    document.getElementById("name").textContent = "Name: " + ` ${firstName}  ${lastName} `
    
    let luckScore = Math.floor(Math.random() * 100) + 1;
    document.getElementById("luckScore").textContent = "Cosmos Luck Score = " + luckScore
    
    let fortuneResult = Math.floor(Math.random() * fortunes.length) + 1;
    let result = "Fortune: " + fortunes[fortuneResult]
    document.getElementById("results").textContent = result
    
    let luck = ""
    if(luckScore >= 50){
      luck = "You Are Blessed"
      document.getElementById("resultsover").textContent = luck
    }else{
      luck = "You Are Cursed"
      document.getElementById("resultsover").textContent = luck
    }
  }
}



