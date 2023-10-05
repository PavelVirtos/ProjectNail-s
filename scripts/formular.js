function setAction(form) {
    
    sessionStorage.setItem("emailSent", "false");

    //form.action = "../index.html";
    form.action = "response.html";

    location.href = form.action;

    // return true; // va trimite pe noul location, parametri din form in query.
    // return false; // nu va trimite pe noul location, parametrii din from in query.

    return true;
    }