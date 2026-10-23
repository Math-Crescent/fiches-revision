// Données de démonstration
const dataSN4 = [
    { categorie: "Géométrie analytique", titre: "Prouver un parallélogramme : Pente er Distances (2 méthodes)", pdf: "https://drive.google.com/file/d/1nx3roHWiXtSMnBeqKB1iEODwZwzLy8Lh/view?usp=sharing", youtube: "https://youtu.be/99SuRUuYTn8" }
];

const dataSN5 = [
    { categorie: "Fonctions", titre: "Trouver la règle d’une fonction rationnelle à partir d’un graphique", pdf: "", youtube: "" }
];

// Fonction pour afficher le tableau
function renderTable(data) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return; // Si la page actuelle n'a pas de tableau, on ne fait rien

    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.categorie}</strong></td>
            <td>${item.titre}</td>
            <td><a href="${item.pdf}" target="_blank" class="btn-link btn-pdf">Télécharger PDF</a></td>
            <td><a href="${item.youtube}" target="_blank" class="btn-link btn-yt">Visionner sur YouTube</a></td>
        `;
        tbody.appendChild(row);
    });
}

// Recherche en temps réel
function filterTable(level) {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const data = level === 'sn4' ? dataSN4 : dataSN5;

    const filteredData = data.filter(item => {
        return item.categorie.toLowerCase().includes(searchInput) ||
               item.titre.toLowerCase().includes(searchInput);
    });

    renderTable(filteredData);
}

// Chargement automatique au lancement de la page
document.addEventListener("DOMContentLoaded", () => {
    // On vérifie quelle page est actuellement ouverte en lisant l'URL
    if (window.location.pathname.includes('sn4.html')) {
        renderTable(dataSN4);
    } else if (window.location.pathname.includes('sn5.html')) {
        renderTable(dataSN5);
    }
});