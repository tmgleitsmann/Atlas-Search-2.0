Atlas-Search-2.0

ReactJS application that utilizes Redux, MongoDB stitch and the FIFA 20 players dataset to showcase MongoDB's new Atlas Search functionality.

Haven't built out the login and about page yet. They might stay in the header component for aesthetics.
Didn't style it with css grid (didn't know about it yet), so it doesn't dynamically resize with the browser. Maybe on 3.0.

TO RUN: npm install then npm run build:dev then npm run dev-server


Note that there is some front-end filtering that can affect search results.
* Skill
* Dribbling
* Passing
* Shooting
* Defending
* Physicality
* Pace

The rest of the attributes get passed into the MongoDB Stich Api Query string and is filtered for in DB. <br />
Autocomplete option on searches will trigger an autocomplete query on each keystroke & display the best 6 player options. The logic for this can be found in soccer.js.

**Homepage Preview** <br />
Initial page render. Here you can query a quick search or navigate to Countries, Clubs or Player search pages.
![Homepage](/github-images/landing.png)

**Search Page Preview** <br />
Search page initial render. Here you can toggle different api endpoints to hit and filter players by attributes & name.
![SearchPage](/github-images/searchplayer.png)

**Query Results Preview** <br />
Query results initial render. List results from hitting the api endpoints.
![QueryResults](/github-images/queryresults.png)

**Build Team Preview** <br />
Build Team render from persistent MongoDB collection. 
![BuildTeam](/github-images/buildteam.png)

**Search Country Preview** <br />
Search country initial render. Here you can reduce and/or select a country you would like to filter by.
![SearchCountry](/github-images/country.png)

**Search Club Preview** <br />
Search club initial render. Here you can reduce and/or select a club you would like to filter by.
![SearchClub](/github-images/club.png)
