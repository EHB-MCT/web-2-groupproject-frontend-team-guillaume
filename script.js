"use strict";

window.onload = function () {


    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();



        const challengeNameValue = document.getElementById("challengename").value
        const pointsValue = document.getElementById("lname").value
        const courseValue = document.getElementById("course").value
        const sessionValue = document.getElementById("session").value


        let challenge = {
            name: challengeNameValue,
            points: pointsValue,
            course: courseValue,
            session: sessionValue
        }


        function printOrder(name, points, course, session) {

            let container = document.getElementById("container");

            let htmlString = `
            
            <div class="result">

            <div class="headerresult">
            <i class="material-icons">delete</i>
            <i class="material-icons">create</i>
            </div>
            <h2> Challenge name : </h2> 
            <h3>${name}</h3>
            <h2> Points :</h2> 
            <h3>${points}</h3>
            <h2> Course : </h2> 
            <h3>${course}</h3>
            <h2> Session : </h2>
            <h3>${session}}</h3> 
            </div>
           `;

            container.insertAdjacentHTML("beforeend", htmlString);
            console.log(name);
        }


        printOrder(challenge.name, challenge.points, challenge.course, challenge.session);
    })

}