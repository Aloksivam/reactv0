import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsTable = () => {
  const [pointsTable, setPointsTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/FreSauce/json-ipl/data'); // Replace with actual API URL
        setPointsTable(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPointsTable();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Matches Played</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Tied</th>
          <th>Points</th>
          <th>Net Run Rate</th>
        </tr>
      </thead>
      <tbody>
        {pointsTable.map((team, index) => (
          <tr key={index}>
            <td>{team.No}</td>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.Tied}</td>
            <td>{team.Points}</td>
            <td>{team.NRR}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PointsTable;
