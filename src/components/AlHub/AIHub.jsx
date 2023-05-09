import { useEffect, useState } from "react";
import AiTool from "../AiTool/AiTool";
import Button from "../common/Button/Button";
import Modal from "../Modal/Modal";

const AIHub = () => {
  const [tools, setTools] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tool, setTool] = useState({});
  const [uniqueId, setUniqueId] = useState(null);

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

  // single data load
  useEffect(() => {
    const fetchSingleTool = async () => {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`
      );
      const data = await response.json();
      setTool(data.data);
    };
    fetchSingleTool();
  }, [uniqueId]);
  // show all data function
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  // modalHandler
  const handleOpenModal = (id) => {
    setUniqueId(id);
  };

  // sorted data
  const handleSort = () => {
    const sortedData = tools.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setTools([...tools, sortedData]);
  };

  // loader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-72">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 "></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleSort}>
        <Button>Sort By Date</Button>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto">
        {tools &&
          tools
            .slice(0, showAll ? 12 : 6)
            ?.map((tool) => (
              <AiTool
                key={tool?.id}
                tool={tool}
                handleOpenModal={handleOpenModal}
              />
            ))}
      </div>

      {!showAll && (
        <button onClick={handleShowAll}>
          <Button>Show AlL</Button>
        </button>
      )}
      {/* modal */}
      <Modal tool={tool} />
    </div>
  );
};

export default AIHub;
