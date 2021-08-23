# Node SQL Replacer

This tool recive database.sql file and execute search and replace over it.

## Installation

First you will need to clone the repo into your machine, you can do that by runing
```sh
git clone https://github.com/Alex-Kostov/node-sql-replacer.git
```
Then in order to execute it open terminal and enter:
```sh
cd node-sql-replacer
node app.js /var/www/html/examplesite/example-sql-dumb-2020-09-02.sql wp_ wp_101_
```

In order to work correct app.js need 3 parameters:
1. Direct path to db.sql or db.sql
2. search parameter
3. replace parameter

```sh
node app.js {path} {searchPhrase} {replacePhrase}
```
