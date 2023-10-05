function readJson() {
    fetch("../data/programari.json")
        .then((response) => {
            console.log("response");
            console.log(response);

            return response.json();
        })
        .then((success) => {
            console.log("success")
            console.log(success);



            localStorage.setItem("Programari", JSON.stringify(success));



            // fetch('../data/programari2.json', {
            //     method: 'post',
            //     body: JSON.stringify(success)
            // })
            //     .then((postresponse) => {
            //         console.log("post response");
            //         console.log(postresponse);

            //         return postresponse.json();
            //     })
            //     .then((postsuccess) => {
            //         console.log("post success")
            //         console.log(postsuccess);
            //     })
            //     .catch((posterror) => {
            //         console.log("post error")
            //         console.log(posterror);
            //     });





            // // Create the content object from json object.
            // var content = JSON.stringify(success);

            // // Create a Blob object containing the content.
            // const blob = new Blob([content], { type: 'json' });

            // // Create a URL for the Blob.
            // const url = URL.createObjectURL(blob);

            // // Create a download link and trigger a click event to download the file.
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = 'output.json'; // Specify the file name here.
            // document.body.appendChild(a);
            // a.click();




            // const fs = require('fs')

            // let data = "How to write a file in Javascript."
            // fs.writeFile('output.txt', data, (err) => {
            //     if (err) throw err;
            // });




        })
        .catch((error) => {
            console.log("error")
            console.log(error);
        });
}


function valueFromSerialized(serialized, field) {
    return serialized.find(function (elem) { return elem.name == field }).value
}

function setAction(form) {

    sessionStorage.setItem("emailSent", "false");

    var formData = $("form").serializeArray();
    var programari = sessionStorage.getItem("programari");
    if (programari == null) {
        programari = {
            "disponibile": [
                {}
            ],
            "inidisponibile": [
                {
                    "Data": valueFromSerialized(formData, 'data'),
                    "Nume": valueFromSerialized(formData, 'nume'),
                    "Prenume": valueFromSerialized(formData, 'prenume'),
                    "Varsta": 18,
                    "Telefon": valueFromSerialized(formData, 'telefon'),
                    "Email": valueFromSerialized(formData, 'email'),
                    "Card": valueFromSerialized(formData, 'card'),
                    "Comment": valueFromSerialized(formData, 'coment'),
                }
            ]
        };

        sessionStorage.setItem("programari", JSON.stringify(programari));
    }
    else {
        programari = JSON.parse(programari);
        
        programari.inidisponibile.push({
            "Data": valueFromSerialized(formData, 'data'),
            "Nume": valueFromSerialized(formData, 'nume'),
            "Prenume": valueFromSerialized(formData, 'prenume'),
            "Varsta": 18,
            "Telefon": valueFromSerialized(formData, 'telefon'),
            "Email": valueFromSerialized(formData, 'email'),
            "Card": valueFromSerialized(formData, 'card'),
            "Comment": valueFromSerialized(formData, 'coment'),
        });

        sessionStorage.setItem("programari", JSON.stringify(programari));
    }

    //form.action = "../index.html";
    form.action = "response.html";

    location.href = form.action;

    // return true; // va trimite pe noul location, parametri din form in query.
    // return false; // nu va trimite pe noul location, parametrii din from in query.

    return true;
}