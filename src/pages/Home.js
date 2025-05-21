import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';

const Home = () => {
  const destinations = [
    {
      imageUrl: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Paris, France",
      description: "The city of love and lights with iconic landmarks like the Eiffel Tower."
    },
    {
      imageUrl: "https://media.istockphoto.com/id/526845820/photo/tokyo-tower-night-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=yiHiuM0Yq6-1igUtyMzm1LRGohExpiwH5xFeodohfqA=",
      title: "Tokyo, Japan",
      description: "A vibrant mix of traditional culture and cutting-edge technology."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "New York, USA",
      description: "The city that never sleeps, with endless entertainment options."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Rome, Italy",
      description: "Ancient history meets modern Italian lifestyle in this eternal city."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Bali, Indonesia",
      description: "Tropical paradise with lush jungles, beaches, and rich culture."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Cape Town, South Africa",
      description: "Stunning natural beauty with Table Mountain and beautiful coastlines."
    }
  ];

  return (
    <>
      <Hero />
      <Destinations destinations={destinations} />
    </>
  );
};

export default Home;