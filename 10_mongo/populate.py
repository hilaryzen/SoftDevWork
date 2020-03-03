from pymongo import MongoClient
from pprint import pprint
from bson.json_util import loads
import json
import datetime

client = MongoClient()
db = client.stickySulphur
col = db.senators

# Our dataset is Current US Senators: https://www.govtrack.us/api/v2/role?current=true&role_type=senator
# It contains all 100 members of the current Senate, and basic information like their state, birth date, gender, party, office location, etc.
# We used the json library to read in the file, and then inserted each senator's data one by one into the database

with open("./senators.json", 'r') as file:
    data = json.load(file)
    #print(data['objects'][0])
    for member in data['objects']:
        id = col.insert_one(loads(json.dumps(member)))
        print(id)
