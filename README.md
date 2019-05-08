# GigBook
- - -
## What GigBook does
GigBook is a full-stack web application that allows artists and venues to connect on one, easy-to-use hub. Either an artist or venue can create an account, build their profile with fields such as a profile image, name, and contact information, and manage their gigs. Users who sign up as a venue can create gigs and display the gig information to musicians. Users who sign up as an artist can search through the posted gigs and book themselves.

### Users can find the deployed page [here](https://blooming-tundra-24887.herokuapp.com/).
- - -
### Screenshots of GigBook
#### GigBook's landing page on a large screen
![Landing Page Desktop View](/screenshots/gigbooklanding.JPG)
#### A venue's page on a large screen
![Venue Page Desktop View](/screenshots/gigbookvenue.JPG)
#### An artist's page on a large screen
![Artist Page Desktop View](/screenshots/gigbookband.JPG)
#### GigBook's landing page on the Galaxy S5
![Landing Page Galaxy S5 View](/screenshots/gigbookgalaxys5.JPG)
#### GigBook's landing page on the IPhone X
![Landing Page IPhone X View](/screenshots/gigbookiphonex.JPG)
- - -
## Why GigBook is useful
GigBook allows users to dynamically create a venue profile or an artist profile. This profile helps a user advertise themselves and connect with other users.
- - -
## How users can get started with GigBook
### For Developers
#### Setting up the product on your machine
1. Clone the repository to your machine.
`https://github.com/Garredondo/GigBook.git`
2. Navigate to the product's [package.json](/package.json) to see the dependencies
3. Install npm packages
#### Setting up the database
1. Create a database using Sequel Pro or SQL Workbench
2. Create a `.env` file and list your credentials in the following format:

`db_user=yourUsername`

`db_password=yourPassword`

`db_database=yourDataBaseName`

`db_host=host`

`db_dialect=dialect`

`db_port=port`


3. Sequelize will create tables using the files in the [models_folder](/models) once the server has started.
### For Artists
1. Create an account
2. Build your profile with information about yourself / group
3. Search through gigs and book
### For Venues
1. Create an account
2. Build your profile with information about your venue
3. Create gigs so that artists can book
- - -
## Where users can get help with GigBook:
* Wesley Berry: wesleyberry52@gmail.com
* Eric Price: ericjosprice@gmail.com

## Who maintains and contributes to GigBook
* George Arredondo
* Wesley Berry [LinkedIn](https://www.linkedin.com/in/wesley-berry-89742317a) - [GitHub](https://github.com/wesleyberry) - [online portfolio](https://wesleyberry.github.io/Personal_Portfolio/)
* Wes Lebert
* Eric Price
* Hunter Wilkins
* Israel Medina
