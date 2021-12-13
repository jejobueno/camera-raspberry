# starter-microservice

---

This is a starter microservice that allows you to start developing edge microservice.

# How to use it?

---

#### If this is your first time developing edge microservice, please follow the edge microservice development quick start guide from [mimik's developer portal](https://developer.mimik.com/development-setup/).

#### Before you use, you need to build the microservice and later deploy it to edgeEngine.

# Build Process

---

The build script **default.yml** is specified under **config** directory.

1. Install dependencies: `npm install`
2. Run the build script: `npm run build`
3. Package to container: `npm run package`

# Deployment

---

For **mobile application development**, deployment is programmatically by **Android or iOS Wrappers**, learn more about it:

- Android: [Link](https://developer.mimik.com/edgemobileclient-android-wrapper/)
- iOS: [Link](https://developer.mimik.com/edgemobileclient-ios-wrapper/)

For **microservice development**, things you will need:

- edgeSDK running on the deployment targeted device.
- Obtained edge Acess Token and associate the device from [mimik-edge-cli](https://www.npmjs.com/package/@mimik/mimik-edge-cli).
- Run the following commands under the same directory of your containerized microservice file using mimik-edge-cli:

```
mimik-edge-cli image deploy --image={YOUR_IMAGE_PATH} --token={EDGE_ACCESS_TOKEN}
```

Once microservice is successfully deployed you should get a response that looks like this:

```
created: 1617907116
digest:  sha265:e38a0314ea4bca42802bbc315637d9db9251158494e85ece4c0d789e2ab0b191
id:      79279c04-8945-4141-8b52-2cb92b78cf43-microservice-v1
name:    microservice-v1
size:    75855
status:  successfully deployed
```

Now open start.json in editor of choice. It can be found in the repo.

copy the name of the microservice that you got in the response when you deployed the image.

replace {{imageName}} with the name you copied.

replace {{containerName}} with the name you copied.

replace {{YOUR_PATH}} with a path of your choosing. we recommend keeping it simple.
for example:

```
"MCM.BASE_API_PATH": "sample/v1/",
```

OPTIONAL:
You can edit "add your environment variable name": "{{add your environment variable}}" to anything of your choosing related to your development environment. If you just want to get started for now, you can remove this line from start.json Read the source code for more information on custom environment variables.

save the newly updated start.json file

navigate to where the start.json file is located via terminal

run command:

```
mimik-edge-cli container deploy --payload start.json --token={EDGE_ACCESS_TOKEN}
```

- For more information and explanation, you can visit our [mCM container management API references](https://developer.mimik.com/edgeengine-mcm-api/) and [general guide on packaging, deployment, and exporting microservice](https://developer.mimik.com/building-edge-microservices/).
