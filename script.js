// window.onload = function(){
//     var isAnswerDisplayed = false;

//     document.getElementById('button').addEventListener('click', function(){
//         if(!isAnswerDisplayed){
//             document.getElementById('answer').style.display = "block";
//             document.getElementById('button').innerHTML = "Hide answer";
//             isAnswerDisplayed = true;
//         } else{
//             document.getElementById('answer').style.display = "none";
//             document.getElementById('button').innerHTML = "Reveal answer";
//             isAnswerDisplayed = false;
//         }
//     });
// }

var isAnswerDisplayed = false;
function clickedButton(){
    if(!isAnswerDisplayed){
        document.getElementById('answer').style.display = "block";
        document.getElementById('button').innerHTML = "Hide answer";
        isAnswerDisplayed = true;
    } else{
        document.getElementById('answer').style.display = "none";
        document.getElementById('button').innerHTML = "Reveal answer";
        isAnswerDisplayed = false;
    }
}