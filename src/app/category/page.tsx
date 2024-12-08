"use client";

import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Heart icons
import { GiCarDoor } from 'react-icons/gi'; // Fuel icon placeholder
import { BiCog } from 'react-icons/bi'; // Transmission icon
import { FaUsers } from 'react-icons/fa'; // Seats icon
import React, { useState } from "react";
import Image from "next/image"; // Importing Image from Next.js
import PickDropSection from "@/components/PickDropSection";

const Category = () => {
  // Define the selected values
  const selectedTypes = ["Sport", "SUV"]; 
  const selectedCapacities = ["2 Person", "8 or More"]; 
  const price = 100; 

  const types = [
    { name: "Sport", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
  ];

  const capacities = [
    { name: "2 Person", count: 10 },
    { name: "4 Person", count: 14 },
    { name: "6 Person", count: 12 },
    { name: "8 or More", count: 16 },
  ];

  const cars = [
    {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        price: 99.00,
        capacity: "90L",
        transmission: "Manual",
        seats: "2 People",
        img: "/car1.png",
        favorite: true,
      },
      {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "2 People",
        img: "/car2.png",
        favorite: false,
        originalPrice: 100,
      },
      {
        id: 3,
        name: "Rolls - Royce",
        type: "Sedan",
        price: 96,
        capacity: "70L",
        transmission: "Manual",
        seats: "4 People",
        img: "/car3.png",
        favorite: false,
      },
      {
        id: 4,
        name: "All New Rush",
        type: "SUV",
        price: 72,
        capacity: "70L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car5.png",
        favorite: false,
      },
      {
        id: 5,
        name: "CR-V",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car6.png",
        favorite: true,
      },
      {
        id: 6,
        name: "All New Terios",
        type: "SUV",
        price: 74,
        capacity: "90L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car7.png",
        favorite: false,
      },
      {
        id: 7,
        name: "CR-V",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car8.png",
        favorite: false,
      },
      {
        id: 8,
        name: "MG ZX Exclusive",
        type: "Hatchback",
        price: 76,
        capacity: "70L",
        transmission: "Manual",
        seats: "4 People",
        img: "/car9.png",
        favorite: false,
      },
      {
        id: 9,
        name: "New MG ZS",
        type: "SUV",
        price: 80,
        capacity: "80L",
        transmission: "Manual",
        seats: "6 People",
        img: "/car10.png",
        favorite: true,
      },
    
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden lg:block w-[360px] h-[1600px] p-6 bg-white shadow-lg">
        {/* Type Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Type</h2>
          <ul className="space-y-3">
            {types.map((type) => (
              <li
                key={type.name}
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer ${
                  selectedTypes.includes(type.name)
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center text-xl">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.name)} // Pre-ticked checkboxes for selected types
                    readOnly
                    className="mr-3"
                  />
                  {type.name}
                </span>
                <span className="text-gray-400">{`(${type.count})`}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capacity Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Capacity</h2>
          <ul className="space-y-3">
            {capacities.map((capacity) => (
              <li
                key={capacity.name}
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer ${
                  selectedCapacities.includes(capacity.name)
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center text-xl">
                  <input
                    type="checkbox"
                    checked={selectedCapacities.includes(capacity.name)} // Pre-ticked checkboxes for selected capacities
                    readOnly
                    className="mr-3"
                  />
                  {capacity.name}
                </span>
                <span className="text-gray-400">{`(${capacity.count})`}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Price</h2>
          <div className="relative pt-2">
            <input
              type="range"
              min="0"
              max="100"
              value={price}
              readOnly // Disabled the ability to move the slider
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute top-0 left-0 h-2 rounded-lg bg-blue-500 pointer-events-none"
              style={{ width: `${price}%` }} // Adjusting the width of the blue progress bar
            ></div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Min: $0</span>
              <span>Max: ${price}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <PickDropSection />
        <div className="mt-6 overflow-x-auto sm:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white shadow-md rounded-lg p-6 relative w-full sm:w-[350px] md:w-[360px] lg:w-[360px] h-auto"
              >
                {/* Name and Heart Icon - Above Image */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <button>
                    {car.favorite ? (
                      <FaHeart className="w-6 h-6 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Image using Next.js Image component with shadow */}
                <div className="mt-24 mb-4 flex justify-center relative">
                  <Image
                    src={car.img}
                    alt={car.name}
                    width={232} // Set the width of the image to match card width
                    height={128} // Adjust the height of the image for better center alignment
                    className="w-auto h-auto object-contain"
                  />
                  {/* Add shadow under the image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white opacity-25 shadow-lg h-8"></div>
                </div>

                {/* Car Details */}
                <div className="flex items-center text-gray-500 text-sm mt-4 sm:mt-20 space-x-4">
                  <div className="flex items-center space-x-1">
                    <GiCarDoor className="w-4 h-4 text-gray-500" />
                    <p>{car.capacity}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BiCog className="w-4 h-4 text-gray-500" />
                    <p>{car.transmission}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUsers className="w-4 h-4 text-gray-500" />
                    <p>{car.seats}</p>
                  </div>
                </div>

                {/* Price and Rent Button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold">${car.price} / day</span>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
