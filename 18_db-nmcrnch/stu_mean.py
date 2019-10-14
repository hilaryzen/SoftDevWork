# Joseph Yusufov, Hillary Zen, With a skeleton provided by Mr. Mykolyk
# SoftDev
# skeleton :: SQLITE3 BASICS
# Oct 15 2019

### IMPORTANT ###
#   Since Python passes information by object reference, creating a variable
# and assigning it to a cursor object will not create a snapshot of the cursor,
# it will simply refer to that object. This is why the list "ids" exists.

import sqlite3  # enable control of an sqlite database
import csv  # facilitate CSV I/O

DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE)  # open if file exists, otherwise create
c = db.cursor()  # facilitate db ops

###                 SQL QUERIES                 ###
print_student = "SELECT * FROM student;"
select_courses_frag = "SELECT code, mark FROM courses WHERE courses.id = %s;" 
add_average_value = "INSERT INTO stu_avg VALUES(%d, %f);"
display_profile = "SELECT name, stu_avg.id, average FROM student, stu_avg WHERE student.id == stu_avg.id;"
###                END SQL QUERIES                 ###

# populate a list with each student ID that is present in the student table
students_toprint = c.execute(print_student)
ids = [] # create a list
for member in students_toprint:
    ids.append(member[2]) # populate with ids

# print(ids)

# populate stu_avg table in the db with the average mark of each student's courses
for stu_id in ids: # for each student
    mark_sum = 0
    counter = 0
    average = 0
    # print(stu_id)
    query = select_courses_frag % str(stu_id) # retrieve courses for a given student
    result = c.execute(query)
    for row in result: # sum grades for each student
        mark_sum += row[1]
        counter += 1
    if counter: # calc average for each student
        average = mark_sum / counter
    else: average = 0    
    # print(counter)
    # print(mark_sum)
    # print(average)
    c.execute(add_average_value % (stu_id, average)) # add average for a given student to the stu_avg table


profiles = c.execute(display_profile) # retrieve students' name, id, and average

for each in profiles: # display name, id, and average
    print(each)
db.commit() #save changes
db.close()  #close database

