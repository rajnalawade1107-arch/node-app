const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Gym World</title>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f1f8f4;
  color: #333;
}
header {
  background: #2e7d5b;
  color: white;
  text-align: center;
  padding: 25px;
}
nav {
  background: #205b42;
  padding: 12px;
  text-align: center;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 15px;
}
section {
  padding: 25px;
  margin: 20px;
  background: white;
  border-radius: 10px;
}
h2 {
  color: #2e7d5b;
}
footer {
  background: #2e7d5b;
  color: white;
  text-align: center;
  padding: 15px;
}
</style>
</head>

<body>

<header>
  <h1>Welcome to Gym World</h1>
  <p>Build Strength, Stay Fit and Live Healthy</p>
</header>

<nav>
  <a href="#about">About</a>
  <a href="#benefits">Benefits</a>
  <a href="#programs">Programs</a>
  <a href="#workouts">Workouts</a>
</nav>

<section id="about">
  <h2>About Gym</h2>
  <p>
    Gym training is a great way to improve physical fitness, build muscle,
    increase strength and maintain a healthy lifestyle.
    Regular exercise helps improve both body and mind.
  </p>
</section>

<section id="benefits">
  <h2>Benefits of Gym</h2>
  <ul>
    <li>Builds muscle and strength</li>
    <li>Improves stamina and endurance</li>
    <li>Helps maintain a healthy body weight</li>
    <li>Improves mental health and reduces stress</li>
    <li>Increases confidence and energy</li>
  </ul>
</section>

<section id="programs">
  <h2>Gym Training Programs</h2>
  <ul>
    <li>Weight Training – Build muscle and strength</li>
    <li>Cardio Training – Improve heart health and stamina</li>
    <li>Strength Training – Increase overall power</li>
    <li>Fat Loss Training – Burn calories and improve fitness</li>
  </ul>
</section>

<section id="workouts">
  <h2>Basic Gym Workouts</h2>

  <h3>Push-ups</h3>
  <p>An exercise that strengthens the chest, shoulders and triceps.</p>

  <h3>Squats</h3>
  <p>A lower body exercise that strengthens legs and glutes.</p>

  <h3>Bench Press</h3>
  <p>A weight training exercise that targets the chest muscles.</p>

  <h3>Pull-ups</h3>
  <p>An upper body exercise that develops back and arm strength.</p>
</section>

<footer>
  <p>Gym World | Strong Body, Strong Mind</p>
</footer>

</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log('Gym Website running on port ' + port);
});