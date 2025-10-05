# React Markdown Styling Guide

## Method 1: Custom Component Styling (Currently Implemented)

```jsx
import ReactMarkdown from 'react-markdown';

export default function ChefAi(props) {
  return (
    <section className="w-150 mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-[#141413] mb-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-[#141413] mb-4">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-[#475467] mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
          ),
          // ... more components
        }}
      >
        {props.recipe}
      </ReactMarkdown>
    </section>
  );
}
```

## Method 2: Using Tailwind Typography Plugin

```jsx
import ReactMarkdown from 'react-markdown';

export default function ChefAi(props) {
  return (
    <section className="w-150 mx-auto mt-10">
      <ReactMarkdown className="prose prose-lg prose-orange max-w-none">
        {props.recipe}
      </ReactMarkdown>
    </section>
  );
}
```

Available prose classes:

- `prose-sm`, `prose`, `prose-lg`, `prose-xl`, `prose-2xl`
- `prose-gray`, `prose-red`, `prose-orange`, `prose-amber`, etc.

## Method 3: CSS Modules

Create `ChefAi.module.css`:

```css
.markdownContainer h1 {
  color: #141413;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.markdownContainer p {
  color: #475467;
  line-height: 1.7;
  margin-bottom: 1rem;
}
```

Then use:

```jsx
import styles from './ChefAi.module.css';

export default function ChefAi(props) {
  return (
    <section className={styles.markdownContainer}>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
```

## Method 4: Global CSS Classes

In your `index.css`:

```css
.recipe-content h1 {
  @apply text-3xl font-bold text-[#141413] mb-6 border-b-2 border-[#D17557] pb-2;
}

.recipe-content h2 {
  @apply text-2xl font-semibold text-[#141413] mb-4 mt-6;
}

.recipe-content p {
  @apply text-[#475467] mb-4 leading-relaxed;
}

.recipe-content ul {
  @apply list-disc list-inside mb-4 space-y-2 text-[#475467];
}
```

Then use:

```jsx
<ReactMarkdown className="recipe-content">{props.recipe}</ReactMarkdown>
```

## Advanced: Custom Renderers with Complex Logic

```jsx
import ReactMarkdown from 'react-markdown';

const customComponents = {
  h1: ({ node, children, ...props }) => (
    <h1
      className="text-3xl font-bold text-[#141413] mb-6 flex items-center gap-2"
      {...props}
    >
      🍳 {children}
    </h1>
  ),

  h2: ({ node, children, ...props }) => {
    const isIngredients = children
      .toString()
      .toLowerCase()
      .includes('ingredients');
    const isInstructions = children
      .toString()
      .toLowerCase()
      .includes('instructions');

    return (
      <h2
        className={`text-2xl font-semibold mb-4 mt-6 ${
          isIngredients
            ? 'text-green-600'
            : isInstructions
              ? 'text-blue-600'
              : 'text-[#141413]'
        }`}
        {...props}
      >
        {isIngredients && '🥬 '}
        {isInstructions && '👨‍🍳 '}
        {children}
      </h2>
    );
  },

  li: ({ node, children, ...props }) => (
    <li className="mb-2 flex items-start gap-2" {...props}>
      <span className="text-[#D17557] mt-1">•</span>
      <span>{children}</span>
    </li>
  ),
};

export default function ChefAi(props) {
  return (
    <section className="w-150 mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <ReactMarkdown components={customComponents}>
        {props.recipe}
      </ReactMarkdown>
    </section>
  );
}
```

## Recommended: Your Current Approach

Your current implementation (Method 1) is perfect because:

- ✅ Full control over styling
- ✅ Consistent with your design system
- ✅ Uses your existing color palette
- ✅ Tailwind classes for maintainability
- ✅ Custom styling for recipe content

The styling will make your recipes look professional and match your Chef Claude design!
