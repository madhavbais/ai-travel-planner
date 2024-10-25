import React from "react";
import "https://maps.googleapis.com/maps/api/js?key=MYKEY&libraries=places&callback=initMap";

const SearchBar = () => (
  <input type="text" id="search" /> //where I want the google autocomplete to be
);

export default SearchBar;
