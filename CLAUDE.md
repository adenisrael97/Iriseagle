@AGENTS.md
# Claude Refactor Guide — Next.js (JavaScript + Tailwind CSS)

## 🎯 Objective
Refactor this Next.js project into a clean, scalable, and maintainable codebase using **reusable components and Tailwind CSS**.

All UI must be converted from hardcoded elements into reusable, props-driven components styled with Tailwind.

Focus on:
- Reusable UI components
- Tailwind CSS for all styling
- Clean architecture
- Bug-free refactoring
- Performance and maintainability

---

## 🚫 Hard Rules

- ❌ Do NOT hardcode UI inside pages
- ❌ Do NOT duplicate buttons, cards, or layouts
- ❌ Do NOT use inline CSS or external CSS files for component styling (Tailwind only)
- ❌ Do NOT create page-specific UI that should be reusable
- ✅ Always extract repeated UI into reusable components

---

## 🎨 Styling Rule (VERY IMPORTANT)

### Use ONLY Tailwind CSS
- All styling must use Tailwind utility classes
- No CSS files (`.css`, `.scss`) for component styling
- No inline styles (`style={{}}`) unless absolutely necessary
- Keep styling consistent and reusable

Example:
```jsx id="9x2lq1"
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Click Me
</button>