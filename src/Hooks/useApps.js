// useApps.js
import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [app, setApp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/appData.json')
      .then(res => setApp(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { app, loading, error };
};

export default useApps;
