// Prayer Times (Aladhan API)
async function getPrayerTimes() {
    const city = document.getElementById('city').value;
    const prayerTimes = document.getElementById('prayerTimes');
    prayerTimes.innerHTML = '';

    if (!city) {
        prayerTimes.innerHTML = '<li>শহরের নাম লিখুন।</li>';
        return;
    }

    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Bangladesh&method=1`);
    const data = await response.json();

    if (data.code === 200) {
        const timings = data.data.timings;
        prayerTimes.innerHTML = `
            <li>ফজর: ${timings.Fajr}</li>
            <li>যোহর: ${timings.Dhuhr}</li>
            <li>আসর: ${timings.Asr}</li>
            <li>মাগরিব: ${timings.Maghrib}</li>
            <li>ইশা: ${timings.Isha}</li>
        `;
    } else {
        prayerTimes.innerHTML = '<li>ডেটা পাওয়া যায়নি।</li>';
    }
}

// Random Quranic Ayah
const ayahs = ["إِنَّ مَعَ الْعُسْرِ يُسْرًا", "فَاذْكُرُونِي أَذْكُرْكُمْ", "وَأَقِيمُوا الصَّلَاةَ", "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ"];
function getRandomAyah() {
    const randomIndex = Math.floor(Math.random() * ayahs.length);
    document.getElementById('ayahDisplay').textContent = ayahs[randomIndex];
}

// Tasbih Counter
let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').textContent = count;
}

function resetCounter() {
    count = 0;
    document.getElementById('counter').textContent = count;
}

// Qibla Compass (Dummy)
function getQiblaDirection() {
    document.getElementById('qiblaDirection').textContent = "দক্ষিণ-পশ্চিম (SW)";
}

// Random Islamic Dua
const duas = ["رَبِّ زِدْنِي عِلْمًا", "رَبَّنَا تَقَبَّلْ مِنَّا", "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا"];
function getRandomDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    document.getElementById('duaDisplay').textContent = duas[randomIndex];
}
