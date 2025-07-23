<!-- README.md -->

<h1 align="center" id="title">Webside of Lord Valo</h1>
<p align="center" id="subtitle">Choose a game or quiz to begin your journey.</p>

<div id="settings-button" onclick="toggleSettings()">⚙️</div>

<div id="settings-menu">
  <h3>⚙️ Settings</h3>

  <label for="themeSelect">Theme:</label>
  <select id="themeSelect" onchange="changeTheme()">
    <option value="dark">Dark Mode</option>
    <option value="light">Light Mode</option>
  </select><br><br>

  <label for="languageSelect">Language:</label>
  <select id="languageSelect" onchange="changeLanguage()">
    <option value="en">English</option>
    <option value="de">Deutsch</option>
  </select>
</div>

<div id="content">
  <div class="card">🎮 Game 1 (Coming Soon)</div>
  <div class="card">🧠 Quiz 1 (Coming Soon)</div>
</div>

<footer>
  <p>© 2025 Lord Valo</p>
</footer>

<style>
  :root {
    --bg-color: #0d0d0f;
    --text-color: #f0f0f0;
    --accent-color: #ff6a00;
    --card-bg: #1c1c1e;
    --shadow: rgba(0, 0, 0, 0.5);
  }

  * {
    transition: background-color 0.5s ease, color 0.4s ease, box-shadow 0.3s ease;
  }

  body {
    background: var(--bg-color);
    color: var(--text-color);
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px;
    text-align: center;
  }

  #settings-button {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    cursor: pointer;
    color: var(--accent-color);
    transition: transform 0.2s;
  }

  #settings-button:hover {
    transform: scale(1.2);
  }

  #settings-menu {
    position: absolute;
    top: 50px;
    left: 10px;
    background: var(--card-bg);
    border: 1px solid var(--accent-color);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 0 10px var(--shadow);
    display: none;
    min-width: 180px;
    text-align: left;
    z-index: 10;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  #settings-menu.show {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  select {
    width: 100%;
    padding: 6px;
    margin-top: 5px;
    background: #2a2a2d;
    color: var(--text-color);
    border: none;
    border-radius: 6px;
  }

  #content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 60px;
  }

  .card {
    background: var(--card-bg);
    color: var(--text-color);
    padding: 20px 30px;
    border-radius: 20px;
    font-size: 18px;
    box-shadow: 0 5px 15px var(--shadow);
    transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
    cursor: pointer;
    min-width: 200px;
  }

  .card:hover {
    transform: translateY(-8px) scale(1.03);
    background: var(--accent-color);
    color: #000;
  }

  footer {
    margin-top: 60px;
    font-size: 14px;
    color: #888;
  }
</style>

<script>
  // Load saved preferences
  window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang = localStorage.getItem('language') || 'en';

    document.getElementById('themeSelect').value = savedTheme;
    document.getElementById('languageSelect').value = savedLang;

    applyTheme(savedTheme);
    applyLanguage(savedLang);
  };

  function toggleSettings() {
    const menu = document.getElementById('settings-menu');
    menu.classList.toggle("show");
  }

  function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--bg-color', '#0d0d0f');
      document.documentElement.style.setProperty('--text-color', '#f0f0f0');
      document.documentElement.style.setProperty('--accent-color', '#ff6a00');
      document.documentElement.style.setProperty('--card-bg', '#1c1c1e');
      document.documentElement.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.5)');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#f4f1ea');
      document.documentElement.style.setProperty('--text-color', '#222');
      document.documentElement.style.setProperty('--accent-color', '#ff7f11');
      document.documentElement.style.setProperty('--card-bg', '#ffffffee');
      document.documentElement.style.setProperty('--shadow', 'rgba(100, 100, 100, 0.2)');
    }
  }

  function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    if (lang === 'de') {
      document.getElementById('title').innerText = "Webseite von Lord Valo";
      document.getElementById('subtitle').innerText = "Wähle ein Spiel oder Quiz, um dein Abenteuer zu beginnen.";
    } else {
      document.getElementById('title').innerText = "Webside of Lord Valo";
      document.getElementById('subtitle').innerText = "Choose a game or quiz to begin your journey.";
    }
  }
</script>

