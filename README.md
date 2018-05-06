# I still don't have a name for this project but it's nice !

*spuf-314* is a Web Application *prototype* for public transportation, serving a RESTful API to find Stations, Bus, Metro and Tramway's Lines, while also computing the best multimodal path between two stations or addresses.


Check full documentation at `{domain}:{port}/api/docs`

## Install
```
git clone https://github.com/Sakasaky/project-314.git
cd project-314
npm install # post-install script will also run npm install on both apps
npm run dev # for server
npm run dev-client # for client app in app/client
npm run dev-admin  # for admin app in app/admin
```
Be sure to add a .env file, or just rename the .env.example


## TODOs
* Add authentication middleware
* Separate admin logic
* Add subdomain to serve client, API and admin app
* Set up some logger
* Error handling
