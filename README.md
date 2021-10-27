# eCatarino.github.io
Site para experimentar:

https://ecatarino.github.io

https://docs.openvidu.io/en/stable/tutorials/openvidu-insecure-js/
Tutorial:

1) Clone the repo:

git clone https://github.com/OpenVidu/openvidu-tutorials.git -b v2.20.0

2) You will need an http web server installed in your development computer to execute the sample application. If you have node.js installed, you can use http-server to serve application files. It can be installed with:

npm install -g http-server

3) Run the tutorial:

http-server openvidu-tutorials/openvidu-insecure-js/web

4) OpenVidu Platform service must be up and running in your development machine. The easiest way is running this Docker container which wraps both of them (you will need Docker CE):

# WARNING: this container is not suitable for production deployments of OpenVidu Platform
# Visit https://docs.openvidu.io/en/stable/deployment

docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.20.0

5) Go to http://localhost:8080 to test the app once the server is running. The first time you use the docker container, an alert 
message will suggest you accept the self-signed certificate of openvidu-server when you first try to join a video-call.