// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = 
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Fetch GitHub Projects
async function fetchProjects() {
    const response = await fetch('https://api.github.com/users/biraj82-82/repos');
    const projects = await response.json();
    const container = document.getElementById('project-container');
    
    projects.slice(0, 6).forEach(project => {
        container.innerHTML += `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description || 'No description'}</p>
                <a href="${project.html_url}" target="_blank">View on GitHub</a>
            </div>
        `;
    });
}

fetchProjects();