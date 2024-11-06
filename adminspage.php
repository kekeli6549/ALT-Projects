<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:wght@500;700&display=swap" rel="stylesheet">
    <title>Admin Page</title>
    <style>
        body {
            font-family: 'Merriweather', serif;
            background-color: #141414;
            color: #fff;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            font-family: 'Merriweather', serif;
            color: #fff;
            margin-top: 20px;
        }

        h2 {
            text-align: center;
            background-color: #282828;
            color: #fff;
            padding: 10px 20px;
            margin-top: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            border: 1px solid #282828;
        }

        th, td {
            text-align: center;
            border: 1px solid #282828;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #1A1A1A;
        }

        tr:nth-child(even) {
            background-color: #282828;
        }

        tr:hover {
            background-color: #333;
        }

        .add-form {
            text-align: center;
            margin-top: 20px;
        }

        .add-form input[type="text"] {
            padding: 5px;
            margin: 5px;
        }

        .add-form button {
            padding: 8px 20px;
            background-color: #008CBA;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .add-form button:hover {
            background-color: #005f75;
        }
    </style>
</head>
<body>
    <h1>Admin Page - List of Tables</h1>
    <?php
    // Database connection
    $servername = "localhost";
    $username  = "root";
    $password = "";
    $dbname = "biotech";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Fetch tables from the database
    $tables = array();
    $result = mysqli_query($conn, "SHOW TABLES");
    while ($row = mysqli_fetch_row($result)) {
        $tables[] = $row[0];
    }

    // Display tables and their contents
    foreach ($tables as $table) {
        echo "<h2>$table</h2>";
        $sql = "SELECT * FROM $table";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            echo "<table border='1'>";
            // Output table headers
            echo "<tr>";
            while ($fieldinfo = mysqli_fetch_field($result)) {
                echo "<th>{$fieldinfo->name}</th>";
            }
            echo "<th>Action</th>";
            echo "</tr>";

            // Output data rows
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                foreach ($row as $value) {
                    echo "<td>$value</td>";
                }
                // Add delete button for each row
                echo "<td><form method='post'><input type='hidden' name='table' value='$table'><input type='hidden' name='id' value='{$row['id']}'><button type='submit' name='delete'>Delete</button></form></td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "No records found";
        }

        // Add form for adding new record
        echo "<div class='add-form'>";
        echo "<form method='post'>";
        echo "<input type='hidden' name='table' value='$table'>";
        // Fetch table columns
        $columnsResult = mysqli_query($conn, "SHOW COLUMNS FROM $table");
        while ($column = mysqli_fetch_assoc($columnsResult)) {
            if ($column['Field'] != 'id') {
                echo "<input type='text' name='{$column['Field']}' placeholder='{$column['Field']}' required>";
            }
        }
        echo "<button type='submit' name='add'>Add</button>";
        echo "</form>";
        echo "</div>";

        mysqli_free_result($result);
    }

    // Handle delete action
    if (isset($_POST['delete'])) {
        $table = $_POST['table'];
        $id = $_POST['id'];
        $sql = "DELETE FROM $table WHERE id = $id";
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('Record deleted successfully');</script>";
            // Refresh the page to reflect changes
            echo "<script>window.location.href='adminspage.php';</script>";
        } else {
            echo "<script>alert('Error deleting record: " . mysqli_error($conn) . "');</script>";
        }
    }

    // Handle add action
    if (isset($_POST['add'])) {
        $table = $_POST['table'];
        $columns = array();
        $values = array();
        foreach ($_POST as $key => $value) {
            if ($key != 'table' && $key != 'add') {
                $columns[] = $key;
                $values[] = "'$value'";
            }
        }
        $columnsString = implode(',', $columns);
        $valuesString = implode(',', $values);
        $sql = "INSERT INTO $table ($columnsString) VALUES ($valuesString)";
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('Record added successfully');</script>";
            // Refresh the page to reflect changes
            echo "<script>window.location.href='adminspage.php';</script>";
        } else {
            echo "<script>alert('Error adding record: " . mysqli_error($conn) . "');</script>";
        }
    }

    mysqli_close($conn);
    ?>
</body>
</html>
