window.onload = () => {
    const ironhackMEX = {
        lat: 19.3977864,
        lng: -99.1714789
    };
    
    const markers = []
    
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: ironhackMEX
    });
  
    const center = {
      lat: undefined,
      lng: undefined
    }; 
  };

  
  fetch('/api/meetpoints')
  .then(r => {
      if(!r.ok) return Promise.reject(r.statusText);
      return r.json();
  })
  .then(res => {
      return console.log(res);
  })