// Envoi d'une requête GET

/*
fetch("https://exemple.com/api/ressource", {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
})
.then(response => response.json())
.then(data => {
  console.log("Données reçues :", data);
})
.catch(error => {
  console.error("Erreur :", error);
});
*/

// Envoi d'une requête POST

/*
const data = {
  nom: "Jean",
  age: 30
};

fetch("https://exemple.com/api/ajouter", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",      // 👈 Obligatoire
    "Accept": "application/json"
  },
  body: JSON.stringify(data)                // 👈 Convertir objet JS en JSON
})
.then(response => response.json())
.then(data => {
  console.log("Réponse du serveur :", data);
})
.catch(error => {
  console.error("Erreur :", error);
});
*/

const views_url = "https://letscountapi.com/easy-bac-fr/views";
const downloads_url = "https://letscountapi.com/easy-bac-fr/downloads";
const request_headers = {
    "Content-Type": "application/json",
    "X-API-Key": "ujjr-xtNJWfxgzDC6gEMrOAzac0ZZct9CgpqDCxwLcM"
};

function incrementer_vues() {
    fetch(views_url+"/increment", {
        method: "POST",
        headers: request_headers
        })
        .then(response => response.json())
        .then(data => {
        return data["current_value"];
        })
        .catch(error => {
        console.error("Erreur :", error);
    });
}

function nb_vues() {
    fetch(views_url, {
        method: "GET",
        headers: request_headers
        })
        .then(response => response.json())
        .then(data => {
        return data["current_value"];
        })
        .catch(error => {
        console.error("Erreur :", error);
    });
}
