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


function displayCapivaras(capivaras) {
    capivaraList.innerHTML = '';

    capivaras.forEach(capivara => {
        const capivaraItem = document.createElement('li');
        capivaraItem.classList.add('capivara-item');

        capivaraItem.innerHTML = `
            <div class="capivara-info">
                <strong>ID:</strong> ${capivara.id} <br>
                <strong>Nome:</strong> ${capivara.nome} <br>
                <strong>Idade:</strong> ${capivara.idade} anos <br>
                <strong>Peso:</strong> ${capivara.peso} kg <br>
                <strong>Habitat:</strong> ${capivara.habitat}
                <div class="capivara-actions">
                    <button class="edit-btn" onclick="editCapivara(${capivara.id})"><span class="material-symbols-outlined">edit</span></button>
                    <button class="delete-btn" onclick="deleteCapivara(${capivara.id})"><span class="material-symbols-outlined">delete_forever</span></button>
                </div>
            </div>
            
        `;

        capivaraList.appendChild(capivaraItem);
    });
}

document.getElementById('search-input').addEventListener('input', filterCapivaras);

function filterCapivaras() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const capivaraItems = document.querySelectorAll('.capivara-item');

    capivaraItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

async function deleteCapivara(id) {
    const confirmed = confirm('Tem certeza que deseja deletar esta capivara?');
    if (confirmed) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            fetchCapivaras();
        } catch (error) {
            console.error('Erro ao deletar capivara:', error);
        }
    }
}


fetchCapivaras();
