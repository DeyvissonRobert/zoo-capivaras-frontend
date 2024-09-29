const API_URL = 'http://localhost:3000/capivaras';

const capivaraList = document.getElementById('capivara-list');
const searchInput = document.getElementById('search-input');




async function fetchCapivaras() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar capivaras');
        }
        const capivaras = await response.json();
        displayCapivaras(capivaras);
    } catch (error) {
        console.error('Erro ao buscar capivaras:', error);
    }
}


fetchCapivaras();
