// Données de démonstration
const dataSN4 = [
    { categorie: "Fonctions", titre: "Les transformations de la fonction de base", pdf: "https://drive.google.com/example-pdf1", youtube: "https://youtube.com/watch?v=example1" },
    { categorie: "Géométrie", titre: "Les relations métriques dans le triangle rectangle", pdf: "https://drive.google.com/example-pdf2", youtube: "https://youtube.com/watch?v=example2" },
    { categorie: "Statistique", titre: "La droite de régression linéaire", pdf: "https://drive.google.com/example-pdf3", youtube: "https://youtube.com/watch?v=example3" }
];

const dataSN5 = [
    { categorie: "Fonctions", titre: "Représentation graphique de fonctions rationnelles", pdf: "https://drive.google.com/example-pdf4", youtube: "https://youtube.com/watch?v=example4" },
    { categorie: "Fonctions", titre: "Fonctions racine carrée : Trouver la règle", pdf: "https://drive.google.com/example-pdf5", youtube: "https://youtube.com/watch?v=example5" },
    { categorie: "Trigonométrie", titre: "Les identités trigonométriques et preuves", pdf: "https://drive.google.com/example-pdf6", youtube: "https://youtube.com/watch?v=example6" }
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