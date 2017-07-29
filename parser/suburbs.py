import csv
filename = '../data/SSC_2011_AUST.csv'
with open(filename) as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         sscCode = row['SSC_CODE_2011']
         sscName = row['SSC_NAME_2011']
         print(sscCode, sscName)
