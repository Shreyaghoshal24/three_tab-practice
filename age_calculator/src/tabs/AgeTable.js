import React, { useEffect, useState } from "react";
import axios from "axios";

const AgeTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const serverURL = process.env.URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 style={{textAlign:"center", fontSize:"60px"}}>Dummy Data</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>UserName</th>
                <th>City</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                  <td>{item.username}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AgeTable;
