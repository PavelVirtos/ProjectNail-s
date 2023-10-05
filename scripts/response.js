
getQueryParams();

function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);

    // //afisam in consola parametrii primiti din formularul de feedback
    // urlParams.forEach(function (el) { console.log(el) });

    var feedbackNume = urlParams.get("nume");
    var feedbackPrenume = urlParams.get("prenume");

    var feedbackEmail = urlParams.get("email");
    var feedbackTelefon = urlParams.get("telefon");

    var feedbackMesaj = urlParams.get("mesaj");
    var feedbackData = urlParams.get("data");

    var mesajTrimis = "";
    if (feedbackMesaj)
        mesajTrimis = feedbackMesaj;
    else if (feedbackData)
        mesajTrimis = "Solicit o programare la salonul dumneavoastra pentru: " + feedbackData;

        
    // console.log(feedbackNume)
    // console.log(feedbackPrenume)

    // console.log(feedbackEmail)
    // console.log(feedbackTelefon)

    // console.log(feedbackMesaj)
    // console.log(feedbackData)


    var emailSent = sessionStorage.getItem("emailSent");
    console.log("emailSent - sessionStorage", emailSent)

    if (emailSent != "true") {
        sendEmail_serviceKey(feedbackNume + " " + feedbackPrenume, mesajTrimis, feedbackEmail);
    }
}


function sendemail_publicKey(fullName, message, receiver) {
    //https://dashboard.emailjs.com/admin

    console.log("sendemail - publicKey");

    emailjs.init('kMQm2Bu7ByhGvkS_-')

    const serviceID = 'default_service';
    const templateID = 'template_axjtzjr';

    emailjs.send(serviceID, templateID, { name: fullName, message: message, receiver: receiver })
        .then(() => {
            //btn.value = 'Send Email';
            //alert('Sent!');

            sessionStorage.setItem("emailSent", "true");
        }, (err) => {
            //btn.value = 'Send Email';
            //alert(JSON.stringify(err));

            sessionStorage.setItem("emailSent", "error");
        });
}

function sendEmail_serviceKey() {
    //https://dashboard.emailjs.com/admin

    console.log("sendemail - serviceKey");

    const serviceID = 'service_r6wqsbc';
    const templateID = 'template_axjtzjr';

    emailjs.send(serviceID, templateID, { name: fullName, message: message, receiver: receiver })
        .then(() => {
            //btn.value = 'Send Email';
            //alert('Sent!');

            sessionStorage.setItem("emailSent", "true");
        }, (err) => {
            //btn.value = 'Send Email';
            //alert(JSON.stringify(err));

            sessionStorage.setItem("emailSent", "error");
        });
}
