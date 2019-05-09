import React from "react";
import "./style.css";


function GigFilter(props) {
    return (
        <form className="input-group mb-3 venue-filter">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="submit" id="filter" onClick={props.filterButton}>Filter</button>
        </div>
        <select name="id" className="custom-select" id="inputGroupSelect03">
          <option selected>All Venues</option>
          {props.venues.map(venue => (
            <option value={venue.venueName} id={venue.id}>{venue.venueName}</option>
          ))}
        </select>
      </form>
    );
}

export default GigFilter;


  
  