// Fonction qui crée un élément paragraphe avec le contenu fourni et l'ajoute au corps du document
function createElement(data) {
    var paragraphe = document.createElement('p')
    paragraphe.textContent = data
    document.body.appendChild(paragraphe);
}

// Fonction qui effectue une requête à l'API Wikipedia et utilise un callback pour traiter les données extraites
function queryWikipedia(callback) {
    
    const xhr = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) { // check if status is ok
            const response = JSON.parse(xhr.responseText); // get json of the page and find the good path to the text(extract)
            const pages = response.query.pages;
            const pageid = Object.keys(response.query.pages)[0];
            const text = pages[pageid].extract; 
            callback(text); // Appelle la fonction de callback avec les données extraites
        };
    };
    xhr.open("GET", url, true); 
    xhr.send();
}

// Appelle la fonction queryWikipedia en passant la fonction createElement comme callback
queryWikipedia(createElement);