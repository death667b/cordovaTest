## Cordova Test Repo
--------------------

### Install Cordova Globally
npm install -g cordova

### Confirm Cordova is installed
cordova -v

### Create a new cordova app
cordova create cordovaTest io.cordova.hellocordova CordovaApp

### List possible cordova platforms to add
cordova platform list

### Add build platform
cordova platform add osx

### Build project
cordova build osx

### Run project
cordova run osx