import requests

url = "https://letscountapi.com/easy-bac-fr/downloads"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": "ujjr-xtNJWfxgzDC6gEMrOAzac0ZZct9CgpqDCxwLcM"
}
data = {
    "current_value": 12
}

response = requests.get(url, headers=headers)

print("Code HTTP :", response.status_code)
print(response,type(response))
print(response.json(),type(response.json()))
