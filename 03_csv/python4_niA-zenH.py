import random

def randomOccupations():
    f = open("occupations.csv", "r")
    occupations = f.readlines()
    occupations.pop(0)
    occupations.pop(len(occupations) - 1)

    #Create dict
    occupationsDict = {}
    for job in occupations:
        job = job.strip()
        jobArray = job.rsplit(',', 1)
        occupationsDict[jobArray[0]] = jobArray[1]

    randomJob = random.randint(1, 998) / 10.0
    sum = 0

    for job in occupationsDict:
        sum += float(occupationsDict[job])
        if sum > randomJob:
            return job

print(randomOccupations())
