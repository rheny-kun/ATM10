# ATM10 Reference Site

## Scope

This repository contains a static GitHub Pages reference site for All the Mods 10 (ATM10) 8.2, Minecraft 1.21.1, and NeoForge. Development happens on `master`; the public branch is `release`. `Pages/` is the development source and is copied to the root of `release` for GitHub Pages at `https://rheny-kun.github.io/ATM10/`.

## Data investigation

- Prefer the actual ATM10 8.2 manifest, overrides, installed jars, data, tags, configs, KubeJS, and NeoForge behavior in that order.
- Then use the exact MOD 1.21.1 source or decompiled classes, followed by official MOD documentation and the ATM10 guide.
- Do not infer behavior from a name or translation alone. If implementation can be traced, inspect the relevant class and record the evidence.
- Unconfirmed values must be labeled as unconfirmed; never invent numeric scaling, slot rules, acquisition rules, or abilities.
- Preserve existing records. When a value cannot be confirmed, keep the record and explain the limitation instead of deleting it.

## Site constraints

- The site is static and must work without a build step under the `/ATM10/` subpath.
- Use relative links and assets; do not use domain-root paths such as `/index.html`.
- Preserve Minecraft animated PNG/GIF handling, Canvas pixel rendering, lazy animation lifecycle cleanup, and safe image fallbacks.
- Keep keyboard access, visible focus, reduced-motion behavior, and mobile horizontal overflow usable.

## Git guard and release flow

- Before work, inspect the applicable `AGENTS.md`, branch, HEAD, status, untracked files, remotes, and `master`/`release` refs.
- Existing user changes belong to the user. Do not overwrite unrelated changes.
- Do not use `reset --hard`, `clean`, `stash`, `rebase`, force-push, history rewriting, or unrelated branch operations.
- Investigation binaries, Minecraft clients, MOD jars, class files, and decompiled output must never be committed or copied to `release`.
- Only after static, browser, subpath, accessibility, and publication checks succeed: commit only this task's changes on `master`, push `origin/master`, synchronize only the public `Pages/` result to `release` root with `.nojekyll`, commit and push `origin/release`, then verify the public URL.
- Report the starting HEAD, resulting SHAs, push results, final status, investigation evidence, item/enchantment counts, known limitations, and browser/public checks.

