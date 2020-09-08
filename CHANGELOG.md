# PM+BUD Official Changelog

[https://pmplusbud.pl/](https://pmplusbud.pl/)

# 2.0.5

### Changelog

- Changelogs will now be sorted in the sorted folder by versions
- Only the changes from the latest version will appear in `CHANGELOD.md`

### `Oferta.scss`

- Changed `.card` `padding` to avoid overflow

### `Form.js`

- Added a `<form method="POST" />` wrapper for compability
- Decreased animation delay
- UI

### `index.js`

- Added arrows to `.header`s for clarity that they're links
- Added `padding` to `.header`s and `.content` for styling

### `QuickContact.js`

- Decreased delay of animation
- Added shadows for UI purposes

### `oferta/**`

- Changed `.title` text to resize base on `vw` as on smaller devices (`< ~546px`) the layout would get screwed as the font was to big
- UX changes

### `Home.scss`

- Added another fix for another overflow this time caused by the icon

### `next.config.js`

- Introduced `next-compose-plugins` for preparation of next major update