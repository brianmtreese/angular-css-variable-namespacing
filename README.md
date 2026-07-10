# Angular CSS Variable Namespacing Demo

This demo shows how Angular 22 can namespace CSS custom properties for each Angular application on the page.

A storefront and support widget both use a generic `--primary-color` token. Without namespacing, the support widget accidentally inherits the storefront color. With `provideCssVarNamespacing()`, each app owns its own CSS variables, while intentionally shared values can still use the `--global--` prefix.

## What This Demo Shows

* Bootstrapping two Angular applications on the same page
* Reproducing a CSS variable collision between a storefront and support widget
* Preventing token leakage with `provideCssVarNamespacing()`
* Keeping one intentionally shared token with `--global--`
* Using Angular `22.1.0-next.5`

The feature was added in [Angular commit `f985476`](https://github.com/angular/angular/commit/f98547675cd2026bb755671b28dea4e6d48eb7bb).

## Running the App

This prerelease requires Node `^22.22.3`, `^24.15.0`, or `>=26`.

```bash
npm install
npm start
```

Open `http://localhost:4200/` to view the demo.
