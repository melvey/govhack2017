import csv
import mysql.connector

cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='localhome')

cursor = cnx.cursor()

add_edu = ("INSERT INTO students "
               "(suburbID, totalNum) "
               "VALUES ({}, {})")	

filename = '../data/2016_Census_GCP_State_Suburbs_for_NT/2016Census_G15_NT_SSC.csv';
with open(filename) as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		print(row['SSC_CODE_2016'], row['Tec_Furt_Educ_inst_Tot_P'])
		cursor.execute(add_edu.format(row['SSC_CODE_2016'][3:7], row['Tec_Furt_Educ_inst_Tot_P']))
	
	cnx.commit()
	
cnx.close()
