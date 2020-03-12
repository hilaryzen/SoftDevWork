#Tyler Huang, Jacob Olin, Hillary Zed
#Team Sticky Sulphur
#SoftDev pd 2
#K10 -- Import/Export Bank
#2020-03-04

from pymongo import MongoClient
from pprint import pprint
import datetime
from dateutil.relativedelta import relativedelta
import json

client = MongoClient()
db = client.stickySulphur
senators = db.senators

def findByName(name):
    if " " not in name:
        return("full name required")
    else:
        fname = name[:name.find(" ")]
        lname = name[name.find(" ")+1:]
    return senators.find({"person.firstname": fname, "person.lastname": lname})

def findByGender(gender):
	if gender is not "male" and gender is not "female":
		pprint("please enter a valid gender")
	return senators.find({"person.gender": gender})

def findByParty(party):
    return senators.find({"party": party})

def findByAge(age):
    now = datetime.datetime.now()
    for senator in senators.find({}):
        birthdayNumbers = senator["person"]["birthday"].split("-")
        birthday = datetime.datetime(int(birthdayNumbers[0]), int(birthdayNumbers[1]), int(birthdayNumbers[2]))
        senAge = relativedelta(now, birthday).years
        if senAge > age:
            pprint(senator)

def findByRank(rank):
    return senators.find({"senator_rank": rank})
