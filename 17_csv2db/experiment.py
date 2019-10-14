import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="school.db"
db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()

q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"

foo = c.execute(q)

for bar in foo:
    print bar
