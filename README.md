# MiniStyles

A lightweight, utility-first CSS engine that injects inline styles based on `mini-*` class names — no build step, no configuration, no external dependencies.

---

## What is MiniStyles?

MiniStyles reads `mini-*` class names on your HTML elements and automatically injects the corresponding inline CSS styles via JavaScript. It's designed to be minimal, fast, and framework-agnostic — just import it and start adding classes.

```html
<!-- You write this -->
<div class="mini-p-4 mini-bg-gray-100 mini-rounded-lg mini-text-gray-900">
    Hello, MiniStyles!
</div>

<!-- MiniStyles injects this -->
<div
    style="padding: 1rem; background-color: #f3f4f6; border-radius: 0.5rem; color: #111827;"
>
    Hello, MiniStyles!
</div>
```

---

## Installation

```bash
npm install ministyles
```

---

## Usage

Import MiniStyles once at the root of your project:

```javascript
import "ministyles";
```

Then use `mini-*` classes anywhere in your HTML or JSX:

```jsx
const App = () => (
    <div className="mini-p-6 mini-bg-white mini-rounded-xl mini-border">
        <h1 className="mini-text-2xl mini-font-bold mini-text-gray-900 mini-mb-2">
            Welcome
        </h1>
        <p className="mini-text-gray-500 mini-text-sm mini-leading-relaxed">
            Styled with MiniStyles.
        </p>
    </div>
);
```

---

## Class Reference

### Spacing — Padding

| Class       | CSS                                             |
| ----------- | ----------------------------------------------- |
| `mini-p-0`  | `padding: 0`                                    |
| `mini-p-1`  | `padding: 0.25rem`                              |
| `mini-p-2`  | `padding: 0.5rem`                               |
| `mini-p-3`  | `padding: 0.75rem`                              |
| `mini-p-4`  | `padding: 1rem`                                 |
| `mini-p-5`  | `padding: 1.25rem`                              |
| `mini-p-6`  | `padding: 1.5rem`                               |
| `mini-p-8`  | `padding: 2rem`                                 |
| `mini-px-2` | `padding-left: 0.5rem; padding-right: 0.5rem`   |
| `mini-px-3` | `padding-left: 0.75rem; padding-right: 0.75rem` |
| `mini-px-4` | `padding-left: 1rem; padding-right: 1rem`       |
| `mini-px-6` | `padding-left: 1.5rem; padding-right: 1.5rem`   |
| `mini-py-1` | `padding-top: 0.25rem; padding-bottom: 0.25rem` |
| `mini-py-2` | `padding-top: 0.5rem; padding-bottom: 0.5rem`   |
| `mini-py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem` |
| `mini-py-4` | `padding-top: 1rem; padding-bottom: 1rem`       |
| `mini-py-8` | `padding-top: 2rem; padding-bottom: 2rem`       |
| `mini-pt-8` | `padding-top: 2rem`                             |

---

### Spacing — Margin

| Class          | CSS                                     |
| -------------- | --------------------------------------- |
| `mini-m-0`     | `margin: 0`                             |
| `mini-m-1`     | `margin: 0.25rem`                       |
| `mini-m-2`     | `margin: 0.5rem`                        |
| `mini-m-3`     | `margin: 0.75rem`                       |
| `mini-m-4`     | `margin: 1rem`                          |
| `mini-m-auto`  | `margin: auto`                          |
| `mini-mx-auto` | `margin-left: auto; margin-right: auto` |
| `mini-mt-1`    | `margin-top: 0.25rem`                   |
| `mini-mt-2`    | `margin-top: 0.5rem`                    |
| `mini-mt-4`    | `margin-top: 1rem`                      |
| `mini-mt-6`    | `margin-top: 1.5rem`                    |
| `mini-mb-1`    | `margin-bottom: 0.25rem`                |
| `mini-mb-2`    | `margin-bottom: 0.5rem`                 |
| `mini-mb-4`    | `margin-bottom: 1rem`                   |
| `mini-mb-6`    | `margin-bottom: 1.5rem`                 |
| `mini-mb-8`    | `margin-bottom: 2rem`                   |
| `mini-mb-12`   | `margin-bottom: 3rem`                   |

---

### Width & Max-width

| Class              | CSS                |
| ------------------ | ------------------ |
| `mini-w-auto`      | `width: auto`      |
| `mini-w-full`      | `width: 100%`      |
| `mini-h-full`      | `height: 100%`     |
| `mini-max-w-prose` | `max-width: 480px` |
| `mini-max-w-page`  | `max-width: 760px` |

---

### Colors — Background

| Class              | CSS                         |
| ------------------ | --------------------------- |
| `mini-bg-white`    | `background-color: #ffffff` |
| `mini-bg-black`    | `background-color: #000000` |
| `mini-bg-gray-50`  | `background-color: #f9fafb` |
| `mini-bg-gray-100` | `background-color: #f3f4f6` |
| `mini-bg-gray-200` | `background-color: #e5e7eb` |
| `mini-bg-gray-700` | `background-color: #374151` |
| `mini-bg-gray-800` | `background-color: #1f2937` |
| `mini-bg-gray-900` | `background-color: #111827` |
| `mini-bg-primary`  | `background-color: #3b82f6` |
| `mini-bg-danger`   | `background-color: #ef4444` |
| `mini-bg-success`  | `background-color: #22c55e` |

---

### Colors — Text

| Class                | CSS              |
| -------------------- | ---------------- |
| `mini-text-white`    | `color: #ffffff` |
| `mini-text-black`    | `color: #000000` |
| `mini-text-gray-200` | `color: #e5e7eb` |
| `mini-text-gray-300` | `color: #d1d5db` |
| `mini-text-gray-400` | `color: #9ca3af` |
| `mini-text-gray-500` | `color: #6b7280` |
| `mini-text-gray-700` | `color: #374151` |
| `mini-text-gray-900` | `color: #111827` |
| `mini-text-primary`  | `color: #3b82f6` |
| `mini-text-danger`   | `color: #ef4444` |
| `mini-text-success`  | `color: #22c55e` |

---

### Typography — Font Size

| Class            | CSS                                         |
| ---------------- | ------------------------------------------- |
| `mini-text-xs`   | `font-size: 0.75rem; line-height: 1rem`     |
| `mini-text-sm`   | `font-size: 0.875rem; line-height: 1.25rem` |
| `mini-text-base` | `font-size: 1rem; line-height: 1.5rem`      |
| `mini-text-lg`   | `font-size: 1.125rem; line-height: 1.75rem` |
| `mini-text-xl`   | `font-size: 1.25rem; line-height: 1.75rem`  |
| `mini-text-2xl`  | `font-size: 1.5rem; line-height: 2rem`      |
| `mini-text-3xl`  | `font-size: 1.875rem; line-height: 2.25rem` |

---

### Typography — Weight, Style & Decoration

| Class                  | CSS                          |
| ---------------------- | ---------------------------- |
| `mini-font-normal`     | `font-weight: 400`           |
| `mini-font-medium`     | `font-weight: 500`           |
| `mini-font-semibold`   | `font-weight: 600`           |
| `mini-font-bold`       | `font-weight: 700`           |
| `mini-italic`          | `font-style: italic`         |
| `mini-uppercase`       | `text-transform: uppercase`  |
| `mini-tracking-wide`   | `letter-spacing: 0.05em`     |
| `mini-leading-tight`   | `line-height: 1.1`           |
| `mini-leading-relaxed` | `line-height: 1.8`           |
| `mini-underline`       | `text-decoration: underline` |
| `mini-no-underline`    | `text-decoration: none`      |

---

### Typography — Alignment

| Class              | CSS                  |
| ------------------ | -------------------- |
| `mini-text-left`   | `text-align: left`   |
| `mini-text-center` | `text-align: center` |
| `mini-text-right`  | `text-align: right`  |

---

### Borders

| Class                    | CSS                                |
| ------------------------ | ---------------------------------- |
| `mini-border`            | `border: 1px solid #e5e7eb`        |
| `mini-border-2`          | `border: 2px solid #e5e7eb`        |
| `mini-border-dark`       | `border: 1px solid #374151`        |
| `mini-border-gray-700`   | `border: 1px solid #374151`        |
| `mini-border-none`       | `border: none`                     |
| `mini-border-t`          | `border-top: 1px solid #e5e7eb`    |
| `mini-border-b`          | `border-bottom: 1px solid #e5e7eb` |
| `mini-border-t-gray-700` | `border-top: 1px solid #374151`    |

---

### Border Radius

| Class               | CSS                       |
| ------------------- | ------------------------- |
| `mini-rounded-none` | `border-radius: 0`        |
| `mini-rounded-sm`   | `border-radius: 0.125rem` |
| `mini-rounded`      | `border-radius: 0.25rem`  |
| `mini-rounded-md`   | `border-radius: 0.375rem` |
| `mini-rounded-lg`   | `border-radius: 0.5rem`   |
| `mini-rounded-xl`   | `border-radius: 0.75rem`  |
| `mini-rounded-full` | `border-radius: 9999px`   |

---

### Layout — Display

| Class               | CSS                     |
| ------------------- | ----------------------- |
| `mini-block`        | `display: block`        |
| `mini-inline`       | `display: inline`       |
| `mini-inline-block` | `display: inline-block` |
| `mini-flex`         | `display: flex`         |
| `mini-grid`         | `display: grid`         |
| `mini-hidden`       | `display: none`         |

---

### Layout — Flexbox

| Class                  | CSS                              |
| ---------------------- | -------------------------------- |
| `mini-flex-row`        | `flex-direction: row`            |
| `mini-flex-col`        | `flex-direction: column`         |
| `mini-flex-wrap`       | `flex-wrap: wrap`                |
| `mini-items-start`     | `align-items: flex-start`        |
| `mini-items-center`    | `align-items: center`            |
| `mini-items-end`       | `align-items: flex-end`          |
| `mini-items-baseline`  | `align-items: baseline`          |
| `mini-self-start`      | `align-self: flex-start`         |
| `mini-justify-center`  | `justify-content: center`        |
| `mini-justify-between` | `justify-content: space-between` |
| `mini-justify-end`     | `justify-content: flex-end`      |
| `mini-shrink-0`        | `flex-shrink: 0`                 |

---

### Layout — Gap

| Class        | CSS            |
| ------------ | -------------- |
| `mini-gap-1` | `gap: 0.25rem` |
| `mini-gap-2` | `gap: 0.5rem`  |
| `mini-gap-3` | `gap: 0.75rem` |
| `mini-gap-4` | `gap: 1rem`    |
| `mini-gap-6` | `gap: 1.5rem`  |
| `mini-gap-8` | `gap: 2rem`    |

---

### Utilities

| Class                  | CSS                  |
| ---------------------- | -------------------- |
| `mini-overflow-hidden` | `overflow: hidden`   |
| `mini-cursor-pointer`  | `cursor: pointer`    |
| `mini-opacity-50`      | `opacity: 0.5`       |
| `mini-relative`        | `position: relative` |

---

## Example: Card Component

```jsx
import "ministyles";

const Card = ({ title, description }) => (
    <div className="mini-bg-white mini-border mini-rounded-xl mini-p-6 mini-mb-4">
        <h2 className="mini-text-xl mini-font-semibold mini-text-gray-900 mini-mb-2">
            {title}
        </h2>
        <p className="mini-text-gray-500 mini-text-sm mini-leading-relaxed">
            {description}
        </p>
        <button className="mini-mt-4 mini-bg-primary mini-text-white mini-px-4 mini-py-2 mini-rounded-md mini-text-sm mini-font-medium mini-cursor-pointer mini-border-none">
            Learn more
        </button>
    </div>
);
```

---

## Why MiniStyles?

- **Zero config** — import and go, no PostCSS, no Tailwind setup
- **No build step** — works in any environment that runs JavaScript
- **Inline styles** — styles are scoped to elements by default, no CSS conflicts
- **Minimal footprint** — tiny library with a focused, practical class set
- **Framework agnostic** — works with React, Vue, plain HTML, or anything JS

---

## Contributing

Issues and PRs are welcome on [GitHub](https://github.com/Vishesh-code-22/MiniStyles).

---

## License

MIT
