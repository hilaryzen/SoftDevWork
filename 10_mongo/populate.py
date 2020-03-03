from pymongo import MongoClient
from pprint import pprint
from bson.json_util import loads
import json
import datetime

client = MongoClient()
db = client.stickySulphur
col = db.senators

with open("./senators.json", 'r') as file:
    data = json.load(file)
    #print(data['objects'][0])
    for member in data['objects']:
        id = col.insert_one(loads(json.dumps(member)))
        print(id)
