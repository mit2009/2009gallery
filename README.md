# 2.009 Gallery README.md

Hello! 

Follow these instructions to update the 2.009 gallery, which can be viewed here: https://designed.mit.edu. The first step helps you upload all files (images, their thumbnails, videos, etc.) to the gallery server, which is a physical machine sitting in the kitchen/hallway area of CADLab. The second step helps you generate the data file which displays the files correctly on designed.mit.edu.

If you have any questions, feel free to reach out to Victor (vhung@mit.edu). Thanks!

## Part 1: Upload Files to the Gallery

The first step is to upload all the files to the gallery. If you're doing this remotely, I recommend an FTP client like [Cyberduck](https://cyberduck.io/download/) or [FileZilla Client](https://filezilla-project.org/download.php?type=client). 

1. Log in, using the FTP client, with:  
host - `designed.mit.edu`  
user - `miniwally`  
password - `[standard cadlab password]`  

2. Navigate to `/Library/WebServer/Documents/gallery/data/2019` to view the example structure.  
3. Create a folder based on the year in the data folder (e.g. /2021). 
4. Populate it with the files for the year - **Please note the naming scheme,** and make sure to follow the **capitalization**, **file format**, and **thumbnailing scheme** exactly as the previous years (otherwise there will be more work to do!)
5. When done, you should be able to see the files immediately on the web, under the corresponding URLs (for example: http://designed.mit.edu/gallery/data/2020/final/photos/original/blue1.jpg)

(If you are physically near the machine, you can access the machine if you would like and directly upload files using an external hard drive/USB stick. Look for the Mac mini hanging out just above and to the left of the fridge (sitting on a label that says designed.mit.edu.) Just be sure to navigate to the correct folder on Finder!

## Part 2: Update the Data File

### Let's get the gallery running on your machine!

We're going to do a teensy bit of setup to get the gallery on your machine so you and run and preview it as you edit... to make sure it looks good and the formatting is correct. These instructions are written for a Mac, so if you have a different devices and are having trouble, let me know.

1. Make sure you have Node.js installed. Node.js is a JavaScript engine that helps run the server. Open up Terminal (you can use the spotlight search - `cmd + space bar` to quickly bring up a search, and type `node`. If it displays a message that says `Welcome to Node.js` or something similar, congratulations, you have Node.js installed, and can skip to step 3. Otherwise, continue on!
2. Download [Node.js](https://nodejs.org/en/) by clicking on the 'version for most users'. Follow the instructions. Once you have Node.js installed, open up Terminal, and try typing `node` and enter again. 
3. Exit out of Node.js. Hit `Ctrl+c` multiple times.
4. Installing Node.js should have also installed npm, which is a package manager for Node.js. Next, you'll want to install `yarn` which helps you run the server. Install this by typing `npm install --global yarn`.
5. In the top right of this page (The 2.009 Gallery Repository Root - https://github.com/mit2009/2009gallery) you should see a green `code` dropdown. Click that and select 'download zip`. Download this zip, open it and place it somewhere close to your heart.
6. In Terminal, navigate to this folder with the `cd` command. If this is new to you, here's a quick [rundown](https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-terminal.html) of what you're doing.
7. Once you're in the 2009gallery folder (you should be seeing something like `2009gallery %` as the prompt) type `yarn` and hit enter to install all the dependencies.
8. Next, type `yarn start` which will start running the server locally.
9. Visit http://localhost:8000/. If you see the gallery, congratulations! You are now running the 2.009 gallery locally! Look at you, you web developer you. To exit out, you can hit `Ctrl+c`

### Let's edit the data file!

10. To edit the data file, I **highly** recommend a text editor with syntax highlighting. [Visual Studio code](https://code.visualstudio.com/) is my current go-to.  Using your text editor, open up data.js
11. Note the format of this .js file. Usually, the best way to understand this formatting is to stare at it for a bit. But if you'd like a more formal introduction, [this page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) goes over the JSON format.
12. Update the file with your desired year, and hit save. Once you hit save, you can go to http://localhost:8000/, refresh, and you should see the new year you updated!
13. Once you're satisfied with how everything looks, you can now update the **live** data.js! Using the FTP client as mentioned in part 1, navigate to `/Library/WebServer/Documents/new/`. You should see the existing data.js file. Place the old data.js file in the `data archive` folder, and name it data-[year].js. Now upload the new data.js file. 
14. Check http://designed.mit.edu. Hit refresh a couple of times. You should now see the new data for the gallery. Hooray!
15. Notify Victor that the designed.mit.edu has been updated so he can push everything to git to have it backed up in the cloud.

You're done!  
Party on.
