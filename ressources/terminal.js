export default function terminal() {

    function showHour() {

        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var seconde = now.getSeconds();
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        var showHour = hour + ":" + minute + ":" + seconde;
        var showDate = day + "/" + month + "/" + year;
        document.getElementById("dateOfTheDay").innerHTML = "Last login:" + showDate + ' ' + showHour + " on console";
    
    }

    setInterval(showHour, 1000);

    var linkedin = document.querySelector("#linkedin");
    var email = document.querySelector("#email");
    var twitter = document.querySelector("#twitter");

    function showLetterByLetter(element, text, interval) {
        var index = 0;
        setInterval(function() {
            if(index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
            }
        }, interval);
        console.log("Fonction appelée")
    }

    function showText() {
        showLetterByLetter(linkedin, " Linkedin", 200);
        showLetterByLetter(email, " Email", 200);
        showLetterByLetter(twitter, " Twitter", 200);
    }

    return {
        showText: showText
    }

}