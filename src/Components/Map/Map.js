import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';


function Map() {
    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyDlFCiawSU1fEjEvdF4isG9BPY8TxO8HN0",
            version: "weekly",
            // libraries: ["places"]
        });
        
        loader
            .importLibrary('maps')
            .then(({ Map }) => {
                new Map(document.getElementById("map"), {
                    center: { lat: 39.696490, lng: -99.796975 },
                    zoom: 4,
                });
            })
            .catch((e) => {
                console.error(e);
            }
        );
    }, []);

    return (
        <div id="map" style={{ height: "600px", width: "100vw" }}></div>
    );
}

export default Map;