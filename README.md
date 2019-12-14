# use-color-scheme

Getting and watching OS color scheme changes via react hook.

```tsx
import { useColorScheme } from 'use-color-scheme';

const MyComponent = () => {
	const colorScheme = useColorScheme(); // 'light' or 'dark'

	return <div>{colorScheme}</div>;
};
```
