# PM+BUD Official Changelog

[https://pmplusbud.pl/](https://pmplusbud.pl/)

# 2.0.4

### `_app.js`

- Added `react-ga`
- `AOS` `duration` changed from `1250` to `750`
- Moved `meta` `viewport` tag from `_document.js` to `_app.js`

### AMP

- Added support for `index.js`
- Conditional rendering for `meta` `viewport` in `_app.js` 
- Conditional rendering for `Form.js`

# 2.0.3

### Changelog

- Added changelog

### SEO

- Following the discovery of this website and a cached `amp` from `v1` on google, all on-site SEO **must** be completed ASAP
- Introduced `next-seo` on the following pages:
  1. `index.js`
  2. `kontakt.js`
  3. `oferta/index.js`
- Page `blog/index.js` introduced
- Added almost all necessary `meta` and `link` tags to `_document.js`

### `.gitignore`

- Added ignores for temporary backup duplicates i.e. `*copy*`

### Cookies

- Add `z-index` to fix the footer overlay

### Logo

- New Logo variant created
  ![new logo variant](https://res.cloudinary.com/next-pmplusbud/new-logo/logotype.png)
- Updated PWA / favicon / icons
  ![new favicon](https://res.cloudinary.com/next-pmplusbud/w_196/new-logo/LOGO_MARGINS_s6ctti.png)

### Misc

- Added `max-height: 100px` to `#logo img` on Nav as it rendered to big on breakpoints between `sm >=` and `< lg`
