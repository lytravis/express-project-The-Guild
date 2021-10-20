"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      */
    Example: return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 2,
          gameId: 19,
          rating: 4.5,
          content:
            "Call Of Duty: Black Ops has strongly taken the Call Of Duty Series to new heights and is a critically acclaimed successful video game that is indisputably unmatched by any first-person shooter video game. Simply an outstanding video game.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 31,
          rating: 1,
          content:
            "Five star reviews are clear purchased reviews. Gameplay is sluggish and horrid. 2k makes their goal very clear on the title page having massive buttons for mycareer and myteam while relegating everything else to a small corner. They only care about money and tricking kids into buying vc to be like youtubers. Mycareer has been completely watered down into little more than create a player for online games. Everything about your myplayer has been watered down as to make online play more competitive. The actual game is trash and unrealistic with cpu players shooting almost exclusively in peoples faces with little consequences. People acting like its a good game are simply saying they love it to be cool and trendy or they think load times and graphics mean a game is good even though thats a perk of the next gen console, not the game itself.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 35,
          rating: 4.5,
          content:
            "Madden 22 is the best Madden of all time.  As an avid player of sports video games and specifically an avid player of Madden I truly mean it when I say that Madden 22 is the best Madden of all time.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 35,
          rating: 1,
          content:
            "This game is horrible, it’s just flat out horrible.  I’ve only played two days and noticed multiple glitches within this game.  First two were in franchise mode where I was trading players and after a while I couldn’t even add players to my auction block until I advanced the week, secondly once week 18 came around it said I was in the play offs instead of it being a normal season game.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 35,
          rating: 4.5,
          content:
            "Best 2k in years , this the one ! I've been playing 2k for years now and every other year it would either feel like they were doing to much  .....which makes the game feel robotic or should I say cluttered ....or better yet they would either give you the same game from the year before (we all know this feeling).  But this time around everything feels so real yet still fun enough to enjoy the game . I am making this review judging it by using the X BOX SERIES X.  The graphics are incredible and the animations are fluid everything feels good not forced when it comes to gameplay offensively , BUT I must say if you're a fan of playing defense , you won't be let down this time around, it feels just as good as offense does, (the clamps are real on this years production) !",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 35,
          rating: 3.5,
          content:
            "Franchise is the best mode i played thus far. More in depth than it has been since the last two Maddens. Skill trees for the staff are nice, just wish there were scouts and other staff branches as well. (Apparently coming with updates) I like the feel of the game play although it is a tad slower,  yet more realistic since last year's mess. Only thing missing is a better relocation- still the same teams and options since Madden 14.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 1,
          rating: 4.5,
          content:
            "The Witcher 3 Wild Hunt is most definitely one of the best open world RPG’s EVER made. I have completed the game about 8 times in total raking in 1500+ hours of gameplay time. Most recently i completed the game for the first time on ‘DEATH MARCH’ difficulty on ps5, this made an excellent challenge and made you really think about your build and using alchemy/signs much more.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 1,
          rating: 5,
          content:
            "This in my opinion is the best game I've ever played, no question. Just the stories alone can get you sucked in from the start. It may not be the most revolutionary story ever, but the side quests and decisions you make will change everything, from even the smallest of errands Geralt will do for the simple common folk.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 1,
          rating: 1,
          content:
            "A vast and beautiful world to explore... and if you do explore it you'll miss out on half of the games content. A linear story telling game disguised as an open-world RPG, the illusion of dialog choices which all lead to the same greedy, snarky, and rude remarks made by the main character, Gerald, leave zero room to role play and are forced into acting on behalf of Geralt (not sure how people are confusing RPGs with this.)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 31,
          rating: 5,
          content:
            "Immensely immersive, perhaps the best open world game I've played. From the story to the characters, it's a riveting and diverse experience that is really enthralling. Geralt is extremely fun to play as, and even more fun is the breadth of side quests, missions and avenues of exploration that so many times offer stories as good as, if not sometimes better, than what the main quest offers.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 6,
          rating: 5,
          content:
            "Easily one of my favorite video games of all time and one of the best Elder Scrolls entries. Skyrim is one of the best games that I’ve had the honor to play. There’s a lot of reasons and I’ll list some of them. Firstly for a game of 2011 it has some great graphics and physics. The scenery is some of the best I’ve seen in a game. The best sceneries in a long time with the second being RDR2 and GTA V. I know there’s a lot of annoying memes and people hating for just playing the game but honestly I don’t really care. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 6,
          rating: 4,
          content:
            "Every fantasy fanatics wet dream, kill dragon's, slay beast's, huge range of weapons and magic to use against foe. Not to mention a rich environment/landscape to traverse with ruins and caves to discover. Loads to discover and hours of gameplay to sink your teeth into so you will definitely get your money's worth especially with special edition adding all dlc.. not to mention the choice to add mods and creation club to open the game up even more.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          gameId: 6,
          rating: 1,
          content:
            "I’d say Skyrim is the second greatest and my second favorite game of all time. This is because The Witcher 3 Is the greatest and my favorite game. The lore within Skyrim allows for great immersion and large amount of play time. You can clock several hundred hours and still find new bits of lore that were previously unknown to you. Skyrim’s entertaining lore and story, I believe can be further enjoyed by branching off into other previous elder scrolls titles where more lore is explained",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 6,
          rating: 5,
          content:
            "This is such a delicious, addictive game and I enjoy every inch of dlc and vanilla part of it. I've been playing Elder Scrolls 5 since 2015 and I don't regret any second of time invested in the game. Ever since the title trailer for Elder Scrolls 6 was released, I have been eager to go buy and play it, but, as we all know, it has been almost 3 years since that aired. As of 2020, the next gen consoles come out in around holidays. I believe that , if it comes out this year, it will be sold with one of the consoles at first for the holidays and such. If I'm correct, than that would mean another $800 or more for a new Xbox series X just so I can play it. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 49,
          rating: 3,
          content:
            "Been playing since it was recommended to me in 2015 and I keep coming back to it. I've recommended this game to numerous people over the years for kids and adults alike. This is one of those games that you decide how in depth you want to get. Out of the box, the game is relatively simplistic and educational for those looking to have fun or learn about the basics of space. Where the game really shines is on the community modding front. I run over a hundred different mods that add various parts, new capabilities, and more realistic performing systems. You can pretty much run the gamut between an arcade style fun game to a full blown space simulation. I recommend this game for anyone interested in space, and especially those with older kids or young adults looking to expand their knowledge.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 49,
          rating: 4,
          content:
            "I have a past of not sticking with one game for very long, with a few exceptions such as Marvel's Spiderman (2018), Star Wars: The Old Republic, and Minecraft. But this game really has me hooked. I play in sandbox mode, and I feel it is the best way to play. This game encourages me to set my own goals. First my goal was to make a rocket that wouldn't kill my astronauts, and get them into upper atmosphere. My second goal was to make a rocket that could get my astronauts into space, stay there for a bit, then safely come back down. After much trial and error, I was able to get it working. The feeling of elation at having achieved my goal is so satisfying. My next goal is to design a rocket that can get to the moon and back. The gameplay loop is fun and satisfying, and I couldn't recommend this game enough. My only criticism is the graphics. They are pretty bad sometimes, even for a 2011 game. I can't wait for KSP 2 to fix this part of the game.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 49,
          rating: 5,
          content:
            "Always fun to see the terrified faces as they are about to die. Been playing for years still have not run out of things to do. Space place are a pain but when you get the hang of it it is so fun and oddly satisfying if you try to land on the runway. Worth it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 49,
          rating: 4.5,
          content:
            "The best space sandbox you will ever play in. A friend used to say it looked too boring to play. Now he says, this is so stupid, I cant believe it's actually teaching me about space.  Grab your Lays potato chips and sit down to some KSP. I bet you put down the Lays before you stop playing.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 27,
          rating: 5,
          content:
            "By far my favorite video game of all time. It has the combat of Halo/COD/gears of war, mixed with the best storyline I’ve ever seen, very interesting characters, good voice actors, excellent side quests, and good pacing. The entire game manages to be both action-fun, AND extremely engaging and also intelligent on a Sci-fi and scientific level. I also like how you can level up and the different powers you get. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 27,
          rating: 5,
          content:
            "This is by far my favorite game of all time! The story is the best part about this game that left me on the edge of my seat the entire time of me playing this game. The choices you make are cruel and punishing if you don’t do them right but satisfying when you do. This game looks glorious even to this day with the unreal engine. The combat is very satisfying and a step up from the original game. It’s more fast paced and less clunky and plays more like a gears of war title which is definitely not a bad thing, it is a very good thing! I’ll recommend this game to anyone!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 27,
          rating: 5,
          content:
            "One of my all-time favorite games! It has aged like a fine wine. Even after 10 years, the story, graphics, music, atmosphere, etc, all still hold up! It's pretty much a perfectly made game in my book! It's just beautiful in every aspect of the word!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          gameId: 27,
          rating: 5,
          content:
            "This game is considered as One of the greatest video games ever made, definitely the greatest bioware game ever and also one of the best RPGs ever in history, in my opinion this is the greatest videogame ever made in history 👑, you will see this game atleast in top 10 of many lists of greatest videogames of all time, so if you still haven't played this game what are you waiting for...",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 27,
          rating: 5,
          content:
            "the story is still great and the new characters being introduce are awesome, gotta play it for yourself to get the true experience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 41,
          rating: 1,
          content:
            "This game is trash. Playing this game makes me feel dead inside, like my soul is slowly leaking out of my body. My consisousness fades and Its slowly replaced with pure irratiton and dread with the tedious abomination on the screen. Each loading screen instead of being excited for what will happen next I instead reflect on my life in a melancholic fashion. After I could no longer handle the stress I uninstalled it forever.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 41,
          rating: 5,
          content:
            "this game is the best I got tons of mods in it worth the money and cc makes your person look way much better also one of the best things is that you can be A CHILD I love going to my Lil stuff I have a big family over 10 Jens I started off with a small child soon she was an adult and then ended up having twins and thriplets! the twins were my favorite a boy and a girl they both ended up dating their same-sex! I loved that so much then the boy adopted 2 kids and the girl adopted 11! soon after the kids grew and then they got married and after 4 gens they died with this being said this game is amazing and lets me make a family I never had! with this being said I am confident that this should be one of the top games!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 41,
          rating: 5,
          content:
            "Certainly not worth the money for it! I’m very disappointed in it. Even more unhappy about the costs. £34.99/£44.99 for the base game/deluxe is a bit much.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 41,
          rating: 5,
          content:
            "I've been playing the sims franchise for over a decade and let me tell you, they've stepped up their game. Throughout the pandemic EA has somehow been pumping out packs and updates like crazy, and all of it has been voted on by the community or even somewhat designed by them. Their ability to listen to players and keep us interested deserves much applause. I don't know any other game that takes feedback as seriously as the sims makers do, and we're here for it <3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 41,
          rating: 5,
          content:
            "this game is the best I got tons of mods in it worth the money and cc makes your person look way much better also one of the best things is that you can be A CHILD I love going to my Lil stuff I have a big family over 10 Jens I started off with a small child soon she was an adult and then ended up having twins and thriplets! the twins were my favorite a boy and a girl they both ended up dating their same-sex! I loved that so much then the boy adopted 2 kids and the girl adopted 11! soon after the kids grew and then they got married and after 4 gens they died with this being said this game is amazing and lets me make a family I never had! with this being said I am confident that this should be one of the top games!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 34,
          rating: 4,
          content:
            "The most surprising part of the experience was becoming engrossed in a story that built without being noticed. The game opens with a letter that originally seems to just be a stand-in for the developer to welcome players to golf, but over time it transitions into something more personal and reflective. What was once a series of formal letters becomes something beautiful, a sincere back and forth between X and Y, the player and the writer. A Little Golf Journey is a game full of surprises and a gameplay loop that never gets old, and comes highly recommended.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 34,
          rating: 4.5,
          content:
            "A chilled and deeply satisfying golf game, A Little Golf Journey combines small scale courses with a pleasant soundtrack, a varied art style and a real sense of adventure in a really pleasing way. Even if you don’t like golf as a sport, the environmental puzzles and quirky narrative in this game make for a gratifying experience, even with an occasionally unwieldy camera.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 34,
          rating: 3.5,
          content:
            "A Little Golf Journey cleverly mixes 3D platformer mechanics with a standard golf approach to deliver a relaxing yet challenging adventure, with many secrets to find. If only the camera was not so twisted.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 34,
          rating: 5,
          content:
            "Replaying the levels only serves to exacerbate a nagging feeling that A Little Golf Journey is simply too repetitive. When you move from one set of levels to the next, the visual design changes, with some courses looking genuinely beautiful. This doesn’t change the fact, however, that the terrain simply lacks variety throughout. The game clearly strives to provide a relaxing experience, but in doing so, it struggles to give much incentive to keep playing.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 34,
          rating: 5,
          content:
            "Replaying the levels only serves to exacerbate a nagging feeling that A Little Golf Journey is simply too repetitive. When you move from one set of levels to the next, the visual design changes, with some courses looking genuinely beautiful. This doesn’t change the fact, however, that the terrain simply lacks variety throughout. The game clearly strives to provide a relaxing experience, but in doing so, it struggles to give much incentive to keep playing.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 45,
          rating: 5,
          content:
            "God Damn! This game is absolutely majestic. Cities Skyline is a city simulation game that you can do anything you'd like. You will start off with some budgets and use it efficiently to grow the city, of course caring about all the details such as parks, educations, traffics and etc; the factors that effect the real life. I mean, the fact that they have brought a real life problems to a game is just absolutely incredible, while not hurting any of the gameplays. And as I said, you can do anything you'd like, from just simply chilling and building a city, to the point where you are building a already existing city and refer it in game. Build districts, control policies and taxations for the city you care for.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 45,
          rating: 5,
          content:
            "If you like to build things (think back to lego many years ago lol), then you'll love Cities Skylines, but rather than building buildings you build a city incorporating awesome landscapes and the game builds the buildings for you wherever you decide to put them.There is a constant challenge throughout the game where you have to keep up with the ever growing demands & needs of the residents whilst also being in control of the budget and finances of your city, making a profit and keeping your finances in the green and not in the red is key here, you need good financial management to keep your city expanding & growing whilst being able to budget cautiously to afford buying & placing all roads, buildings and amenities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 45,
          rating: 5,
          content:
            "THIS GAME IS AMAZING!!! You will always have something to do (usually mess with traffic problems) and mods make it all the better! I can play this game for hours on end and never get board! The cherry on top is the unique buildings and monuments, which add just a little more of a challenge for those who are looking for it. The only problem is that some older computers have trouble running it well, but the benefits outweigh the conflicts BY FAR. If you like games that never end, just to take your mind off of things, THIS GAME IS FOR YOU! If you like city-builders, THIS GAME IS FOR YOU! If you are into maps, THIS GAME IS ALSO FOR YOU! If it's too expensive, just wait for a sale to come around (they aren't uncommon) and buy it at a discounted price!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          gameId: 45,
          rating: 4.5,
          content:
            "Absolutely the best city builder I have ever played. Pleasant to look at with enjoyably complex and diverse content that lets you flex your creativity, not to mention a very involved dev team who are constantly making the game bigger and better. In addition to all of the vanilla content, there is also so much user-created content that you really can customize your city to be exactly the way you want it. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          gameId: 45,
          rating: 5,
          content:
            "Just... Awesome. Always something to tweak or just observe, never have I played a game where my imagination has been able to run so wild. Perhaps not as all round brilliant as the pc version, but the attention to detail is so breathtaking it is hard to criticise. A plus point is the movement provided by the analogue sticks which I imagine difficult to replicate with a mouse and keyboard. This game will keep me occupied for years. Sim City move over, Cities Skylines is city building strategy for the 21st century.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          gameId: 45,
          rating: 5,
          content:
            "Cities: Skylines is a wonderful and honestly pretty chill game.  It may not appeal to some (from its boring gameplay), but it appeals to most.  For me, watching content creators like Two Dollars Twenty makes me want to create cities like he does, giving me more hours on Steam.  The mods make the game even more fun, I enjoy it a lot.  I played Sim City Buildit before this, and honestly, I think Cities Skylines did the city-building aspect better (with more things to do).  I recommend this game if you want to feel relaxed, or feel focused.  I think the amazing mods that this community has made just make the game better.  Though content on the console is lacking, I recommend you play on the computer, as I do now",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 45,
          rating: 5,
          content:
            "I love this game, I have had it since I was 10 years old in 2016 (15 now), and it is still my favorite game today, I don't know what my life would be without it, it is so amazing to have the creative freedom that you have in this game, especially with mods and add-ons (dlcs), that make it so that you can basically do anything. It is the best city building game by far of all time and will be for a while unless they make a sequel. I just can't express how much I love this game. I would give this game all the stars possible!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          gameId: 38,
          rating: 5,
          content:
            "If you like racing and earning money to buy parts for your car(in the game), good effects and editing! This game is awesome!! Definitely an upgrade from the Need For Speed I played when I was younger with my brother! (Note, some music in it has some language) but you can adjust the volume on it in the settings! This game was released back in November! My husband got it for me for Christmas off my list!🤗 I love cars, and the whole thing with editing the parts and adding new stuff to make it race better, the driving fast and even editing your character or changing it, outfit, hair, many other things! The details to the cars are fun, just wish the prices weren’t so high, definitely makes you race more cuz you HAVE to get that money if you want new stuff!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          gameId: 38,
          rating: 5,
          content:
            "Need For Speed Heat is probably the best Need For Speed game to come out this decade! I wouldn’t put it at the top but it is definitely in the top five of the best NFS games EA has put out. Before you even leave your garage you can pick either day or night depending on what objectives you want to fulfill. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 38,
          rating: 3.5,
          content:
            "I am a very big fan of Need for speed franchise and happy to see that this game is better than the previous NFS games like Payback and NFS(2015). I am more excited about this game because after a long time, the EA franchise had brought back the most wanted m3 gtr in the last mission and they succeeded to bring back the most wanted m3 gtr sound correctly. I am also happy to get the black market cars and updates which had been done by Ghost Studios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          gameId: 38,
          rating: 4,
          content:
            "I honestly think that this might very well be the best NFS game across the board. Everything I can really ask of a NFS game is there - an immersive story with interesting characters and character development, tons of customization including a vinyl editor so one can make their own liveries, great roster of cars, day and night time, progression, out of this world graphics, beautiful city, huge map, tuning your car for various purposes such as on-track racing, off-roading and drifting, live tuning, etc.. There is so much to this game. I truly love it and I would easily recommend any racing game fan in general to try it out. I think it even surpasses Most Wanted from 2006.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 38,
          rating: 4,
          content:
            "All of the current generation Need for Speed games have been lackluster in my opinion, but this one is definitely the best when compared to 2015 and Payback. I'm glad that the horrible speed card system from Payback is gone, but this upgrade system still feels sorta shallow, I wish there was more advanced terminology than sport or elite when buying parts. This is a car game, you can use actual terms, I guarantee the player base will understand it. The engine swap mechanic is a cool addition and does helps branch out the upgrade system. The visual customization is really where this game shines; it doesn't matter if you like to rice out every car you own or make them look meaner, you will find the part that fits your style. The car list is pretty extensive, I feel like everyone will find a car they love and want to own irl. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          gameId: 24,
          rating: 4,
          content:
            "In simple terms this game is ******* brilliant. The atmosphere in every single moment is perfect. Along with the soundtracks and other background noises like bird song or the whistles of policeman, or the rivers. Rockstar has got this game spot on with this. Nature feels real. The noises of the river and small things like a hoot hoot as an owl flies by, creates such a surreal backdrop.  ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 24,
          rating: 5,
          content:
            "I only started playing a few days ago, it’s daunting at first as there’s just so much to learn and do but I would suggest to new players to down load the official RDR app and also to check out the wiki games guide to RDR2, you may have to pause a lot in first weeks to read up but it’s worth it. The graphics are wonderful , the cinematic parts gripping , it’s like watching a movie, even the photo mode is amazing. I would say take your time , explore , your going to make mistakes but hey don’t we all, it’s up to you what kind of character you want to be wether your going to play Arthur as a stone cold killer or a loveable rogue . You honestly could spend hours on this game just going for a ride on your horse picking flowers and herbs and taking photos it’s actually that relaxing.  ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          gameId: 24,
          rating: 5,
          content:
            "Rockstar Games knows how to create a good game. Yes it is slow, to move from one place to another on horseback, but the game is so jam-packed with detailed side missions, hidden features and extremely detailed story missions, it's all worth it in the end for me. It's one of the most beautiful games I've ever seen, in terms of quality. It's incredibly realistic, more than most games out there. Like GTA V, Rockstar really stepped it up with the quality and the storytelling, compared to their previous games, with it even better in this game. They built such an intricate and fascinating life history to all the characters, and you find out as the story progresses. You find yourself almost building an emotional connection to the majority of the main characters by the end.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 24,
          rating: 4,
          content:
            "I was very hesitant about trying this one, given it's a survival story game with shooting (which I came to the conclusion I'd be pretty balls at after playing part of the new Tomb Raider and Fallout New Vegas and watching various other ones like 'Last of Us'). But of course games have recently become alot more casual gamer friendly, this one included, as I discovered after failing a gun fight 4/5 times that I could simply skip past it... which seems like a huge cop out, but honestly if you're generally more invested in a game for other aspects, like characters, story and environment, then skipping the odd gun fight or dice with danger because you lack basic gaming ability sometimes is really not a huge deal. And tbh I think more games need this element to them for completes noobs like myself. Especially ones that have moments where you have to annoyingly chase something down, making sure various people/objects aren't come to a biter end or failing at being super stealthy (I'm sure I'm not the only one that gets occasionally annoyed by these.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          gameId: 24,
          rating: 5,
          content:
            "Red dead redemption 2. I don’t know where to begin! First of all the game is a masterpiece and is easily the best story rockstar have produced yet. It’s because we get a fresh viewpoint from gta v which has been the number 1 game for many years, this games realism and its attention to detail is simply magnificent. Story: the story seems simple enough from the outside but when you play the game you will find yourself immersed in the games amazing storyline and character, as the main protagonist Arthur starts as a brash, arrogant outlaw to an honourable character, and the side story of other missions are phenomenal.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          gameId: 24,
          rating: 5,
          content:
            "If you enjoy gaming (even just casually), movies, books or any kind of story telling then you owe it to yourself to experience this masterpiece! It's years ahead of current gen gaming and movies/story telling alike.The last time we saw anything on this level was the Uncharted series and The Last of us by Naughty Dog along with Rockstars' previous release; Grand Theft Auto V. It starts out by letting you get used to the great experience you're about to explore by giving you 2-3 hours of a linear opener (Chapter One) that not only explains the basic controls and feel but also lays out the base of a great story to come. You can easily sink 100's of hours in this huge experience exploring the vast beautiful world of the west in early 1900's. There's so much to do & that's just the single player experience, when you've finished that, there's 'Red Dead Online'! A huge open world with friends and foes alike! Masterpiece doesn't begin to explain this gem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          gameId: 24,
          rating: 5,
          content:
            "This might be long, but bear with me because this needs to be said about Red Dead and GTA. I just want to say how amazing this game truly is. I love the controls, gameplay, character depth, and even the storyline gets to me. I adore this game, and it was all because of this young man we took in who became family. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          gameId: 24,
          rating: 5,
          content:
            "Great Music, Great gameplay, Great Story Great Acting, this is truly a master piece of video gaming I can only fault it on perhaps having a bit to much in the gameplay department as to make it a bit overwhelming at times. This game really puts you in the world of the old west and allows you to relive your greatest old west film/s (Even if its Django) and makes you feel like part of that world. Out of 10 I rate apects that make a good game.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          gameId: 24,
          rating: 5,
          content:
            "Easily the best game I’ve ever played, and is honestly in a total league of its own. It’s incredibly nuanced with its main characters, but the world is also so alive - minor encounters like saving a man on his horse winds up being hanged later on (and you can intervene or not) are played out, you’re able to stop a serial killer too, and you can even meet a man who’s based on Gaugin roam the streets, etc.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 24,
          rating: 5,
          content:
            "Wow. Trailer looks like movie trailer. Played more than 3 times. But you won't feel bore. Every time I play I feel so refreshing. It is masterpiece .Cinematography top notch. Landscapes so beautiful.  Felt like I am roaming in other beautiful world.  So detailed from horse, Arthur eyes, water falls, rain, early morning sun rays, moon at night,snow, wheel marks on the mud, crystal clear waters  and so on.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 24,
          rating: 5,
          content:
            "Let me tell you, if you are living in these times of next generation games and hasn't played Red dead redemption 2 you are like missing the salt from your dish. Till now I was fascinated by Witcher 3 story line and after playing RDR2 my oh my it is a hit blockbuster movie quality story. Side quests or main mission everything is connected and so deep. And i have no negative review about this game, the game is super realistic, slow pace, highly detailed, it's so simple that you can relate. I always wanted to play highly detailed games and close one I found is Kingdom come deliverance, but RDR2 blew my mind and won the spot.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 24,
          rating: 5,
          content:
            "Masterful storytelling, oscar worthy voice acting, a soundtrack you could listen to over and over, an open world that feels alive but wants you dead, characters you wish you could confide in and cuddle, graphics that have truly set the bar for open world games and an experience you will never forget.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 19,
          rating: 5,
          content:
            "This is the best CoD in the series. It has in my opinion the best campaign in the series with a clear goal and everything is well explained, carachters are intresting, fun and likeable and the story does a good job to connecting to world at war's story (SOMETHING BO3 COULD LEARN ABOUT.) Tho there are some problems in historical accuracy, in the first vietnam mission which5 takes place in 1963 the song Fortunate son plays and guess what, that song came out in 1969, In the first mission the song played in the cuban bar (Quimbara) is released 1974 and lastly in the wmd mission hudson uses the AUG gun in service since 1978. Treyarch, how bad could DO A 5 SECOND RESEARCH IN GOOGLE be? Moving onto multiplayer, its pretty great too, it has really good maps and its balanced relatively speaking cause famas is broken, almost like its an AR 10 years older than the others, oh wait it is. But every cod has op weapons, smgs are all trash except for the mp5k and ak74u (wich is also a 1978 weapon :)) it introduced theater mode, gun game and has a currency system wich is not monetized so great! Zombies give u 3 maps wich are some of my favorites in the series, its pretty ez to pack a punch and they are fun to play solo (something that cannot be said for newer cods) I give it 9.7/10 experience but godamnit treyarch! Make some more research next time.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          gameId: 19,
          rating: 5,
          content:
            "This game is my favorite in the series. For starters, it's in the Vietnam war which is a lot more uncommon than it is in other first-person shooters and games in general. The story was great and never got boring or stale. The Guns were great and there all kinds of different weapons that they had from crossbow's to even miniguns. The return of Reznov was great and the Twist ending was great and caught me off guard. The game also was a good length unlike black ops 2 which was too short I thought. There is also a section of the game where you use a helicopter and was really fun. And is the first call of duty to have a new character that you play as is not quiet and made the character you play as interesting, unlike the other cod games. I overall think this game is so good and you have to play if you haven't played it already as the game goes for really cheap on eBay.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 19,
          rating: 5,
          content:
            "Honestly this is one of the best shooting games of its time. Call of duty Black ops one is a thrilling first person shooter game that has revolutionized the video game community. It provides the best you can ask for in any shooting game. My personal favorite feature of this astounding game is the Multiplayer. it contains a plethora of weapons and in game perks to help the player. There is  a variety of different fast paced game modes that keep the player on edge. Alongside are diverse and colorful maps in which the players battle on. The prize possession of this masterpiece is definitely the campaign. In the campaign you are Alex Mason, A special ops marine and C.I.A operative who ventures through events that happened in the cold war in order to stop a Russian terrorist by the name of Nikita Dragovitch who plans on releasing nova 6 a chemical weapon that will havoc among the west. The zombies is amazing. The first map is unforgettably legendary. It keeps you on your toes as you battle your way in expansive maps. This game truly provides the best shooting experience. The only downside is that there is no remaster yet but truly a gaming marvel :)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          gameId: 19,
          rating: 5,
          content:
            "Oh my god. This game is the best call of duty game of all time, my favourite. The campaign is apsoluetly amazing, such a good story, so entertaining, never ever gets old. The multiplayer is brilliant, great killstreaks, amazing maps, and the point system isnt a pathetic excuse to squeeze money out of the consumer, like it is in the newer games. Zombies is my favourite game mode in the franchise, and in bo1, it blows me away, perks are great, excellent maps, excellent weapons. There's none of that stupid bo4 system involved, there's no gobblegum, it's plain, brilliant, zombies. It's my favourite cod game and it'll probably always be that way, it'd be hard to beat this game for enjoyment, HIGHLY! recommend!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 19,
          rating: 5,
          content:
            "Even though I thought it was a 4-star a year ago, I revisited it and oohhhhhh boy! Amazing zombies mode, multiplayer is solid, and the campaign is beutiful! I also think that the main menu is one of the best in gaming history. Along with a PC that you could play zork on! They put so much into this and if you hate this it is obvious you are not a fan of how many people are in multiplayer, or how the zombies can 1-hit you, or thought that they dived into controversy. This is amazing, back when COD wasnt scared. Its like he was the kid on the playground who would do dangerous things but always wiggled it way out of it and had fun. Whenever I play this I feel like its been 4 hours, and I have been grinding for the past week, for the guns. Amazing. 5 Stars. I love this game. Best in the series",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 2,
          rating: 5,
          content:
            "This is an absolute gem of a game. I haven't been this invested in a game since Skyrim, and this has gone above and beyond any of my expectations I had from an RPG, let alone a turn-based one.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          gameId: 2,
          rating: 5,
          content:
            "Great Role Playing Game!  I was trying to avoid MMORPG due to no desire paying a fortune for In Game Items that usually never stop popping up. After a few days of searching i found this jewel! This game has everything you could find in any other MMORPG except you don't have to buy anything in the game shops for real money and no annoying online players if you play story line mode which is the core of this game.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 2,
          rating: 4,
          content:
            "I bought this game after 50h in CP 2077 v.1.05 to compare one RPG to another. DOS 2 is an RPG, but its RPG by definition in everything, every part of this game screams at you I'M RPG!!!!. Its not immersive game, nor is it most entertaining, it's simply very well made game based on tabletop strategic rpg games.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          gameId: 2,
          rating: 3,
          content:
            "In many ways, Divinity Original Sin II is an incredible rpg. I has pretty visuals, diverse voice-overs, and an absolutely immaculate combat system. However, ultimately there were too many things that I felt ruined my personal experience with the game. One of the major flaws to me is how drastically your role will be depending on what character you play as. Basically, if you pick one of the pre-existing characters the designers made, there is very rich dialogue and they are full of interesting backstories. But if you custom create a character, your dialogue choices are comparatively hollow and the experience is far more shallow. You end up feeling more like a walking husk then a living, breathing character in the world.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 2,
          rating: 2,
          content:
            "Extremely overrated game. A good example of the bad design choices that litter this game is in the main world map, they give you no way to figure out where you shouldn't go because of higher level enemies other than trial and error via dying or running. The game wastes your time a lot, and is so sensitive to levels that even enemies 1 level higher can take you out easily for a good 3/4's of the game. The game is imbalanced, poorly designed, and there isn't a single good ending in it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          gameId: 2,
          rating: 5,
          content:
            "Incredible masterpiece of a game! The way the developers care about and listen to the fans/players and what they want really does shine through in every way. You can just tell how the developers put all their hearts and souls into making this game, it is truly a labour of love. It's a remarkably perfect example of everything done right to every other game studio/developer team out there. Big thumbs up!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 2,
          rating: 4,
          content:
            "One of the best RPGs ever made. The combat system offers infinite possibilities and depth with build variety to boot, the music is superb and the best in the genre, the world feels lived in and fully realized and all the characters have interesting origin stories and choices you make can lead to unexpected situations or completely change how events unfold in the future. This is as good as CRPGs get in general. It's a flawless gem that I hope more people would try out.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          gameId: 2,
          rating: 4.5,
          content:
            "This is my first turn style game I have played and it is awesome. I play on the Nintendo Switch.  I am playing a solo game and an online game with friends.  The game has a rich story, challenging bosses, and good character development.  As a solo player it is more challenging as any story character you invite to group you have to keep track of their stats and armor requirements if you want to be successful.  But that is ok it makes you strategize more as an individual.  If you like to game with others there are hours and hours of game play.  The game reminds me of the D&D board game I played years ago.  I highly recommend this game if you like a top down turn style gameplay with challenges and adventure.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          gameId: 2,
          rating: 1,
          content:
            "This game is horrible on PS4 (maybe the controls & combat are immensely better on PC). I put a couple of hours into it, giving it a chance, and kept asking how it was ever released. I strongly believe whomever designed the combat system had no intention of player enjoyment. In the opening chapter (aboard the ship), you barely scrape by fighting sea-roaches. Seriously, they eat your face, you're lucky to survive. Hardly any healing, so the next sea-roach finishes the job. Each character is supposed to be this powerful anti-hero, and it feels like you're pond scum. Everything about the game is clumsy & cumbersome. Every fight starts with NPCs casting area effect that debilitates you. In chapter 2, I dug in the sand, a zombie popped up, beat the piss out of me - I tried to run away, it had better movement than me, and straight-up murdered me. How is that fun? I can't recommend avoiding this game more, it was retchid. I have to imagine the PC version has extremely better controls, that's the only explanation for any conceivable positive reviews.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          gameId: 2,
          rating: 1,
          content:
            "Maybe ok on a PC but it has been very badly ported over to the Xbox.The controls are clunky and oftentimes unmanageable. You will find yourself randomly running through poison or fire while desperately trying to cancel or talking to your own characters mid fight and wasting time. I managed to electrocute a table twice while frustrated that I couldn't hit the enemy who was happily lobbing grenades at me. The pace is extraordinarily slow. It will take you hours to simply move around the map. This is not aided by the strange graphics and odd point of view which is both obscuring and confusing.  I cannot recommend the Xbox version at all. Perhaps I've been spoiled by AAA games like Morrowind, Skyrim and Fallout over the years but they are heads and shoulders above this.,",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          gameId: 2,
          rating: 2,
          content:
            "This game embodies what I dreamt about in terms of better 3D graphics and the ability to interact with the world while playing RPGs in 90s and early 00s. Story seems deep, the world well thought-out and game mechanics work for me. I like the free movement exploration switching to turn-based combat. I highly recommend it for fantasy RPG fans.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 3,
          rating: 5,
          content:
            "Disco Elysium is one of my new favourites! Incredibly unique and compelling - with a beautiful art style, superbly written and incredibly engaging. Messing up is actively encouraged - making choices feels truly impactful and worthwhile, albeit on a more personal level - rather than following a simplified 'paragon' vs 'renegade' or similarly binary path. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          gameId: 3,
          rating: 4.5,
          content:
            "This is easily the best written game ever created, and it's not close. Critics put it on the same level as Planescape: Torment out of respect for a classic, but in truth, Disco Elysium outclasses even Torment by a number of leagues. There is a quality here that is simply not matched by any other digital medium. Disco Elysium's writing effortlessly competes with the best books I've read. It also has beautiful art, takes place in a fascinating universe and is immersive as hell. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          gameId: 3,
          rating: 4,
          content:
            "Where to even begin. I guess I'll just start at the beginning... Disco Elysium starts off by immediately making the player feel uncomfortable. The creepy voices of your limbic system and ancient lizard brain are haunting and the first scenes immediately throws you off balance and makes you ask What the hell is this?!. It invokes the perfect emotional response to the experience your character is having. As you struggle to come to grips with the world, so does your character",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          gameId: 3,
          rating: 5,
          content:
            "As a veteran gamer of 30+ years it is so refreshing to play what can only be described as a modern masterpiece of story telling wrapped in an amazing audiovisual style and elegance never seen before. Flawless attention to details never waned even to the very end of the stork. I became so drawn into the characters and places that having now finished I long to return. Lets hope this game inspires a new market that explores the mind rather than just hand-eye coordination. Not everyone wants to be rushing headlong to the finish but rather soak in the aesthetic of great writing, voice acting and audiovisual perfection at a nice pace.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          gameId: 3,
          rating: 5,
          content:
            "Disco Elysium is an extraordinary game compared to other RPGs with its characters, depth of choices, dystopic-nihilistic story, watercolor graphic style, cleverly choosen music and most of all the fantastic writing. It is a unique experience, a quietly important game with a thriliing effect on the player. I rarely become sad after finishing a game and when it happens I know that it is a good one. Well done ZA/UM and kudos to Robert Kurvitz for this oddly but beautiful experience. Highly recommended.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          gameId: 3,
          rating: 5,
          content:
            "Like no other RPG before. Disco Elysium is full of quirky humor, deep political philosophy, and absolutely brilliant writing from start to finish. The mechanics are simple and the gameplay never wavers from point-and-click detective work, but these are not critiques. Rather, they highlight the game's core strength of storytelling. This game will capture your heart and mind with a compelling narrative, a deeply disturbed protagonist, and the wonderful interplay between the pieces of his mind. I cannot recommend this game highly enough. Game of the Year 2019.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 2,
          rating: 5,
          content:
            "This is my favorite game of all time!!! The battle system is super fun and rewarding, every move used by you or your enemies being tailor-made for them by the passionate South Park creators. Walking around town to solve puzzles and collect new weapons or equipment will never cease to feel fun and rewarding. On the topic of puzzles, some of them can actually be a bit challenging on a first playthrough, but as you get used to chaining your moves to access areas it is a blast.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          gameId: 4,
          rating: 3,
          content: "the dark humour is just so funny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          gameId: 4,
          rating: 3.5,
          content:
            "It was a fantastic game and I enjoyed so much of it. I 100% recommend this game to any fan of South Park or RPGs. But just know that this game just keeps going. I know this is a really stupid complaint but they really needed to emphasize the progress you had made in the game. Everything is so anti climactic and it’s hard to tell what stage of the game you are in. This may not seem like a big problem but if you play games like I do where I just play and play and play and in the endgame I get into an “I’m almost done” mode then it can really guck the experience. I spent about half of the game just anxiously waiting for an ending. It really seems like the school war is the last level but that’s like Half way through. I highly recommend this game but be warned.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          gameId: 4,
          rating: 4,
          content:
            "Based on the satirical hit TV show South Park, The Stick of Truth is an RPG game derivative of other well-known games, but with comedy elements from the show itself. The theme here is a medieval-style scenario, where the main boys play a game where they have to defend a relic called The Stick of Truth, and you play as a new resident in the town, joining the same boys with their game after getting used to the atmosphere.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          gameId: 4,
          rating: 4.5,
          content:
            "Playing through for the first time - only maybe 5-10% through and I already love it. I’m 32 and spent the first 22 years of my life in Colorado... so SP has always held a special place in my heart.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          gameId: 4,
          rating: 1,
          content: "Game is very weird. not funny.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          gameId: 5,
          rating: 1,
          content: "Game was hot trash.  Can I get a refund?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
