const exercises = [
  { name: "Mobilisationsflow", type: "mobility", groups: ["ganzkoerper"], intensity: 1, minutes: 4, sets: 1, reps: "4 Minuten", pause: 0, quiet: true, gentle: true, equipment: "keins", note: "Ruhig durch Nacken, Schultern, Hüfte und Sprunggelenke bewegen." },
  { name: "Marching Jacks", type: "cardio", groups: ["ganzkoerper", "beine"], intensity: 2, minutes: 3, sets: 3, reps: "40 Sekunden", pause: 20, quiet: true, gentle: true, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Arme aktiv mitnehmen, Füße ohne Sprung seitlich setzen." },
  { name: "Jumping Jacks", type: "cardio", groups: ["ganzkoerper", "beine"], intensity: 4, minutes: 3, sets: 3, reps: "45 Sekunden", pause: 15, quiet: false, gentle: false, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Locker landen und Tempo gleichmäßig halten." },
  { name: "High Knees", type: "cardio", groups: ["ganzkoerper", "beine", "bauch"], intensity: 5, minutes: 4, sets: 4, reps: "35 Sekunden", pause: 25, quiet: false, gentle: false, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Knie aktiv heben, Oberkörper stabil halten." },
  { name: "Mountain Climbers langsam", type: "mix", groups: ["ganzkoerper", "bauch", "schultern"], intensity: 3, minutes: 4, sets: 3, reps: "30 Sekunden", pause: 30, quiet: true, gentle: false, equipment: "keins", note: "Hände unter den Schultern, Knie kontrolliert nach vorne ziehen." },
  { name: "Kniebeugen", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 45, quiet: true, gentle: true, equipment: "keins", note: "Fersen am Boden lassen und Knie in Richtung Zehen führen." },
  { name: "Squat Hold", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 4, sets: 3, reps: "30 Sekunden", pause: 35, quiet: true, gentle: true, equipment: "keins", note: "So tief halten, wie es sauber und stabil geht." },
  { name: "Ausfallschritte rückwärts", type: "kraft", groups: ["beine"], intensity: 4, minutes: 6, sets: 3, reps: "10 pro Seite", pause: 45, quiet: true, gentle: true, equipment: "keins", note: "Rückwärts ist meist kniefreundlicher als vorwärts." },
  { name: "Glute Bridge", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 2, minutes: 4, sets: 3, reps: "14 Wiederholungen", pause: 30, quiet: true, gentle: true, equipment: "keins", note: "Oben kurz anspannen, Rücken nicht überstrecken." },
  { name: "Wandliegestütz", type: "kraft", groups: ["brust", "arme", "schultern"], intensity: 1, minutes: 4, sets: 3, reps: "10 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "wand", note: "Je weiter die Füße von der Wand weg sind, desto schwerer wird es." },
  { name: "Liegestütz erhöht", type: "kraft", groups: ["brust", "arme", "schultern", "ganzkoerper"], intensity: 3, minutes: 5, sets: 3, reps: "8 Wiederholungen", pause: 45, quiet: true, gentle: true, equipment: "stuhl", note: "Hände auf Tischkante, Sofa oder stabile Erhöhung setzen." },
  { name: "Liegestütz", type: "kraft", groups: ["brust", "arme", "schultern", "ganzkoerper"], intensity: 5, minutes: 6, sets: 4, reps: "8 Wiederholungen", pause: 55, quiet: true, gentle: false, equipment: "keins", note: "Körper bleibt eine Linie, Brust kontrolliert Richtung Boden." },
  { name: "Superman Pulls", type: "kraft", groups: ["ruecken", "schultern"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "keins", note: "Brust leicht anheben, Ellenbogen wie beim Rudern nach hinten ziehen." },
  { name: "Reverse Snow Angels", type: "kraft", groups: ["ruecken", "schultern"], intensity: 2, minutes: 4, sets: 3, reps: "10 Wiederholungen", pause: 30, quiet: true, gentle: true, equipment: "keins", note: "Langsam arbeiten und Schultern bewusst nach hinten führen." },
  { name: "Plank", type: "kraft", groups: ["bauch", "ganzkoerper", "schultern"], intensity: 3, minutes: 4, sets: 3, reps: "30 Sekunden", pause: 35, quiet: true, gentle: true, equipment: "keins", note: "Rippen leicht nach unten ziehen, Po nicht absinken lassen." },
  { name: "Dead Bug", type: "kraft", groups: ["bauch"], intensity: 2, minutes: 4, sets: 3, reps: "8 pro Seite", pause: 30, quiet: true, gentle: true, equipment: "keins", note: "Unteren Rücken sanft Richtung Boden halten." },
  { name: "Hollow Hold kurz", type: "kraft", groups: ["bauch"], intensity: 4, minutes: 5, sets: 4, reps: "20 Sekunden", pause: 30, quiet: true, gentle: false, equipment: "keins", note: "Nur so tief gehen, dass der Rücken stabil bleibt." },
  { name: "Pike Push-up", type: "kraft", groups: ["schultern", "arme"], intensity: 5, minutes: 6, sets: 4, reps: "6 Wiederholungen", pause: 55, quiet: true, gentle: false, equipment: "keins", note: "Hüfte hoch, Kopf kontrolliert Richtung Boden senken." },
  { name: "Arm Circles + Hold", type: "kraft", groups: ["schultern", "arme"], intensity: 2, minutes: 4, sets: 3, reps: "45 Sekunden", pause: 20, quiet: true, gentle: true, equipment: "keins", note: "Kleine Kreise, danach Arme seitlich halten." },
  { name: "Trizeps-Dips am Stuhl", type: "kraft", groups: ["arme", "brust", "schultern"], intensity: 4, minutes: 5, sets: 3, reps: "10 Wiederholungen", pause: 45, quiet: true, gentle: false, equipment: "stuhl", note: "Schultern tief lassen, Ellenbogen nach hinten beugen." },
  { name: "Bear Crawl Hold", type: "mix", groups: ["ganzkoerper", "bauch", "schultern", "beine"], intensity: 4, minutes: 5, sets: 4, reps: "25 Sekunden", pause: 30, quiet: true, gentle: false, equipment: "keins", note: "Knie knapp über dem Boden, Rücken ruhig halten." },
  { name: "Step Back Burpee", type: "mix", groups: ["ganzkoerper", "brust", "beine"], intensity: 4, minutes: 5, sets: 4, reps: "6 Wiederholungen", pause: 40, quiet: true, gentle: false, equipment: "keins", note: "Ohne Sprung zurücksteigen, sauber aufrichten." },
  { name: "Burpees", type: "mix", groups: ["ganzkoerper", "brust", "beine"], intensity: 5, minutes: 6, sets: 4, reps: "8 Wiederholungen", pause: 45, quiet: false, gentle: false, equipment: "keins", note: "Nur wählen, wenn du dich wirklich frisch fühlst." },
  { name: "Seitstütz", type: "kraft", groups: ["bauch", "schultern"], intensity: 3, minutes: 4, sets: 3, reps: "25 Sekunden pro Seite", pause: 30, quiet: true, gentle: true, equipment: "keins", note: "Seitliche Bauchmuskulatur stabil halten." },
  { name: "Bird Dog", type: "kraft", groups: ["bauch", "ruecken"], intensity: 2, minutes: 4, sets: 3, reps: "8 pro Seite", pause: 25, quiet: true, gentle: true, equipment: "keins", note: "Rumpf ruhig halten und diagonal Arm und Bein strecken." },
  { name: "Wadenheben", type: "kraft", groups: ["beine"], intensity: 2, minutes: 4, sets: 3, reps: "16 Wiederholungen", pause: 25, quiet: true, gentle: true, equipment: "keins", note: "Langsam hoch auf die Zehenspitzen und kontrolliert absenken." },
  { name: "Wall Sit", type: "kraft", groups: ["beine"], intensity: 3, minutes: 4, sets: 3, reps: "35 Sekunden", pause: 35, quiet: true, gentle: true, equipment: "wand", note: "Rücken an die Wand, Oberschenkel arbeiten lassen." },
  { name: "Reverse Plank", type: "kraft", groups: ["ruecken", "beine", "schultern"], intensity: 3, minutes: 4, sets: 3, reps: "25 Sekunden", pause: 35, quiet: true, gentle: true, equipment: "keins", note: "Körperrückseite aktivieren und Hüfte oben halten." },
  { name: "Y-T-W Raises", type: "kraft", groups: ["ruecken", "schultern"], intensity: 2, minutes: 5, sets: 3, reps: "6 je Form", pause: 30, quiet: true, gentle: true, equipment: "keins", note: "Schulterblattkontrolle ohne Gewicht trainieren." },
  { name: "Skater Steps", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 4, sets: 4, reps: "35 Sekunden", pause: 25, quiet: true, gentle: true, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Seitlich groß aussteigen, ohne Sprung leise bleiben." },
  { name: "Shadow Boxing", type: "cardio", groups: ["ganzkoerper", "arme", "schultern"], intensity: 3, minutes: 5, sets: 4, reps: "45 Sekunden", pause: 25, quiet: true, gentle: true, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Locker boxen, Füße aktiv mitnehmen und Rumpf stabil halten." },
  { name: "Seilsprung ohne Seil", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 4, minutes: 4, sets: 4, reps: "40 Sekunden", pause: 25, quiet: false, gentle: false, equipment: "keins", location: "home", cardioTools: ["intervalle"], note: "Kleine schnelle Sprünge, als würdest du ein Springseil nutzen." },
  { name: "Power Walk", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 2, minutes: 15, sets: 1, reps: "15 Minuten", pause: 0, quiet: true, gentle: true, equipment: "keins", location: "outdoor", cardioTools: ["joggen"], note: "Zügig gehen, Arme aktiv einsetzen und gleichmäßig atmen." },
  { name: "Lockerer Lauf", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 12, sets: 1, reps: "12 Minuten", pause: 0, quiet: false, gentle: true, equipment: "keins", location: "outdoor", cardioTools: ["joggen"], note: "Ruhiges Tempo, bei dem du noch sprechen könntest." },
  { name: "Laufintervalle", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 5, minutes: 14, sets: 6, reps: "60 Sekunden schnell", pause: 60, quiet: false, gentle: false, equipment: "keins", location: "outdoor", cardioTools: ["joggen"], note: "Schnelle Abschnitte und lockeres Gehen abwechseln." },
  { name: "Walk & Run", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 2, minutes: 12, sets: 6, reps: "1 Minute joggen", pause: 60, quiet: false, gentle: true, equipment: "keins", location: "outdoor", cardioTools: ["joggen"], note: "Ideal, wenn du draußen trainieren willst, aber locker bleiben möchtest." },
  { name: "Fahrrad Grundlagentempo", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 18, sets: 1, reps: "18 Minuten", pause: 0, quiet: true, gentle: true, equipment: "fahrrad", location: "outdoor", cardioTools: ["fahrrad"], note: "Gleichmäßige Trittfrequenz, nicht komplett auspowern." },
  { name: "Fahrrad Sprints", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 5, minutes: 14, sets: 6, reps: "30 Sekunden Sprint", pause: 75, quiet: true, gentle: true, equipment: "fahrrad", location: "outdoor", cardioTools: ["fahrrad"], note: "Kurze intensive Abschnitte mit lockerer Fahrt dazwischen." },
  { name: "Treppenintervalle", type: "cardio", groups: ["beine", "ganzkoerper"], intensity: 4, minutes: 8, sets: 6, reps: "30 Sekunden hoch", pause: 45, quiet: false, gentle: false, equipment: "keins", location: "both", cardioTools: ["treppen"], note: "Kontrolliert hochgehen oder laufen, langsam zurück." },
  { name: "Treppen Step-ups", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 3, minutes: 6, sets: 3, reps: "10 pro Seite", pause: 40, quiet: true, gentle: true, equipment: "keins", location: "both", cardioTools: ["treppen"], note: "Eine Treppenstufe als stabile Erhöhung nutzen." },
  { name: "Wasserflaschen Curls", type: "kraft", groups: ["arme"], intensity: 2, minutes: 4, sets: 3, reps: "12 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "wasserflaschen", note: "Zwei volle Flaschen als leichte Gewichte nutzen." },
  { name: "Flaschen Schulterdrücken", type: "kraft", groups: ["schultern", "arme"], intensity: 3, minutes: 5, sets: 3, reps: "10 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "wasserflaschen", note: "Flaschen von Schulterhöhe kontrolliert über Kopf drücken." },
  { name: "Flaschen Seitheben", type: "kraft", groups: ["schultern"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "wasserflaschen", note: "Flaschen seitlich bis Schulterhöhe heben." },
  { name: "Flaschen Frontheben", type: "kraft", groups: ["schultern", "arme"], intensity: 3, minutes: 5, sets: 3, reps: "10 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "wasserflaschen", note: "Flaschen kontrolliert vor dem Körper anheben." },
  { name: "Getränkekasten Kreuzheben", type: "kraft", groups: ["beine", "ruecken", "ganzkoerper"], intensity: 4, minutes: 6, sets: 3, reps: "10 Wiederholungen", pause: 55, quiet: true, gentle: false, equipment: "getraenkekasten", note: "Kasten nah am Körper halten und aus Hüfte und Beinen heben." },
  { name: "Getränkekasten Rudern", type: "kraft", groups: ["ruecken", "arme"], intensity: 4, minutes: 6, sets: 3, reps: "10 Wiederholungen", pause: 50, quiet: true, gentle: false, equipment: "getraenkekasten", note: "Oberkörper nach vorne neigen, Kasten kontrolliert Richtung Bauch ziehen." },
  { name: "Getränkekasten Carry", type: "kraft", groups: ["ganzkoerper", "arme", "ruecken"], intensity: 4, minutes: 6, sets: 4, reps: "30 Sekunden tragen", pause: 35, quiet: true, gentle: false, equipment: "getraenkekasten", note: "Kasten stabil tragen, Rumpf fest und Schultern tief halten." },
  { name: "Rucksack Kniebeugen", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 4, minutes: 6, sets: 3, reps: "12 Wiederholungen", pause: 50, quiet: true, gentle: true, equipment: "rucksack", note: "Rucksack mit Büchern beladen und vor der Brust halten." },
  { name: "Rucksack Rudern", type: "kraft", groups: ["ruecken", "arme"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "rucksack", note: "Rucksack an den Griffen Richtung Bauch ziehen." },
  { name: "Rucksack Good Mornings", type: "kraft", groups: ["ruecken", "beine"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "rucksack", note: "Rucksack auf dem Rücken, Hüfte kontrolliert nach hinten schieben." },
  { name: "Handtuch Rudern isometrisch", type: "kraft", groups: ["ruecken", "arme"], intensity: 3, minutes: 5, sets: 3, reps: "25 Sekunden", pause: 35, quiet: true, gentle: true, equipment: "handtuch", note: "Handtuch fest ziehen und Spannung im Rücken halten." },
  { name: "Handtuch Hamstring Curl", type: "kraft", groups: ["beine"], intensity: 4, minutes: 6, sets: 3, reps: "8 Wiederholungen", pause: 45, quiet: true, gentle: false, equipment: "handtuch", note: "Auf glattem Boden Fersen auf Handtuch ziehen und strecken." },
  { name: "Besenstiel Mobility", type: "mobility", groups: ["schultern", "ruecken"], intensity: 1, minutes: 4, sets: 2, reps: "8 Wiederholungen", pause: 15, quiet: true, gentle: true, equipment: "besenstiel", note: "Schulterbeweglichkeit mit weitem Griff verbessern." },
  { name: "Besenstiel Overhead Squat", type: "kraft", groups: ["beine", "schultern", "ganzkoerper"], intensity: 3, minutes: 5, sets: 3, reps: "8 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "besenstiel", note: "Besenstiel über Kopf halten und kontrolliert beugen." },
  { name: "Bücher Press", type: "kraft", groups: ["brust", "arme", "schultern"], intensity: 3, minutes: 5, sets: 3, reps: "10 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "buecher", note: "Schwere Bücher als Druckgewicht nutzen." },
  { name: "Bücher Russian Twist", type: "kraft", groups: ["bauch"], intensity: 3, minutes: 5, sets: 3, reps: "12 pro Seite", pause: 35, quiet: true, gentle: true, equipment: "buecher", note: "Buch vor der Brust halten und kontrolliert rotieren." },
  { name: "Stuhl Step-ups", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 4, minutes: 6, sets: 3, reps: "8 pro Seite", pause: 45, quiet: true, gentle: false, equipment: "stuhl", note: "Nur mit sehr stabilem Stuhl oder niedriger Bank ausführen." },
  { name: "Stuhl Bulgarian Split Squat", type: "kraft", groups: ["beine"], intensity: 5, minutes: 7, sets: 3, reps: "8 pro Seite", pause: 60, quiet: true, gentle: false, equipment: "stuhl", note: "Hinteren Fuß auf Stuhl oder Bank ablegen." },
  { name: "Sofa Hip Thrust", type: "kraft", groups: ["beine"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "sofa", note: "Schultern an Sofa/Bettkante, Hüfte kraftvoll strecken." },
  { name: "Sofa Incline Push-up", type: "kraft", groups: ["brust", "arme", "schultern"], intensity: 2, minutes: 4, sets: 3, reps: "10 Wiederholungen", pause: 35, quiet: true, gentle: true, equipment: "sofa", note: "Hände auf Sofa/Bettkante für leichtere Liegestütze." },
  { name: "Hantel Curls", type: "kraft", groups: ["arme"], intensity: 3, minutes: 5, sets: 3, reps: "10 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "hanteln", note: "Ellenbogen nah am Körper halten, Gewicht kontrolliert bewegen." },
  { name: "Goblet Squat", type: "kraft", groups: ["beine", "ganzkoerper"], intensity: 4, minutes: 6, sets: 3, reps: "10 Wiederholungen", pause: 55, quiet: true, gentle: true, equipment: "hanteln", note: "Hantel vor der Brust halten und sauber in die Kniebeuge gehen." },
  { name: "Hantel Rudern einarmig", type: "kraft", groups: ["ruecken", "arme"], intensity: 4, minutes: 6, sets: 3, reps: "10 pro Seite", pause: 45, quiet: true, gentle: true, equipment: "hanteln", note: "Eine Hantel kontrolliert Richtung Hüfte ziehen." },
  { name: "Hantel Romanian Deadlift", type: "kraft", groups: ["beine", "ruecken"], intensity: 4, minutes: 6, sets: 3, reps: "10 Wiederholungen", pause: 55, quiet: true, gentle: true, equipment: "hanteln", note: "Hüfte nach hinten schieben, Rücken lang halten." },
  { name: "Bankdrücken mit Hanteln", type: "kraft", groups: ["brust", "arme", "schultern"], intensity: 4, minutes: 7, sets: 3, reps: "10 Wiederholungen", pause: 60, quiet: true, gentle: true, equipment: "hantelbank", note: "Auf der Bank stabil liegen und Hanteln kontrolliert drücken." },
  { name: "Schrägbank Rudern", type: "kraft", groups: ["ruecken", "arme"], intensity: 4, minutes: 7, sets: 3, reps: "10 Wiederholungen", pause: 55, quiet: true, gentle: true, gear: ["hantelbank", "hanteln"], note: "Brust auf die Bank legen und Hanteln nach hinten ziehen." },
  { name: "Kabelzug Rudern", type: "kraft", groups: ["ruecken", "arme"], intensity: 3, minutes: 6, sets: 3, reps: "12 Wiederholungen", pause: 45, quiet: true, gentle: true, equipment: "kabelzug", note: "Schulterblätter nach hinten ziehen, Griff Richtung Bauch führen." },
  { name: "Face Pulls am Kabelzug", type: "kraft", groups: ["ruecken", "schultern"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "kabelzug", note: "Seil Richtung Gesicht ziehen, Ellenbogen hoch und Schulterblätter aktiv." },
  { name: "Kabelzug Trizepsdrücken", type: "kraft", groups: ["arme"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "kabelzug", note: "Ellenbogen am Körper halten und Griff nach unten drücken." },
  { name: "Kabelzug Brustzug", type: "kraft", groups: ["brust", "arme"], intensity: 3, minutes: 5, sets: 3, reps: "12 Wiederholungen", pause: 40, quiet: true, gentle: true, equipment: "kabelzug", note: "Griffe kontrolliert vor der Brust zusammenführen." },
  { name: "Cooldown Stretch", type: "mobility", groups: ["ganzkoerper"], intensity: 1, minutes: 4, sets: 1, reps: "4 Minuten", pause: 0, quiet: true, gentle: true, equipment: "keins", note: "Atmung runterfahren, Beine, Brust und Rücken kurz dehnen." }
];

const labels = {
  1: "Sehr locker",
  2: "Locker",
  3: "Solide",
  4: "Fit",
  5: "Sehr fit"
};

const state = {
  currentPlan: null,
  savedPlans: loadSavedPlans()
};

const form = document.querySelector("#planner-form");
const energy = document.querySelector("#energy");
const energyLabel = document.querySelector("#energy-label");
const minutesInput = document.querySelector("#minutes");
const planPanel = document.querySelector("#plan-panel");
const planTemplate = document.querySelector("#plan-template");
const savedList = document.querySelector("#saved-list");
const savedCount = document.querySelector("#saved-count");
const createPlanButton = document.querySelector("#create-plan");
const cardioOptions = document.querySelector("#cardio-options");
const equipmentPicker = document.querySelector("#equipment-picker");
const hasEquipment = document.querySelector("#has-equipment");

energy.addEventListener("input", () => {
  energyLabel.textContent = labels[energy.value];
});

document.querySelector("#minus-time").addEventListener("click", () => adjustTime(-5));
document.querySelector("#plus-time").addEventListener("click", () => adjustTime(5));

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", syncConditionalFields);
});

hasEquipment.addEventListener("change", syncConditionalFields);

document.querySelector("#clear-saved").addEventListener("click", () => {
  if (!state.savedPlans.length) return;
  state.savedPlans = [];
  persistSavedPlans();
  renderSavedPlans();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateAndRenderPlan();
});

createPlanButton.addEventListener("click", generateAndRenderPlan);

function generateAndRenderPlan() {
  const preferences = getPreferences();
  const plan = createPlan(preferences);
  state.currentPlan = plan;
  renderPlan(plan, false);
}

function adjustTime(delta) {
  const next = clamp(Number(minutesInput.value || 25) + delta, 8, 120);
  minutesInput.value = Math.round(next / 5) * 5;
}

function getPreferences() {
  const data = new FormData(form);
  const groups = data.getAll("groups");
  return {
    energy: Number(data.get("energy")),
    minutes: clamp(Number(data.get("minutes") || 25), 8, 120),
    mode: data.get("mode"),
    groups: groups.length ? groups : ["ganzkoerper"],
    location: data.get("location") || "home",
    cardioTools: data.getAll("cardioTools"),
    quiet: data.has("quiet"),
    gentle: data.has("gentle"),
    hasEquipment: data.has("hasEquipment"),
    gear: data.getAll("gear")
  };
}

function createPlan(preferences) {
  const targetIntensity = preferences.energy;
  const warmupMinutes = preferences.minutes < 15 ? 2 : 4;
  const cooldownMinutes = preferences.minutes >= 25 ? 4 : 0;
  const workingMinutes = Math.max(6, preferences.minutes - warmupMinutes - cooldownMinutes);
  const wantedTypes = preferences.mode === "mix" ? ["kraft", "cardio", "mix"] : [preferences.mode, "mix"];

  const pool = exercises
    .filter((exercise) => exercise.type !== "mobility")
    .filter((exercise) => wantedTypes.includes(exercise.type))
    .filter((exercise) => matchesGroups(exercise, preferences.groups))
    .filter((exercise) => matchesCardioSetup(exercise, preferences))
    .filter((exercise) => !preferences.quiet || exercise.quiet)
    .filter((exercise) => !preferences.gentle || exercise.gentle)
    .filter((exercise) => matchesEquipment(exercise, preferences))
    .filter((exercise) => exercise.intensity <= Math.min(5, targetIntensity + 1))
    .sort((a, b) => scoreExercise(a, preferences) - scoreExercise(b, preferences));

  const selected = [];
  let usedMinutes = 0;
  if (preferences.mode === "mix") {
    const cardioLead = pool.find((exercise) => exercise.type === "cardio");
    if (cardioLead) {
      selected.push(cardioLead);
      usedMinutes += cardioLead.minutes;
    }
  }
  for (const exercise of pool) {
    if (selected.some((item) => item.name === exercise.name)) continue;
    if (usedMinutes + exercise.minutes > workingMinutes + 2 && selected.length >= 2) continue;
    selected.push(exercise);
    usedMinutes += exercise.minutes;
    if (usedMinutes >= workingMinutes || selected.length >= maxExerciseCount(preferences.minutes)) break;
  }

  if (selected.length < 2) {
    const fallback = exercises
      .filter((exercise) => exercise.type !== "mobility")
      .filter((exercise) => matchesCardioSetup(exercise, preferences))
      .filter((exercise) => matchesEquipment(exercise, preferences))
      .filter((exercise) => !preferences.quiet || exercise.quiet)
      .filter((exercise) => !preferences.gentle || exercise.gentle)
      .filter((exercise) => exercise.intensity <= Math.max(2, targetIntensity))
      .sort((a, b) => a.intensity - b.intensity);
    selected.push(...fallback.slice(0, 3 - selected.length));
  }

  const warmup = exercises.find((exercise) => exercise.name === "Mobilisationsflow");
  const cooldown = exercises.find((exercise) => exercise.name === "Cooldown Stretch");
  const blocks = [adaptExercise(warmup, preferences, warmupMinutes), ...selected.map((exercise) => adaptExercise(exercise, preferences))];
  if (cooldownMinutes) blocks.push(adaptExercise(cooldown, preferences, cooldownMinutes));

  return {
    id: createId(),
    createdAt: new Date().toISOString(),
    title: buildTitle(preferences),
    preferences,
    blocks,
    estimatedMinutes: estimatePlanMinutes(blocks),
    note: buildNote(preferences)
  };
}

function matchesGroups(exercise, groups) {
  if (groups.includes("ganzkoerper")) return exercise.groups.includes("ganzkoerper") || exercise.groups.length > 1;
  return groups.some((group) => exercise.groups.includes(group));
}

function matchesCardioSetup(exercise, preferences) {
  if (!["cardio", "mix"].includes(preferences.mode)) return true;
  if (!["cardio", "mix"].includes(exercise.type)) return true;

  const exerciseLocation = exercise.location || "home";
  const locationMatches = preferences.location === "both" || exerciseLocation === "both" || exerciseLocation === preferences.location;
  const selectedTools = preferences.cardioTools.length ? preferences.cardioTools : ["intervalle"];
  const exerciseTools = exercise.cardioTools || ["intervalle"];
  const toolMatches = exerciseTools.some((tool) => selectedTools.includes(tool));

  return locationMatches && toolMatches;
}

function matchesEquipment(exercise, preferences) {
  const gear = exerciseGear(exercise);
  const bodyweightGear = ["keins", "wand"];
  if (gear.every((item) => bodyweightGear.includes(item))) return true;
  if (!preferences.hasEquipment) return false;

  const selectedGear = new Set(preferences.gear);
  if (preferences.cardioTools.includes("fahrrad")) selectedGear.add("fahrrad");
  return gear.every((item) => selectedGear.has(item));
}

function exerciseGear(exercise) {
  return Array.isArray(exercise.gear) ? exercise.gear : [exercise.equipment || "keins"];
}

function scoreExercise(exercise, preferences) {
  const intensityDistance = Math.abs(exercise.intensity - preferences.energy) * 4;
  const groupBonus = matchesGroups(exercise, preferences.groups) ? 0 : 8;
  const typeBonus = exercise.type === preferences.mode ? 0 : 2;
  return intensityDistance + groupBonus + typeBonus + exercise.minutes / 3;
}

function maxExerciseCount(minutes) {
  if (minutes < 15) return 3;
  if (minutes < 30) return 5;
  if (minutes < 60) return 7;
  if (minutes < 90) return 10;
  return 12;
}

function adaptExercise(exercise, preferences, forcedMinutes) {
  const energyDelta = preferences.energy - exercise.intensity;
  const sets = exercise.type === "mobility" ? 1 : clamp(exercise.sets + Math.sign(energyDelta), 2, 5);
  const pause = exercise.type === "mobility" ? 0 : clamp(exercise.pause + (preferences.energy <= 2 ? 15 : preferences.energy >= 4 ? -10 : 0), 15, 75);
  return {
    ...exercise,
    sets,
    pause,
    minutes: forcedMinutes || exercise.minutes,
    prescription: exercise.type === "mobility" ? exercise.reps : `${sets} x ${exercise.reps}`
  };
}

function estimatePlanMinutes(blocks) {
  return blocks.reduce((sum, block) => sum + block.minutes, 0);
}

function buildTitle(preferences) {
  const mode = { kraft: "Kraft", cardio: "Cardio", mix: "Mix" }[preferences.mode];
  const groupText = preferences.groups.includes("ganzkoerper")
    ? "Ganzkörper"
    : preferences.groups.map(prettyGroup).join(", ");
  return `${preferences.minutes} Min. ${mode}: ${groupText}`;
}

function buildNote(preferences) {
  if (preferences.energy <= 2) {
    return "Heute zählt saubere Bewegung mehr als Tempo. Beende jeden Satz mit etwas Luft im Tank.";
  }
  if (preferences.energy >= 4) {
    return "Du kannst heute zügig arbeiten. Wenn die Technik kippt, reduziere Tempo oder Wiederholungen.";
  }
  return "Ein ausgewogener Plan für einen normalen Trainingstag. Pausen bewusst einhalten.";
}

function prettyGroup(group) {
  return {
    ganzkoerper: "Ganzkörper",
    beine: "Beine",
    brust: "Brust",
    ruecken: "Rücken",
    bauch: "Bauch",
    schultern: "Schultern",
    arme: "Arme"
  }[group] || group;
}

function prettyGear(gear) {
  return {
    keins: "ohne Geräte",
    wand: "Wand",
    stuhl: "Stuhl/Bank",
    rucksack: "Rucksack",
    handtuch: "Handtuch",
    besenstiel: "Besenstiel",
    buecher: "Bücher",
    sofa: "Sofa/Bettkante",
    wasserflaschen: "Wasserflaschen",
    getraenkekasten: "Getränkekasten",
    hanteln: "Hanteln",
    hantelbank: "Hantelbank",
    kabelzug: "Kabelzug",
    fahrrad: "Fahrrad"
  }[gear] || gear;
}

function prettyLocation(location) {
  return {
    home: "Zuhause",
    outdoor: "Draußen",
    both: "egal"
  }[location] || location;
}

function renderPlan(plan, fromSaved) {
  const fragment = planTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".plan-card");
  fragment.querySelector(".plan-date").textContent = formatDate(plan.createdAt);
  fragment.querySelector(".plan-title").textContent = plan.title;
  fragment.querySelector(".plan-note").textContent = plan.note;

  const saveButton = fragment.querySelector(".save-plan");
  saveButton.textContent = fromSaved ? "Gespeichert" : "Speichern";
  saveButton.disabled = fromSaved || isSaved(plan.id);
  if (saveButton.disabled) saveButton.textContent = "Gespeichert";
  saveButton.addEventListener("click", () => savePlan(plan));

  const summaryGrid = fragment.querySelector(".summary-grid");
  [
    ["Dauer", `${plan.estimatedMinutes} Minuten`],
    ["Tagesform", labels[plan.preferences.energy]],
    ["Art", { kraft: "Kraft", cardio: "Cardio", mix: "Mix" }[plan.preferences.mode]],
    ["Ort", ["cardio", "mix"].includes(plan.preferences.mode) ? prettyLocation(plan.preferences.location) : "flexibel"],
    ["Equipment", plan.preferences.hasEquipment && plan.preferences.gear.length ? plan.preferences.gear.map(prettyGear).join(", ") : "keine Geräte"],
    ["Pausen", plan.preferences.energy <= 2 ? "etwas länger" : plan.preferences.energy >= 4 ? "kurz & knackig" : "normal"]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "summary-item";
    item.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
    summaryGrid.append(item);
  });

  const list = fragment.querySelector(".exercise-list");
  plan.blocks.forEach((block) => list.append(renderExercise(block)));

  planPanel.classList.remove("empty");
  planPanel.replaceChildren(card);
}

function renderExercise(block) {
  const item = document.createElement("li");
  item.className = "exercise-item";
  const pauseText = block.pause ? `Pause: ${block.pause} Sek.` : "ohne Pause";
  const infoId = `exercise-info-${createId()}`;
  item.innerHTML = `
    <div>
      <div class="exercise-topline">
        <div class="exercise-name">${block.name}</div>
        <button class="info-button" type="button" aria-expanded="false" aria-controls="${infoId}" title="Übung erklären">i</button>
      </div>
      <div class="exercise-prescription">${block.prescription}</div>
      <div class="exercise-tags">
        <span>${block.groups.map(prettyGroup).join(", ")}</span>
        <span>${exerciseGear(block).map(prettyGear).join(", ")}</span>
      </div>
      <p class="exercise-meta">${pauseText} · Intensität ${block.intensity}/5 · ${block.note}</p>
      <div class="exercise-info" id="${infoId}" hidden>
        <strong>So geht's:</strong>
        <p>${buildExerciseExplanation(block)}</p>
      </div>
    </div>
  `;
  const button = item.querySelector(".info-button");
  const info = item.querySelector(".exercise-info");
  button.addEventListener("click", () => {
    const isOpen = !info.hidden;
    info.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
  });
  return item;
}

function buildExerciseExplanation(block) {
  const explanations = {
    "Mobilisationsflow": "Stehe locker und bewege nacheinander Nacken, Schultern, Hüfte, Knie und Sprunggelenke. Arbeite langsam, ohne Druck, und atme ruhig weiter.",
    "Marching Jacks": "Setze abwechselnd einen Fuß seitlich raus und wieder zurück. Die Arme gehen wie bei Hampelmännern über den Kopf, aber ohne zu springen.",
    "Jumping Jacks": "Springe mit den Füßen nach außen und führe die Arme über den Kopf. Springe zurück in den Stand und lande weich auf dem ganzen Fuß.",
    "High Knees": "Laufe auf der Stelle und ziehe die Knie Richtung Hüfte. Halte den Oberkörper aufrecht und arbeite mit aktiven Armen.",
    "Mountain Climbers langsam": "Starte in der hohen Plank. Ziehe ein Knie kontrolliert Richtung Brust, setze den Fuß zurück und wechsle die Seite.",
    "Kniebeugen": "Stelle die Füße etwa schulterbreit auf. Schiebe die Hüfte nach hinten und unten, halte Brust und Rücken stabil, dann drücke dich über die Fersen wieder hoch.",
    "Squat Hold": "Gehe in eine saubere Kniebeuge und halte die Position. Bleibe stabil, atme ruhig und halte die Knie in Richtung Zehen.",
    "Ausfallschritte rückwärts": "Mache einen großen Schritt nach hinten, senke das hintere Knie kontrolliert Richtung Boden und drücke dich über das vordere Bein zurück.",
    "Glute Bridge": "Lege dich auf den Rücken, Füße aufgestellt. Hebe die Hüfte an, spanne oben kurz den Po an und senke kontrolliert ab.",
    "Wandliegestütz": "Stelle dich vor eine Wand, Hände auf Brusthöhe. Beuge die Arme, bringe die Brust Richtung Wand und drücke dich wieder weg.",
    "Liegestütz erhöht": "Setze die Hände auf eine stabile Erhöhung. Halte den Körper gerade, senke die Brust kontrolliert ab und drücke dich wieder hoch.",
    "Liegestütz": "Starte in der hohen Plank. Beuge die Arme, senke die Brust Richtung Boden und drücke dich wieder hoch, ohne die Hüfte hängen zu lassen.",
    "Superman Pulls": "Lege dich auf den Bauch, hebe Brust und Arme leicht an. Ziehe die Ellenbogen nach hinten, als würdest du rudern, und strecke wieder nach vorne.",
    "Reverse Snow Angels": "Lege dich auf den Bauch, Arme neben dem Körper. Führe die Arme langsam in weitem Bogen nach vorne und wieder zurück.",
    "Plank": "Stütze dich auf Unterarme oder Hände. Halte Kopf, Rücken und Beine in einer Linie und spanne Bauch und Po leicht an.",
    "Dead Bug": "Lege dich auf den Rücken, Arme nach oben, Knie angewinkelt. Strecke diagonal Arm und Bein langsam aus und kehre kontrolliert zurück.",
    "Hollow Hold kurz": "Lege dich auf den Rücken, hebe Schultern und Beine leicht an. Halte den unteren Rücken am Boden und mache die Position leichter, wenn er abhebt.",
    "Pike Push-up": "Starte mit hoher Hüfte in einer umgedrehten V-Position. Beuge die Arme und senke den Kopf kontrolliert Richtung Boden.",
    "Arm Circles + Hold": "Strecke die Arme seitlich aus. Mache kleine kontrollierte Kreise und halte danach die Arme stabil auf Schulterhöhe.",
    "Trizeps-Dips am Stuhl": "Setze die Hände hinter dir auf einen stabilen Stuhl. Beuge die Ellenbogen nach hinten und drücke dich wieder hoch.",
    "Bear Crawl Hold": "Gehe in den Vierfüßlerstand und hebe die Knie knapp vom Boden. Rücken ruhig halten und gleichmäßig atmen.",
    "Step Back Burpee": "Gehe in die Hocke, setze die Hände auf den Boden und steige einzeln zurück in die Plank. Steige wieder nach vorne und richte dich auf.",
    "Burpees": "Gehe aus dem Stand in die Plank, komme zügig wieder nach vorne und springe oder strecke dich kraftvoll nach oben.",
    "Seitstütz": "Stütze dich seitlich auf Unterarm und Füße. Hebe die Hüfte an und halte Kopf, Rumpf und Beine in einer Linie.",
    "Bird Dog": "Starte im Vierfüßlerstand. Strecke diagonal Arm und Bein, ohne die Hüfte aufzudrehen, und wechsle kontrolliert.",
    "Wadenheben": "Stelle dich aufrecht hin. Drücke dich langsam auf die Zehenspitzen und senke die Fersen kontrolliert ab.",
    "Wall Sit": "Lehne den Rücken an die Wand und rutsche in eine Sitzposition. Knie etwa über den Füßen halten.",
    "Reverse Plank": "Setze die Hände hinter dir auf, strecke die Beine und hebe die Hüfte. Halte Brust offen und Körper lang.",
    "Y-T-W Raises": "Lege dich auf den Bauch und hebe die Arme nacheinander in Y-, T- und W-Form leicht an.",
    "Skater Steps": "Setze einen Fuß seitlich hinter den anderen und wechsle die Seite. Arbeite dynamisch, aber leise.",
    "Shadow Boxing": "Boxe locker in die Luft, kombiniere gerade Schläge und kleine Schritte. Schultern locker lassen.",
    "Seilsprung ohne Seil": "Springe klein auf dem Vorfuß und kreise die Handgelenke, als würdest du ein Seil schwingen.",
    "Power Walk": "Gehe draußen zügig, mit aktiven Armen und aufrechter Haltung. Tempo so wählen, dass du warm wirst.",
    "Lockerer Lauf": "Starte langsam und finde ein Tempo, bei dem du gleichmäßig atmen kannst. Bleib locker in Schultern und Armen.",
    "Laufintervalle": "Wechsle schnelle Laufphasen mit lockerem Gehen oder Traben ab. Die schnellen Phasen sollen fordern, aber kontrolliert bleiben.",
    "Walk & Run": "Gehe zügig, jogge kurz an und wechsle wieder ins Gehen. Halte den Wechsel sauber und ohne Hektik.",
    "Fahrrad Grundlagentempo": "Fahre gleichmäßig mit moderatem Widerstand. Du solltest dich anstrengen, aber nicht außer Atem explodieren.",
    "Fahrrad Sprints": "Fahre dich kurz ein, beschleunige dann für die Sprintphase und rolle in der Pause locker weiter.",
    "Treppenintervalle": "Gehe oder laufe kontrolliert die Treppe hoch. Nutze den Weg nach unten als Pause und achte auf sichere Schritte.",
    "Treppen Step-ups": "Stelle einen Fuß komplett auf die Stufe. Drücke dich hoch, setze kontrolliert ab und wechsle die Seite.",
    "Wasserflaschen Curls": "Halte je eine Flasche in der Hand. Beuge die Ellenbogen, ohne die Oberarme nach vorne zu schwingen.",
    "Flaschen Schulterdrücken": "Starte mit den Flaschen auf Schulterhöhe. Drücke sie kontrolliert nach oben und senke sie langsam wieder ab.",
    "Flaschen Seitheben": "Hebe die Flaschen mit leicht gebeugten Armen seitlich bis etwa Schulterhöhe und senke langsam ab.",
    "Flaschen Frontheben": "Hebe die Flaschen vor dem Körper bis Schulterhöhe. Rumpf ruhig halten und nicht schwingen.",
    "Getränkekasten Kreuzheben": "Stelle dich nah an den Kasten, schiebe die Hüfte zurück und hebe mit geradem Rücken aus Beinen und Hüfte.",
    "Getränkekasten Rudern": "Halte den Kasten stabil, neige den Oberkörper nach vorne und ziehe den Kasten kontrolliert zum Bauch.",
    "Getränkekasten Carry": "Hebe den Kasten sicher an und trage ihn mit festem Rumpf. Kleine, kontrollierte Schritte.",
    "Rucksack Kniebeugen": "Halte den beladenen Rucksack vor der Brust. Gehe sauber in die Kniebeuge und drücke dich hoch.",
    "Rucksack Rudern": "Greife den Rucksack an den Griffen, neige dich vor und ziehe ihn Richtung Bauch.",
    "Rucksack Good Mornings": "Trage den Rucksack auf dem Rücken, beuge aus der Hüfte nach vorne und richte dich kontrolliert auf.",
    "Handtuch Rudern isometrisch": "Greife ein Handtuch an beiden Enden, ziehe es auseinander und halte die Spannung im Rücken.",
    "Handtuch Hamstring Curl": "Lege die Fersen auf ein Handtuch, hebe die Hüfte und ziehe die Fersen Richtung Po.",
    "Besenstiel Mobility": "Greife den Besenstiel weit und führe ihn kontrolliert über Kopf nach hinten und wieder zurück.",
    "Besenstiel Overhead Squat": "Halte den Besenstiel über Kopf. Gehe langsam in die Kniebeuge und halte die Arme stabil.",
    "Bücher Press": "Halte ein schweres Buch oder einen Bücherstapel vor der Brust und drücke ihn kontrolliert nach vorne oder oben.",
    "Bücher Russian Twist": "Setze dich leicht zurückgelehnt hin und rotiere mit dem Buch kontrolliert von Seite zu Seite.",
    "Stuhl Step-ups": "Stelle einen Fuß komplett auf eine stabile Erhöhung. Drücke dich über dieses Bein hoch und steige kontrolliert wieder ab.",
    "Stuhl Bulgarian Split Squat": "Lege den hinteren Fuß auf einen stabilen Stuhl. Senke dich kontrolliert ab und drücke dich hoch.",
    "Sofa Hip Thrust": "Lege die Schultern an Sofa oder Bettkante. Hebe die Hüfte und spanne oben den Po an.",
    "Sofa Incline Push-up": "Setze die Hände auf Sofa oder Bettkante und führe einen sauberen erhöhten Liegestütz aus.",
    "Hantel Curls": "Halte die Oberarme ruhig am Körper. Beuge die Ellenbogen und senke die Hanteln langsam wieder ab.",
    "Goblet Squat": "Halte eine Hantel vor der Brust. Gehe kontrolliert in die Kniebeuge und halte den Oberkörper stabil.",
    "Hantel Rudern einarmig": "Stütze dich leicht ab, ziehe die Hantel Richtung Hüfte und senke sie kontrolliert ab.",
    "Hantel Romanian Deadlift": "Halte die Hanteln vor den Oberschenkeln, schiebe die Hüfte zurück und richte dich wieder auf.",
    "Bankdrücken mit Hanteln": "Lege dich stabil auf die Bank. Drücke die Hanteln über der Brust hoch und senke sie kontrolliert ab.",
    "Schrägbank Rudern": "Lege die Brust auf die Bank und ziehe die Hanteln kontrolliert nach hinten.",
    "Kabelzug Rudern": "Setze oder stelle dich stabil hin. Ziehe den Griff Richtung Bauch und führe ihn kontrolliert zurück.",
    "Face Pulls am Kabelzug": "Ziehe das Seil Richtung Gesicht, Ellenbogen bleiben hoch. Spüre die Arbeit zwischen Schulterblättern und hinteren Schultern.",
    "Kabelzug Trizepsdrücken": "Halte die Ellenbogen eng am Körper und drücke den Griff kontrolliert nach unten.",
    "Kabelzug Brustzug": "Stelle dich stabil hin und führe die Kabelzuggriffe kontrolliert vor der Brust zusammen.",
    "Cooldown Stretch": "Atme ruhig aus, dehne Beine, Brust und Rücken locker an. Halte jede Position angenehm, ohne zu federn."
  };

  return explanations[block.name] || block.note;
}

function savePlan(plan) {
  if (isSaved(plan.id)) return;
  state.savedPlans = [{ ...plan, savedAt: new Date().toISOString() }, ...state.savedPlans].slice(0, 20);
  persistSavedPlans();
  renderPlan(plan, true);
  renderSavedPlans();
}

function renderSavedPlans() {
  savedCount.textContent = `${state.savedPlans.length} gespeichert`;
  if (!state.savedPlans.length) {
    savedList.innerHTML = `<div class="empty-saved">Noch keine Lieblingspläne gespeichert.</div>`;
    return;
  }

  savedList.replaceChildren(...state.savedPlans.map((plan) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="saved-card-header">
        <div>
          <h2>${plan.title}</h2>
          <p class="saved-meta">${formatDate(plan.savedAt)} · ${plan.estimatedMinutes} Minuten · ${labels[plan.preferences.energy]}</p>
        </div>
      </div>
      <div class="saved-actions">
        <button class="secondary-button" type="button" data-action="open">Ansehen</button>
        <button class="secondary-button danger" type="button" data-action="delete">Löschen</button>
      </div>
    `;
    article.querySelector('[data-action="open"]').addEventListener("click", () => {
      state.currentPlan = plan;
      renderPlan(plan, true);
      switchView("generator");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    article.querySelector('[data-action="delete"]').addEventListener("click", () => {
      state.savedPlans = state.savedPlans.filter((item) => item.id !== plan.id);
      persistSavedPlans();
      renderSavedPlans();
    });
    return article;
  }));
}

function switchView(name) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === name);
  });
  document.querySelector("#generator-view").classList.toggle("active", name === "generator");
  document.querySelector("#saved-view").classList.toggle("active", name === "saved");
}

function syncConditionalFields() {
  const mode = document.querySelector('input[name="mode"]:checked')?.value || "kraft";
  const showCardio = ["cardio", "mix"].includes(mode);
  cardioOptions.hidden = !showCardio;
  equipmentPicker.hidden = !hasEquipment.checked;
}

function loadSavedPlans() {
  try {
    if (!storageAvailable()) return [];
    return JSON.parse(window.localStorage.getItem("fitplan.savedPlans") || "[]");
  } catch {
    return [];
  }
}

function persistSavedPlans() {
  try {
    if (storageAvailable()) {
      window.localStorage.setItem("fitplan.savedPlans", JSON.stringify(state.savedPlans));
    }
  } catch {
    // Saving is a convenience feature; plan generation should still work if storage is blocked.
  }
}

function isSaved(id) {
  return state.savedPlans.some((plan) => plan.id === id);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createId() {
  const randomUUID = globalThis.crypto && typeof globalThis.crypto.randomUUID === "function"
    ? globalThis.crypto.randomUUID.bind(globalThis.crypto)
    : null;
  return randomUUID ? randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function storageAvailable() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

renderSavedPlans();
syncConditionalFields();
