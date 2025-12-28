// Utilisation de la configuration depuis config.js
const config = window.profileConfig || {
    name: "Nom Prénom",
    bio: "Ma biographie",
    profileImage: "",
    socialLinks: {
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: "",
        telegram: "",
        snapchat: "",
        email: "",
    }
};

let currentLink = '';

function exchangeContact() {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${config.name}
TEL:${config.socialLinks.whatsapp}
EMAIL:${config.socialLinks.email}
URL:https://facebook.com/${config.socialLinks.facebook}
NOTE:${config.bio}
END:VCARD`;

            const blob = new Blob([vCard], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = config.name.replace(/\s+/g, '_') + '.vcf';
            link.click();
        }

        function openModal(platform, link) {
            currentLink = link;
            document.getElementById('modalText').textContent = platform;
            document.getElementById('modalLink').href = link;
            document.getElementById('linkModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('linkModal').style.display = 'none';
        }

        function copyToClipboard() {
            navigator.clipboard.writeText(currentLink).then(() => {
                const btn = document.getElementById('copyBtn');
                btn.textContent = 'Copié !';
                setTimeout(() => {
                    btn.textContent = 'Copier';
                }, 2000);
            });
        }

        window.onclick = function(event) {
            const modal = document.getElementById('linkModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Fonction pour le bouton Enregistrer le contact
        document.addEventListener('DOMContentLoaded', function() {
            const saveBtn = document.getElementById('save-contact-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', function() {
                    const phoneNumber = (config.socialLinks.phone || '').trim();
                    const name = config.name || 'Contact';
                    
                    if (!phoneNumber) {
                        alert('Aucun numéro de téléphone trouvé');
                        return;
                    }

                    const telNumber = phoneNumber.replace(/[^0-9+]/g, '');
                    
                    // Créer un lien vCard
                    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL:${telNumber}\nEND:VCARD`;
                    
                    // Créer un blob avec les données vCard
                    const blob = new Blob([vcard], { type: 'text/vcard' });
                    const url = URL.createObjectURL(blob);
                    
                    // Créer un lien de téléchargement
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${name.replace(/[^a-z0-9]/gi, '_')}.vcf`;
                    
                    // Ajouter au document et déclencher le téléchargement
                    document.body.appendChild(a);
                    a.click();
                    
                    // Nettoyer
                    setTimeout(() => {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                        
                        // Afficher un message de confirmation
                        const btn = this;
                        const originalText = btn.innerHTML;
                        btn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                            </svg>
                            Contact enregistré !
                        `;
                        btn.style.backgroundColor = '#4CAF50';
                        
                        // Rétablir le bouton après 3 secondes
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.style.backgroundColor = '#000000';
                        }, 3000);
                        
                        // Essayer d'ouvrir l'application Contacts sur iOS
                        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                            window.location.href = 'tel:,';
                        }
                    }, 100);
                });
            }
        });