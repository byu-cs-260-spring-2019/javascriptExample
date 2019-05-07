var isHidden = true;
function clickedButton(){
    if(isHidden){
        document.getElementById('answer').style.display = "block";
        isHidden = false;
        document.getElementById('button').innerHTML = "Hide answer";
    } else {
        document.getElementById('answer').style.display = "none";
        isHidden = true;
        document.getElementById('button').innerHTML = "Reveal answer";
    }
    
}