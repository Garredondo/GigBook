

INSERT INTO Users (name, password, role)
VALUES ("Eric", "hello123", "Artist" ), ("Ken", "hello123", "Artist" ), ("Wes", "Hello$123", "Artist" ),("HoleinTheWall", "2314123","Venue"), ("TheBackRoom", "123", "Venue"),( "Sholzs", "123", "Venue"), ("TheWHO", "123", "Artist");




INSERT INTO Venues (venueName, street_address, city, state, zipcode, phone, email, website) 
            VALUES ( "Hole in the Wall",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", "(555) 555-5555", "HoleInTheWall@UTBootCamp.edu",
                     "https://www.holeinthewallaustin.com/"),

                   ( "Emo's",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5555",
                     "Emos@UTBootCamp.edu",
                     "https://www.emosaustin.com/"),

                   ( "Antone's Nightclub",
                     "305 E 5th St.", "Austin", "TX", "78701", 
                     "(555) 555-5555", 
                     "Antones@UTBootCamp.edu",
                     "https://www.antonesnightclub.com/"),

                   ( "B.D. Riley's Irish Pub",
                     "204 E 6th St.", "Austin", "TX", "78701", 
                     "(555) 555-5555",
                     "BDRileys@UTBootCamp.edu",
                     "https://bdrileys.com/"),
                     
                   ( "Central Market North",
                     "401 N. Lamar blvd. 78756", "Austin", "TX", "78701", 
                     "(555) 555-5555",
                     "CentrlMarketNorth@UTBootCamp.edu",
                     "https://centralmarket.com/");


INSERT INTO Artists (artistName, genre, instrumentation, numberOfMembers, email, phone, profileImage, website )
            VALUES  ( "Javelin Boot",
                      "Progressive Rock",
                      "guitar",
                       3,
                      "javelinBoot@UTBootCamp.edu",
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com"),

                    ( "The Splinters",
                      "Classic Rock Cover",
                      "guitar",
                       5, 
                      "theSplinters@UTBootCamp.edu", 
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com"),

                    ( "Kaliedescope Eyes", 
                      "Beatles Cover Band", 
                      "none",
                       4,
                      "kaliedescopeEyes@UTBootCamp.edu", 
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com" ),

                     ( "Stones ATX", 
                       "Rolling Stones Cover Band",
                       "full set", 
                        5, 
                        "stonesATX@UTBootCamp.edu", 
                        "(555) 555-5555", 
                        "https://via.placeholder.com/300", 
                        "bootcampspot.com");


INSERT INTO Gigs (gigName, genre, street_address, city, state, zipcode, phone, discription, image, date) 
            VALUES ( "Hole in the Wall",
            		"classical",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", 
                     "(555) 555-5555", 
                     "Electric Boogaloo",
                     "http://www.one2onebar.com/index_files/stacks-image-55009ff.jpg",
                     "Friday Night"),
                    
                    ( "Emo's",
                    	"metal",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5566",
                     "Aquatic Boogaloo",
                     "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/c1a873b75fab499d8654dc751d9f5554/2/GCuCv726gZycFxatknDdac/SEVENLIONS-EMOS-11.29.18-11_1920w.jpg",
                     "Saturday Night"),
                     
                     ( "Lit Lounge",
                     "hip Hop",
                       "215 East 6th Street", "Austin", "TX", "78701",
                       "(512) 466-2604",
                       "Premiere destination for Austin’s elite crowd ",
                       "https://litloungeaustin.com/images/page2-img1.jpg",
                       "Saturday, April 20, 2019, 7:00pm - 10:00pm"
                     ),
                     ("Broken Spoke",
                     "blues",
                     "3201 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Honky Tonk",
                     "https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                     ("One-2-One Bar",
                     "rage",
                     "1509 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Rager",
                     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                    ( "Hole in the Wall",
                    	"classical",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", 
                     "(555) 555-5555", 
                     "Electric Boogaloo",
                     "http://www.one2onebar.com/index_files/stacks-image-55009ff.jpg",
                     "Friday Night"),
                    
                    ( "Emo's",
                    "metal",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5566",
                     "Aquatic Boogaloo",
                     "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/c1a873b75fab499d8654dc751d9f5554/2/GCuCv726gZycFxatknDdac/SEVENLIONS-EMOS-11.29.18-11_1920w.jpg",
                     "Saturday Night"),
                     
                     ( "Lit Lounge",
                     "hip hop",
                       "215 East 6th Street", "Austin", "TX", "78701",
                       "(512) 466-2604",
                       "Premiere destination for Austin’s elite crowd ",
                       "https://litloungeaustin.com/images/page2-img1.jpg",
                       "Saturday, April 20, 2019, 7:00pm - 10:00pm"
                     ),
                     ("Broken Spoke",
                     "honky tonk",
                     "3201 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Honky Tonk",
                     "https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                     ("One-2-One Bar",
                     "rager",
                     "1509 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Rager",
                     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night")
                     ;