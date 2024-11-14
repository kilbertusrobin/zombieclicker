import ValiseVisualContainer from "../components/ValiseVisualContainer";
const LayoutValise = () => {

  return (
    <div className="w-full h-full flex">
        <div className="w-1/2 h-full">
            <ValiseVisualContainer />
        </div>        
        <div className="w-1/2 h-full bg-red-500">
        </div>
    </div>
  );
};

export default LayoutValise;
