# 🙏 @sensethenlove/toast


### 🕉 Description
Show a success or info toast notification

### ☯️ Prerequisites
Requires [@sensethenlove/global-style](https://github.com/sensethenlove/global-style) or add this css to your site
```css
@keyframes fade-in-from-above {
  0% {
    opacity: 0;
    transform: translateY(-9rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out-and-slide-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-9rem);
  }
}
```

### 💞 Install
```bash
pnpm add @sensethenlove/global-style
pnpm add @sensethenlove/toast
```

### 💛 Add imports
```ts
import '@sensethenlove/global-style/lib/index.css'
import '@sensethenlove/toast/lib/index.css'
import showToast from '@sensethenlove/toast'
```

### 🧡 Add wrapper to DOM
```html
<div id="toast-wrapper"></div>
```

### 💙 Show info toast
```ts
showToast({ type: 'info', items: [ 'Foo' ] })
```

### 💚 Show success toast
```ts
showToast({ type: 'success', items: [ 'Foo', 'Bar' ] })
```

### 💖 Our helpful packages!
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
