import pandas as pd
import json

df = pd.read_csv('worldcities.csv')
df.dropna(subset=['population'],inplace=True)
output = df[['city_ascii','admin_name','iso2','lat','lng','population']]
output.population = output.population.astype(int)
output['loc'] = output[output.columns[:3]].apply(lambda x: ', '.join(x.dropna().astype(str)),axis=1)
output = output.groupby('loc', group_keys=False).apply(lambda x: x.loc[x.population.idxmax()])
output.drop(columns=['city_ascii','admin_name','iso2','population'], inplace=True)
output.set_index('loc', inplace=True)
data = output.to_json(orient="index")

with open('cities.json', 'w') as json_file:
    json.dump(data, json_file)