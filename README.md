agile-grenoble-mobile
=====================

Application mobile pour la conférence Agile Grenoble 2014.
Basé sur:
- Cordova (http://cordova.apache.org/)
- Ionic Framework (http://ionicframework.com/)

Installation on Windows
=======================

1/ Download and Install Java
- Add bin/ to your system environment variable PATH

2/ Download Apache Ant
- http://ant.apache.org/
- Add bin/ to your system environment variable PATH

3/ Download the Android SDK
- https://developer.android.com/sdk/index.html?hl=i

4/ Add Android to PATH
- Add adt-bundle/sdk/platform-tools/ and adt-bundle/sdk/tools/ to your system environment variable PATH
- Launch cmd.exe and run android then install on version 19 (newer doesn't work with actual cordova)

5/ Install or update Node.js
- Add bin/ to your system environment variable PATH

6/ Install Cordova 
- $ npm install -g cordova

7/ Install Cordova plugins
- Add cordova plugin and ImageMagick to create icon app
	- $ npm install cordova-icon -g
	- Then install ImageMagick http://www.imagemagick.org/
8/ Install Ionic 
- $ npm install -g ionic

Create Ionic project
=======================
You are ready to create android ionic project:
- $ ionic start myapp
- $ ionic platform add android

Which should complete. If you run into an issue with an error related to plugman (a Cordova issue), you’ll need to manually create the folder $USER\AppData\Local\Temp\plugman\git and run it again.

Then build and run your project
- $ ionic build android 
-	or $ ionic build --release android

Finally run project
- Install Genymotion and its android device 4.4.1
- Then 
	- $ ionic run android

Run this app
============
1/ Download the sources

2/ Go inside agile-grenoble-mobile repository

3/ $ ionic build android 

4/ Run
- run Genymotion
- $ ionic run android

