Atlas-Search-2.0

ReactJS application that utilizes Redux, MongoDB stitch and the FIFA 20 players dataset to showcase MongoDB's new Atlas Search functionality.

Haven't built out the login and about page yet. They might stay in the header component for aesthetics.
This application has a lot of images and isn't configured with webpack so FOUC can and will occur. 
This application isn't compiled down to es5 with babel so it may crash on some browswers. 

Note that there is some front-end filtering that can affect search results.
* Skill
* Dribbling
* Passing
* Shooting
* Defending
* Physicality
* Pace

The rest of the attributes get passed into the MongoDB Stich Api Query string and is filtered for in DB. 

**Homepage Preview** <br />
Initial page render. Here you can query a quick search or navigate to Countries, Clubs or Player search pages.
![Homepage](/github-images/homescreen.png)

**Search Page Preview** <br />
Search page initial render. Here you can toggle different api endpoints to hit and filter players by attributes & name.
![Homepage](/github-images/searchplayer.png)

**Query Results Preview** <br />
Query results initial render. List results from hitting the api endpoints.
![Homepage](/github-images/queryresults.png)

**Build Team Preview** <br />
Build Team render from persistent MongoDB collection. 
![Homepage](/github-images/buildteam.png)

