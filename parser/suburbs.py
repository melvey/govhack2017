import csv
filename = '../data/SSC_2016_AUST.csv'
with open(filename) as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         sscCode = row['SSC_CODE_2016']
         sscName = row['SSC_NAME_2016']
         print(sscCode, sscName)
