import React, {Component} from "react";
import {LogoutButton, FilterButton, BookGigButton} from "../components/buttons";
import { createDecipher } from "crypto";

class ArtistProfile extends Component {

  FilterButtion() {
    gigsFilter(); 
  }

  gigsFilter(){
      return (
          <form className="input-group mb-3 venue-filter">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="submit" id="filter">Filter</button>
          </div>
          <select name="id" className="custom-select" id="inputGroupSelect03">
            <option selected>All Venues</option>
            <option value="{props.venueName}">{props.venueName}</option>
          </select>
        </form>
      );

  }









  render(){
      return (
        <div>
            <LogoutButton />
            <FilterButton />

          {/* When we map out each gig, 
          BookGigButton will have dataID={gig.Id} */}
            <BookGigButton dataId={1}/>
        </div>
      );
    }
}
export default ArtistProfile;