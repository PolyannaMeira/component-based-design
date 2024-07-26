
import './table.css';

const Table = ({ headers, data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => ( //Usa map para iterar sobre os headers e cria um elemento th para cada cabeçalho, com uma key única baseada no índice.
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => ( 
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// tbody (Usa map para iterar sobre cada linha em data. Para cada linha, cria uma tr com uma key única. 
//  Dentro de cada tr, usa outro map para iterar sobre cada célula e cria um td para cada célula, com uma key única baseada no índice da célula.)