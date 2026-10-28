import re
import os,shutil,glob
site='site'; shutil.rmtree(site,ignore_errors=True); os.makedirs(site)
m={}
for u,f in [(1,'links.tsv'),(2,'links2.tsv'),(3,'links3.tsv'),(4,'links4.tsv'),(5,'links5.tsv'),(6,'links6.tsv')]:
    for line in open(f):
        c=line.rstrip('\n').split('\t')
        url=[x for x in c if x.startswith('https://') or re.fullmatch(r'u\d-\d\d\.html',x)]
        if url and c[0].isdigit(): m[f"u{u}-{int(c[0]):02d}"]=url[0]
src={os.path.basename(p)[:5]:p for p in glob.glob('out/u*.html') if not p.endswith('-fc.html')}
src['u1-01']='out/u1-collocations-a-fc.html'; src['u1-02']='out/u1-collocations-b-fc.html'
hub=open('out/hub.html').read()
def wrap(b):
    return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+b
for k,url in sorted(m.items()):
    open(f'{site}/{k}.html','w').write(wrap(open(src[k]).read()))
    hub=hub.replace(f'href="{url}"',f'href="{k}.html"')
assert 'claude.ai/artifact' not in hub
open(f'{site}/index.html','w').write(wrap(hub))
print(len(m),'pages')
