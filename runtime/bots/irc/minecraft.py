import requests
import json
url = "https://api.minetools.eu/ping/dove11992.aternos.me/25565"
def get():
  resp = requests.get(url)
  data = json.load(resp.json())
  if data["description"] == "\\u00a74Server not found.": return "Server Offline."
  return "Server Online."
