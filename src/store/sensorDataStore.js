import { create } from "zustand";
import axios from "axios";

const useSensorDataStore = create((set) => ({
  sensorData: [],
  isLoading: false,
  error: null,

  fetchSensorData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(
        "http://192.168.252.189:8000/api/location-status"
      );
      set({ sensorData: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useSensorDataStore;
