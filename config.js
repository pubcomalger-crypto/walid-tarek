// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "COCA",
    bio: "SALAM",
    profileImage: "https://i.ibb.co/NgKMhgMT/cocacola.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/16dysjBQvt/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/riyadmahrez26.7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        tiktok: "https://www.tiktok.com/@chebkhaled?is_from_webapp=1&sender_device=pc",
        whatsapp: "+213540253369",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://share.google/T1z7NAFbftnLYNKZy",
        phone: "+213658546209"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: true,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: true,      // Afficher Snapchat
        email: true,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}
