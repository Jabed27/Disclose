# Disclose Intro:
Giving complain to the right person who in charge.

# How to Install Node.js and NPM on Windows

## Step 1: Download Node.js Installer
  In a web browser, navigate to https://nodejs.org/en/download/. 
  Click the Windows Installer button to download the latest default version. 
  At the time this article was written, version 10.16.0-x64 was the latest version. 
  The Node.js installer includes the NPM package manager.

## Step 2: Install Node.js and NPM from Browser

- Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.

- The system will ask if you want to run the software – click Run.

- You will be welcomed to the Node.js Setup Wizard – click Next.

- On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.

- The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.

- The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.

- Finally, click the Install button to run the installer. When it finishes, click Finish.


## Step 3: Verify Installation
  
- Open a command prompt (or PowerShell), and enter the following:

>>  `node –v`
  
-  The system should display the Node.js version installed on your system. You can do the same for NPM:

>>  `npm –v`

- To install all necessary packages that are used in this project, run the following command:

>> `  npm install  `

- To start the local server ,run the following command:

>> `   npm start   `


# Guidence to run the project:

1. At first please clone this project from the master brance.
2. Open the project in the visual studio code.
3. Node should be installed in your device. You need to Download node https://nodejs.org/en/download/
4. Go to the terminal option and create a terminal.
5. Express package shoulbe installed. Command is 'npm install express --save'
6. Route package should be installed. Command is 'npm i router'
7. Morgan  package should be installed. Command is 'npm i morgan'
8. In the terminal command 'node start', this command will going run the server.
9. Than Go to the browser type the url 'http://localhost:3000/static/sign_up.html'
10. Then create a account.
11. Then login.
