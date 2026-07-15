# Node.js Path Module Practice 🚀

Yeh repository Node.js ke native `path` module ke use-cases aur methods ko asan bhasha mein samajhne ke liye banayi gayi hai.

## 📌 Key Takeaways

### 1. `path.join()` vs `path.resolve()`
* **`path.join()`**: Yeh ek seedha-saadha string joiner hai. Aap ise jo bhi inputs doge, ye unhe path separator (Windows me `\` aur Linux/Mac me `/`) ke sath jod dega.
* **`path.resolve()`**: Yeh ek detective hai. Yeh hamesha ek **absolute path** (root drive se shuru hone wala) return karta hai. Agar ise base directory na di jaye, toh ye terminal ki Current Working Directory (`process.cwd()`) ko base bana leta hai.

### 2. Double Dots (`..`) Navigation
* `..` ka matlab hota hai **"Ek folder peeche (up) jana"**.
* Backend operations mein `__dirname` ke sath `..` use karke hum nested folders se safely bahar aur andar navigate karte hain:
  ```javascript
  // Path to config folder from controllers
  path.join(__dirname, "..", "config", "db.json");
