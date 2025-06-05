document.addEventListener('DOMContentLoaded', function() {
    const researchLink = document.getElementById('research-link');
    const dropdown = document.getElementById('research-dropdown');

    researchLink.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // ドロップダウン外をクリックしたら閉じる
    document.addEventListener('click', function(e) {
        if (!researchLink.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});