#Alice Ni & Hilary Zen
#SoftDev1 Pd 2
#K17 -- No Trouble
#2019 - 10 - 9

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="school.db"
db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

# Create courses table

f = open("courses.csv", "r")
reader = csv.DictReader(f)

c.execute("CREATE TABLE courses(code TEXT, mark INTEGER, id INTEGER)")    # run SQL statement
for row in reader:
    code = str(row["code"])
    # print(course)
    mark = int(row["mark"])
    # print(mark)
    id = int(row["id"])
    # print(id)
    c.execute("INSERT INTO courses VALUES(?,?,?)",(code,mark,id))

f.close()

# Create students table

f = open("students.csv", "r")
reader = csv.DictReader(f)

c.execute("CREATE TABLE students(name TEXT, age INTEGER, id INTEGER)")    # run SQL statement
for row in reader:
    name = str(row["name"])
    # print(name)
    age = int(row["age"])
    # print(age)
    id = int(row["id"])
    # print(id)
    c.execute("INSERT INTO students VALUES(?,?,?)",(name,age,id))

f.close()


db.commit() #save changes
db.close()  #close database
