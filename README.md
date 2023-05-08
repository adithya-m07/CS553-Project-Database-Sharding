# A COMPREHENSIVE STUDY ON DATABASE SHARDING
With this project, we aim to implement analyze the performance benifits of database sharding over a having a single large database. The steps to implement this project are as follows 
# PART A: Starting the MySQL database in docker
1. Download the stack exchange dataset, that we will parse and store in our database https://archive.org/download/stackexchange/music.stackexchange.com.7z 
2. Extract the .7z file and copy the file named “Posts.xml” and store it in the program directory in the folder “dataset”
3. Install the latest version of docker desktop 
4. Use the following command to build and start the docker container
```docker compose up -d –build``` 
(The above command can take anywhere from 10 - 15 minutes to run).

Before proceeding, verify that you get the following text in the logs of each container
```
[Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.33'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL
```
This is to ensure that the containers have completed running the initialization sql command, and the port is correctly bounded.


# PART B: Starting the Server
1. Download the latest version of NodeJS and NPM
2. Run the following command
```npm install```
(This will install all the dependencies required for the project)
3. Once all the dependencies are installed, run the following command to start the server
```npm run start:dev```
(After running the command, you should get ‘Listening on port 5000’ on the terminal)


# PART C: Testing and Benchmarking the project
1. The server accepts HTTP GET requests. The following is an example 
```
GET http://localhost:5000/selectKey HTTP/1.1
content-type: application/x-www-form-urlencoded

query=SELECT * FROM posts&mode=P&key=1 
```
There are two end-points 

## /select  
Requires query  (SELECT * FROM posts), Mode  (P=Primary, S=Sharded)
## /selectKey  
Requires query (SELECT * FROM posts WHERE ID = 1), Mode (P=Primary, S=Sharded), key (The value of ID we want to select)


2. To run the JMeter benchmark, we can open the .jmx file inside the “JMeter” folder. This generates a sample Test Plan, which can be edited to run specific tests. 

```
(The Unconstrained case of “SELECT *” might take anywhere from 15 to 20 mins to benchmark. And the constrained case might take around 1-2 mins)
```

