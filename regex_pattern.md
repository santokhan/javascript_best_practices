# Regular Expression Pattern

## Username Regex

```python
pattern = r"^[a-zA-Z][a-zA-Z0-9._]{2,18}$"
```

```javascript
const pattern = /^[a-zA-Z][a-zA-Z0-9._]{2,18}$/;
```

Usage

```python
def validate_username(self):
    if not self.username:
        return  # No username provided, no validation needed

    if len(self.username) < 3:
        raise ValueError("Username must be at least 3 characters long.")
    
    if len(self.username) > 19:
        raise ValueError("Username cannot be more than 19 characters long.")

    pattern = r"^[a-zA-Z][a-zA-Z0-9._]{2,18}$"
    if not re.match(pattern, self.username):
        raise ValueError("Username must start with a letter and can only contain letters, numbers, dots, or underscores.")
```

```javascript
function validateUsername(username) {
    const pattern = /^[a-zA-Z][a-zA-Z0-9._]{2,18}$/;
    
    if (!username) return "Username is required.";
    if (username.length < 3) return "Username must be at least 3 characters long.";
    if (username.length > 19) return "Username cannot be more than 19 characters long.";
    if (!pattern.test(username)) return "Username must start with a letter and can only contain letters, numbers, dots, or underscores.";
    
    return "Valid username.";
}

// Example usage:
console.log(validateUsername("John_Doe")); // Valid username.
console.log(validateUsername("9John")); // Error message.
```
