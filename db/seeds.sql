USE employees_db;

INSERT INTO department (name)
VALUES 
('Information Systems and Technology'),
('Finance'),
('Legal'),
('Human Resources'),
('Security'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Web Developer', 80000, 1),
('Accountant', 75000, 2),
('Paralegal', 45000, 3),
('Manager', 85000, 4),
('Engineer', 80000, 5),
('Sales Rep', 45000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, 458),
('Anne', 'Mona', 2, 276),
('Ridley', 'Maria', 3, 486),
('Lucio', 'Kenway', 4, 126),
('Arno', 'Emile', 5, 724),
('Tom', 'Jerry', 6, 157);