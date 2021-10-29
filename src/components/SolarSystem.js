import React, { Component } from 'react';
import PlanetCards from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <PlanetCards />
      </>
    );
  }
}

export default SolarSystem;
