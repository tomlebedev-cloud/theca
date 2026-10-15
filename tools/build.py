"""Sukuria atskirą puslapį kiekvienai knygai (knyga/<slug>/index.html) ir sitemap.xml.

Paleisti iš projekto aplanko kiekvieną kartą pakeitus knygos.js:
    python tools/build.py
"""
import html
import json
import re
import shutil
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://tomlebedev-cloud.github.io/theca/"
OUT = ROOT / "knyga"

ICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='3' "
        "width='24' height='26' rx='3' fill='%238a4b2a'/%3E%3Crect x='4' y='3' width='4' height='26' fill='%23000' "
        "opacity='.2'/%3E%3Ctext x='18' y='22' font-family='Georgia,serif' font-size='16' font-weight='700' "
        "fill='%23fff8ec' text-anchor='middle'%3ET%3C/text%3E%3C/svg%3E")


def load_data():
    """Nuskaito knygos.js: JS objektų raktus paverčia JSON raktais (už eilučių ribų), išmeta komentarus."""
    src = (ROOT / "knygos.js").read_text(encoding="utf-8")
    src = src[src.index("["): src.rindex("]") + 1]
    out, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c == '"':
            j = i + 1
            while src[j] != '"':
                j += 2 if src[j] == "\\" else 1
            out.append(src[i:j + 1])
            i = j + 1
        elif c == "/" and src[i + 1] == "/":
            i = src.index("\n", i)
        elif c.isalpha() or c == "_":
            m = re.match(r"[A-Za-z_]\w*", src[i:])
            out.append(json.dumps(m.group(0)))
            i += m.end()
        else:
            out.append(c)
            i += 1
    text = re.sub(r",(\s*[}\]])", r"\1", "".join(out))
    return json.loads(text)


def pavarde(vardas):
    return vardas.split(" ")[-1]


def slug(r, k):
    # Turi sutapti su bendra.js funkcija slug()
    s = unicodedata.normalize("NFD", (pavarde(r["vardas"]) + "-" + k["pavadinimas"]).lower())
    s = re.sub("[̀-ͯ]", "", s)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def gime(r):
    m = re.search(r"\d+", r["gyvenimas"])
    n = int(m.group(0)) if m else 800
    return -n if "pr. Kr." in r["gyvenimas"] else n


e = lambda s: html.escape(str(s), quote=True)


def cover(k, r):
    return (f'<div class="cover" style="background:{e(k["spalva"])}">{e(k["pavadinimas"])}'
            f'<small>{e(pavarde(r["vardas"]))}</small></div>')


def card(r, k):
    orig = "" if k["originalas"] == k["pavadinimas"] else e(k["originalas"]) + ", "
    online = '<div class="online">Skaitoma internete</div>' if k.get("skaityti") else ""
    return (f'<a class="card" href="../{slug(r, k)}/" data-key="{e(r["vardas"] + "|" + k["pavadinimas"])}">'
            f'{cover(k, r)}<div><span class="zyme"></span><h3>{e(k["pavadinimas"])}</h3>'
            f'<div class="orig">{orig}{e(k["metai"])} · {e(k["zanras"])}</div>'
            f'<p class="short">{e(k["trumpai"])}</p>{online}</div></a>')


def page(r, k, prev, nxt, version):
    s = slug(r, k)
    url = f"{SITE}knyga/{s}/"
    title = f'{k["pavadinimas"]} – {r["vardas"]} | Theca'
    orig = "" if k["originalas"] == k["pavadinimas"] else f'Originalas: <i>{e(k["originalas"])}</i> · '
    read = ""
    if k.get("skaityti"):
        read = (f'<a class="read" href="{e(k["skaityti"]["url"])}" target="_blank" rel="noopener">'
                f'Skaityti internete <span>· {e(k["skaityti"]["saltinis"])} ↗</span></a>')
    kitos = [x for x in r["knygos"] if x is not k]
    kitos_html = ""
    if kitos:
        kitos_html = (f'<section class="section"><h2>Kitos autoriaus knygos</h2>'
                      f'<div class="grid">{"".join(card(r, x) for x in kitos)}</div></section>')
    pn = ""
    if prev:
        pr, pk = prev
        pn += (f'<a class="prev" href="../{slug(pr, pk)}/"><small>← Ankstesnė</small>'
               f'<strong>{e(pk["pavadinimas"])}</strong><small>{e(pr["vardas"])}</small></a>')
    if nxt:
        nr, nk = nxt
        pn += (f'<a class="next" href="../{slug(nr, nk)}/"><small>Kita →</small>'
               f'<strong>{e(nk["pavadinimas"])}</strong><small>{e(nr["vardas"])}</small></a>')
    autoriaus_nuoroda = "../../#q=" + e(re.sub(r"\s+", "+", r["vardas"]))
    key = e(r["vardas"] + "|" + k["pavadinimas"])
    return f"""<!doctype html>
<html lang="lt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>try {{ const t = localStorage.getItem("theca-tema"); if (t) document.documentElement.dataset.theme = t; }} catch {{}}</script>
<title>{e(title)}</title>
<meta name="description" content="{e(k["trumpai"])}">
<link rel="canonical" href="{url}">
<meta property="og:title" content="{e(k["pavadinimas"] + " – " + r["vardas"])}">
<meta property="og:description" content="{e(k["trumpai"])}">
<meta property="og:type" content="book">
<meta property="og:locale" content="lt_LT">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="Theca">
<meta property="og:image" content="{SITE}og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#8a4b2a">
<link rel="icon" href="{ICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="../../stilius.css?v={version}">
</head>
<body>
<header class="page-head">
  <div class="wrap">
    <a class="back" href="../../">← Visos knygos</a>
    <a class="brand" href="../../">Theca</a>
    <button id="tema" class="tema"></button>
  </div>
</header>

<main class="wrap">
  <article class="book">
    {cover(k, r)}
    <div>
      <h1>{e(k["pavadinimas"])}</h1>
      <div class="by"><a href="{autoriaus_nuoroda}">{e(r["vardas"])}</a></div>
      <div class="meta">{orig}{e(k["metai"])} · {e(k["zanras"])}</div>
      <p class="desc">{e(k["aprasymas"])}</p>
      {read}
      <div class="actions" id="zymes" data-key="{key}"></div>
    </div>
  </article>

  <section class="section">
    <h2>{e(r["vardas"])}</h2>
    <div class="meta">{e(r["gyvenimas"])} · {e(r["salis"])}</div>
    <p>{e(r["apie"])}</p>
  </section>

  {kitos_html}

  <nav class="prevnext" aria-label="Kitos knygos">{pn}</nav>
</main>

<footer class="wrap">Theca – lietuvių ir pasaulio klasika lietuvių kalba.</footer>

<script src="../../bendra.js?v={version}"></script>
<script>
  // Skaitymo žymės: mygtukai šiai knygai ir ženkliukai kitų knygų kortelėse
  const box = document.getElementById("zymes");
  const rodytiZymes = () => {{
    box.innerHTML = Object.entries(BUSENOS).map(([b, t]) =>
      `<button class="chip" aria-pressed="${{zymes[box.dataset.key] === b}}" data-b="${{b}}">${{t}}</button>`).join("");
    document.querySelectorAll(".card[data-key]").forEach(c => c.querySelector(".zyme").innerHTML = zyme(zymes[c.dataset.key]));
  }};
  box.addEventListener("click", ev => {{
    const b = ev.target.closest(".chip");
    if (!b) return;
    perjungtiZyme(box.dataset.key, b.dataset.b);
    rodytiZymes();
  }});
  rodytiZymes();
</script>
</body>
</html>
"""


def main():
    data = load_data()
    data.sort(key=gime)  # stabilus rikiavimas – kaip RASYTOJAI.sort() index.html
    seq = [(r, k) for r in data for k in r["knygos"]]
    slugs = [slug(r, k) for r, k in seq]
    dup = {s for s in slugs if slugs.count(s) > 1}
    assert not dup, f"Pasikartojantys adresai: {dup}"

    version = (ROOT / "index.html").read_text(encoding="utf-8")
    version = re.search(r"knygos\.js\?v=([\w-]+)", version).group(1)

    # Senus puslapius šaliname po vieną (OneDrive kartais neleidžia ištrinti viso aplanko iškart)
    if OUT.exists():
        for d in OUT.iterdir():
            if d.name not in slugs:
                shutil.rmtree(d, ignore_errors=True)
    for i, (r, k) in enumerate(seq):
        d = OUT / slug(r, k)
        d.mkdir(parents=True, exist_ok=True)
        prev = seq[i - 1] if i > 0 else None
        nxt = seq[i + 1] if i + 1 < len(seq) else None
        (d / "index.html").write_text(page(r, k, prev, nxt, version), encoding="utf-8", newline="\n")

    urls = [SITE] + [f"{SITE}knyga/{s}/" for s in slugs]
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n'
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
               + "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls) + "</urlset>\n")
    (ROOT / "sitemap.xml").write_text(sitemap, encoding="utf-8", newline="\n")
    sys.stdout.reconfigure(encoding="utf-8")
    print(f"Sukurta {len(seq)} knygų puslapių ir sitemap.xml")


if __name__ == "__main__":
    main()
