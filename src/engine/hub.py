import html
css=open('engine/style.css').read()
p1={'1':'p. 6','2':'p. 6','3':'p. 6','4':'p. 6','5':'p. 7','6':'p. 7','7':'p. 7','8':'p. 8','9':'pp. 8–9','10':'p. 10','11':'pp. 9–10','12':'p. 11','13':'pp. 11–12','14':'pp. 12–14','15':'pp. 14–15','16':'p. 15'}
def load(fn, pages=None):
    rows=[]
    for l in open(fn):
        if not l.strip(): continue
        c=l.rstrip('\n').split('\t')
        n,t,s,sc,u=c[:5]; pg=c[5] if len(c)>5 else pages[n]
        rows.append((n,t,s,sc,u,pg))
    return rows
UNITS=[("Unit 1","u1",load("links.tsv",p1)),("Unit 2","u2",load("links2.tsv")),("Unit 3","u3",load("links3.tsv")),("Unit 4","u4",load("links4.tsv")),("Unit 5 · Review","u5",load("links5.tsv")),("Unit 6","u6",load("links6.tsv"))]
def items(rows,sc):
    return ''.join(f'''
      <li><a class="row" href="{html.escape(u)}">
        <span class="n">{n}</span>
        <span class="t"><b>{html.escape(t)}</b><span class="s">{html.escape(s)}</span></span>
        <span class="pg">{pg}</span>
        <span class="go" aria-hidden="true">→</span>
      </a></li>''' for n,t,s,c,u,pg in rows if c==sc)
body=''
nav=''
for name,uid,rows in UNITS:
    nav+=f'<a href="#{uid}">{name} · {len(rows)}</a>'
    body+=f'''
  <section class="unit" id="{uid}">
    <h2>{name}</h2>
    <h3>Section 1</h3>
    <ol class="toc">{items(rows,"Section 1")}
    </ol>
    <h3>Section 2</h3>
    <ol class="toc">{items(rows,"Section 2")}
    </ol>
  </section>'''
total=sum(len(r) for _,_,r in UNITS)
page=f'''<title>Use of English B2 Drills</title>
{css}
.unit {{ padding-top: 22px; scroll-margin-top: 70px; }}
.unit h2 {{ margin-bottom: 4px; }}
.unit h3 {{ font-family: var(--font-mono); font-weight: 500; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin: 16px 0 8px; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 2.2em minmax(0,1fr) auto 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.row:hover .go {{ color: var(--accent); transform: translateX(2px); }}
.row:focus-visible {{ outline: 2px solid var(--accent); outline-offset: 2px; }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); font-variant-numeric: tabular-nums; }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t b {{ font-weight: 600; }}
.s {{ font-size: 14px; color: var(--muted); }}
.pg {{ font-family: var(--font-mono); font-size: 12px; color: var(--muted); white-space: nowrap; }}
.go {{ color: var(--muted); transition: transform .15s; }}
.how {{ background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; margin-top: 30px; }}
.how h3 {{ margin: 0 0 8px; font-size: 17px; }}
.how ol {{ margin: 0; padding-left: 1.3em; display: flex; flex-direction: column; gap: 4px; }}
@media (max-width: 480px) {{ .pg {{ display: none; }} .row {{ grid-template-columns: 2em minmax(0,1fr) 1.2em; }} }}
</style>

<header class="hero wrap">
  <p class="eyebrow">E. Moutsou · Use of English B2 for All Exams</p>
  <h1>Use of English B2 Drills</h1>
  <p class="sub">Interactive practice for every exercise in the book: flashcards and five or more drills per exercise, with new sentences and texts. Do the exercise in the book first, then open its drill here.</p>
</header>

<div class="bar">
  <div class="wrap">
    <nav class="nav" aria-label="Units">{nav}</nav>
  </div>
</div>

<main class="wrap" style="padding-block: 0 64px;">
  {body}
  <div class="how">
    <h3>How to work</h3>
    <ol>
      <li>Do the exercise in the book with your teacher.</li>
      <li>At home, open its drill and go through all five parts.</li>
      <li>Watch the board at the top: five dots means you know the phrase. Red frames show what to repeat.</li>
      <li>Come back in two or three days and press “Start again” – the questions are shuffled each time.</li>
    </ol>
  </div>
</main>
'''
open('out/hub.html','w').write(page)
print(total, page.count('class="row"'))
