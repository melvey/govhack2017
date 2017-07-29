import csv
import mysql.connector

cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()

add_edu = ("INSERT INTO park_facility "
               "(name, Type ,X,Y) "
               "VALUES (\"{}\", \"{}\", {}, {})")	

filename = '../data/2016_Census_GCP_State_Suburbs_for_NT/ParkFacilityFinder_point.csv';
with open(filename) as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		#print(row['facility_id'],row['X'], row['Y'],row['Type'])
		#row=row.decode('utf-8');
		print(add_edu.format(row['Name'],row['Type'], row['X'],row['Y']))
		cursor.execute(add_edu.format(row['Name'],row['Type'], row['X'],row['Y']))
	
	cnx.commit()
	
cnx.close()