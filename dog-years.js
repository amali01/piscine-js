// Function to calculate a dog's age in dog years on a given planet
function dogYears(name , DogAge){

    // Orbital periods relative to Earth for various planets
const planet = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}
  // Calculate the dog's age on the given planet in dog years
  const dogAgeOnPlanet = DogAge / planet[name] / 31557600 * 7;

  // Return the calculated age
  const result = Number(dogAgeOnPlanet.toFixed(2));

  return result;
}
