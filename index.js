// Firebase'i yapılandır
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIhKXxTwmQ1l70c7_vnH6ZmM1FxZsqUEI",
    authDomain: "furkan-baysak-b74ef.firebaseapp.com",
    databaseURL: "https://furkan-baysak-b74ef-default-rtdb.firebaseio.com",
    projectId: "furkan-baysak-b74ef",
    storageBucket: "furkan-baysak-b74ef.firebasestorage.app",
    messagingSenderId: "332668884342",
    appId: "1:332668884342:web:975a46d869cf37bbc85657",
    measurementId: "G-1TQKFHW50T"
  };
  
  // Firebase'i başlat
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();  // Firestore veritabanına bağlantı
  
  // Form elemanını al
  const form = document.getElementById('yorum-form');
  
  // Formu gönderme işlemi
  form.addEventListener('submit', async (e) => {
    e.preventDefault();  // Sayfa yenilenmesini engelle
  
    // Form verilerini al
    const il = document.getElementById('il').value;
    const adsoyad = document.getElementById('adsoyad').value;
    const telefon = document.getElementById('telefon').value;
    const yorum = document.getElementById('yorum').value;
  
    // Firebase Firestore'a verileri ekleyelim
    try {
      // Yorum verisini Firestore'a ekle
      await db.collection('yorumlar').add({
        il: il,
        adsoyad: adsoyad,
        telefon: telefon,
        yorum: yorum,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()  // Zaman damgası
      });
  
      // İşlem başarılıysa kullanıcıya bildirim gönder
      alert("Yorum başarıyla gönderildi.");
      form.reset();  // Formu sıfırla
    } catch (error) {
      // Hata durumunda kullanıcıya bildirim gönder
      console.error("Error adding document: ", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  });