# use-prefer-color-scheme

Getting and watching OS color scheme changes via react hook.

```tsx
import { usePreferColorScheme } from 'use-prefer-color-scheme';

const MyComponent = () => {
	const colorScheme = usePreferColorScheme(); // 'light' or 'dark'

	return <div>{colorScheme}</div>;
};
```
