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
        <p> Instruments </p>
        <p> Number of Members </p>
        <a><p> User Website </p></a>
        <p> User Email </p>
        <p> Phone Number </p>
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
        <img src = "Venue Image"> 
        <h3>Venue Name</h3>
        <p>Gig Description (Chill, outdoors)</p>
        <p><em>Genre</em></p>
        <p>Date</p>
        <button>Book Button</button>
    </div>
</div>
```