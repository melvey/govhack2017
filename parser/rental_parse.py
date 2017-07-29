import csv
import pprint
import mysql.connector

cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()

iteml=list()
pp=pprint.PrettyPrinter()
with open('../data/2016_Census_GCP_State_Suburbs_for_NT/2016Census_G02_NT_SSC.csv') as cfile:
	spam=csv.reader(cfile, delimiter=',')
	fields=next(spam)
	#print(fields)
	for row in spam:
		items = zip(fields, row)
		item = {}
        # Add the value to our dictionary
		for (name, value) in items:
			item[name] = value.strip()
		iteml.append(item)	

add_rental = ("INSERT INTO rental "
               "(suburbID, avgPrice) "
               "VALUES ({}, {})")		
			   
for obj in iteml:

	data={
	'suburbID':obj['SSC_CODE_2016'][3:7],
	'avgPrice':obj['Median_rent_weekly']
	}
	#print(data)
	#queries=add_age.format(data['suburbID'], data['avgPrice'], data['count'])
	#print(queries)
	cursor.execute(add_rental.format(data['suburbID'], data['avgPrice']))
	cnx.commit()

	
	
cnx.close()
