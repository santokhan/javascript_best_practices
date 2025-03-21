# HTML Semantic

## Meaningful and Accessible Icons

Use `<button>` and `<i>` for icons with accessible labels:

```html
<button aria-label="Search">
    <i class="fas fa-search"></i>
</button>

<button aria-label="Close">
    <i class="fas fa-times"></i>
</button>
```

## Hierarchical Use of Headings

Use headings in a hierarchical order (e.g., `<h1>`, `<h2>`, `<h3>`) to structure content properly and improve accessibility.

```html
<article>
    <h1>Main Title</h1>
    <section>
        <h2>Section Title</h2>
        <p>Content for this section...</p>
    </section>
    <section>
        <h2>Another Section Title</h2>
        <p>More content...</p>
        <h3>Subsection Title</h3>
        <p>Subsection content...</p>
    </section>
</article>
```

## Defining Language in the HTML Document

Always define the language of the document using the lang attribute for accessibility and SEO.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome to Our Website</h1>
        <p>This is some sample content.</p>
    </body>
</html>
```

## Best Practices for Image Accessibility

Use `<figure>` and `<figcaption>` for Descriptive Images
For images with captions, use `<figure>` and `<figcaption>` to semantically group the image and its description.

```html
<figure>
    <img src="team.jpg" alt="Team of engineers working together">
    <figcaption>Our team working on the latest project</figcaption>
</figure>
```

## Use `<div>` for Layout Containers

While semantic HTML should be used wherever possible, `<div>` can still be used for layout purposes when necessary.

```html
<div class="container">
    <header>
        <h1>Welcome to the Website</h1>
    </header>

    <main>
        <section>
            <h2>Introduction</h2>
            <p>Content for the introduction goes here...</p>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Content for the conclusion goes here...</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Company Name</p>
    </footer>
</div>
```

## Best Practices for Audio/Video Content

### Accessible Audio/Video Embeds

Use `<audio>` and `<video>` tags with appropriate attributes for better accessibility. Always provide controls and a fallback message.

```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>

<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>
```

## Best Practices for Handling Empty States

Displaying Messages for Empty States
Use an appropriate message when content is unavailable. For instance, when no data is found, show an informative message.

```html
<section class="empty-state">
    <h2>No Results Found</h2>
    <p>Sorry, we couldn't find any items matching your search.</p>
</section>
```

## Best Practices for Contact Information

Use `<address>` for Contact Information
For addresses or contact details, use the `<address>` element to semantically indicate that the content is contact information.

```html
<address>
    <p>For inquiries, email us at <a href="mailto:info@example.com">info@example.com</a></p>
    <p>Visit us at: <br>
       123 Main St, Cityville, USA
    </p>
</address>
```
