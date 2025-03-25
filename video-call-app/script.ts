const localVideo = document.getElementById("localVideo") as HTMLVideoElement;
const remoteVideo = document.getElementById("remoteVideo") as HTMLVideoElement;
const startCallBtn = document.getElementById("startCall") as HTMLButtonElement;

let localStream: MediaStream;
let peerConnection: RTCPeerConnection;

const servers = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

// ✅ ক্যামেরা & মাইক্রোফোন অ্যাক্সেস করা
async function getMedia() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
        console.error("Error accessing media devices.", error);
    }
}

// ✅ WebRTC কানেকশন সেটআপ করা
function createPeerConnection() {
    peerConnection = new RTCPeerConnection(servers);

    peerConnection.ontrack = (event) => {
        if (remoteVideo.srcObject !== event.streams[0]) {
            remoteVideo.srcObject = event.streams[0];
        }
    };

    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });
}

// ✅ কল শুরু করা
async function startCall() {
    createPeerConnection();
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    console.log("Offer Created:", offer);
}

// ⏳ উইন্ডো লোড হলে ক্যামেরা চালু হবে
window.onload = getMedia;

// ▶️ কল শুরু হলে ফাংশন ট্রিগার হবে
startCallBtn.addEventListener("click", startCall);
