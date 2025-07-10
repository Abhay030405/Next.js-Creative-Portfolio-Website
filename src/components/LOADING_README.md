# Loading Components

A collection of loading components designed to match your portfolio's theme with glass morphism effects, smooth animations, and the signature yellow accent color (`#FEFE5B`).

## Components Overview

### 1. LoadingSpinner
A classic spinning loader with customizable sizes.

```jsx
import { LoadingSpinner } from '@/components';

<LoadingSpinner size="md" className="my-4" />
```

**Props:**
- `size`: `"sm" | "md" | "lg" | "xl"` (default: `"md"`)
- `className`: Additional CSS classes

### 2. LoadingDots
Animated dots that pulse in sequence.

```jsx
import { LoadingDots } from '@/components';

<LoadingDots size="md" className="my-4" />
```

**Props:**
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `className`: Additional CSS classes

### 3. LoadingPulse
A pulsing circle with glass morphism effects.

```jsx
import { LoadingPulse } from '@/components';

<LoadingPulse size="md" className="my-4" />
```

**Props:**
- `size`: `"sm" | "md" | "lg" | "xl"` (default: `"md"`)
- `className`: Additional CSS classes

### 4. LoadingSkeleton
Content skeleton loader with shimmer effects.

```jsx
import { LoadingSkeleton } from '@/components';

<LoadingSkeleton 
  lines={3} 
  showAvatar={true}
  height="h-4"
  width="w-full"
/>
```

**Props:**
- `lines`: Number of skeleton lines (default: `3`)
- `showAvatar`: Show avatar skeleton (default: `false`)
- `height`: Height of skeleton lines (default: `"h-4"`)
- `width`: Width of skeleton lines (default: `"w-full"`)
- `className`: Additional CSS classes

### 5. LoadingScreen
Full-screen loading overlay with backdrop blur.

```jsx
import { LoadingScreen } from '@/components';

<LoadingScreen 
  message="Loading your experience..."
  showSpinner={true}
/>
```

**Props:**
- `message`: Loading message text (default: `"Loading..."`)
- `showSpinner`: Show spinner animation (default: `true`)
- `className`: Additional CSS classes

### 6. LoadingButton
Button with integrated loading state.

```jsx
import { LoadingButton } from '@/components';

<LoadingButton
  loading={isLoading}
  loadingText="Saving..."
  onClick={handleClick}
  variant="primary"
  size="md"
>
  Save Changes
</LoadingButton>
```

**Props:**
- `loading`: Loading state (default: `false`)
- `loadingText`: Text shown during loading (default: `"Loading..."`)
- `disabled`: Disabled state (default: `false`)
- `variant`: `"primary" | "secondary" | "outline"` (default: `"primary"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `onClick`: Click handler function
- `type`: Button type (default: `"button"`)
- `className`: Additional CSS classes

### 7. LoadingCard
Card component with loading skeleton content.

```jsx
import { LoadingCard } from '@/components';

<LoadingCard 
  showImage={true}
  showAvatar={false}
  lines={3}
  imageHeight="h-48"
/>
```

**Props:**
- `showImage`: Show image skeleton (default: `true`)
- `showAvatar`: Show avatar skeleton (default: `false`)
- `lines`: Number of content lines (default: `3`)
- `imageHeight`: Height of image skeleton (default: `"h-48"`)
- `className`: Additional CSS classes

## Theme Integration

All components use your portfolio's theme colors:

- **Background**: `rgb(27, 27, 27)` - Dark background
- **Foreground**: `rgb(225, 225, 225)` - Light text
- **Accent**: `rgb(254, 254, 91)` - Yellow accent (`#FEFE5B`)
- **Muted**: `rgb(115, 115, 115)` - Muted text

Components feature:
- Glass morphism effects with backdrop blur
- Smooth Framer Motion animations
- Consistent border radius and spacing
- Responsive design

## Usage Examples

### Basic Loading State
```jsx
import { LoadingSpinner } from '@/components';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="custom-bg p-6 rounded-xl">
      {isLoading ? (
        <LoadingSpinner size="lg" />
      ) : (
        <div>Your content here</div>
      )}
    </div>
  );
}
```

### Form Submission
```jsx
import { LoadingButton } from '@/components';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitForm(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoadingButton
      loading={isSubmitting}
      loadingText="Sending message..."
      onClick={handleSubmit}
      variant="primary"
    >
      Send Message
    </LoadingButton>
  );
}
```

### Content Loading
```jsx
import { LoadingSkeleton, LoadingCard } from '@/components';

function ProjectsList() {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then(setProjects).finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <LoadingCard key={i} showImage={true} lines={4} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

### Full Screen Loading
```jsx
import { LoadingScreen } from '@/components';

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Initialize app
    initializeApp().then(() => setIsInitializing(false));
  }, []);

  if (isInitializing) {
    return (
      <LoadingScreen 
        message="Initializing your experience..."
        showSpinner={true}
      />
    );
  }

  return <MainApp />;
}
```

## Demo

To see all components in action, you can import and use the `LoadingDemo` component:

```jsx
import LoadingDemo from '@/components/LoadingDemo';

function DemoPage() {
  return <LoadingDemo />;
}
```

## Customization

All components accept a `className` prop for additional styling. You can also customize the theme colors by modifying the CSS variables in `globals.css`:

```css
:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91;
}
```

## Performance

- All animations use Framer Motion for optimal performance
- Components are lightweight and tree-shakeable
- Loading states are optimized for smooth transitions
- No unnecessary re-renders during animations