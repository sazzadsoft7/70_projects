// সূরা প্রদর্শনের ফাংশন
async function getSurah() {
    const surahNumber = document.getElementById('surahNumber').value;
    const surahName = document.getElementById('surahName');
    const ayahs = document.getElementById('ayahs');

    if (!surahNumber || surahNumber < 1 || surahNumber > 114) {
        surahName.textContent = "সূরা নাম: ভুল ইনপুট!";
        ayahs.textContent = "১ থেকে ১১৪ এর মধ্যে একটি সূরা নাম্বার লিখুন।";
        return;
    }

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/bn.bengali`);
        const data = await response.json();

        surahName.textContent = `সূরা নাম: ${data.data.englishName} (${data.data.name})`;
        ayahs.innerHTML = "";
        data.data.ayahs.forEach(ayah => {
            ayahs.innerHTML += `<p><strong>আয়াত ${ayah.numberInSurah}:</strong> ${ayah.text}</p>`;
        });
    } catch (error) {
        surahName.textContent = "ডেটা পাওয়া যায়নি। আবার চেষ্টা করুন।";
        ayahs.textContent = "";
    }
}

// র‍্যান্ডম আয়াত প্রদর্শনের ফাংশন
async function getRandomAyah() {
    const randomAyahElement = document.getElementById('randomAyah');

    const randomSurah = Math.floor(Math.random() * 114) + 1;
    const randomAyah = Math.floor(Math.random() * 10) + 1;

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/bn.bengali`);
        const data = await response.json();

        randomAyahElement.textContent = `${data.data.text} - সূরা ${data.data.surah.englishName} (${data.data.surah.name}), আয়াত ${data.data.numberInSurah}`;
    } catch (error) {
        randomAyahElement.textContent = "ডেটা পাওয়া যায়নি। আবার চেষ্টা করুন।";
    }
}
