import React from "react";

const Table = ({ data }) => {
  const { thead, tbody, centered } = data;
  return (
    <table className={`tableDual ${centered ? "centered" : ""}`}>
      <tbody>
        <tr className="tableHeading">
          {thead.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
        {tbody.map((item, index) => {
          const { tData } = item;
          return (
            <>
              <tr key={index}>
                {tData.map((td, index) => {
                  return <td key={index}>{td}</td>;
                })}
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
