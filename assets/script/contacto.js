
const contacts = [
    { name: 'Juan', phone: '1234-5678' },
    { name: 'María', phone: '9876-5432' },
    { name: 'Pedro', phone: '4561-2378' },
    { name: 'Laura', phone: '7894-5612' },
    { name: 'Carlos', phone: '6549-8732' }
];


function showContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name} - ${contact.phone}`;
        listItem.addEventListener('click', () => redirectToContactPage(contact.name));
        contactList.appendChild(listItem);
    });
}


function redirectToContactPage(contactName) {
    window.location.href = `contacto.html?name=${contactName}`;
}

