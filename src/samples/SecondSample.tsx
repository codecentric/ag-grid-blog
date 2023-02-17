import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState, FC } from "react";
import { TextMatcherParams } from "ag-grid-community/dist/lib/filter/provided/text/textFilter";
import { CellClassParams, ICellRendererParams } from "ag-grid-community";

const SecondSample: FC = () => {
  // Daten
  const [rowData] = useState([
    {
      Titel: "Monty Python's Flying Circus",
      Jahr: 1969,
      Bewertung: 8.8,
      Staffeln: 4,
      Genre: "Comedy",
      Produktion: "GB",
    },
    {
      Titel: "Star Trek: Deep Space Nine",
      Jahr: 1993,
      Bewertung: 6.9,
      Staffeln: 7,
      Genre: "Science-Fiction",
      Produktion: "US",
    },
  ]);

  // Spaltendefinitionen
  const [columnDefs] = useState([
    {
      field: "Titel",
      filter: "agTextColumnFilter",
      filterParams: {
        textMatcher: ({ value, filterText }: TextMatcherParams) => {
          const title = ((value as string) || "")
            .split(":")
            .join("")
            .toLowerCase();
          const filter = (filterText || "")
            .split(":")
            .join("")
            .toLowerCase();

          return title.includes(filter);
        },
      },
    },
    { field: "Jahr", filter: "agNumberColumnFilter" },
    {
      field: "Bewertung",
      cellStyle: (params: CellClassParams) => {
        if (params.value < 7) {
          return { color: "red" };
        }
        if (params.value < 8.5) {
          return { color: "orange" };
        }

        return { color: "green" };
      },
    },
    { field: "Staffeln", filter: "agNumberColumnFilter" },
    { field: "Genre" },
    {
      field: "Produktion",
      cellRenderer: (params: ICellRendererParams): any => {
        return (
          <img
            width="15"
            height="10"
            src={`https://flags.fmcdn.net/data/flags/mini/${params.value.toLowerCase()}.png`}
          />
        );
      },
    },
  ]);

  // globale Spaltendefinitionen
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default SecondSample;
