const Icon: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-4 w-min p-6 rounded-full text-center shadow-lg text-6xl">
        {children}
      </div>
    </div>
  );
};

export default Icon;
