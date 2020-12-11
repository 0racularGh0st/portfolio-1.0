module.exports = {
    PROJECTS : {
        mySpotify : {
            name: "My Spotify Profile",
            github: "https://github.com/0racularGh0st/my-spotify-frontend",
            website: "https://my-spotify-profile.web.app/",
            description: "A Progressive Web App for viewing personalized Spotify data. Features include viewing your Top Tracks, Top Artists (All time, last 6 months or 4 weeks), Recently Played tracks, Playlists. Also you can check Audio features of tracks and playlists. You can also generate a recommended list of tracks from an existing playlist.",
            tags: ["VueJS","NodeJS","Express","Spotify Web API","Heroku","Firebase"]
        },
        peerVue : {
            name: "Peer Vue Chatroom",
            github: "https://github.com/0racularGh0st/Chatroom-PeerJs",
            website: "https://peer-vue.web.app/",
            description: "A Progressive Web App for Audio/Video Chatting along with a Text messaging chat window. This project involves 4 integral parts, the Signalling Server, the Peer Server, the Client and the TURN server which is used to relay audio, video, and data streaming between peers if the peers are behind firewalls or proxies.",
            tags: ["VueJS","NodeJS","Express","PeerJs","Socket.io","Heroku","Firebase"]
        },
        serviceStatus: {
            name: "Service Status Checker",
            github: "https://github.com/0racularGh0st/service-status-checker",
            website: "https://service-status-nigeldavid.web.app/",
            description: "A Progressive Web App for monitoring the health status of all my web apps and servers in one common space. The server for this project also runs a scheduled Cron Job everyday at 9:00 am IST and sends me a notification through Web-Push if any service is down. The server runs in my personal OVH Cloud VPS.",
            tags: ["ReactJS","Web-Push","Cron","NodeJS","Express","OVH Cloud","Firebase"]
        }
    }
}