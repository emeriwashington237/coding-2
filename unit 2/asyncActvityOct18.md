<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Layout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
        }

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 100px 300px 200px 100px;
            gap: 10px;
            height: 100vh;
        }

        .nav {
            grid-column: 1 / 4;
            background-color: #4a545d; /* Dark grey for the nav */
            text-align: center;
            line-height: 100px;
            color: white;
        }

        .main-content {
            grid-column: 1 / 3;
            background-color: #7fd2f6; /* Light blue for the main content */
            text-align: center;
            line-height: 300px;
        }

        .advertisement {
            grid-column: 3 / 4;
            background-color: #476f7c; /* Darker blue for advertisement */
            text-align: center;
            line-height: 300px;
        }

        .option1, .option2, .option3 {
            background-color: #788e6d; /* Green for the options */
            text-align: center;
            line-height: 200px;
        }

        .footer {
            grid-column: 1 / 4;
            background-color: #f78953; /* Orange for the footer */
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="nav">Nav</div>
        <div class="main-content">Main Content</div>
        <div class="advertisement">Advertisement</div>
        <div class="option1">option 1</div>
        <div class="option2">option 2</div>
        <div class="option3">option 3</div>
        <div class="footer">footer</div>
    </div>
</body>
</html>
