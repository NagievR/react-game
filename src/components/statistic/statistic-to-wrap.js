import React from 'react';
import useStore from '../../logic/store';

const StatisticToWrap = () => {

  const { history } = useStore();

  const generateRows = () => (
    history.map((el, idx) => (
      <tr key={idx}>
        <td>{el[0]}</td>
        <td>{el[1]}</td>
        <td>{`"${el[2]}"`}</td>
        <td>{el[3]}</td>
      </tr>
    ))
  );

  return (
    <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Points</th>
        <th>Operator</th>
        <th>Length</th>
      </tr>
    </thead>
    <tbody>
      {generateRows()}
    </tbody>
   </table>
  );
};

export default StatisticToWrap;