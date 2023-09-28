import React, { useState } from 'react';
import moment from 'moment';

const Calculator = () => {
  const [birthdate1, setBirthdate1] = useState('');
  const [birthdate2, setBirthdate2] = useState('');
  const [age, setAge] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');

  const calculateAge = () => {
    if (birthdate1 && birthdate2) {
      const startDate = moment(birthdate1);
      const endDate = moment(birthdate2);

      const years = endDate.diff(startDate, 'years');
      startDate.add(years, 'years');

      const months = endDate.diff(startDate, 'months');
      startDate.add(months, 'months');

      const weeks = endDate.diff(startDate, 'weeks');
      startDate.add(weeks, 'weeks');

      const days = endDate.diff(startDate, 'days');
      startDate.add(days, 'days');

      const hours = endDate.diff(startDate, 'hours');
      startDate.add(hours, 'hours');

      const minutes = endDate.diff(startDate, 'minutes');

      setAge({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
      });
      setValidationMessage('');
    } else {
      setAge(null);
      setValidationMessage('Please enter both start and end dates.');
    }
  };

  const renderAge = () => {
    if (age) {
      return (
        <>
          <h2>Age:</h2>
          <p>
            {age.years <= 0 ? null : age.years}{" "}
            {age.years <= 0 ? null : age.years === 1 ? "year" : "years"}
            {" "}{age.months <= 0? null : age.months}{" "}
            {age.months <= 0 ? null : age.months === 1 ? "month" : "months"}
            {" "}{age.weeks <= 0 ? null : age.weeks}{" "}
            {age.weeks <= 0 ? null : age.weeks === 1 ? "week" : "weeks"}
            {age.days <= 0 ? null : age.days} {age.days <= 0 ? null : age.days === 1 ? "day" : "days"}
            {" "}{age.hours <= 0 ? null : age.hours}{" "}
            {age.hours <= 0 ? null : age.hours === 1 ? "hour" : "hours"}
            {" "}{age.minutes <= 0? null : age.minutes}{" "}
            {age.minutes <= 0 ? null : age.minutes === 1 ? "minute" : "minutes"}
          </p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className='agecalculator'>
      <h2>Age Calculator</h2>
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={birthdate1}
          onChange={(e) => setBirthdate1(e.target.value)}
        />
      </div>
      <div>
        <label>End Date: </label>
        <input
          type="date"
          value={birthdate2}
          onChange={(e) => setBirthdate2(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
      {renderAge()}
    </div>
  );
};

export default Calculator;