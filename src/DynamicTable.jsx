import React from 'react';
import './DynamicTable.css';

const DynamicTable = ({ data }) => {
  const renderTableData = (data) => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      return (
        <table className="table-container">
          <tbody>
            {Object.keys(data).map((key) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{renderTableData(data[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (Array.isArray(data)) {
      return (
        <table className="table-container">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{renderTableData(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return data;
    }
  };

  return <div>{renderTableData(data)}</div>;
};

export default DynamicTable;
