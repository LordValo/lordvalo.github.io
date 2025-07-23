<!-- README.md -->

<h1 align="center" id="title">Webside of Lord Valo</h1>

<p align="center" id="subtitle">Choose a game or quiz to begin your journey.</p>

<div id="settings-button" onclick="toggleSettings()">⚙️</div>

<div id="settings-menu">
  <h3>Settings</h3>
  <label>
    <input type="checkbox" id="themeToggle" onchange="toggleTheme()" checked>
    Dark Mode
  </label><br>
  <label>
    <input type="checkbox" id="langToggle" onchange="toggleLanguage()">
    German Language
  </label>
</div>

<div id="content">
  <button class="card">🎮 Game 1 (Coming Soon)</button>
  <button class="card">🧠 Quiz 1 (Coming Soon)</button>
  <button class="card">➕ Add More</button>
</div>

<footer>
  <p>© 2025 Lord Valo</p>
</footer>

<style>
  :root {
    --bg-color: #111;
    --text-color: #f9f9f9;
    --accent-color: orange;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    padding: 20px;
  }

  #settings-button {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    font-size: 24px;
    color: var(--accent-color);
  }

  #settings-menu {
    position: absolute;
    top: 40px;
    left: 10px;
    background: #222;
    padding: 10px;
    border-radius: 10px;
    display: none;
    text-align: left;
  }

  #content {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .card {
    background: var(--accent-color);
    border: none;
    color: #111;
    padding: 15px 25px;
    font-size: 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: scale(1.05);
  }

  footer {
    margin-top: 50px;
    font-size: 14px;
    color: #888;
  }
</style>

<script>
  function toggleSettings() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  function toggleTheme() {
    const isDark = document.getElementById('themeToggle').checked;
    if (isDark) {
      document.documentElement.style.setProperty('--bg-color', '#111');
      document.documentElement.style.setProperty('--text-color', '#f9f9f9');
      document.documentElement.style.setProperty('--accent-color', 'orange');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#fffef5');
      document.documentElement.style.setProperty('--text-color', '#111');
      document.documentElement.style.setProperty('--accent-color', '#ff8800');
    }
  }

  function toggleLanguage() {
    const isGerman = document.getElementById('langToggle').checked;
    document.getElementById('title').innerText = isGerman ? "Webseite von Lord Valo" : "Webside of Lord Valo";
    document.getElementById('subtitle').innerText = isGerman
      ? "Wähle ein Spiel oder Quiz, um dein Abenteuer zu beginnen."
      : "Choose a game or quiz to begin your journey.";
  }
</script>
