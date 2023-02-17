import { AgGridReact } from "ag-grid-react";
import React, { useState, FC } from "react";

const FirstSample: FC = () => {
  // Daten
  const [rowData] = useState([
    {
      Titel: "Monty Python's Flying Circus",
      Jahr: 1969,
      Bewertung: 8.8,
      Staffeln: 4,
      Genre: "comedy",
      Produktion: "GB",
    },
    {
      Titel: "Knight Rider",
      Jahr: 1982,
      Bewertung: 6.9,
      Staffeln: 4,
      Genre: "action",
      Produktion: "US",
    },
  ]);

  // Spaltendefinitionen
  const [columnDefs] = useState([
    { field: "Titel" },
    { field: "Jahr" },
    { field: "Bewertung" },
    { field: "Staffeln" },
    { field: "Genre" },
    { field: "Produktion" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default FirstSample;
