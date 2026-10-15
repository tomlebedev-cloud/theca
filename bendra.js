// Bendra pagrindiniam ir knygų puslapiams: tema, skaitymo žymės, pagalbinės funkcijos.
// slug() turi sutapti su tools/build.py funkcija slug() – pagal ją sudaromi knygų puslapių adresai.

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pavarde = vardas => vardas.split(" ").pop();
const slug = (r, k) => (pavarde(r.vardas) + "-" + k.pavadinimas).toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Skaitymo žymės saugomos naršyklėje: { "Autorius|Knyga": "noriu" | "skaityta" }
const BUSENOS = { noriu: "Noriu perskaityti", skaityta: "Perskaityta" };
let zymes = {};
try { zymes = JSON.parse(localStorage.getItem("theca-zymes")) || {}; } catch {}
const issaugoti = () => { try { localStorage.setItem("theca-zymes", JSON.stringify(zymes)); } catch {} };
const raktas = (r, k) => r.vardas + "|" + k.pavadinimas;
const zyme = z => z ? `<span class="badge${z === "skaityta" ? " done" : ""}">${BUSENOS[z]}</span>` : "";
// Pakartotinis paspaudimas žymę nuima
const perjungtiZyme = (key, b) => {
  if (zymes[key] === b) delete zymes[key]; else zymes[key] = b;
  issaugoti();
};

// Šviesi / tamsi tema: kol nepaspausta, laikomasi sistemos nustatymo
(() => {
  const btn = document.getElementById("tema");
  if (!btn) return;
  const tamsi = () => (document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
  const rodyti = () => {
    btn.textContent = tamsi() ? "☀" : "☾";
    btn.setAttribute("aria-label", tamsi() ? "Įjungti šviesią temą" : "Įjungti tamsią temą");
    btn.title = btn.getAttribute("aria-label");
  };
  btn.addEventListener("click", () => {
    const t = tamsi() ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theca-tema", t); } catch {}
    rodyti();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", rodyti);
  rodyti();
})();
