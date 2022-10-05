//TODO: Challenge
/*
1. Move the data to a file called data.js 
and import it into index.js.
*/
// import { catsData } from "./data";

const catsData = [
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "angry.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody", "insomniac"],
    isGif: false,
    image: "angry2.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "angry3.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["confused", "sad"],
    isGif: false,
    image: "confused.jpeg",
    alt: "A cat looking confused",
  },
  {
    emotionTags: ["dominant", "moody"],
    isGif: false,
    image: "dominant.jpeg",
    alt: "A cat looking dominant",
  },
  {
    emotionTags: ["happy", "relaxed"],
    isGif: false,
    image: "happy.jpeg",
    alt: "A cat looking happy",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "hungry.jpeg",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "hungry1.jpeg",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "insomnia.jpeg",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "insomnia1.jpeg",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["relaxed"],
    isGif: false,
    image: "lazy.jpeg",
    alt: "A cat looking lazy",
  },
  {
    emotionTags: ["scared"],
    isGif: false,
    image: "nervous.jpeg",
    alt: "A cat looking nervous",
  },
  {
    emotionTags: ["sad"],
    isGif: false,
    image: "sad.jpeg",
    alt: "A cat looking sad",
  },
  {
    emotionTags: ["sad", "moody"],
    isGif: false,
    image: "sad1.jpeg",
    alt: "A cat looking sad",
  },
  {
    emotionTags: ["moody"],
    isGif: true,
    image: "angry.gif",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody"],
    isGif: true,
    image: "angry2.gif",
    alt: "A cat looking angry",
  },
  {
    emotionTags: ["confused"],
    isGif: true,
    image: "confused2.gif",
    alt: "A cat looking confused",
  },
  {
    emotionTags: ["dominant"],
    isGif: true,
    image: "dominant.gif",
    alt: "A cat looking dominant",
  },
  {
    emotionTags: ["happy"],
    isGif: true,
    image: "happy.gif",
    alt: "A cat looking happy",
  },
  {
    emotionTags: ["hungry", "sad", "confused"],
    isGif: true,
    image: "confused.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: true,
    image: "hungry.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: true,
    image: "hungry2.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["insomniac", "scared"],
    isGif: true,
    image: "insomnia2.gif",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["relaxed"],
    isGif: true,
    image: "lazy.gif",
    alt: "A cat looking relaxed",
  },
  {
    emotionTags: ["relaxed"],
    isGif: true,
    image: "relaxed2.gif",
    alt: "A cat looking relaxed",
  },
  {
    emotionTags: ["scared", "sad"],
    isGif: true,
    image: "nervous.gif",
    alt: "A cat looking nervous",
  },
  {
    emotionTags: ["scared"],
    isGif: true,
    image: "nervous2.gif",
    alt: "A cat looking scared",
  },
  {
    emotionTags: ["sad"],
    isGif: true,
    image: "sad.gif",
    alt: "A cat looking sad",
  }, //trailing comma
];
//! DOM ZONE
const emotionRadios = document.getElementById("emotion-radios");
//TODO:Challenge
/*
1. Add an eventListener to emotionRadios that will listen 
   out for any *change* in our radio buttons. When it detects
   a change, it should log out the id of the element that 
   was selected.
⚠️️ ️T️h️is won't work if the eventListener is listening out for a 
   'click'. Google what event to listen for - I've already 
   given you a clue!
*/
emotionRadios.addEventListener("change", function (e) {
  console.log(e.target.id);
});
function getEmotionsArray(cats) {
  //TODO: Challenge
  /*
1. Set up a "for of" in getEmotionsArray to iterate 
   over the data.
2. For now, just log out each cat object individually.
*/
  const emotionArray = [];
  for (let cat of cats) {
    //TODO: Challenge
    /*
  1. Add a nested "for of" to log out just 
     the emotions from the emotionTags array 
     in each object.
  */
    for (let emotion of cat.emotionTags) {
      //TODO: Challenge
      /*
1. Refactor this nested for of so that an 
   emotion is only pushed to emotionsArray
   if it is not already in emotionsArray.
   Extra kudos if you use the "logical not"
   operator - feel free to google it!
*/ if (!emotionArray.includes(emotion)) emotionArray.push(emotion);
    }
  }
  return emotionArray;
  //TODO: Challenge
  /*
1. Set up a const and initialise it with 
   an empty array.
2. Instead of logging out each emotion, 
   push each one to the new array.
3. At the end of the function, log out the 
   const holding the new array.
*/

  //! nested for loops are difficult to understand try to use for of instead
  /*   const emotionsArray = [];
     for (let i = 0; i < cats.length; i++) {
       for (let j = 0; j < cats[i].emotionTags.length; j++) {
         emotionsArray.push(cats[i].emotionTags[j]);
      }
     }*/
}

function renderEmotionsRadios(cats) {
  //TODO: Challenge
  /*
    1. Have the new function "renderEmotionsRadios" 
       take in a single parameter. Name that parameter
       "cats". 
    2. Inside renderEmotionsRadios, set up a const called 
       "emotions" and set it equals to whatever is returned 
       by calling getEmotionsArray, passing in "cats" as an 
       argument.
    3. For now, renderEmotionsRadios should just log out 
       "emotions".
    4. Call renderEmotionsRadios passing in catsData.
    */
  const emotions = getEmotionsArray(cats);
  let radioItems = ``;

  for (let emotion of emotions) {
    //TODO: Challenge
    /*
1. Swap out `<p>${emotion}</p>` for HTML
   that will render a radio input for each
   emotion. Remember to use "type", "id", 
   "value", and "name" properties on each radio.
   ("id" and "value" can both be set to the
   "emotion").
2. Remember to give each radio a label.
   (What property does a label need?)
3. Enclose each individual radio input in this div:
   <div class="radio">
      **RADIO HERE**
   </div>
*/

    radioItems += `<div class="radio">
      <label for ="${emotion}">${emotion}</label>
    <input type="radio" id="${emotion}" value="${emotion}" name="emotions"></input></div>`;
  }
  emotionRadios.innerHTML = radioItems;
  //TODO: Challenge
  /*
1. Take control of the 'emotion-radios' div.
2. In renderEmotionsRadios, set up a let 
   to hold our string of HTML. You can initialise
   it with an empty string.
3. Iterate over "emotions" and put each emotion 
   in a <p> tag and then add them to the let you 
   created in step 2. 
4. Render the string to the 'emotion-radios' div.
*/
}
renderEmotionsRadios(catsData);
