document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const posts = document.querySelectorAll('.category-post');
    const categorySections = document.querySelectorAll('.category-section');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;
        
        // Remove existing no-results message if it exists
        const existingNoResults = document.querySelector('.no-results');
        if (existingNoResults) {
            existingNoResults.remove();
        }
        
        posts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const description = post.querySelector('.post-description')?.textContent.toLowerCase() || '';
            const matches = title.includes(searchTerm) || description.includes(searchTerm);
            
            post.classList.toggle('hidden', !matches);
            if (matches) hasResults = true;
        });
        
        // Show/hide category sections based on whether they have visible posts
        categorySections.forEach(section => {
            const visiblePosts = section.querySelectorAll('.category-post:not(.hidden)');
            section.style.display = visiblePosts.length > 0 ? 'block' : 'none';
        });
        
        // Show no results message if necessary
        if (!hasResults && searchTerm !== '') {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No posts found matching your search.';
            document.querySelector('.category-sections').appendChild(noResults);
        }
    }
    
    // Search on input change
    searchInput.addEventListener('input', performSearch);
    
    // Search on button click
    searchButton.addEventListener('click', performSearch);
    
    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}); 