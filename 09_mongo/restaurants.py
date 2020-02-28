from pymongo import MongoClient

from bson.json_util import loads

server_address = '127.0.0.1'

c = MongoClient(server_address, 27017)
db = c["test"]
col = db["restaurants"]

f = open("primer-dataset.json", "r") #Uses William Cao's dataset
restaurants = f.read()
restaurants = loads(restaurants)
col.insert_many(restaurants)
#print(col.count_documents({}))
f.close()
