# Setup

## Your Environment

Make sure to have a [modern version of Node installed][node]:

1. [Official builds][builds] (every platform)
1. Homebrew (Mac/Apple):

        brew install node

1. Scoop (Windows):

        scoop install nodejs

1. Docker: Not yet? Let's build a Dockerfile + Docker Compose file

Second off, we will need to download/install/build Git for your machine:

1. Mac: [Github Desktop Install][gitDesktop]
1. Windows: [Github Desktop Install][gitDesktop]
1. Homebrew (Mac/Apple)

        brew install git

## Cloning The Repo

Changes to the site should be done through contributing to the repo in an open source manner. 
If giving back to open source is new, 
we highly recommend [this guide by the fine folks at GitHub][contrib].

1. Sign up or sign in to your [GitHub Account][github]
1. Navigate to the [Code For Greensboro repository][repo]
1. On the far right there will be a button labeled 'Fork', click it.
1. Fork the repository into your account's repository list.
1. (Easy): Use the GitHub Desktop client to download the code to your computer
1. __Stop here if you want to use GitHub Desktop, you are all set, code away!__
1. (Harder): Follow the below if you want to use the command line
1. Clone the freshly forked repository to your computer.
1. Check the upstream remote by 'cd ing' into the project's root folder and running the following command: 

        git remote -v

    The output should read: `origin  git@github.com:{your GitHub username}/codeforgso.github.io.git`

## Dependencies

The project is Node application. 
All dependencies can be installed using the following command in the root of the repo

        npm install

## Running the Project

With all code installed, the project can be started using the following:

      npm run dev

[node]: https://nodejs.org/en/
[builds]: https://nodejs.org/en/download/
[contrib]: https://opensource.guide/how-to-contribute/
[github]: https://github.com/
[repo]: https://github.com/codeforgso/codeforgso.github.io
[gitDesktop]: https://desktop.github.com/ 
