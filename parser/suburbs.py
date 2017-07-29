import csv
import mysql.connector
filename = '../data/SSC_2016_AUST.csv'
cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()
add_sub = ("INSERT INTO suburb "
               "(suburbID, suburbName) "
               "VALUES ({}, \"{}\")")

with open(filename) as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         sscCode = row['SSC_CODE_2016']
         sscName = row['SSC_NAME_2016']
         print(sscCode, sscName)
         cursor.execute(add_sub.format(sscCode, sscName))
cnx.commit()

cnx.close()
