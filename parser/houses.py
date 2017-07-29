
import csv
filename = '../data/2016_Census_GCP_State_Suburbs_for_NT/2016Census_G38_NT_SSC.csv';
with open(filename) as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         if row['SSC_CODE_2016'] == 'SSC70210':
             print row
         oneBed = row['Se_d_r_or_t_h_t_1_st_Total']
         twoBed = row['Se_d_r_or_t_h_t_2_sts_Total']
