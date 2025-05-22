Lidl-Webseite (Angebotssimulation)
Dieses Projekt ist eine einfache Webanwendung, die eine Startseite mit einem Bild-Slider und einer dynamisch geladenen Produktliste simuliert, ähnlich den Angebotsseiten großer Supermärkte wie Lidl. Es dient als Demonstration für grundlegende Webentwicklungskenntnisse in HTML, CSS und JavaScript.

🚀 Funktionen
Responsive Header & Navigation: Eine feste Kopfzeile mit Logo und Navigationslinks zu "Startseite", "Angebote", "Kategorien" und "Kontakt".

Dynamischer Bild-Slider: Ein interaktiver Slider, der verschiedene Angebotsbilder anzeigt und durch Klick auf Pfeile navigiert werden kann.

Angebote der Woche: Ein Bereich, der Produktangebote dynamisch aus einer JSON-Datei lädt und darstellt.

Grundlegendes Styling: Modernes und sauberes Design mit einer ansprechenden Farbpalette.

🛠️ Verwendete Technologien
HTML5: Für die Struktur und den Inhalt der Webseite.

CSS3: Für das Styling und Layout der Elemente.

JavaScript (ES6+): Für die interaktiven Elemente wie den Bild-Slider und das dynamische Laden der Produkte.

📦 Projektstruktur
lidl-webseite/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── angebot1.jpg
│   ├── angebot2.jpg
│   ├── angebot3.jpg
│   └── milch.jpg
└── data/
    └── angebote.json

index.html: Die Hauptseite der Webanwendung.

style.css: Enthält alle CSS-Regeln für das Design.

script.js: Beinhaltet die JavaScript-Logik für den Slider und das Laden der Produkte.

images/: Ordner für die verwendeten Bilder (Angebote, Produkte).

data/angebote.json: Eine (noch zu erstellende) JSON-Datei, die die Produktdaten enthält, die von script.js geladen werden.

⚙️ Installation und Ausführung
Um dieses Projekt lokal auszuführen, folge diesen Schritten:

Repository klonen:

git clone https://github.com/Zulkerr/lidl-webseite.git

In das Projektverzeichnis wechseln:

cd lidl-webseite

angebote.json erstellen (falls noch nicht vorhanden):
Erstelle im Ordner data/ eine Datei namens angebote.json mit folgendem Beispielinhalt:

[
  {
    "bild": "produkt1.jpg",
    "titel": "Frisches Obst",
    "preis": "1.99€",
    "rabatt": "statt 2.49€"
  },
  {
    "bild": "produkt2.jpg",
    "titel": "Bio-Joghurt",
    "preis": "0.79€",
    "rabatt": "statt 0.99€"
  },
  {
    "bild": "produkt3.jpg",
    "titel": "Vollkornbrot",
    "preis": "1.49€",
    "rabatt": "statt 1.89€"
  },
  {
    "bild": "produkt4.jpg",
    "titel": "Käseauswahl",
    "preis": "3.99€",
    "rabatt": "statt 4.59€"
  }
]

(Hinweis: Ersetze produkt1.jpg, produkt2.jpg etc. durch tatsächliche Bildnamen, die du in deinem images/ Ordner ablegen möchtest, oder nutze Platzhalterbilder.)

Webseite öffnen:
Öffne die Datei index.html direkt in deinem Webbrowser.

🌐 Live-Demo (GitHub Pages)
Dieses Projekt kann auch über GitHub Pages gehostet werden. Sobald es auf dem main-Branch deines GitHub-Repositorys liegt und GitHub Pages aktiviert ist, ist es unter der folgenden URL verfügbar:

https://Zulkerr.github.io/lidl-webseite/

💡 Mögliche Erweiterungen
Vollständige Seiten: Implementierung der angebote.html, kategorien.html und kontakt.html Seiten.

Produktdetails: Eine Detailansicht für einzelne Produkte.

Warenkorb-Funktionalität: Hinzufügen von Produkten zum Warenkorb.

Suchfunktion: Eine Suchleiste zum Filtern von Produkten.

Filter- und Sortieroptionen: Für die Produktliste.

Responsives Design: Weitere Optimierungen für verschiedene Bildschirmgrößen.

Backend-Integration: Anbindung an eine echte Datenbank für Produkte und Angebote.

✍️ Autor
github.com/Zulkerr

📄 Lizenz
Dieses Projekt ist unter der MIT Lizenz lizenziert. Weitere Details findest du in der LICENSE-Datei (falls vorhanden).
