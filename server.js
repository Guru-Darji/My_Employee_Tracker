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

function options() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to our employee database! What would you like to do?',
            choices: [
                    'See all employees',
                    'See all departments',
                    'See all roles',
                    'Add employee',
                    'Add department',
                    'Add role',
                    'Change employee role',
                    'Delete employee',
                    'EXIT'
                    ]

            }).then(function (answer) {
                switch (answer.action) {
                    case 'See all employees':
                        seeEmployees();
                        break;
                    case 'See all departments':
                        seeDepartments();
                        break;
                    case 'See all roles':
                        seeRoles();
                        break;
                    case 'Add employee':
                        addEmployee();
                        break;
                    case 'Add department':
                        addDepartment();
                        break;
                    case 'Add role':
                        addRole();
                        break;
                    case 'Change employee role':
                        changeRole();
                        break;
                    case 'Delete employee':
                        deleteEmployee();
                        break;
                    case 'EXIT': 
                        exitApp();
                        break;
                    default:
                        break;
                }
        })
};

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' employees found!');
        console.table('All Employees:', res); 
        options();
    })
};

// view all departments in the database
function viewDepartments() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All Departments:', res);
        options();
    })
};

// view all roles in the database
function viewRoles() {
    var query = 'SELECT * FROM role';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table('All Roles:', res);
        options();
    })
};