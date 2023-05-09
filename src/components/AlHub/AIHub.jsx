import { useEffect, useState } from "react";
import AiTool from "../AiTool/AiTool";
import Button from "../common/Button/Button";

const AIHub = () => {
  const [tools, setTools] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // load all data
  useEffect(() => {
    const fetchAiData = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await response.json();
      setTools(data?.data?.tools);
      setIsLoading(false);
    };
    fetchAiData();
  }, []);
  // show all data function
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-72">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 "></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <Button>Sort By Date</Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto">
        {tools &&
          tools
            .slice(0, showAll ? 12 : 6)
            ?.map((tool) => <AiTool key={tool?.id} tool={tool} />)}
      </div>

      {!showAll && (
        <button onClick={handleShowAll}>
          <Button>Show AlL</Button>
        </button>
      )}
    </div>
  );
};

export default AIHub;
