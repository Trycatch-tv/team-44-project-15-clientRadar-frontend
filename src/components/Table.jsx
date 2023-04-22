import moment from "moment";
import React from "react";

const Table = ({ headers, rows, options, onOption }) => {
  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-hover text-center table-bordered align-middle">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={`header_${header.id}`}>{header.label}</th>
              ))}
              {options ? <th>opciones</th> : null}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {headers.map((header) => (
                  <td key={`header_${header.id}_row_${row.id}`}>
                    {header.isDate
                      ? moment(row[header.id]).fromNow()
                      : row[header.id]}
                  </td>
                ))}
                {options ? (
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => onOption(row)}
                    >
                      Seleccionar
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
