# TMUClub (React Native Application) - Still in progress

## Overview

This is a React Native application with a responsive design that is inteded to work on all screen sizes. It demonstrates how organization/club can have different roles and those roles can have different views and controls of the application. This project serves as a learning tool for React Native and an example of a Full Stack Application

## Things you are expected to learn from this project

- React Native Components
- Creating Custom React Components
- Expo (For seamless debugging between Android, iOS and Web)
- Responsive Design
- ExpressJS
- MongoDB
- TypeScript/JavaScript
- Access Control

## Features

- Fully functional `Login` and `Signup` process for new users to create their own accounts and login
- Access Control between `Treasurer`, `Coach` and `Member` - (This involves managing other systems as needed by the system based on the role)
- Each `User` has their own `Dashboard` which gives a general view of upcoming `classes/sessions` or `other admin information` for the club
- Write more soon

## Setup

```bash
git clone https://github.com/juderozario08/TMUClub.git && cd TMUClub
```

Please first ensure that you have `node` or `yarn` installed in your local machine and you also have a `MongoDB` cluster created as the application would work only based on your own database. After you have setup created your own database, take the `URL` from `MongoDB` for your **Cluster** and create a `.env` file inside of the `backend` folder. Then inside that folder write the following

```.env
DB_URI="paste the url here"
```

Once done you can then simply do the following while you are in the `backend` folder:

- Open a new terminal in that same directory

```bash
npm install
#Once complete do
npm start #this will start your backend server and connect to MongoDB automatically
```

Now go to your previous terminal again and write the following command:

```bash
cd ..
yarn install
#or 
npx expo install

yarn start 
#or
npx expo start
```

Now you can scan the QR Code or open your emulator or even your phones and enjoy the app.

Happy Coding :)
