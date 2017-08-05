## Cordova Test Repo

#### Install Cordova Globally
+ npm install -g cordova

#### Confirm Cordova is installed
+ cordova -v

#### Create a new cordova app
+ cordova create cordovaTest io.cordova.hellocordova CordovaApp

#### List possible cordova platforms to add
+ cordova platform list

#### Add build platform
+ cordova platform add osx
+ cordova platform add ios

#### Build project
+ cordova build osx

#### Run project
+ cordova run osx

#### IOS Emulator
##### Install
+ cd platforms/ios/cordova && npm install ios-sim

##### Emulators
+ cordova emulate ios --list
+ cordova emulate ios --target=iPhone-7