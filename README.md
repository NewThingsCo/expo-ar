# Expo face detection app tutorial

## Intro

### React Native

* [React Native](https://facebook.github.io/react-native/) is a framework developed by Facebook that lets you build mobile apps using JavaScript and React.
* React Native translates JavaScript to native code so the apps use the same UI building blocks as native iOS and Android apps. This means that the apps created with React Native are indistinguishable from apps created with native tools.
* React Native doesn't use HTML elements. Instead the framework provides UI components such as `View` and `Text` instead of `div` and `p`.
* If you need some custom functionality that is not supported by the React Native libraries, you can write it yourself with native code and embed the custom component to the React Native app.

### Expo framework

* [Expo framework](https://docs.expo.io/versions/latest/) is a set of tools, libraries and services that helps the development of React Native apps.
* Expo SDK provides a set of features missing from the React Native core such as access to the device system functionality (camera, contacts, etc.).
* Local development with Expo SDK is straightforward since there is no need for Xcode or Android Studio.
  * When you work on an Expo project, your local computer serves an instance of your project for the mobile device.
  * Expo Client App running in the mobile device contains the Expo SDK and it is able to download and run your project.
* Expo tools can also help you in creating the final application packages for app stores.

### Face detection API

* Expo provides [a face detection API](https://docs.expo.io/versions/latest/sdk/facedetector) that can be combined to a live camera view. The API notifies when it has detected face in the image and outputs the face coordinates. It has also features for detecting the smile probability and if the eyes are open or not.
* This tutorial aims to build a React Native app that utilizes the live camera view and the face detection API. Commercial applications of this kind of app could be e.g. shopping guides that helps user to try out new eyeglasses or hairstyle.
* Note that this example has been tested only with iOS, the current API has some problems with Android functionality.

## Environment setup

* Make sure you have JavaScript editor of your choice installed. If you haven't locked your choice yet, install [Visual Studio Code](https://code.visualstudio.com/).
* You'll need to have Node.js (version 6 or newer) installed on your computer.
  * To test if you have Node.js installed, open Terminal and run
    ```
    node --version
    ```
    It should print out your Node.js version.
  * If you don't have Node.js installed or your version is outdated, download latest version from [here](https://nodejs.org/en/).
* [Create Expo account](https://expo.io/signup)
* Install Expo client app to your mobile device and sign in with your Expo account.
  * [iOS](https://itunes.apple.com/app/apple-store/id982107779)
  * [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
* Make sure you have installed git.
  * Open Terminal and run
    ```
    git --version
    ```
    If git is missing, the command will prompt you to install the Xcode Command Line Tools that contain git.
* Clone this repository.
  * Set up [SSH keys](https://github.com/settings/keys) for GitHub if needed ([instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/))
  * Navigate to a working directory of your choice in Terminal e.g.
  ```
  cd ~/all-of-my-code-stuff
  ```
  * Clone the repository
  ```
  git clone git@github.com:NewThingsCo/expo-ar.git
  cd expo-ar
  ```

## Exercises

* [Exercise 1: Hello World with Expo App](docs/ex1.md)
* [Exercise 2: Face detection](docs/ex2.md)
* [Exercise 3: Snapchat filter](docs/ex3.md)
* [Exercise 4: Smile detection](docs/ex4.md)
* [Exercise 5: Embed image](docs/ex5.md)
