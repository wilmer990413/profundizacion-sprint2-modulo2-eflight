import React from 'react';
import Select from 'react-select';

const CountrySelect = ({ value, onChange, placeholder }) => {
  const countries = [
    { label: 'United States', value: 'United States', position: [37.7749, -122.4194] },
    { label: 'Canada', value: 'Canada', position: [45.4215, -75.6993] },
    { label: 'United Kingdom', value: 'United Kingdom', position: [51.509865, -0.118092] },
    { label: 'Germany', value: 'Germany', position: [51.1657, 10.4515] },
    { label: 'France', value: 'France', position: [46.6031, 1.2698] },

  ];

  return (
    <Select
      options={countries}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CountrySelect;