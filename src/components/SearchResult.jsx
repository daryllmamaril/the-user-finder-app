import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const SearchResult = ({ result }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <div className="search-result" onClick={handleClick}>
        {result.name}
      </div>
      {showAlert && (
        <div className="alert" role="alert">
          You found {result.name}!
        </div>
      )}
    </>
  );
};