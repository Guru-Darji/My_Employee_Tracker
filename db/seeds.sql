USE employees_db;

INSERT INTO department (name)
VALUES 
('Software Developer'),
('Human Resources'),
('Engineering'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Web Developer', 80000, 1),
('Lead Web Developer', 125000, 2),
('Engineer', 85000, 3),
('Lead Engineer', 130000, 4),
('Sales Rep', 60000, 5),
('Lead Sales Rep', 75000, 6),
('HR Rep', 80000, 7),
('Lead HR Rep', 95000, 8);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES 
('John', 'Doe', 1, 078),
('Anne', 'Mona', 7, 114),
('Ridley', 'Maria', 2, 232),
('Lucio', 'Kenway', 4, 457),
('Arno', 'Emile', 3, 625),
('Tom', 'Jerry', 5, 117),
('Cole', 'Rich', 6, 716),
('Essa', 'Stark', 8, 617);