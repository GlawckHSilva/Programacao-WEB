document.addEventListener('DOMContentLoaded', () => {
    const profiles = [
        'GlawckHSilva',
        'RYANLOPESFAC',
        'matteuszera',
        'F0Xdesuu',
        'DarttVader'
    ];

    const container = document.getElementById('profiles-container');

    profiles.forEach(username => {
        fetch(https://api.github.com/users/${username})
            .then(response => response.json())
            .then(data => {
                const card = document.createElement('div');
                card.className = 'profile-card';

                card.innerHTML = `
                    <img src="${data.avatar_url}" alt="Profile image">
                    <div class="profile-info">
                        <h2>${data.name || username}</h2>
                        <p>Tecnologias: ${data.bio || 'Não disponível'}</p>
                        <a href="${data.html_url}">Visitar Perfil no GitHub</a>
                    </div>
                `;

                container.appendChild(card);
            })
            .catch(error => console.error('Erro ao buscar dados do GitHub:', error));
    });
});