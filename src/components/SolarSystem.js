import React, { Component } from 'react';
import PlanetCards from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((planeta) => (
          <PlanetCards
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />
        ))}
      </>
    );
  }
}

export default SolarSystem;
