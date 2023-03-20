import axios from "axios";
import { useEffect, useState } from "react";


export const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:1337/api/${URL}`, {
          headers: { Authorization: `Bearer 5f3f44d009934699d30d17b924ae77894f273e306c4448a2752c1230fafbcaa6820d38c49ada5bbcd48d2909950c0fa07a7b5c65e17eab248acac2c5236a5752f7f724fa9dc64e7985da8cf1f03eac6e3a37edf9d2575cdec287745e4eb773ec2e8067c26e60ddf414efa51f7ec7bd84b75252bf39ea4b5c1da4f7f54300364b` },
        });
        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        setErrors(error);
        setIsLoading(false);
      }
    };
    fetchData();
    console.log(data);
  }, [URL]);

  return { data, errors, isLoading };
};