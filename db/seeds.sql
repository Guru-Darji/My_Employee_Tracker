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
