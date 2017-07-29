import csv
import mysql.connector

cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()
add_hou = ("INSERT INTO houses "
               "(suburbID, avgRooms) "
               "VALUES ({}, {})")

filename = '../data/2016_Census_GCP_State_Suburbs_for_NT/processedCensusHouses.csv';
with open(filename) as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		suburb=row['SSC_CODE_2016'][3:7]
		total=(int(row['R1'])+int(row['R2'])+int(row['R3'])+int(row['R4'])+int(row['R5'])+int(row['R6']))
		if total==0:
			total=1
		avg=(int(row['R1'])*1+int(row['R2'])*2+int(row['R3'])*3+int(row['R4'])*4+int(row['R5'])*5+int(row['R6'])*6)/total
		query=add_hou.format(suburb, avg)
		print(query)
		cursor.execute(add_hou.format(suburb, avg))
	cnx.commit()

	
	
cnx.close()
