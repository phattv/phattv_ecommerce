# Screenshots

![Home screen](https://imgur.com/s0TA1bo.jpg)

![Details screen](https://imgur.com/Jgi6MS7.jpg)

# Content

- [About](#About)
- [Note](#Note)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [How to build](#How-to-build)
- [How to run/develop](#How-to-run/develop)
- [How to deploy](#How-to-deploy)

# About

An Integrated Approach To Develop Web And Mobile (iOS & Android) Applications Using React and React Native

### Aim

To develop, build and deploy 3 applications of “phattv’s ecommerce”, web to the World Wide Web, android to Play Store and iOS to App Store, that share the same logic code from the single code base.

### Objectives

1. To research the technologies involved to develop cross-platform web & mobile applications.
2. To analyse and document use cases and requirements of a online shopping platform.
3. To set up a monorepo project structure for development that allows code reuse.
4. To set up mocked APIs returning data for the 3 front-end applications.
5. To design and implement the 3 applications of “phattv’s ecommerce”.
6. To build and deploy the 3 standalone production applications, web to the World Wide Web, android to Play Store and iOS to App Store.
7. To evaluate and test the 3 standalone production applications.

# Note

> This application is developed under a mac operating system (OS). There might be differences between different OSes (e.g. command line commands). One of the reasons is in order to build to iOS platform, the developer needs Xcode, and Xcode is only available in mac OS

# Requirements

Get latest version of

### Applications

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio/install)
- [Google Chrome](https://www.google.com/chrome/)

### Command line packages

- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en/docs/install)
- [react-native](https://facebook.github.io/react-native/docs/getting-started.html)
- [create-react-app](https://github.com/facebook/create-react-app)

# Installation

- `git clone git@github.com:phattv/phattv_ecommerce.git`
- `cd phattv_ecommerce` (default directory)
- `yarn`
- `cd packages/mobile/ios && pod install`

# How to build

### Web

- `yarn build:web`

### Android

- `yarn start:mobile`
- `yarn build:android`

### iOS

- `yarn start:mobile`
- `yarn build:iOS`

# How to run/develop

### Web

- `yarn start:web`

### iOS & Android

- `yarn start:mobile`
- If you have installed the app to a device or followed `How to build` steps, you should be able to open the application in your physical devices or emulators/simulators

### Install new dependencies

`yarn workspace components add {package_name}`

# How to deploy

### Web

- `yarn build:prod:web`
- `yarn start:prod:web`

### Android

- `yarn studio`
- `Build` menu > `Select Build Variant` change from `debug` to `release`
- Choose device
- (opt + r) Run

### iOS

- `yarn xcode`
- (cmd + shift + ,) `Product` menu > `Scheme -> Edit Scheme -> Build Configuration` change from `Debug` to `Release`
- Choose device
- (cmd + r) Run
