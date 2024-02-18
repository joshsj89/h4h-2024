import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import teams from '../../Constants/teams';

function Map() {
    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyDlFCiawSU1fEjEvdF4isG9BPY8TxO8HN0",
            version: "weekly",
            // libraries: ["places"]
        });
        
        loader
            .importLibrary('maps')
            .then(async ({ Map }) => {
                const map = new Map(document.getElementById("map"), {
                    center: { lat: 39.936765536, lng: -97.239103408 },
                    zoom: 4,
                });

                // const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

                const markerPositions = [...teams];

                const infoWindows = [];

                markerPositions.forEach(team => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: team.points[0][0], lng: team.points[0][1] },
                        // icon: team.volunteers_needed ? '../../Images/Google_Maps_pin_green.svg' : '../../Images/Google_Maps_pin.svg',
                        map: map,
                        title: team.title,
                    });

                    const contentString = team.volunteers_needed ? `
                        <div id="content">
                            <h1><a href="${team.link || "#"}" target=${team.link != '' ? "_blank" : ''}>${team.title}</a></h1>
                            <p>Volunteers needed</p>
                        </div>
                    ` : `
                        <div id="content">
                            <h1><a href="${team.link || "#"}" target=${team.link != '' ? "_blank" : ''}>${team.title}</a></h1>
                        </div>
                    `;

                    const infoWindow = new window.google.maps.InfoWindow({
                        content: contentString,
                    });

                    infoWindows.push(infoWindow);

                    marker.addListener('click', () => {
                        infoWindows.forEach(infoWindow => {
                            infoWindow.close() // Close all info windows
                        });
                        infoWindow.open(map, marker); // Open the info window
                    });

                    window.google.maps.event.addListener(infoWindow, 'domready', () => {
                        const infoWindowContent = document.querySelector(`#infoWindow-${team.id}`);

                        if (infoWindowContent) {
                            infoWindowContent.addEventListener('click', () => { // handle click on info window
                                console.log('Info window clicked!');
                            });
                        }
                    });
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