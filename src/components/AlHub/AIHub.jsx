import { useEffect, useState } from "react";

const AIHub = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchAiData = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await response.json();
      setTools(data.data.tools);
    };
    fetchAiData();
  }, []);
  console.log(tools);
  return <div>AIHub</div>;
};

export default AIHub;
