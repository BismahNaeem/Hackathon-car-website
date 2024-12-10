import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  const cardData = [
    {
      title: 'Koenigsegg',
      subtitle: 'sport',
      heartImage: '/images/heart.png',
      carImage: '/images/car.png',
      gasImage: '/images/gas-station.png',
      gasText: '70l',
      manualImage: '/images/car (1).png',
      manualText: 'manual',
      peopleImage: '/images/profile.png',
      peopleText: '6 people',
      price: '$72.5/',
      originalPrice: '$80.00',
    },
    {
      title: 'Audi',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car2.png',
      gasImage: '/images/gas-station.png',
      gasText: '80l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$80.0/',
      originalPrice: '$100.00',
    },
    {
      title: 'Ferrari',
      subtitle: 'sports',
      heartImage: '/images/heart.png',
      carImage: '/images/car3.png',
      gasImage: '/images/gas-station.png',
      gasText: '60l',
      manualImage: '/images/car (1).png',
      manualText: 'manual',
      peopleImage: '/images/profile.png',
      peopleText: '2 people',
      price: '$85.5/',
      originalPrice: '$90.00',
    },
    {
      title: 'Lamborghini',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car4.png',
      gasImage: '/images/gas-station.png',
      gasText: '75l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$100.0/',
      originalPrice: '$110.00',
    },
    {
      title: 'Porsche',
      subtitle: 'sports',
      heartImage: '/images/heart.png',
      carImage: '/images/car5.png',
      gasImage: '/images/gas-station.png',
      gasText: '65l',
      manualImage: '/images/car (1).png',
      manualText: 'manual',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$95.0/',
      originalPrice: '$105.00',
    },
    {
      title: 'Bugatti',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car6.png',
      gasImage: '/images/gas-station.png',
      gasText: '80l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '2 people',
      price: '$120.0/',
      originalPrice: '$130.00',
    },
    {
      title: 'McLaren',
      subtitle: 'sports',
      heartImage: '/images/heart.png',
      carImage: '/images/car7.png',
      gasImage: '/images/gas-station.png',
      gasText: '50l',
      manualImage: '/images/car (1).png',
      manualText: 'manual',
      peopleImage: '/images/profile.png',
      peopleText: '2 people',
      price: '$110.0/',
      originalPrice: '$120.00',
    },
    {
      title: 'BMW',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car8.png',
      gasImage: '/images/gas-station.png',
      gasText: '70l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$85.0/',
      originalPrice: '$95.00',
    },
    {
      title: 'Aston Martin',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car9.png',
      gasImage: '/images/gas-station.png',
      gasText: '60l',
      manualImage: '/images/car (1).png',
      manualText: 'manual',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$105.0/',
      originalPrice: '$115.00',
    },
    {
      title: 'Bentley',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car10.png',
      gasImage: '/images/gas-station.png',
      gasText: '80l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '5 people',
      price: '$125.0/',
      originalPrice: '$135.00',
    },
    {
      title: 'Jaguar',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car11.png',
      gasImage: '/images/gas-station.png',
      gasText: '70l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '4 people',
      price: '$95.0/',
      originalPrice: '$105.00',
    },
    {
      title: 'Rolls Royce',
      subtitle: 'luxury',
      heartImage: '/images/heart.png',
      carImage: '/images/car7.png',
      gasImage: '/images/gas-station.png',
      gasText: '80l',
      manualImage: '/images/car (1).png',
      manualText: 'automatic',
      peopleImage: '/images/profile.png',
      peopleText: '5 people',
      price: '$150.0/',
      originalPrice: '$160.00',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#F6F7F9] mb-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white h-[320px] w-[250px] mt-6 mx-auto rounded-md shadow-md">
          <div className="flex justify-between">
            <ul>
              <li className="ml-2 mt-2 text-1 font-bold xl">{card.title}</li>
              <li className="ml-2 mr-2 text-sm text-[#90A3BF]">{card.subtitle}</li>
            </ul>
            <div>
              <Image
                src={card.heartImage}
                alt="heart"
                height={24}
                width={24}
                className="mr-2 mt-4"
              />
            </div>
          </div>

          <Image
            src={card.carImage}
            alt="car"
            height={180}
            width={190}
            className="mx-auto py-6 mt-4"
          />

          <div className="flex justify-between mx-2">
            <div className="flex">
              <Image
                src={card.gasImage}
                alt="gas station"
                height={20}
                width={20}
                className="mx-auto py-6"
              />
              <p className="mt-6 ml-1 text-sm text-[#90A3BF]">{card.gasText}</p>
            </div>
            <div className="flex">
              <Image
                src={card.manualImage}
                alt="manual"
                height={24}
                width={24}
                className="mx-auto py-6"
              />
              <p className="mt-6 ml-1 text-sm text-[#90A3BF]">{card.manualText}</p>
            </div>
            <div className="flex">
              <Image
                src={card.peopleImage}
                alt="people"
                height={24}
                width={24}
                className="mx-auto py-6"
              />
              <p className="mt-6 ml-1 text-sm text-[#90A3BF]">{card.peopleText}</p>
            </div>
          </div>

          <div className="flex flex-row space-x-8">
            <div>
              <div className="flex">
                <h1 className="font-bold text-2xl ml-2">{card.price}</h1>
                <p className="mt-2">day</p>
              </div>
              <p className="text-sm text-[#90A3BF] ml-2 line-through">{card.originalPrice}</p>
            </div>
            <button className="bg-[#3563E9] text-[#FFFFFF] rounded-sm h-10 w-[100px] mr-2">Rent Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;