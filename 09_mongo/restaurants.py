from pymongo import MongoClient

from bson.json_util import loads

def ingest(f):
    fmt = ''
    with open(f) as _f:
        return loads(f'[{",".join(map(lambda s: s[:len(s) - 1], _f))}]')

server_address = '127.0.0.1'

c = MongoClient(server_address, 27017)
db = c["test"]
col = db["restaurants"]

# f = open("data.json", "r")
# restaurants = f.readlines()
# count = 0
# for r in restaurants:
#     print(count)
#     dict = eval(r.strip())
#     print(dict)
#     col.insert_one(dict)
#     count += 1

restaurants = ingest("data.json")
col.insert(restaurants)
print(col.count_documents({}))
f.close()
