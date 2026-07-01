# Blog Project

[English](#english) | [Azərbaycan dili](#azərbaycan-dili)

---

## English

A static, single-page blog UI demo. No backend, no build tooling, no package manager — just plain HTML, CSS (compiled from SCSS), and vanilla JavaScript.

The page shows a sidebar with a profile card, contact icons, navigation, a search box, and a tag cloud, next to a main area that renders a list of hardcoded blog posts. Clicking a post opens a modal with the full article.

### Features

- **Tag filtering** — clicking a tag in the tag cloud filters the visible posts by category (case-insensitive match).
- **Live search** — typing in the sidebar search box filters posts on the fly by title, content, author, or category, with no page reload.
- **Article modal** — clicking a post opens a modal overlay showing its date, author, tag, and full content; closes via the close button or by clicking outside the modal box.

### Project structure

```
index.html          Page markup (sidebar, blog container, modal, footer)
css/style.css        Compiled CSS (do not edit directly)
css/style.css.map    Source map for the compiled CSS
scss/style.scss      SCSS source for all styles
js/script.js         All page behavior (post data, filtering, search, modal)
assets/img/profile.jpg  Sidebar avatar image
```

Blog posts are hardcoded in `js/script.js` as `BlogsConstructor(blogHead, blogTime, author, category, content)` instances pushed into a `blogs` array. To add a post, create another `BlogsConstructor` instance and add it to that array. Tag text in the tag cloud (`index.html` / `tagArray`) must match a post's `category` (case-insensitively) for filtering to work.

External dependencies (Font Awesome icons, Google Fonts "Kreon") are loaded via CDN links in `index.html` — there is no npm/node setup.

### Running the project

No build step is required to view the page.

1. Open `index.html` directly in a browser, or
2. Serve the folder with any static file server, e.g.:
   ```bash
   npx serve .
   ```

### Editing styles

Styles are written in `scss/style.scss` and compiled to `css/style.css`, which is what `index.html` actually links. After editing the `.scss` file, recompile it with the [Sass](https://sass-lang.com/) CLI:

```bash
sass scss/style.scss css/style.css
```

(Requires Sass to be installed globally or available on your `PATH`; there is no npm script for this since the project has no `package.json`.)

### Author

**Zaur Qurbanov** — MERN Stack Developer

---

## Azərbaycan dili

Statik, tək səhifəlik bloq UI demosu. Backend yoxdur, build alətləri yoxdur, paket meneceri yoxdur — sadəcə HTML, (SCSS-dən kompilyasiya olunmuş) CSS və təmiz JavaScript.

Səhifədə profil kartı, əlaqə ikonları, naviqasiya, axtarış qutusu və teq buludu olan yan panel (sidebar) var; onun yanında hardcode edilmiş bloq yazılarının siyahısını göstərən əsas sahə yerləşir. Yazının üzərinə klikləmək tam məqaləni modalda açır.

### Xüsusiyyətlər

- **Teq filtrasiyası** — teq buludundakı bir teqə klikləmək görünən yazıları kateqoriyaya görə filtrləyir (böyük/kiçik hərfə həssas deyil).
- **Canlı axtarış** — yan paneldəki axtarış qutusuna yazdıqca yazılar başlıq, məzmun, müəllif və ya kateqoriyaya görə səhifə yenilənmədən anında filtrlənir.
- **Məqalə modalı** — yazının üzərinə klikləmək tarixi, müəllifi, teqi və tam məzmunu göstərən modal pəncərə açır; bağlamaq üçün bağlama düyməsindən istifadə edin və ya modal qutusunun kənarına klikləyin.

### Layihə strukturu

```
index.html          Səhifə markupu (sidebar, bloq konteyneri, modal, footer)
css/style.css        Kompilyasiya olunmuş CSS (birbaşa redaktə etməyin)
css/style.css.map    Kompilyasiya olunmuş CSS üçün source map
scss/style.scss      Bütün stillərin SCSS mənbəyi
js/script.js         Bütün səhifə davranışı (yazı datası, filtrasiya, axtarış, modal)
assets/img/profile.jpg  Sidebar üçün profil şəkli
```

Bloq yazıları `js/script.js` faylında `BlogsConstructor(blogHead, blogTime, author, category, content)` nümunələri kimi hardcode edilib və `blogs` massivinə əlavə olunub. Yeni yazı əlavə etmək üçün başqa bir `BlogsConstructor` nümunəsi yaradıb bu massivə əlavə edin. Teq buludundakı mətn (`index.html` / `tagArray`) filtrasiyanın işləməsi üçün yazının `category` sahəsi ilə (böyük/kiçik hərfə həssas olmadan) uyğun gəlməlidir.

Xarici asılılıqlar (Font Awesome ikonları, Google Fonts "Kreon") `index.html` daxilindəki CDN linkləri vasitəsilə yüklənir — npm/node quraşdırması yoxdur.

### Layihənin işə salınması

Səhifəni görmək üçün heç bir build addımı tələb olunmur.

1. `index.html` faylını birbaşa brauzerdə açın, və ya
2. Qovluğu istənilən statik fayl serveri ilə yayımlayın, məsələn:
   ```bash
   npx serve .
   ```

### Stillərin redaktəsi

Stillər `scss/style.scss` faylında yazılır və `index.html`-in faktiki olaraq bağladığı `css/style.css` faylına kompilyasiya olunur. `.scss` faylını redaktə etdikdən sonra onu [Sass](https://sass-lang.com/) CLI ilə yenidən kompilyasiya edin:

```bash
sass scss/style.scss css/style.css
```

(Sass-ın qlobal olaraq quraşdırılmış olması və ya `PATH`-da mövcud olması tələb olunur; layihədə `package.json` olmadığı üçün bunun üçün npm scripti yoxdur.)

### Müəllif

**Zaur Qurbanov** — MERN Stack Developer
