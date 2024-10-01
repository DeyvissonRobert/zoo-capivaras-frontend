const API_URL = 'http://localhost:3000/capivaras';

const capivaraList = document.getElementById('capivara-list');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('add-capivara-modal');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.querySelector('.close-button');




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
                <span id="capivara-id"><strong>ID:</strong> ${capivara.id}</span>
            <div class="capivara-info">
                <span><strong>Nome:</strong> ${capivara.nome}</span>
                <span><strong>Idade:</strong> ${capivara.idade} anos</span>
                <span><strong>Peso:</strong> ${capivara.peso} kg</span>
                <span><strong>Status de Saúde:</strong> ${capivara.saude}</span>
                <span><strong>Habitat:</strong> ${capivara.habitat}</span>
                <span><strong>Comportamento:</strong> ${capivara.comportamento}</span>
                ${capivara.dieta ? `<span><strong>Dieta:</strong> ${capivara.dieta}</span>` : ''}
                ${capivara.observacoes ? `<span><strong>Observações:</strong> ${capivara.observacoes}</span>` : ''}
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

function openModal() {
    modal.style.display = 'block'; 
}

function closeModal() {
    modal.style.display = 'none'; 
}

addBtn.addEventListener('click', openModal);

cancelBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'; 
    }
});

fetchCapivaras();
