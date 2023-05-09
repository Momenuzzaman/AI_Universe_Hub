import { useEffect, useState } from "react";
import AiTool from "../AiTool/AiTool";
import Button from "../common/Button/Button";

const AIHub = () => {
  const [tools, setTools] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // load all data
  useEffect(() => {
    const fetchAiData = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await response.json();
      setTools(data?.data?.tools);
    };
    fetchAiData();
  }, []);
  console.log(showAll);
  // show all data function
  const handleShowAll = () => {
    setShowAll(!showAll);
    console.log(showAll);
  };
  return (
    <div className="flex flex-col">
      <Button>Sort By Date</Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto">
        {tools && tools?.map((tool) => <AiTool key={tool?.id} tool={tool} />)}
      </div>

      {!showAll && (
        <button onClick={handleShowAll}>
          <Button>Show All</Button>
        </button>
      )}
    </div>
  );
};

export default AIHub;
