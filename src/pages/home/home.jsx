
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CountrySelect from '../../components/countrySelector/CountrySelector';
import './home.scss';
import location from '../../../public/location.svg';
import iconTrip from '../../../public/iconTrip.svg';
import map from '../../../public/map.png';
import newYork from '../../../public/newYork.png';
import losAngeles from '../../../public/losAngeles.png';
import new1 from '../../../public/new1.png';
import new2 from '../../../public/new2.png';
import new3 from '../../../public/new3.png';
import { Link } from "react-router-dom";

const Home = () => {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    tripType: 'roundTrip',
    passengers: 1,
    classType: 'economy',
  });

  const handleSearch = () => {
    
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <>
    <h1 className="title">Find your flight</h1>
    <div className="listContainer">
        
      <div className="listWrapper">
        <div className="listSearch">
          
          <div className="lsItem">
            <label>From</label>
            <CountrySelect
              value={fromCountry}
              onChange={(selectedOption) => setFromCountry(selectedOption)}
              placeholder="Select origin country"
            />
          </div>
          <div className="lsItem">
            <label>To</label>
            <CountrySelect
              value={toCountry}
              onChange={(selectedOption) => setToCountry(selectedOption)}
              placeholder="Select destination country"
            />
          </div>
          <div className="lsItem">
            <label>Departure date - Returned date</label>
            <span onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="lsItem">
            <label>Trip Type</label>
            <select onChange={(e) => setOptions({ ...options, tripType: e.target.value })}>
              <option value="roundTrip">Round Trip</option>
              <option value="oneWay">One Way</option>
            </select>
          </div>
          <div className="lsItem">
            <label>Passengers</label>
            <select onChange={(e) => setOptions({ ...options, passengers: parseInt(e.target.value) })}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="lsItem">
            <label>Class Type</label>
            <select onChange={(e) => setOptions({ ...options, classType: e.target.value })}>
              <option value="economy">Economy</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <button className="lsSearchButton" onClick={handleSearch}>
            <i className="fa fa-search"></i> <Link to="/profundizacion-sprint2-modulo2-eflight/flights" >Search</Link>
          </button>
        </div>
        
      </div>
    
      <div className="mapContainer" style={mapStyles}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {fromCountry && (
            <Marker position={fromCountry.position} icon={customIcon}>
              <Popup>{fromCountry.label}</Popup>
            </Marker>
          )}
          {toCountry && (
            <Marker position={toCountry.position} icon={customIcon}>
              <Popup>{toCountry.label}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>


    <section className="trip-main-container">
        <div className="trip-image-wrapper">
          <img src={location}  />
          <div className="trip-destination">
            <span style={{ color: "rgba(23,26,31,1)" }}>Trip from </span>
            <span style={{ color: "rgba(14,166,118,1)" }}>Houston</span>
          </div>
          <button className="trip-explore-link">
            Explore destination
          </button>
        </div>
        <img className="map" src={map} />
        <div className="trip-details-container">
          <div className="trip-column">
            <div className="trip-card">
              <div className="trip-card-content">
                <div className="trip-column">
                  <div className="trip-image-container">
                  <img src={newYork} />
                  </div>
                  <div className="trip-column">
                    <div className="trip-title">New York</div>
                    <div className="trip-date">9 - 10 Feb, 2023</div>
                    <div className="trip-duration">
                    <img src={iconTrip} />
                      <div className="trip-duration-text">7 hr 15 m</div>
                    </div>
                    <div className="trip-price">$294</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="trip-column">
            <div className="trip-card">
              <div className="trip-card-content">
                <div className="trip-column">
                  <div className="trip-image-container">
                  <img src={losAngeles} />
                  </div>
                  <div className="trip-column">
                    <div className="trip-title">Los Angeles</div>
                    <div className="trip-date">9 - 10 Feb, 2023</div>
                    <div className="trip-duration">
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53dccd7d-f2a7-47fe-88f7-4d89c60e0f1c?apiKey=2711e34c531e48058071bf24adc35271&"className="trip-icon" />
                      <div className="trip-duration-text">6 hr 18 m</div>
                    </div>
                  </div>
                  <div className="trip-price">$399</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-main-container">
  <h1 className="news-title">What's New?</h1>
  <div className="news-article-container">
    <article className="news-article">
      <div className="news-image-wrapper">
        <img src={new1} alt="News 1" />
      </div>
      <div className="news-article-content">
        <h2 className="news-article-title">Do Consectetur</h2>
        <p className="news-article-description">
          US flights delayed due to FAA system outage.
        </p>
        <div className="news-article-details">
          <div className="news-article-date">Dec 24, 2022</div>
          <div className="news-article-read-time">5 mins read</div>
        </div>
      </div>
    </article>

    <article className="news-article">
      <div className="news-image-wrapper">
        <img src={new2} alt="News 2" />
      </div>
      <div className="news-article-content">
        <h2 className="news-article-title">Do Consectetur</h2>
        <p className="news-article-description">
          Explore and live your best life.
        </p>
        <div className="news-article-details">
          <div className="news-article-date">Dec 24, 2022</div>
          <div className="news-article-read-time">5 mins read</div>
        </div>
      </div>
    </article>

    <article className="news-article">
      <div className="news-image-wrapper">
        <img src={new3} alt="News 3" />
      </div>
      <div className="news-article-content">
        <h2 className="news-article-title">Do Consectetur</h2>
        <p className="news-article-description">
          Save money on your trip with 5 easy steps.
        </p>
        <div className="news-article-details">
          <div className="news-article-date">Dec 24, 2022</div>
          <div className="news-article-read-time">5 mins read</div>
        </div>
      </div>
    </article>
  </div>

  <div className="news-read-more">
    <a href="#" className="news-read-more-link">
      Read More Articles
    </a>
  </div>
</section>

    </>
  );
};

export default Home;
