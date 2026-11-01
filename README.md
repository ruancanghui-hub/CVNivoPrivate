# CVNivo Legal (GitHub Pages)

Static bilingual (ZH/EN) legal site for App Store and in-app WebViews.

## Pages

| Page | Path |
|------|------|
| Home | `/` or `/index.html` |
| Privacy | `/privacy.html` |
| Terms | `/terms.html` |
| Support | `/support.html` |

Published URL (after enabling Pages on `main` / root):

- https://ruancanghui-hub.github.io/CVNivoPrivate/
- https://ruancanghui-hub.github.io/CVNivoPrivate/privacy.html
- https://ruancanghui-hub.github.io/CVNivoPrivate/terms.html
- https://ruancanghui-hub.github.io/CVNivoPrivate/support.html

## Enable GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save, wait 1–2 minutes, open the URLs above

Or via CLI (already attempted after first push when possible):

```bash
gh api -X POST repos/ruancanghui-hub/CVNivoPrivate/pages \
  -f build_type=legacy \
  -f source[branch]=main \
  -f source[path]=/
```

## Note on repo visibility

GitHub Pages on a **private** repo requires GitHub Pro. This repo is currently public so free Pages works. If you make it private later, either keep Pages on a public legal repo or upgrade the plan.
