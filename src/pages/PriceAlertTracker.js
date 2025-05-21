import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the poll icon using Leaflet's L.icon
const pollIcon = L.icon({
  iconUrl: 'https://freepngimg.com/thumb/map/69579-map-icons-symbol-wallpaper-desktop-computer-location.png', // path relative to public folder
  iconSize: [30, 30],       // size of the icon
  iconAnchor: [15, 30],     // point of the icon which will correspond to marker's location (bottom-center)
  popupAnchor: [0, -30]     // point from which the popup should open relative to the iconAnchor
});

// Sample data with coordinates
const popularCities = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    description: "The City of Light, known for the Eiffel Tower and art museums."
  },
  {
    id: 2,
    name: "Rome",
    country: "Italy",
    coordinates: [41.9028, 12.4964],
    description: "The Eternal City, famous for ancient ruins and Vatican City."
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    coordinates: [25.2048, 55.2708],
    description: "Luxury shopping, ultramodern architecture, and desert safaris."
  },
  {
    id: 4,
    name: "New York",
    country: "USA",
    coordinates: [40.7128, -74.0060],
    description: "Home to Times Square, Central Park, and Broadway shows."
  },
  {
    id: 5,
    name: "Tokyo",
    country: "Japan",
    coordinates: [35.6762, 139.6503],
    description: "High-tech city with traditional temples and cherry blossoms."
  },
  {
    id: 6,
    name: "Bangkok",
    country: "Thailand",
    coordinates: [13.7563, 100.5018],
    description: "Vibrant street life, temples, and floating markets."
  },
  {
    id: 7,
    name: "Istanbul",
    country: "Turkey",
    coordinates: [41.0082, 28.9784],
    description: "Straddling Europe and Asia, rich in history and culture."
  },
  {
    id: 8,
    name: "Barcelona",
    country: "Spain",
    coordinates: [41.3851, 2.1734],
    description: "Famous for Gaudí's architecture and Mediterranean beaches."
  },
  {
    id: 9,
    name: "London",
    country: "UK",
    coordinates: [51.5074, -0.1278],
    description: "Iconic landmarks like Big Ben, Buckingham Palace, and the London Eye."
  },
  {
    id: 10,
    name: "Singapore",
    country: "Singapore",
    coordinates: [1.3521, 103.8198],
    description: "A futuristic city with gardens, street food, and Marina Bay Sands."
  },
  {
    id: 11,
    name: "Sydney",
    country: "Australia",
    coordinates: [-33.8688, 151.2093],
    description: "Known for the Sydney Opera House and Harbour Bridge."
  },
  {
    id: 12,
    name: "Cape Town",
    country: "South Africa",
    coordinates: [-33.9249, 18.4241],
    description: "Table Mountain, beaches, and rich cultural heritage."
  },
  {
    id: 13,
    name: "Rio de Janeiro",
    country: "Brazil",
    coordinates: [-22.9068, -43.1729],
    description: "Home of Carnival, Christ the Redeemer, and Copacabana beach."
  },
  {
    id: 14,
    name: "Cairo",
    country: "Egypt",
    coordinates: [30.0444, 31.2357],
    description: "Gateway to the ancient pyramids and Egyptian history."
  },
  {
    id: 15,
    name: "Moscow",
    country: "Russia",
    coordinates: [55.7558, 37.6173],
    description: "Famous for the Kremlin, Red Square, and St. Basil’s Cathedral."
  },
  {
    id: 16,
    name: "Los Angeles",
    country: "USA",
    coordinates: [34.0522, -118.2437],
    description: "Hollywood, beaches, and celebrity culture."
  },
  {
    id: 17,
    name: "San Francisco",
    country: "USA",
    coordinates: [37.7749, -122.4194],
    description: "Golden Gate Bridge, Alcatraz Island, and cable cars."
  },
  {
    id: 18,
    name: "Amsterdam",
    country: "Netherlands",
    coordinates: [52.3676, 4.9041],
    description: "Known for canals, museums, and cycling culture."
  },
  {
    id: 19,
    name: "Vienna",
    country: "Austria",
    coordinates: [48.2082, 16.3738],
    description: "Baroque architecture, classical music, and coffee houses."
  },
  {
    id: 20,
    name: "Athens",
    country: "Greece",
    coordinates: [37.9838, 23.7275],
    description: "The Acropolis and birthplace of democracy."
  },
  {
    id: 21,
    name: "Seoul",
    country: "South Korea",
    coordinates: [37.5665, 126.9780],
    description: "Modern skyscrapers, palaces, and K-pop culture."
  },
  {
    id: 22,
    name: "Toronto",
    country: "Canada",
    coordinates: [43.651070, -79.347015],
    description: "A multicultural city with CN Tower and nearby Niagara Falls."
  },
  {
    id: 23,
    name: "Lisbon",
    country: "Portugal",
    coordinates: [38.7169, -9.1399],
    description: "Colorful buildings, hills, and tram rides."
  },
  {
    id: 24,
    name: "Berlin",
    country: "Germany",
    coordinates: [52.5200, 13.4050],
    description: "Historical significance and vibrant arts scene."
  },
  {
    id: 25,
    name: "Hanoi",
    country: "Vietnam",
    coordinates: [21.0278, 105.8342],
    description: "Old Quarter, street food, and colonial architecture."
  },
  {
    id: 26,
    name: "Mumbai",
    country: "India",
    coordinates: [19.0760, 72.8777],
    description: "The financial capital of India, Bollywood, and street food."
  },
  {
    id: 27,
    name: "Beijing",
    country: "China",
    coordinates: [39.9042, 116.4074],
    description: "The Great Wall, Forbidden City, and ancient history."
  },
  {
    id: 28,
    name: "Prague",
    country: "Czech Republic",
    coordinates: [50.0755, 14.4378],
    description: "Medieval old town, castles, and gothic architecture."
  },
  {
    id: 29,
    name: "Buenos Aires",
    country: "Argentina",
    coordinates: [-34.6037, -58.3816],
    description: "Tango, European-style architecture, and rich culture."
  },
  {
    id: 30,
    name: "Mexico City",
    country: "Mexico",
    coordinates: [19.4326, -99.1332],
    description: "Historic sites, Aztec ruins, and vibrant culture."
  },
  {
    id: 31,
    name: "Florence",
    country: "Italy",
    coordinates: [43.7696, 11.2558],
    description: "Renaissance art and architecture in the heart of Tuscany."
  },
  {
    id: 32,
    name: "Edinburgh",
    country: "Scotland",
    coordinates: [55.9533, -3.1883],
    description: "Medieval Old Town and the iconic Edinburgh Castle."
  },
  {
    id: 33,
    name: "Reykjavik",
    country: "Iceland",
    coordinates: [64.1466, -21.9426],
    description: "Gateway to geysers, hot springs, and the Northern Lights."
  },
  {
    id: 34,
    name: "Lima",
    country: "Peru",
    coordinates: [-12.0464, -77.0428],
    description: "Colonial architecture, ocean views, and Peruvian cuisine."
  },
  {
    id: 35,
    name: "Marrakech",
    country: "Morocco",
    coordinates: [31.6295, -7.9811],
    description: "Colorful souks, palaces, and the Atlas Mountains."
  },
  {
    id: 36,
    name: "Petra",
    country: "Jordan",
    coordinates: [30.3285, 35.4444],
    description: "Ancient city carved into rose-colored rock cliffs."
  },
  {
    id: 37,
    name: "Havana",
    country: "Cuba",
    coordinates: [23.1136, -82.3666],
    description: "Colonial charm, classic cars, and Afro-Cuban culture."
  },
  {
    id: 38,
    name: "Doha",
    country: "Qatar",
    coordinates: [25.276987, 51.520008],
    description: "Modern skyline, museums, and desert adventures."
  },
  {
    id: 39,
    name: "Kuala Lumpur",
    country: "Malaysia",
    coordinates: [3.1390, 101.6869],
    description: "Petronas Towers, diverse cuisine, and cultural heritage."
  },
  {
    id: 40,
    name: "Auckland",
    country: "New Zealand",
    coordinates: [-36.8485, 174.7633],
    description: "Urban life surrounded by nature and volcanic cones."
  },
  {
    id: 41,
    name: "Oslo",
    country: "Norway",
    coordinates: [59.9139, 10.7522],
    description: "Waterfront city with Viking history and fjord views."
  },
  {
    id: 42,
    name: "Zurich",
    country: "Switzerland",
    coordinates: [47.3769, 8.5417],
    description: "Financial hub with alpine views and historic old town."
  },
  {
    id: 43,
    name: "Brussels",
    country: "Belgium",
    coordinates: [50.8503, 4.3517],
    description: "Grand architecture, waffles, and the European Union."
  },
  {
    id: 44,
    name: "Copenhagen",
    country: "Denmark",
    coordinates: [55.6761, 12.5683],
    description: "Scandinavian design, canals, and the Little Mermaid statue."
  },
  {
    id: 45,
    name: "Manila",
    country: "Philippines",
    coordinates: [14.5995, 120.9842],
    description: "Historic churches, vibrant markets, and Spanish influence."
  },
  {
    id: 46,
    name: "Krakow",
    country: "Poland",
    coordinates: [50.0647, 19.9450],
    description: "Medieval core and Jewish quarter full of history."
  },
  {
    id: 47,
    name: "Santiago",
    country: "Chile",
    coordinates: [-33.4489, -70.6693],
    description: "Mountain backdrop with rich history and modern life."
  },
  {
    id: 48,
    name: "Lagos",
    country: "Nigeria",
    coordinates: [6.5244, 3.3792],
    description: "Nigeria’s bustling metropolis with vibrant arts and nightlife."
  },
  {
    id: 49,
    name: "Budapest",
    country: "Hungary",
    coordinates: [47.4979, 19.0402],
    description: "Thermal baths, grand architecture, and Danube River views."
  },
  {
    id: 50,
    name: "Montreal",
    country: "Canada",
    coordinates: [45.5017, -73.5673],
    description: "French culture, festivals, and historic Old Montreal."
  },
  {
    id: 51,
    name: "Helsinki",
    country: "Finland",
    coordinates: [60.1699, 24.9384],
    description: "Modern architecture, design museums, and icy saunas."
  },
  {
    id: 52,
    name: "Jerusalem",
    country: "Israel",
    coordinates: [31.7683, 35.2137],
    description: "Holy city for multiple religions with deep historical roots."
  },
  {
    id: 53,
    name: "Cusco",
    country: "Peru",
    coordinates: [-13.5320, -71.9675],
    description: "Gateway to Machu Picchu and heart of the Inca Empire."
  },
  {
    id: 54,
    name: "Phuket",
    country: "Thailand",
    coordinates: [7.8804, 98.3923],
    description: "Tropical beaches, nightlife, and island hopping adventures."
  },
  {
    id: 55,
    name: "Tallinn",
    country: "Estonia",
    coordinates: [59.4370, 24.7536],
    description: "Well-preserved medieval old town and digital innovation."
  },
  {
    id: 56,
    name: "Vilnius",
    country: "Lithuania",
    coordinates: [54.6872, 25.2797],
    description: "Baroque architecture and cultural crossroads of Europe."
  },
  {
    id: 57,
    name: "Belgrade",
    country: "Serbia",
    coordinates: [44.7866, 20.4489],
    description: "Dynamic nightlife and historic fortresses."
  },
  {
    id: 58,
    name: "Tbilisi",
    country: "Georgia",
    coordinates: [41.7151, 44.8271],
    description: "Hilltop city with cobbled streets and ancient churches."
  },
  {
    id: 59,
    name: "Sarajevo",
    country: "Bosnia & Herzegovina",
    coordinates: [43.8563, 18.4131],
    description: "Cultural mix of East and West, with Ottoman influences."
  },
  {
    id: 60,
    name: "Luang Prabang",
    country: "Laos",
    coordinates: [19.8897, 102.1357],
    description: "Tranquil Buddhist city with colonial charm and waterfalls."
  }
  
];


function PriceAlertTracker() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {popularCities.map(city => (
          <Marker key={city.id} position={city.coordinates} icon={pollIcon}>
            <Popup>
              <h3>{city.name}, {city.country}</h3>
              <p>{city.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default PriceAlertTracker;
