"use strict";

window.onload = function () {

    function call() {

        let container = document.getElementById("container");

        let htmlString = ""

        fetch('https://challenge-app-team-guillaume.herokuapp.com/challenges', {
                method: 'GET'
            })
            .then(response => {
                return response.json()
            })
            .then(data => {


                for (let i = 0; i < data.length; i++) {
                    htmlString = `
                    <div class="result" id="${data[i]._id} ">
                    <div class="headerresult">
                    <i class="material-icons delete" id="${data[i]._id}">delete</i>
                    <i class="material-icons update">create</i>
                    </div>
                    <h2> Challenge: </h2> 
                    <h3>${data[i].name}</h3>
                    <h2> Points :</h2> 
                    <h3>${data[i].points}</h3>
                    <h2> Course : </h2> 
                    <h3>${data[i].course}</h3>
                    <h2> Session : </h2>
                    <h3>${data[i].session}</h3> 
                    </div>
                   `
                    container.insertAdjacentHTML("beforeend", htmlString)
                }
            })

        // .then(data => {
        //     console.log(data)
        // })

    }
    call()

    function deleteBtn() {
        console.log(document.getElementsByClassName("delete"));

        const buttons = document.getElementsByClassName("delete")
        let buttonsArray = [].slice.call(buttons);

        console.log(buttonsArray);

        buttonsArray.forEach(button => {

            button.addEventListener("click", function (e) {
                console.log("test");

                fetch(`https://challenge-app-team-guillaume.herokuapp.com/deleteChallenges/${button.id}`, {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        console.log('Challenge succesfully removed:', data);
                    })
                window.location.reload();
            })
        })
    }

    setTimeout(deleteBtn, 500)


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
            <i class="material-icons delete">delete</i>
            <i class="material-icons create">create</i>
            </div>
            <h2> Challenge name : </h2> 
            <h3>${name}</h3>
            <h2> Points :</h2> 
            <h3>${points}</h3>
            <h2> Course : </h2> 
            <h3>${course}</h3>
            <h2> Session : </h2>
            <h3>${session}</h3> 
            </div>
           `;

            container.insertAdjacentHTML("beforeend", htmlString);


        }

        fetch('https://challenge-app-team-guillaume.herokuapp.com/challenges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: challengeNameValue,
                points: pointsValue,
                course: courseValue,
                session: sessionValue
            })
        }).then(data => {
            return data.json()
        })



        printOrder(challenge.name, challenge.points, challenge.course, challenge.session);
    })


}