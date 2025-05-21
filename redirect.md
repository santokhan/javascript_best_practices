Absolutely, Santo! Let's rewrite this **with clear examples and easy-to-follow steps**.

---

# 🧭 Redirect After Login — Made Simple

In many apps, we want:

> 🔐 If a user goes to a **private page**, and they are **not logged in**, we should:
>
> * Send them to the **login page**
> * After login, **bring them back to where they wanted to go**

---

## ✅ Goal:

1. User tries to visit `/dashboard`
2. They are **not logged in**
3. They get redirected to `/signin?redirect=/dashboard`
4. After login, they are sent **back to** `/dashboard`

---

## 🔐 Step-by-step Example

---

### 📁 `PrivateRoute.jsx` — Block access to private pages if user is not logged in

```jsx
// PrivateRoute.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation(); // get current path
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Save current location as redirect
      const redirectPath = location.pathname + location.search;
      navigate(`/signin?redirect=${encodeURIComponent(redirectPath)}`);
    }
  }, [user, location, navigate]);

  return user ? children : null;
};

export default PrivateRoute;
```

---

### 📁 `SigninPage.jsx` — Redirect after login

```jsx
// SigninPage.jsx
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SigninPage = () => {
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_ACCOUNT}/v1/jwt/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const token = await response.json();
      localStorage.setItem("access_token", token.access_token);
      localStorage.setItem("refresh_token", token.refresh_token);

      // ✅ Redirect after successful login
      window.location.href = redirectPath;
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default SigninPage;
```

---

## ✅ Example Flow in Action

| Step | What Happens                                                 |
| ---- | ------------------------------------------------------------ |
| 1    | User visits `/dashboard`                                     |
| 2    | `PrivateRoute` sees user is not logged in                    |
| 3    | Redirects to `/signin?redirect=/dashboard`                   |
| 4    | User logs in                                                 |
| 5    | App reads the `redirect` param and goes back to `/dashboard` |

---

## 🛡️ Extra Tip: Prevent Unsafe Redirects

To prevent open redirect attacks, make sure redirects **only allow internal links**:

```js
const safeRedirect = (url) => {
  return url.startsWith("/") ? url : "/";
};
window.location.href = safeRedirect(redirectPath);
```

---

Let me know if you want this with `React Router v6.16+` using `useNavigate` instead of `window.location.href`.
