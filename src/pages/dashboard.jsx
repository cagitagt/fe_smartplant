import { useEffect } from "react";
import useSensorDataStore from "../store/sensorDataStore";

const Dashboard = () => {
  const { sensorData, fetchSensorData, isLoading, error } =
    useSensorDataStore();

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSensorData();
    }, 60000);

    fetchSensorData();

    return () => clearInterval(interval);
  }, [fetchSensorData]);

  const wateringDates = ["12", "13", "14", "15", "16", "17", "18"];

  return (
    <div className="flex justify-center items-center w-full h-screen font-poppins bg-greenMain">
      <div className="w-[950px] h-[500px] flex flex-wrap justify-between">
        <div className="flex flex-col items-center justify-center bg-white shadow-2xl p-7 rounded-2xl w-96">
          <div className="mb-4">
            <h1 className="mb-1 text-3xl font-bold">White Orchid</h1>
            <p className="h-16 overflow-hidden text-sm text-justify w-80">
              This white orchid plant was specially prepared as a birthday gift
              for my beloved daughter at 1st june
            </p>
          </div>
          <div className="relative w-full h-80">
            <img
              src="/imgplant/orchid.png"
              alt=""
              className="absolute object-cover w-full h-80"
            />
            <div className="absolute bottom-0 right-0 flex items-center justify-between gap-2 px-4 py-1 bg-green-100 rounded-full">
              <img src="/svg/condition.png" alt="" className="w-4 h-4" />
              <p className=" text-sm font-overlock font-semibold">
                Conditions{" "}
                <span className="font-bold text-green-500">Good</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[550px] flex flex-col justify-between">
          <div className="flex items-center justify-between w-full h-20 px-5 bg-white shadow-2xl rounded-2xl">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex gap-2">
              <p className="px-2 text-white rounded-full bg-greenMain">
                Garden
              </p>
              <p className="px-2 text-white rounded-full bg-greenMain">
                23 Weeks
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full bg-white shadow-2xl h-60 rounded-2xl">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.temperature}°C
                    </h1>
                    <p className=" text-greenMain font-overlock ">
                      Temperature
                    </p>
                  </div>
                </div>
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.humidity}%
                    </h1>
                    <p className=" text-greenMain font-overlock ">Humidity</p>
                  </div>
                </div>
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.water_level}%
                    </h1>
                    <p className=" text-greenMain font-overlock ">
                      Water Level
                    </p>
                  </div>
                </div>
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.soil_moisture}%
                    </h1>
                    <p className=" text-greenMain font-overlock ">
                      Soil Moisture
                    </p>
                  </div>
                </div>
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.light_intensity}%
                    </h1>
                    <p className=" text-greenMain font-overlock ">
                      Light Intensity
                    </p>
                  </div>
                </div>
                <div className="flex items-center h-20 px-4 py-2 w-44 gap-2">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      {sensorData?.ph_level}
                    </h1>
                    <p className=" text-greenMain font-overlock ">pH Level</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full p-4 bg-white shadow-2xl h-36 rounded-2xl">
            <div className="flex items-center justify-between mb-2 h-14">
              <p className="px-5 py-1 text-center text-white bg-red-500 rounded-full">
                Please Fill the water tank!
              </p>
              <div className="flex flex-col justify-center">
                <h1 className="text-lg font-semibold">Watering Schedule</h1>
                <span className="px-4 text-sm text-center text-white rounded-full bg-slate-700">
                  15/05/2025
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              {wateringDates.map((date, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-16 h-12 text-xl font-bold text-white rounded-xl ${
                    parseInt(date) <= 15 ? "bg-greenMain" : "bg-slate-200"
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
