import React from "react";
import "./style.css";


function GigFilter(props) {
    return (
        <form className="input-group mb-3 venue-filter">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="submit" id="filter">Filter</button>
        </div>
        <select name="id" className="custom-select" id="inputGroupSelect03">
          <option selected>All Venues</option>
          <option value>1</option>
          <option value>2</option>
          <option value>3</option>
          {/* <option value="{props.venueName}">{props.venueName}</option> */}
        </select>
      </form>
    );
}

export default GigFilter;


    // $("#filter").on("click",function(event){
    //     event.preventDefault();
    //     const name = $("#inputGroupSelect03").val();
    //     $(".gig-card").each(function(i,element){
    //         const checkName = $(element).children(".card-text").children(".card-title").text()
            
    //         if(name === checkName){
    //             $(element).show();
    //         }else if(name === "All Venues"){
    //             $(element).show();
    //         }else{
    //             $(element).hide();
    //         }
    //     })
    // })
  