# use-prefer-color-scheme
[![Build Status](https://github.com/PeterShershov/use-prefer-color-scheme/workflows/CI/badge.svg)](https://github.com/PeterShershov/use-prefer-color-scheme/actions)
Getting and watching OS color scheme changes via react hook.

```tsx
import { usePreferColorScheme } from 'use-prefer-color-scheme';

const MyComponent = () => {
	const colorScheme = usePreferColorScheme(); // 'light' or 'dark'

	return <div>{colorScheme}</div>;
};
```
