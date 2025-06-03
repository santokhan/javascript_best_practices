## ⚠️ Avoid Using Custom Hooks Inside Another Custom Hook

**Guideline:**
Avoid using **custom hooks inside another custom hook** unless there's a strong reason to compose them.

### Why This Matters

While React allows custom hooks to call other hooks, **overusing this pattern** can lead to:

* 🔁 **Unnecessary dependencies** between unrelated features
* 🧩 **Tight coupling** of logic that should remain independent
* 🧠 **Cognitive overload** for future developers trying to debug or maintain the code
* 🧪 **Harder testing**, since hooks may indirectly rely on nested internal behavior

### Problems This Can Cause

* ❌ Increased **complexity and hidden logic flow**
* ❌ Difficult to **trace dependencies and side effects**
* ❌ Reduced **reusability** of smaller logic units
* ❌ More difficult to **refactor or isolate** specific logic later

### Prefer This Approach

* ✅ Keep custom hooks **focused and isolated** in responsibility
* ✅ Use **composition cautiously**, only when hooks are naturally related
* ✅ Extract shared logic into **utilities** or **simple functions** when possible
* ✅ Flatten logic to improve readability and **explicitness**

### 🚫 What to Avoid

```js
function useDashboard() {
  const user = useUser();         // unrelated logic
  const posts = usePosts();       // another custom hook
  const notifications = useNotify();  // yet another hook

  useEffect(() => {
    if (user && posts.length) {
      notifications.send("Welcome back!");
    }
  }, [user, posts]);
}
```

### ✅ Better Pattern

```js
function useUserDashboard(user) {
  const notifications = useNotify();

  useEffect(() => {
    if (user) {
      notifications.send("Welcome back!");
    }
  }, [user]);
}

// Inside a component or higher-level hook
const user = useUser();
const posts = usePosts();
useUserDashboard(user);
```

> 🔄 **React hooks are powerful** — but too many layers of abstraction can hurt readability and maintainability.
> **Use composition with intention, not by default.**
  
