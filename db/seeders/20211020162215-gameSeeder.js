"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    const gamesArr = [
      {
        title: "The Witcher 3: Wild Hunt",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1621939214",
        genreId: 1,
        description:
          "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Divinity: Original Sin 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg?t=1631177562",
        genreId: 1,
        description:
          "The Divine is dead. The Void approaches. And the powers lying dormant within you are soon to awaken. The battle for Divinity has begun. Choose wisely and trust sparingly; darkness lurks within every heart.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Disco Elysium",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg?t=1633989861",
        genreId: 1,
        description:
          "Disco Elysium - The Final Cut is the groundbreaking role playing game. You’re a detective with a unique skill system at your disposal and a whole city block to carve your path across. Interrogate unforgettable characters, crack murders, or take bribes. Become a hero or an absolute disaster of a human being.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "South Park: The Stick of Truth",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/213670/header.jpg?t=1611584789",
        genreId: 1,
        description:
          "For a thousand years, the battle has been waged. The sole reason humans and elves are locked in a neverending war: The Stick of Truth. But the tides of war are soon to change as word of a new kid spreads throughout the land, his coming fortold by the stars. As the moving vans of prophecy drive away, your adventure begins.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Undertale",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091",
        genreId: 1,
        description:
          "Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Elder Scrolls V: Skyrim",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1632499861",
        genreId: 1,
        description:
          "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim—an open world environment consisting of wilderness expanses, Rdungeons, caves, cities, towns, fortresses, and villages.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Darkest Dungeon",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/262060/header.jpg?t=1618936132",
        genreId: 1,
        description:
          "Recruit, train, and lead a team of flawed heroes through twisted forests, forgotten warrens, ruined crypts, and beyond. You'll battle not only unimaginable foes, but stress, famine, disease, and the ever-encroaching dark. Uncover strange mysteries, and pit the heroes against an array of fearsome monsters with an innovative strategic turn-based combat system.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Star Wars: Knights of the Old Republic",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/32370/header.jpg?t=1602892538",
        genreId: 1,
        description:
          "It is four thousand years before the Galactic Empire and hundreds of Jedi Knights have fallen in battle against the ruthless Sith. You are the last hope of the Jedi Order. Can you master the awesome power of the Force on your quest to save the Republic? Or will you fall to the lure of the dark side? Hero or villain, saviour or conqueror... you alone will determine the destiny of the entire galaxy!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vampire: The Masquerade - Bloodhunt",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/760160/header.jpg?t=1633631807",
        genreId: 1,
        description:
          "A treacherous betrayal has stirred a war amongst vampires, who are also targeted for annihilation by the secret society known as the Entity. Use your supernatural powers, weapons, and wit in this third-person battle royale game to dominate the night and restore the masquerade.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fallout: New Vegas",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg?t=1586905021",
        genreId: 1,
        description:
          "Welcome to Vegas. New Vegas. It’s the kind of town where you dig your own grave prior to being shot in the head and left for dead…and that’s before things really get ugly. It’s a town of dreamers and desperados being torn apart by warring factions vying for complete control of this desert oasis. It’s a place where the right kind of person with the right kind of weaponry can really make a name for themselves, and make more than an enemy or two along the way.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Back 4 Blood",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/924970/header.jpg?t=1634317785",
        genreId: 2,
        description:
          "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity's extinction on the line, it's up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bioshock",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/7670/header.jpg?t=1568739889",
        genreId: 2,
        description:
          "BioShock is a shooter unlike any you've ever played, loaded with weapons and tactics never seen. You'll have a complete arsenal at your disposal from simple revolvers to grenade launchers and chemical throwers, but you'll also be forced to genetically modify your DNA to create an even more deadly weapon- you. Injectable plasmids give you super human powers- blast electrical currents into water to electrocute multiple enemies, or freeze them solid and obliterate them with the swing of a wrench.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Doom Eternal",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg?t=1631811902",
        genreId: 2,
        description:
          "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Counter-Strink: Global Offensive",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1631908705",
        genreId: 2,
        description:
          "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Destiny 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg?t=1631638993",
        genreId: 2,
        description:
          "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Titanfall 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg?t=1619804815",
        genreId: 2,
        description:
          "Call down your Titan and get ready for an exhilarating first-person shooter experience in Titanfall® 2! The sequel introduces a new single player campaign that explores the bond between Pilot and Titan. Or blast your way through an even more innovative and intense multiplayer experience - featuring 6 new Titans, deadly new Pilot abilities, expanded customization, new maps, modes, and much more.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Deathloop",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1252330/header.jpg?t=1633010221",
        genreId: 2,
        description:
          "DEATHLOOP is a next-gen first person shooter from Arkane Lyon, the award-winning studio behind Dishonored. In DEATHLOOP, two rival assassins are trapped in a mysterious timeloop on the island of Blackreef, doomed to repeat the same day for eternity. As Colt, the only chance for escape is to end the cycle by assassinating eight key targets before the day resets. Learn from each cycle - try new paths, gather intel, and find new weapons and abilities. Do whatever it takes to break the loop.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Borderlands 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg?t=1590450074",
        genreId: 2,
        description:
          "A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Call of Duty: Black Ops III",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg?t=1624408705",
        genreId: 2,
        description:
          "Call of Duty: Black Ops III is a first-person shooter video game developed by Treyarch for Xbox One, PlayStation 4 and Windows and Beenox and Mercenary Technology for Xbox 360 and PlayStation 3. It was announced on February 5th, 2015 and officially named on April 9 of the same year. The official, full gameplay reveal was shown on April 26th, 2015,[1] and the game was officially released on November 6th. Black Ops III is the twelfth game in the Call of Duty franchise and Treyarch's first to be developed in a three-year development cycle.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Battlefield 2024",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg?t=1634670876",
        genreId: 2,
        description:
          "Battlefield 2024 is a first-person shooter that marks the return of the iconic all out warfare of the franchise. Adapt and overcome in a near-future world transformed by disorder. Squad up and bring cutting-edge arsenal into dynamically-changing battlegrounds supporting 128 players and epic destruction",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "No Man's Sky",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header_alt_assets_3.jpg?t=1634736686",
        genreId: 3,
        description:
          "In No Man's Sky, every star is the light of a distant sun, each orbited by planets filled with life, and you can go to any of them you choose. Fly smoothly from deep space to planetary surfaces, with no loading screens, and no limits. In this infinite procedurally generated universe, you'll discover places and creatures that no other players have seen before - and perhaps never will again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "God of War",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1634743013",
        genreId: 3,
        description:
          "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ARK: Survival Evolved",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg?t=1623347713",
        genreId: 3,
        description:
          "As a man or woman stranded naked, freezing and starving on the shores of a mysterious island called ARK, you must hunt, harvest resources, craft items, grow crops, research technologies, and build shelters to withstand the elements. Use your cunning and resources to kill or tame & breed the leviathan dinosaurs and other primeval creatures roaming the land, and team up with or prey on hundreds of other players to survive, dominate... and escape!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Red Dead Redemption II",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907",
        genreId: 3,
        description:
          "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Grand Theft Auto V",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444",
        genreId: 3,
        description:
          "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Assassin's Creed IV: Black Flag",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/242050/header.jpg?t=1616174462",
        genreId: 3,
        description:
          "The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mass Effect 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/24980/header.jpg?t=1615504486",
        genreId: 3,
        description:
          "Recruit. Explore. Control.Two years after Commander Shepard repelled invading Reapers bent on the destruction of organic life, a mysterious new enemy has emerged. On the fringes of known space, something is silently abducting entire human colonies.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Outer Worlds",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/578650/header.jpg?t=1616004214",
        genreId: 3,
        description:
          "The Outer Worlds is an award-winning single-player RPG from Obsidian Entertainment and Private Division. As you explore a space colony, the character you decide to become will determine how this player-driven story unfolds. In the colony's corporate equation, you are the unplanned variable.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dark Souls III",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1628263692",
        genreId: 3,
        description:
          "As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics. Now only embers remain… Prepare yourself once more and Embrace The Darkness!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Horizon Zero Dawn",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1623162512",
        genreId: 3,
        description:
          "Experience Aloy’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny… and stop a catastrophic threat to the future.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "NBA 2K22",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1644960/header.jpg?t=1631741026",
        genreId: 4,
        description:
          "NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA. Flex your management skills as a powerful Executive in MyGM and MyLEAGUE. Anyone, anywhere can hoop in NBA 2K22.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fifa 22",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/header.jpg?t=1633113405",
        genreId: 4,
        description:
          "Play The World’s Game with 17,000+ players, over 700 teams in 90+ stadiums and more than 30 leagues from all over the globe.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "WRC 10 FIA World Rally Championship",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1462810/header.jpg?t=1632735770",
        genreId: 4,
        description:
          "Hailed by reviewers and professional drivers, the standard-setting off-road racing simulation has been reinvented! Reach the 2021 season podium, and to celebrate the 50th anniversary of the competition, relive the highlights at the wheel of legendary cars.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "A Little Golf Journey",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1232150/header.jpg?t=1634563315",
        genreId: 4,
        description:
          "Embark on your adventure and bring colour back to the world as you complete golfing challenges across multiple destinations. With over 100 holes split across 10 stunning courses, you’ll be able to unlock secrets and discover mysteries along the way.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Madden NFL 22",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1519350/header.jpg?t=1633981688",
        genreId: 4,
        description:
          "Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Forza Horizon 5",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1634077649",
        genreId: 4,
        description:
          "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Begin Your Horizon Adventure today",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Football Manager 2021",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1263850/header.jpg?t=1612352842",
        genreId: 4,
        description:
          "The manager is the beating heart of every football club. In Football Manager 2021, dynamic, true-to-life management experiences and next-level detail renews that focus on you, the manager, equipping you with all the tools you need to achieve elite status.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Need for Speed Heat",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg?t=1620488613",
        genreId: 4,
        description:
          "Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set. By day, Palm City hosts the Speedhunter Showdown, a sanctioned competition where you earn Bank to customize and upgrade your high-performance cars. At night, ramp up the intensity in illicit street races that build your reputation, getting you access to bigger races and better parts. But stay ready – cops are waiting and not all of them play fair.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "PGA TOUR 2K21",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1016120/header.jpg?t=1634184481",
        genreId: 4,
        description:
          "Play against the pros. Play with your crew. In PGA TOUR 2K21, you can play by the rules or create your own featuring a new PGA TOUR Career Mode, licensed courses and more! Powered by The Golf Club.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sid Meier's Civilization VI",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg?t=1631817221",
        genreId: 5,
        description:
          "Originally created by legendary game designer Sid Meier, Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with history’s greatest leaders as you attempt to build the greatest civilization the world has ever known.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Sims 4",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg?t=1633453378",
        genreId: 5,
        description:
          "Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail, from Sims to homes and much more. Choose how Sims look, act, and dress. Determine how they’ll live out each day",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Totally Accurate Battle Simulator",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/508440/header.jpg?t=1617880814",
        genreId: 5,
        description:
          "Be the leader of red and blue wobblers from ancient lands, spooky places, and fantasy worlds. Watch them fight in simulations made with the wobbliest physics system ever created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Microsoft Flight Simulator 2020",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg?t=1623947484",
        genreId: 5,
        description:
          "From light planes to wide-body jets, fly highly detailed and accurate aircraft in the next generation of Microsoft Flight Simulator. Test your piloting skills against the challenges of night flying, real-time atmospheric simulation and live weather in a dynamic and living world.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lawn Mowing Simulator",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1480560/header.jpg?t=1634665830",
        genreId: 5,
        description:
          "Experience the beauty and detail of mowing the Great British countryside in Lawn Mowing Simulator, the only simulator that allows you to ride an authentic and expansive roster of real-world licensed lawn mowers from prestigious manufacturers; Toro, SCAG and STIGA as you manage your business.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cities: Skylines",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg?t=1632144308",
        genreId: 5,
        description:
          "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Farming Simulator 22",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/header.jpg?t=1633686916",
        genreId: 5,
        description:
          "Take on the role of a modern farmer and creatively build your farm in three diverse American and European environments. Farming Simulator 22 offers a huge variety of farming operations focusing on agriculture, animal husbandry and forestry - now with the exciting addition of seasonal cycles!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Gas Station Simulator",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1149620/header.jpg?t=1633974974",
        genreId: 5,
        description:
          "Buy an abandoned gas station and restore it to its full glory. Renovate, upgrade and expand upon the offered services to keep up with your clients demands.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euro Truck Simulator 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg?t=1632151407",
        genreId: 5,
        description:
          "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore from the UK, Belgium, Germany, Italy, the Netherlands, Poland, and many more, your endurance, skill and speed will all be pushed to their limits. If you’ve got what it takes to be part of an elite trucking force, get behind the wheel and prove it!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kerbal Space Program",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/220200/header.jpg?t=1624555019",
        genreId: 5,
        description:
          "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics. Launch your Kerbal crew into orbit and beyond (while keeping them alive) to explore moons and planets in the Kerbol solar system, constructing bases and space stations to expand the reach of your expedition.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Games", gamesArr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Games", null, {});
  },
};

