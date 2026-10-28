import sys, json, subprocess, html
pack, link, title, book, drills = sys.argv[1:6]
P = json.loads(subprocess.check_output(['node','-e',f'const s=require("fs").readFileSync("{pack}","utf8");const {{P}}=new Function(s+";return {{P}};")();console.log(JSON.stringify(P))']))
e=html.escape
rows=''.join(f'<tr><td>{e(p["phrase"])}</td><td>{e(p.get("ru",""))}</td></tr>' for p in P)
print(f'<html><body><h1>{e(title)}</h1><p><b>Интерактивный тренажёр:</b> <a href="{link}">{link}</a></p><p>Учебник: {e(book)}</p><p>{e(drills)}</p><table border="1" cellpadding="4"><tr><th>Выражение</th><th>Перевод / пояснение</th></tr>{rows}</table></body></html>')
