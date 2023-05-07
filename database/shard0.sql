
CREATE DATABASE IF NOT EXISTS shard0db;

USE shard0db;

DROP TABLE IF EXISTS posts;

-- SET GLOBAL local_infile = true;

CREATE TABLE posts (Id INTEGER, CreationDate DATE, Score Integer, ViewCount INTEGER, Body TEXT, OwnerUserId Integer, LastEditorUserId Integer, LastEditDate DATE, LastActivityDate DATE, Title TEXT, Tags TEXT, AnswerCount Integer, CommentCount Integer, ClosedDate Date, ContentLicense TEXT);


LOAD XML INFILE '/var/lib/mysql-files/dataset/Posts.xml' INTO TABLE posts ROWS IDENTIFIED BY '<row>';


DELETE FROM posts WHERE MOD(posts.Id, 3) != 0;

