

function cloneListItem(list) {
    const template = document.getElementById('programare');
    const container = document.getElementById('lista_programari');

    var clonedNode = template.cloneNode(true);
    var clonedRow = clonedNode.childNodes[1];

    // copii pari - sunt props
    // copii impari - sunt value

    //clonedNode.childNodes[1].childNodes[1].innerText = "telefon"

    Object.keys(list).forEach(function (key) {
        var element = Object.values(clonedRow.childNodes).find(function (clonedChild) {
            return (!clonedChild.outerHTML ? false : (clonedChild.outerHTML.indexOf('name="' + key + '"') > -1));
        });
        if (element) {
            element.innerText = list[key];
        }
    });

    container.appendChild(clonedRow);
}

function listItems() {

    var programari = sessionStorage.getItem("programari");
    if (programari != null) {
        programari = JSON.parse(programari);

        programari.inidisponibile.forEach(function (programare) {
            var programareMapping = {
                "data": programare.Data,
                "nume": programare.Nume,
                "prenume": programare.Prenume,
                "varsta": 18,
                "telefon": programare.Telefon,
                "email": programare.Email,
                "card": programare.Card,
                "coment": programare.Comment,
            };

            cloneListItem(programareMapping);
        });

        cloneListItem()
        sessionStorage.setItem("programari", JSON.stringify(programari));
    }

    return true;
}

setTimeout(listItems,1000);