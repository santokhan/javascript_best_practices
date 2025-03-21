# Best Practices for User Interface Layout

## Recommended Layout Structure

```txt
|-----------------------|
|-----|  Content   |----|
|-----------------------|
```

```html
<section class="py-8 lg:py-16">
    <div class="container">
        Content here...
    </div>
</section>
```

## Recommended Navbar Layout

Navigation bar should have a fixed height.

```html
<header class="bg-white sticky top-0 h-14 lg:h-16">
    <div class="container flex items-center">
        <a href="">Logo</a>
        <nav></nav>
    </div>
</header>
```

Keep in mind that navbar parent container should be scrollable to make it sticky properly.

```html
<body class="overflow-y-auto">
    <header class="bg-white sticky top-0 h-14 lg:h-16">
        Navbar
    </header>
</body>
```

## Clear Form Structure

Group related fields together and provide clear labels, placeholders, and error messages.

```html
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />
    </fieldset>

    <fieldset>
        <legend>Contact Information</legend>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
    </fieldset>

    <button type="submit" class="button">Submit</button>
</form>
```
