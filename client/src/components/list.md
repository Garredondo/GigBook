# Layout of Site:

Note: This is pseudo-coded in HTML to get the general idea of the layout across.
      The id and class names obviously don't relect the final product.

**Left**
*Profile*
```html
<div id = "Profile Section">
    <div id = "Basic Artist Information" style = "position: Upper Left of Section">
        <img src = "Profile Image">
        <h1> Username (Band Name) </h1>
        <h3> <em> Genre(s) </em> </h3>
    </div>
    
    <div id = "Information Directly Related to Venues" style = "position: Bottom Center of Section">
        Instruments
        Number of Members
        User Website
        User Email
        Phone Number

    </div>
</div>
```

**Right**
*Results*
```html
<div id = "Results Section">
    <filter style = "position: FIXED, at Top Left of Section, width~300/400px / width~30-45%">
    </filter>
    <div class = " Individual Result Box / GigBox™ ">
        Venue Image 
        Venue Name
        Gig Description (Chill, outdoors)
        Genre
        Date
        Book Button
    </div>
</div>
```