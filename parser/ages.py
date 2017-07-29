import csv
import pprint
import mysql.connector

cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()

iteml=list()
pp=pprint.PrettyPrinter()
with open('2016Census_G04A_NT_SSC.csv') as cfile:
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

add_age = ("INSERT INTO ages "
               "(suburbID, age, count) "
               "VALUES ({}, {}, {})")		
			   
for obj in iteml:

	for age in range(55):
		count=obj['Age_yr_'+str(age)+'_P']
		data={
		'suburbID':obj['SSC_CODE_2016'][3:7],
		'age':age,
		'count':count
		}
		#print(data)
		#queries=add_age.format(data['suburbID'], data['age'], data['count'])
		#print(queries)
		cursor.execute(add_age.format(data['suburbID'], data['age'], data['count']))
	cnx.commit()

	
	
cnx.close()