import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://192.168.3.100:1337/api/${URL}`, {
          headers: { Authorization: `Bearer 5f3f44d009934699d30d17b924ae77894f273e306c4448a2752c1230fafbcaa6820d38c49ada5bbcd48d2909950c0fa07a7b5c65e17eab248acac2c5236a5752f7f724fa9dc64e7985da8cf1f03eac6e3a37edf9d2575cdec287745e4eb773ec2e8067c26e60ddf414efa51f7ec7bd84b75252bf39ea4b5c1da4f7f54300364b` },
        });
        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        setError(error);
        navigate('/');
        setIsLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  return { data, error, isLoading };
};