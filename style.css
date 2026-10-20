/* ==========================================================================
   STYLES DE BASE & RESPONSIVE (Méthode Mobile-Friendly)
   ========================================================================== */

:root {
    --primary: #1e3a8a;
    --secondary: #0d9488;
    --bg-color: #f8fafc;
    --card-bg: #ffffff;
    --text-color: #1e293b;
    --border-color: #e2e8f0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.5;
}

/* En-tête / Navbar réactive */
.navbar {
    display: flex;
    flex-direction: column; /* Alignement vertical par défaut (mobile) */
    gap: 0.75rem;
    align-items: center;
    background-color: var(--primary);
    color: white;
    padding: 1rem;
}

.logo h1 {
    margin: 0;
    font-size: 1.3rem;
    text-align: center;
}

nav {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
}

nav .nav-btn {
    flex: 1; /* Les boutons prennent une largeur égale sur mobile */
    max-width: 120px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    padding: 0.6rem 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 6px;
    text-align: center;
}

nav .nav-btn.active {
    background-color: var(--secondary);
    font-weight: bold;
}

/* Conteneur principal */
.container {
    padding: 1rem;
    max-width: 1100px;
    margin: 0 auto;
}

/* Barre de recherche responsive */
.search-box input {
    width: 100%;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 1rem;
}

/* ==========================================================================
   TRANSFORMATION DU TABLEAU EN CARTES (POUR MOBILE)
   ========================================================================== */

/* Sur petit écran : Transformer le tableau <table> en blocs/cartes */
@media screen and (max-width: 767px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }

    /* Masquer l'en-tête du tableau sur mobile */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    /* Chaque ligne devient un bloc/carte indépendant */
    tr {
        background: white;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        margin-bottom: 1rem;
        padding: 1rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    td {
        border: none;
        padding: 0.4rem 0;
        display: flex;
        flex-direction: column;
    }

    /* Boutons de liens plein écran sur mobile */
    .btn-link {
        display: block;
        text-align: center;
        padding: 0.75rem;
        margin-top: 0.4rem;
        border-radius: 6px;
        font-size: 0.95rem;
        text-decoration: none;
        font-weight: bold;
    }

    .btn-pdf {
        background-color: #e0f2fe;
        color: #0369a1;
    }

    .btn-yt {
        background-color: #fee2e2;
        color: #dc2626;
    }
}

/* ==========================================================================
   STYLES POUR ÉCRANS D'ORDINATEUR (ORDINATEUR & TABLETTE > 768px)
   ========================================================================== */

@media screen and (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 2rem;
    }

    .logo h1 {
        font-size: 1.6rem;
    }

    nav {
        width: auto;
    }

    nav .nav-btn {
        flex: initial;
        padding: 0.5rem 1.2rem;
    }

    /* Rétablir l'affichage sous forme de tableau traditionnel */
    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    thead {
        display: table-header-group;
    }

    tbody {
        display: table-row-group;
    }

    tr {
        display: table-row;
        border: none;
        box-shadow: none;
        margin-bottom: 0;
        padding: 0;
    }

    th {
        background-color: var(--primary);
        color: white;
        padding: 1rem;
        text-align: left;
    }

    td {
        display: table-cell;
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
    }

    .btn-link {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .btn-pdf {
        background-color: #e0f2fe;
        color: #0369a1;
    }

    .btn-yt {
        background-color: #fee2e2;
        color: #dc2626;
    }
}