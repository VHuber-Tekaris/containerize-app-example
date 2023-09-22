# Squirrel Map

An application displaying squirrels in New York on a map using Angular & leaflet and a mocked backend api.

![image](https://github.com/VHuber-Tekaris/squirrel-map/assets/92783337/27f00add-d581-4d01-8de7-7311487bb394)

## Containerization info & requirements

Backend api (wiremock):

- The base image is [wiremock/wiremock](https://hub.docker.com/r/wiremock/wiremock) which exposes port 8080 by default.
- The mappings must be placed in the directory `/home/wiremock/mappings` inside the wiremock container. This can be done by mounting the files into the container with a (bind or named) volume or by creating a custom image that includes the files. The custom image doesn't require creating a storage account when deploying the app to Azure.

Frontend (squirrel-map-app):

- The app should be served using nginx which furthermore should use the local `nginx.conf` file (/squirrel-map-app/nginx.conf) in this repository instead of the default nginx config (/etc/nginx/conf.d/default.conf).

Docker compose:

- Both containers should be started together using a `docker-compose.yaml` file which should expose the needed port(s) to access the app.
