const inquirer = require('inquirer');
const consoleTable = require('console.table')
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

connection.connect(function(err){
    if (err) throw err;
    options();
})