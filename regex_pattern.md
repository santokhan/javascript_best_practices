# Regular Expression Pattern

## Username

```python
pattern = r"^[a-zA-Z][a-zA-Z0-9._]{2,18}$"
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
const pattern = /^[a-zA-Z][a-zA-Z0-9._]{2,18}$/;
```
