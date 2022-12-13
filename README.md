# MODS-Expo
MODS App created using React Native framework.

    To install react native and correctly setup the environment, read the React Native Installation guide below, 
    for Mac or Windows, and then install the project dependencies.

# React Native Installation Guide

## Mac

#### Step 1. Install Homebrew :

Homebrew is a type of platform dependency installation software which would allow us to install all the download and install all the required files. To install Homebrew, open your terminal prompt and type the below command :

    /usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### Step 2. Install Node.js :

  Next step is to install the node.js online using command:
    brew install node

#### Step 3. Install watchmen :
    brew install watchman

#### Step 4. Install React Native CLI :
    npm install -g react-native-cli

#### Step 5. install Xcode command line tools :

  To install the latest version on Xcode you need to follow the below steps :
    Open Xcode -> Preferences -> Locations tab -> install the latest version of Xcode command line tools.

#### Step 6. Install yarn :
      npm install --global yarn
      
#### Step 7. Install Android Studio (to check that changes work on both Android and iOS)

    https://developer.android.com/studio
      
      
## Windows

#### Step 1. Install JDK

    https://www.oracle.com/java/technologies/downloads/#java18

#### Step 2. Install Node.js

    https://nodejs.org/en/
    
    
#### Step 3. Install Android Studio

    https://developer.android.com/studio
    
 
# Setup Environment and Run App

In terminal or CMD enter the MODS-Expo folder, then run :
        
    yarn install 
        
to install all the requirements listed in package.json

when all the requirements have installed, there will be a package called node_modules in the MODS-Expo folder.

You can then run the app by running:
        
    npx expo start
        
and then type 'a' to run the android app, or 'i' to run the iOS app.
    
    shift+i to select the exact device to run the app on.

