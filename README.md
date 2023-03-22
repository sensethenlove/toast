# 🕉 @sensethenlove/toast


### 🙏 Description
Show a closeable success and/or info toast notification

![Toast example](https://sensethenlove.com/cdn-cgi/imagedelivery/awgX85h4ifgiJaXRhZTMNw/85083571-c1d7-4d22-3459-cd62dbb50700/public)

### 💎 Prerequisites
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

html { /* Helps w/ rem, might still look good w/o: https://stackoverflow.com/questions/59920538  */
  font-size: 62.5%;
}
```

### ☯️ Install
```bash
pnpm add @sensethenlove/global-style # Only necessary if css above is not present
pnpm add @sensethenlove/toast
```

### 💛 Add imports
```ts
import '@sensethenlove/global-style/lib/index.css' // Only necessary if css above is not present
import '@sensethenlove/toast/lib/index.css'
import showToast from '@sensethenlove/toast'
```

### 🧡 Add wrapper to DOM
```html
<div id="toast-wrapper"></div>
```

### ❤️ Add css for wrapper to be your desired z-index
```css
#toast-wrapper {
  z-index: 90;
}
```

### 💙 Example: Show info toast
```ts
showToast({ type: 'info', items: [ 'Foo' ] })
```

### 💚 Example: Show success toast
```ts
showToast({ type: 'success', items: [ 'Foo', '<a href="/">Bar</a>' ] })
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
