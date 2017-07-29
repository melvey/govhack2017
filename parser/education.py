import csv
filename = '../data/2016_Census_GCP_State_Suburbs_for_NT/2016Census_G15_NT_SSC.csv';
with open(filename) as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         print(row['SSC_CODE_2016'], row['Tec_Furt_Educ_inst_Tot_P'])
