"""Build the Spotlight 6 section of the site into <repo>/spotlight6/.
Run from src/:  python3 s6/build_s6.py"""
import html, os, subprocess, sys
sys.path.insert(0, os.path.dirname(__file__))
from verbs import GROUPS
import gen_irregular

SRC = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SITE = os.path.join(SRC, "..", "spotlight6")
os.makedirs(SITE, exist_ok=True)
os.makedirs(os.path.join(SRC, "out"), exist_ok=True)
e = html.escape
HEAD = '<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
CSS = open(os.path.join(SRC, "engine", "style.css")).read()
BACK = '<p class="wrap back"><a href="index.html">← Spotlight 6: все темы</a></p>'

# module, file, pack, title, subtitle
TOPICS = [
    ("Module 4 · Day after day", "present-simple", "s6-m4-present-simple", "Present Simple", "-s / -es / -ies, do / does, вопросы и отрицания"),
    ("Module 7 · Now & then", "was-were", "s6-m7-was-were", "Was / Were", "to be в прошедшем времени, there was / there were"),
    ("Module 7 · Now & then", "past-regular", "s6-m7-past-regular", "Past Simple: Regular Verbs", "-ed, правила написания и чтения, did / didn't"),
    ("Module 7 · Now & then", "irregular-verbs-table", None, "Irregular Verbs Table", "таблица трёх форм по группам: учим и проверяем себя"),
    ("Module 7 · Now & then", "past-irregular-1", "s6-past-irregular-1", "Irregular Verbs 1", "группы 1–6: cut, keep, buy, build, find, say…"),
    ("Module 7 · Now & then", "past-irregular-2", "s6-past-irregular-2", "Irregular Verbs 2", "группы 7–10: win, sell, come, begin…"),
    ("Module 7 · Now & then", "past-irregular-3", "s6-past-irregular-3", "Irregular Verbs 3", "группы 11–16: drive, know, break, take, go…"),
    ("Module 7 · Now & then", "past-simple-mix", "s6-m7-past-simple-mix", "Past Simple: All Together", "всё вместе + три текста в формате ОГЭ"),
]

def add_back(page):
    return page.replace('<header class="hero wrap">', BACK.replace('class="wrap back"', 'class="wrap back" style="margin:18px auto 0;font-size:15px"') + '\n<header class="hero wrap">', 1)

def build_packs():
    for p in gen_irregular.PAGES:
        gen_irregular.build(*p)
    for _, fn, pack, *_ in TOPICS:
        if not pack: continue
        out = os.path.join(SRC, "out", pack + ".html")
        subprocess.run([sys.executable, os.path.join(SRC, "engine", "build.py"), os.path.join(SRC, "packs", pack + ".js"), out], check=True, cwd=SRC)
        open(os.path.join(SITE, fn + ".html"), "w").write(HEAD + add_back(open(out).read()))

def table():
    rows = ""
    for num, name, hint, verbs in GROUPS:
        body = ""
        for v1, v2, v3, tr, _ in verbs:
            f = lambda x: " / ".join(x.split("/")) if v1 == "be" else x.split("/")[0] + (f' <small>({x.split("/")[1]})</small>' if "/" in x else "")
            say = f"{v1}, {v2.split('/')[0]}, {v3.split('/')[0]}"
            body += (f'<tr><td class="c1">{e(v1)}</td><td class="c2">{f(v2)}</td><td class="c3">{f(v3)}</td>'
                     f'<td class="cr">{e(tr)}</td><td class="cs"><button type="button" class="sp" data-say="{e(say)}" aria-label="listen">🔊</button></td></tr>')
        rows += (f'<section class="grp"><h2><span class="gn">{num}</span> {e(name)}</h2>'
                 + (f'<p class="gh">{e(hint)}</p>' if hint else "")
                 + f'<table><thead><tr><th>V1</th><th>V2</th><th>V3</th><th>Перевод</th><th></th></tr></thead><tbody>{body}</tbody></table></section>')
    n = sum(len(g[3]) for g in GROUPS)
    page = f'''<title>Irregular Verbs Table</title>
{CSS}
.tools {{ display: flex; flex-wrap: wrap; gap: 8px; margin: 6px 0 4px; }}
.tools .btn[aria-pressed="true"] {{ background: var(--accent); color: var(--on-accent); border-color: var(--accent); }}
.grp {{ margin-top: 26px; }}
.grp h2 {{ margin: 0 0 2px; font-size: 21px; }}
.gn {{ display: inline-grid; place-items: center; min-width: 1.7em; height: 1.7em; border-radius: 6px; background: var(--accent-soft); color: var(--accent); font-family: var(--font-mono); font-size: 14px; margin-right: 6px; vertical-align: 3px; }}
.gh {{ margin: 0 0 8px; color: var(--muted); font-size: 15px; }}
table {{ width: 100%; border-collapse: collapse; background: var(--card); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }}
th {{ font-family: var(--font-mono); font-weight: 500; font-size: 12px; letter-spacing: .06em; color: var(--muted); text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--line); }}
td {{ padding: 8px 10px; border-top: 1px solid var(--line); vertical-align: middle; }}
tbody tr:first-child td {{ border-top: 0; }}
.c1, .c2, .c3 {{ font-weight: 600; white-space: nowrap; }}
.c1 {{ color: var(--accent); }}
td small {{ font-weight: 400; color: var(--muted); }}
.cr {{ color: var(--muted); font-size: 15px; }}
.cs {{ width: 1%; }}
.sp {{ border: 0; background: none; font-size: 18px; cursor: pointer; padding: 2px 4px; }}
.hide-c2 .c2, .hide-c3 .c3, .hide-cr .cr {{ color: transparent; background: var(--dot); border-radius: 6px; cursor: pointer; user-select: none; }}
.hide-c2 .c2 small, .hide-c3 .c3 small {{ color: transparent; }}
td.shown {{ color: var(--ok) !important; background: var(--ok-soft) !important; }}
@media (max-width: 520px) {{ td, th {{ padding: 7px 6px; }} .cr {{ font-size: 13.5px; }} body {{ font-size: 16px; }} }}
@media print {{ .tools, .back, .sp, .cs {{ display: none; }} .grp {{ break-inside: avoid; }} body {{ background: #fff; }} }}
</style>
{BACK.replace('class="wrap back"', 'class="wrap back" style="margin:18px auto 0;font-size:15px"')}
<header class="hero wrap">
  <p class="eyebrow">Spotlight 6 · Module 7 · Past Simple</p>
  <h1>Irregular Verbs Table</h1>
  <p class="sub">{n} неправильных глаголов для 6 класса в трёх формах, по группам из нашей таблицы. Спрячь колонку и проверь себя: нажми на серую клетку, чтобы увидеть ответ. 🔊 — послушать.</p>
</header>
<main class="wrap" style="padding-block: 0 64px;">
  <div class="tools" role="group" aria-label="Проверь себя">
    <button type="button" class="btn" data-col="c2" aria-pressed="false">Спрятать V2</button>
    <button type="button" class="btn" data-col="c3" aria-pressed="false">Спрятать V3</button>
    <button type="button" class="btn" data-col="cr" aria-pressed="false">Спрятать перевод</button>
    <button type="button" class="btn" id="pr">Распечатать</button>
  </div>
  {rows}
</main>
<script>
const main = document.querySelector("main");
document.querySelectorAll("[data-col]").forEach(b => b.addEventListener("click", () => {{
  const on = b.getAttribute("aria-pressed") !== "true";
  b.setAttribute("aria-pressed", on); main.classList.toggle("hide-" + b.dataset.col, on);
  main.querySelectorAll("td." + b.dataset.col).forEach(td => td.classList.remove("shown"));
}}));
main.addEventListener("click", ev => {{
  const td = ev.target.closest("td.c2, td.c3, td.cr"); if (td) td.classList.add("shown");
  const s = ev.target.closest(".sp");
  if (s) try {{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(s.dataset.say);
    const v = speechSynthesis.getVoices().find(x => /en[-_]GB/i.test(x.lang)) || speechSynthesis.getVoices().find(x => /^en/i.test(x.lang));
    if (v) u.voice = v; u.lang = v ? v.lang : "en-GB"; u.rate = 0.85; speechSynthesis.speak(u);
  }} catch (e) {{}}
}});
document.getElementById("pr").addEventListener("click", () => window.print());
</script>
'''
    open(os.path.join(SITE, "irregular-verbs-table.html"), "w").write(HEAD + page)

def hub():
    body, cur = "", None
    for i, (mod, fn, _, t, s) in enumerate(TOPICS, 1):
        if mod != cur:
            if cur: body += "</ol></section>"
            body += f'<section class="unit"><h2>{e(mod)}</h2><ol class="toc">'
            cur = mod
        body += (f'<li><a class="row" href="{fn}.html"><span class="n">{i}</span>'
                 f'<span class="t"><b>{e(t)}</b><span class="s">{e(s)}</span></span><span class="go" aria-hidden="true">→</span></a></li>')
    body += "</ol></section>"
    page = f'''<title>Spotlight 6 Grammar</title>
{CSS}
.unit {{ padding-top: 22px; }}
.unit h2 {{ margin-bottom: 8px; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 2.2em minmax(0,1fr) 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.row:focus-visible {{ outline: 2px solid var(--accent); outline-offset: 2px; }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t b {{ font-weight: 600; }}
.s {{ font-size: 14px; color: var(--muted); }}
.go {{ color: var(--muted); }}
.how {{ background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; margin-top: 30px; }}
.how h3 {{ margin: 0 0 8px; font-size: 17px; }}
.how ol {{ margin: 0; padding-left: 1.3em; display: flex; flex-direction: column; gap: 4px; }}
</style>
<header class="hero wrap">
  <p class="eyebrow">Чемоданчик учителя английского · 6 класс</p>
  <h1>Spotlight 6 Grammar</h1>
  <p class="sub">Интерактивные тренажёры по грамматике учебника Spotlight 6: карточки и много тренировок по каждой теме, в конце задания в формате ОГЭ.</p>
</header>
<main class="wrap" style="padding-block: 0 64px;">
  {body}
  <div class="how">
    <h3>Как заниматься</h3>
    <ol>
      <li>Сначала посмотри карточки и послушай слова (🔊).</li>
      <li>Пройди все тренировки по порядку. Ошибка не страшна: попробуй ещё раз.</li>
      <li>Следи за доской вверху: все точки зелёные — правило или глагол выучен, красная рамка — повтори.</li>
      <li>Через 2–3 дня нажми «Start again»: вопросы каждый раз перемешиваются.</li>
    </ol>
  </div>
</main>
'''
    open(os.path.join(SITE, "index.html"), "w").write(HEAD + page)

if __name__ == "__main__":
    build_packs(); table(); hub()
    print(sorted(os.listdir(SITE)))
