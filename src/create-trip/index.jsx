import { useEffect, useRef } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
// import "@geoapify/geocoder-autocomplete/styles/minimal.css"; // Import Geoapify CSS

function CreateTrip() {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    // Initialize GeocoderAutocomplete with API key
    const autocomplete = new GeocoderAutocomplete(autocompleteRef.current, "47cfab7d1a704ec9aa0c3f62c2920fb8", {
      placeholder: "Enter your destination",
    });

    // Event listener to capture place selection
    autocomplete.on("select", (location) => {
      console.log("Selected location:", location);
      // Use location object details as needed
    });

    // Clean up on component unmount
    return () => {
      autocomplete.off("select");
    };
  }, []);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination of choice?</h2>
          
          {/* Container for the autocomplete input and dropdown */}
          <div
            ref={autocompleteRef}
            className="relative w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
