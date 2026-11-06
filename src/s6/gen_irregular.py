"""Generate the three irregular-verb trainer packs (groups 1–6, 7–10, 11–16) from verbs.py."""
import json, os, random, sys
sys.path.insert(0, os.path.dirname(__file__))
from verbs import GROUPS

HERE = os.path.dirname(os.path.abspath(__file__))
PACKS = os.path.join(HERE, "..", "packs")
J = lambda x: json.dumps(x, ensure_ascii=False)

def first(f): return f.split("/")[0]

def regularize(v):
    if v == "hang": return "hunged"
    if v.endswith("e"): return v + "d"
    if len(v) > 1 and v[-1] == "y" and v[-2] not in "aeiou": return v[:-1] + "ied"
    if len(v) <= 4 and len(v) >= 3 and v[-1] not in "aeiouwxy" and v[-2] in "aeiou" and v[-3] not in "aeiou":
        return v + v[-1] + "ed"
    return v + "ed"

def uniq(seq, bad):
    out = []
    for s in seq:
        if s and s not in out and s not in bad: out.append(s)
    return out

PAGES = [
    ("past-irregular-1", "Irregular Verbs 1", "groups 1–6", [1, 2, 3, 4, 5, 6]),
    ("past-irregular-2", "Irregular Verbs 2", "groups 7–10", [7, 8, 9, 10]),
    ("past-irregular-3", "Irregular Verbs 3", "groups 11–16", [11, 12, 13, 14, 15, 16]),
]

def build(slug, title, gl, nums):
    rnd = random.Random(slug)
    groups = [g for g in GROUPS if g[0] in nums]
    verbs = [(g, v) for g in groups for v in g[3] if v[0] != "be"]
    label = lambda g: f"{g[0]} · {g[1]}"
    allv2 = [first(v[1]) for _, v in verbs]
    P, grp, forms, v2q, v3q, ru, tf, oge = [], [], [], [], [], [], [], []
    for i, (g, (v1, v2, v3, tr, sent)) in enumerate(verbs):
        a2, a3 = first(v2), first(v3)
        note = " (можно " + v2.split("/")[1] + ")" if "/" in v2 else ""
        P.append({"id": v1, "phrase": f"{v1} – {a2} – {a3}", "ru": tr + note, "say": f"{v1}, {a2}, {a3}"})
        others = [label(x) for x in groups if x is not g]
        rnd.shuffle(others)
        grp.append({"id": v1, "q": f"{v1} – {a2} – {a3}", "o": [label(g)] + others[:3]})
        forms.append({"id": v1, "t": f"{v1} – [[{v2}]] – [[{v3}]]"})
        ru.append({"id": v1, "t": f"{tr}: [[{v1}]] – [[{v2}]] – [[{v3}]]"})
        mates = [first(x[1]) for x in g[3] if x[0] != v1 and x[0] != "be"]
        rnd.shuffle(mates)
        pool = [x for x in allv2 if x != a2]; rnd.shuffle(pool)
        d2 = uniq([regularize(v1), a3 if a3 != a2 else None, *mates[:1], v1 if v1 != a2 else None, *pool], v2.split("/"))[:3]
        v2q.append({"id": v1, "q": f"{v1} → V2 (Past Simple)?", "o": [a2] + d2})
        fake3 = (v1 + "n") if v1.endswith("e") else (v1 + "en")
        d3 = uniq([a2 if a2 != a3 else None, regularize(v1), fake3, (a2 + "n") if a2.endswith("e") else (a2 + "en"), v1], v3.split("/"))[:3]
        v3q.append({"id": v1, "q": f"{v1} – {a2} – ?", "o": [a3] + d3})
        right = sent.format(a2)
        if i % 2 == 0:
            tf.append({"id": v1, "t": right, "ok": True})
        else:
            wrong = rnd.choice(uniq([regularize(v1), a3 if a3 != a2 else None, v1 if v1 != a2 else None], v2.split("/")))
            tf.append({"id": v1, "t": sent.format(wrong), "ok": False, "fix": right})
        oge.append({"id": v1, "t": sent.format(f"[[{v2}]]") + f" ^{v1.upper()}^"})
    n = len(P)
    drills = [
        {"type": "mcq", "title": "Which group?", "short": "Groups", "instr": "К какой группе из нашей таблицы относится глагол? Посмотри, как меняются формы."},
        {"type": "gaps", "title": "Second and third forms", "short": "V2 + V3", "instr": "Напиши вторую и третью форму. Нажми Check или Enter."},
        {"type": "mcq", "title": "Choose the second form", "short": "V2", "instr": "Выбери правильную вторую форму (Past Simple)."},
        {"type": "mcq", "title": "Choose the third form", "short": "V3", "instr": "Выбери правильную третью форму."},
        {"type": "gaps", "title": "From Russian: three forms", "short": "RU → 3 forms", "instr": "Посмотри на перевод и напиши все три формы глагола."},
        {"type": "tf", "title": "Right or wrong?", "short": "Right or wrong", "instr": "Глагол в Past Simple стоит правильно? Если нет, ты увидишь верный вариант."},
        {"type": "gaps", "title": "Exam practice", "short": "ОГЭ", "instr": "Как в ОГЭ: поставь глагол справа в Past Simple и напиши его в пропуск."},
    ]
    for dr, items in zip(drills, [grp, forms, v2q, v3q, ru, tf, oge]):
        dr["items"] = items
    gtxt = "; ".join(f"{g[0]}) {g[1]}" for g in groups)
    head = (f"// TITLE: {title}\n"
            f"// EYEBROW: Spotlight 6 · Module 7 · Past Simple · {gl}\n"
            f"// SUB: Три формы неправильных глаголов по группам из нашей таблицы ({gtxt}). {n} глаголов: карточки и семь тренировок, последняя — в формате ОГЭ.\n"
            f"// BOARD: Твои глаголы\n"
            f"// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — глагол выучен. Красная рамка — повтори этот глагол.\n")
    js = head + f"const META = {J({'ls': 's6-' + slug})};\nconst P = {J(P)};\nconst DRILLS = {J(drills)};\n"
    open(os.path.join(PACKS, f"s6-{slug}.js"), "w").write(js)
    return n

if __name__ == "__main__":
    for p in PAGES:
        print(p[0], build(*p))
