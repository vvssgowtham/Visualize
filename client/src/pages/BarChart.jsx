import React, { useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  const options = ["Bangalore", "Vizag", "Chennai", "Calicut", "Pune"];
  const [avgtemp_c, setAvgtemp_c] = useState([]);
  const [loading, setLoading] = useState(false);

  const onOptionChangeHandler = async (event) => {
    const selectedOption = event.target.value;
    setData(selectedOption);
    setLoading(true); // Set loading to true when making API call
    // Make an API call for the selected option
    try {
      const response = await axios.post(
        `https://visualize-gowtham.onrender.com/api/${selectedOption}`
      );
      const responseData = response.data;
      const avgTemps = [];
      for (let i = 0; i < 3; i++) {
        avgTemps.push(responseData.forecast.forecastday[i].day.avgtemp_c);
      }
      setAvgtemp_c(avgTemps);
    } catch (error) {
      // Handle any errors
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "black", padding: "2rem" }}
    >
      <div style={{ display: "flex-row", justifyContent: "space-around" }}>
        <h1
          className="text-white"
          style={{ fontSize: "30px", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          BarChart
        </h1>
        <select
          onChange={onOptionChangeHandler}
          style={{
            fontSize: "18px",
            padding: "0.15rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          <option>Select Place To Visualize</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <div style={{ padding: "4rem", maxWidth: "100%", overflowX: "auto", position: "relative" }}>
        {loading && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}>
            <div>Loading...</div>
          </div>
        )}
        <Bar
          data={{
            labels: ["Today", "Tomorrow", "NextDay"], // Adjusted labels for 3 days
            datasets: [
              {
                label: "Average Temperature (°C)",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "white",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
                hoverBorderColor: "rgba(255, 99, 132, 1)",
                data: avgtemp_c, // Use the fetched average temperatures
              },
            ],
          }}
          options={{
            plugins: {
              datalabels: {
                anchor: "end", 
                align: "end",
              },
            },
          }}
          plugins={[ChartDataLabels]}
        />
      </div>
    </div>
  );
};

export default BarChart;
