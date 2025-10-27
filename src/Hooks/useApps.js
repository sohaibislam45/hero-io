import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [app, setAppsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('../appData.json')
      .then(response => setAppsData(response.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { app, error, loading };
};
export default useApps;
