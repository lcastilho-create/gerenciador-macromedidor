<script type="module">
    import {
        initializeApp
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import {
        getAuth,
        signInAnonymously,
        signInWithCustomToken,
        onAuthStateChanged
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
    import {
        getFirestore,
        collection,
        addDoc,
        onSnapshot,
        query,
        getDocs,
        deleteDoc,
        doc,
        setDoc,
        getDoc
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
    
    // Global variables for Firebase configuration
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
    ...
</script>