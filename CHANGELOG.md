# PM+BUD Official Changelog

[https://pmplusbud.pl/](https://pmplusbud.pl/)

# 3.0.0

### Project

- Upgraded `next` to `9.5.3`

### `next.config.js`

- Introduced `next-compose-plugins`
- `@zeit/next-sass` and `@zeit/next-css` have been removed
- Moved `sitemap.xml` builder to new `./utils` folder
- Experimently introduced Preact (not enabled) to replace React *if* it will outperform it

### Styling

- All stylesheets under `pages` and `components` have been converted to `.module.scss`
- All files that use the new `.module.scss` have been modified to use these
- Removed couple of dettering styles from `_app.scss`

### `index.js`

- Disable AMP due to `error  The attribute '0' may not appear in tag 'amp-img'` bug
- Greatly reduced the front image size and format

### `polityka-prywatnosci.js`

- Commented out