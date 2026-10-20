// Données de démonstration (Structure correspondant à un futur fichier CSV)
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

// Gestion de la navigation entre les pages
function showPage(pageId) {
    // Masquer toutes les pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));

    // Désactiver tous les boutons du menu
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Afficher la page sélectionnée
    document.getElementById(pageId).classList.add('active-page');

    // Mettre en surbrillance le bon bouton
    if (pageId === 'home') document.querySelectorAll('.nav-btn')[0].classList.add('active');
    if (pageId === 'sn4') document.querySelectorAll('.nav-btn')[1].classList.add('active');
    if (pageId === 'sn5') document.querySelectorAll('.nav-btn')[2].classList.add('active');
}

// Fonction pour injecter les données dans les tableaux HTML
function renderTable(data, tableBodyId) {
    const tbody = document.getElementById(tableBodyId);
    tbody.innerHTML = ""; // Vider le contenu

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

// Fonction de recherche en temps réel
function filterTable(level) {
    const searchInput = document.getElementById(`search-${level}`).value.toLowerCase();
    const data = level === 'sn4' ? dataSN4 : dataSN5;

    const filteredData = data.filter(item => {
        return item.categorie.toLowerCase().includes(searchInput) ||
               item.titre.toLowerCase().includes(searchInput);
    });

    renderTable(filteredData, `table-body-${level}`);
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    renderTable(dataSN4, 'table-body-sn4');
    renderTable(dataSN5, 'table-body-sn5');
});