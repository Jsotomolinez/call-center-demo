import requests
import json
def request(method, url = 'http://localhost:5173', values= None):
    if method == 'GET':
        response = requests.get(url=url)
        print(response.text)
    elif method == 'POST':
        response = requests.post(url= url, data= values)
        print(response.text, response.status_code, end = '\n')

values = {'name': 'lewis', 'last_name' :'oquendo'}

def main():
    request('POST', 'http://localhost:5173/src/mocks/test.json', values = json.dumps(values))

if __name__ == '__main__':
    main()