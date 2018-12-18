let form = document.forms.sign_chooser;
let shower = document.getElementById("yourScope");
let shower2 = document.getElementById("getInfo");



//Sets up variables for later use. 
let luver, luk_num, luk_color, my_mood, the_daily, test_un;

shower.style.display = "none";
shower2.style.display = "block";
document.addEventListener("DOMContentLoaded", function() {
    document.forms.sign_chooser.addEventListener('submit', submitForm);
});

document.getElementById("rechoose").onclick = function () {
   shower.style.display = "none";
   shower2.style.display = "block";
   form.signs.value = "start";
   form.day.value = "start";
   form.month.value = "start";
};

function submitForm(e) {
  e.preventDefault();

  shower.style.display = "block";
  shower2.style.display = "none";

let zodiacName;

 if(form.signs.value !== "start" || form.month.value !== "start"){
  if(form.signs.value !== "start"){
    zodiacName = form.signs.value;
  }else{
    zodiacName = findZodiac(form.month.value, form.day.value);
  }

  //console.log(zodiacName);

  const url = "https://aztro.sameerkumar.website?sign="+zodiacName+"&day=today";
  fetch(url, {
    method: 'POST'
  })
  .then(response => response.json())
  .then(json => {
    //Setting the variables for replacing images as the keywords 
    luver = json.compatibility;
    luk_num = json.lucky_number;
    luk_color = json.color;
    my_mood = json.mood;
    the_daily = json.description;

    //Replacing the placeholder where the horoscope is to where it goes
    replaceP("your_sign", "Your sun sign is " + zodiacName);
    replaceP("your_daily", the_daily);


    //Replacing the image placeholder with the Unsplash photo 
    replaceImage("u_sign", zodiacName);
    replaceImage("luv_sign", luver);
    replaceImage("mood", my_mood);
    replaceImage("luck_color", luk_color);
    replaceImage("luck_number", luk_num);



  });


}else{
  //If you only have the default option and press continue, then an alert tells you to choose something.
  alert("Please choose a sun sign");
  shower.style.display = "none";
}


}



//Want to search for photos with the library
function searchPhotos(searchKey){
   unsplash.search.photos(searchKey, 1)
  .then(response => response.json())
  .then(json => {
    // Replace the photo here if you can eventually make the unsplash library work...
    //Gives back a list of photos related to that keyword
    //Choose a random one from that to display?
    
  });
}



function replaceP(itemID, item){
  document.getElementById(itemID).innerHTML = item;
}


function replaceImage(imgId, un_key){
    console.log(un_key);
    //Finds a random photo that relates to the keyword. 
    document.getElementById(imgId).src="https://source.unsplash.com/featured/?"+un_key;
 
}

function findZodiac(month, day){
  let astroSign;

  if (month === "dec"){
    if(day < 22){
      astroSign = "sagittarius";
    }else{
      astroSign = "capricorn";
    }
  }else if(month === "jan"){
    if(day < 20){
      astroSign = "capricorn";
    }else{
      astroSign = "aquarius";
    }
  }else if(month === "feb"){
    if(day < 19){
      astroSign = "aquarius";
    }else{
      astroSign = "pisces";
    }
  }else if(month === "mar"){
    if(day < 21){
      astroSign = "pisces";
    }else{
      astroSign = "aries";
    }
  }else if(month === "apr"){
    if(day < 20){
      astroSign = "aries";
    }else{
      astroSign = "taurus";
    }
  }else if(month === "may"){
    if(day < 21){
      astroSign = "taurus";
    }else{
      astroSign = "gemini";
    }
  }else if(month === "jun"){
    if(day < 21){
      astroSign = "gemini";
    }else{
      astroSign = "cancer";
    }
  }else if(month === "jul"){
    if(day < 23){
      astroSign = "cancer";
    }else{
      astroSign = "leo";
    }
  }else if(month === "aug"){
    if(day < 23){
      astroSign = "leo";
    }else{
      astroSign = "virgo";
    }
  }else if(month === "sep"){
    if(day < 23){
      astroSign = "virgo";
    }else{
      astroSign = "libra";
    }
  }else if(month === "oct"){
    if(day < 23){
      astroSign = "libra";
    }else{
      astroSign = "scorpio";
    }
  }else if(month === "nov"){
    if(day < 22){
      astroSign = "scorpio";
    }else{
      astroSign = "sagittarius";
    }
  }

  return astroSign;
}

