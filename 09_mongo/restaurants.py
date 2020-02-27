from pymongo import MongoClient
import json

server_address = '127.0.0.1'

c = MongoClient(server_address, 27017)
db = c["test"]
col = db["restaurants"]

f = open("data.json", "r")
restaurants = f.readlines()
count = 0
for r in restaurants:
    print(count)
    dict = eval(r.strip())
    print(dict)
    col.insert_one(dict)
    count += 1

print(db.restaurants.count_documents({}))
f.close()
