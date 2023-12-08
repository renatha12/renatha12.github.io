document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for initial announcements
    const announcements = [
        { title: 'Judul', date: '2023-01-01', content: 'Isi konten...' },
        { title: 'Judul', date: '2023-02-01', content: 'Isi konten...'  }
    ];
    
    displayAnnouncements(announcements);
});

function displayAnnouncements(announcements) {
    const announcementList = document.getElementById('announcement-list');

    announcementList.innerHTML = '';

    // Display each announcement
    announcements.forEach(function(announcement) {
        const div = document.createElement('div');
        div.className = 'announcement';
        div.innerHTML = `<h2>${announcement.title}</h2><p>Date: ${announcement.date}</p><p>${announcement.content}</p>`;
        announcementList.appendChild(div);
    });
}

function createAnnouncement() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const content = document.getElementById('content').value;

    // Validation
    if (!title || !date || !content) {
        alert('All fields are required.');
        return;
    }
    // Dummy data for the new announcement
    const newAnnouncement = { title, date, content };

    // Add the new announcement to the list
    announcements.push(newAnnouncement);

    // Display the updated list
    displayAnnouncements(announcements);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('content').value = '';
}
