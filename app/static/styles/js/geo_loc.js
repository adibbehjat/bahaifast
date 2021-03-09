function onGeolocateSuccess(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    console.log('Found coordinates: ', latitude, longitude);
  }
  
  function onGeolocateError(error) {
    console.warn(error.code, error.message);
   
    if (error.code === 1) {
      // they said no
    } else if (error.code === 2) {
      // position unavailable
    } else if (error.code === 3) {
      // timeout
    }
  }