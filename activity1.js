score = 0;

function updateScore()
{
    score = score + 1;
    document.getElementById("Score").innerHTML = "Score : " + score;
}

function saveScore()
{
 localStorage.setItem("Score", score);
}

function nextPage()
{
    window.location ="activity_2.html";
}