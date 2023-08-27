// Funktion, um die Dauer aus einem String zu extrahieren und in Sekunden umzuwandeln
function extractDuration(str) {
    const match = str.match(/\((\d+):(\d+)\)/);
    if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        return (minutes * 60) + seconds;
    }
    return 0;
}

// Alle Elemente mit der Klasse "lecture-name" auswählen
const lectures = document.querySelectorAll('.lecture-name');

// Gesamtdauer in Sekunden initialisieren
let totalDurationInSeconds = 0;

// Jedes Element durchgehen und die Dauer extrahieren und zur Gesamtdauer hinzufügen
lectures.forEach(lecture => {
    totalDurationInSeconds += extractDuration(lecture.innerHTML);
});

// Gesamtdauer in Stunden und Minuten umwandeln
const totalHours = Math.floor(totalDurationInSeconds / 3600);
const remainingMinutes = Math.floor((totalDurationInSeconds % 3600) / 60);

// Gesamtdauer ausgeben
console.log(`Gesamtdauer: ${totalHours} Stunden und ${remainingMinutes} Minuten.`);
