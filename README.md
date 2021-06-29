# Trybeer project

Full-stack project developed in 5 days, aiming at creating a beer e-commerce app.<br>
Agile methods used: Scrum and Kanban.<br>

### Stack and architecture details

Front-end - React.js, React Context API & Hooks, Axios; <br>
Back-end - Node.js, Express.js, RESTful API, MSC Architecture; <br>
Database - MySQL; <br>
Style - Not yet fully styled; <br>

### Instructions to run the project

*Install dependencies*<br>
Run```npm i``` in three folders: root, front-end, back-end.

*Pre-seed the database*<br>
```sudo service mysql start``` (if necessary)<br>
```mysql -u root -p```<br>
```source ./script.sql```

*Launch the app*<br>
```npm start``` on both front-end and back-end, as indicated by both package.json settings.

*Test linter*<br>
```npm install eslint```<br>
```./node_modules/.bin/eslint .path_file_you_want_to_analyze```
