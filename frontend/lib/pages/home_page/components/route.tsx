import { Box, Button, HStack, Input, InputGroup, InputLeftElement, List, ListItem, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React from "react";
import { useState, useEffect, useRef } from 'react';

interface Location {
    name: string;
    address: string;
  }
  
const Route = () => {
    const [currentLocation, setCurrentLocation] = useState('');
  const [currentLocationSuggestions, setCurrentLocationSuggestions] = useState<Location[]>([]);
  const [destination, setDestination] = useState('');
  const [destinationSuggestions, setDestinationSuggestions] = useState<Location[]>([]);
  const currentLocationRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  const handleCurrentLocationChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrentLocation(value);

    // Fetch the locations based on the search text
    const response = await fetch(`https://nominatim.openstreetmap.org/search/${value}?country=India&format=json`);
    const locations = await response.json();

    // Map the response to the Location interface
    const mappedLocations = locations.map((location: any) => ({
      name: location.display_name.split(',')[0],
      address: location.display_name,
    }));

    setCurrentLocationSuggestions(mappedLocations);
  };

  const handleDestinationChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDestination(value);

    // Fetch the locations based on the search text
    const response = await fetch(`https://nominatim.openstreetmap.org/search/${value}?country=India&format=json`);
    const locations = await response.json();

    // Map the response to the Location interface
    const mappedLocations = locations.map((location: any) => ({
      name: location.display_name.split(',')[0],
      address: location.display_name,
    }));

    setDestinationSuggestions(mappedLocations);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (currentLocationRef.current && !currentLocationRef.current.contains(event.target as Node)) {
        setCurrentLocationSuggestions([]);
      }
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setDestinationSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Box m={12} p={12}>
        <HStack spacing="20">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Enter your current location" value={currentLocation} onChange={handleCurrentLocationChange} ref={currentLocationRef} />
      </InputGroup>
      {currentLocationSuggestions.length > 0 && (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="absolute" left="0" right="0">
          <List>
            {currentLocationSuggestions.map((location, index) => (
              <ListItem
                key={index}
                cursor="pointer"
                px={4}
                py={2}
                _hover={{ bg: 'gray.100' }}
                onClick={() => {
                  setCurrentLocation(location.name);
                  setCurrentLocationSuggestions([]);
                }}
              >
                <Text fontSize="sm" fontWeight="bold">
                  {location.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {location.address}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Enter your current location" value={destination} onChange={handleDestinationChange} ref={destinationRef} />
      </InputGroup>
      {destinationSuggestions.length > 0 && (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="absolute" left="0" right="0">
          <List>
            {destinationSuggestions.map((location, index) => (
              <ListItem
                key={index}
                cursor="pointer"
                px={4}
                py={2}
                _hover={{ bg: 'gray.100' }}
                onClick={() => {
                    setDestination(location.address);
                    setDestinationSuggestions([]);
                }}
              >
                <Text fontSize="sm" fontWeight="bold">
                  {location.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {location.address}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <Button>
        Search Car
      </Button>
      </HStack>
       </Box>
    )
}
                
export default Route;