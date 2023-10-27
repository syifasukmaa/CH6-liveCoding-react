import { calculateInvestmentResults, formatter } from '../util/investment';
import './Result.css';

function Result({ resultInput }) {
  console.log('Result...');
  console.log(resultInput);
  const resultData = calculateInvestmentResults(resultInput);
  console.log(resultData);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Tahun</th>
          <th>Nilai Investasi</th>
          <th>Bunga (Tahunan)</th>
          <th>Total Bunga</th>
          <th>Investasi Kapital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
