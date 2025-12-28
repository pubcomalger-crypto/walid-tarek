// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "Walid Tarek",
    bio: "Chikour",
    profileImage: "https://i.ibb.co/WWsHmvVj/245386072-4647781595243911-4723399473753994969-n.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/17EffabvMS/",
        instagram: "https://www.instagram.com/walidousayah?igsh=MXdjdHdnOXhnN3I4cw==",
        tiktok: "https://www.tiktok.com/@walidousayah?_r=1&_t=ZS-92bJXIxj6kH",
        whatsapp: "+213540846323",
        telegram: "+213540846323",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "Tareksayah@yahoo.com",
        website: "https://www.youtube.com/",
        maps: "https://share.google/T1z7NAFbftnLYNKZy",
        phone: "+213540846323"
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

