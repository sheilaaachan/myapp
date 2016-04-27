
## Install Cordova with Ionic
npm install -g cordova ionic

## App Structure
### Styling
Styling is in /scss/ionic.app.scss
Variable overrides are defined in /scss/variables.scss
### HTML
/www/templates/
### Controller
/www/js/controllers.js

## Please install ngCordova in your project folder with following command 
bower install ngCordova

## Please install ng-cordova-oauth in your project folder with following command 
bower install ng-cordova-oauth

## Adding a platform target
ionic platform ios android

## Start Ionic Server in laptop
ionic serve

## Ionic command for build and run app in emulator and mobile device
ionic build ios
ionic emulate ios  (camera capbility only works in device)
ionic run ios      (you might face iOS provision file Problem, it is better you run app from Xcode under platforms/ios/***.xcodeproj)

## Upload latest app to Ionic server
ionic upload

## Ionic View
Use Ionic View app to preview myapp on mobile devices.





