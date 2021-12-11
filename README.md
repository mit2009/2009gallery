# 2.009 Gallery

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

Open up terminal  
ssh miniwally@designed.mit.edu  
password   
cd /Library/WebServer/Documents/new  
git pull  
