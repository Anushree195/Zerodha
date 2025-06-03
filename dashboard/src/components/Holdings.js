import React, { useState, useEffect } from "react";
import axios from 'axios';
import VerticalGraph from './VerticalGraph';

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Fetch from API
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => {
        console.log("API Response:", res.data);
        
        // Process the holdings and add missing LTP values from the left side of your UI
        // This maps the LTP values from the sidebar to the main holdings table
        const processedHoldings = res.data.map(stock => {
          // Find the LTP from the sidebar data that matches this stock
          // You need to adjust this logic based on how your sidebar data is structured
          const sidebarLTP = getSidebarLTP(stock.name);
          
          // Use the sidebar LTP or fallback to the API price if available, or 0
          const ltp = sidebarLTP || stock.price || 0;
          const qty = parseFloat(stock.qty) || 0;
          const avg = parseFloat(stock.avg) || 0;
          
          // Calculate values using the correct LTP
          const curValue = ltp * qty;
          const costBasis = avg * qty;
          const pnl = curValue - costBasis;
          
          return {
            ...stock,
            qty,
            avg,
            price: ltp, // Use the corrected LTP value
            curValue,
            costBasis,
            pnl
          };
        });
        
        setAllHoldings(processedHoldings);
      })
      .catch(error => {
        console.error("Error fetching holdings:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  
  // This function should extract LTP values from your sidebar data
  // You'll need to implement this based on how your sidebar data is structured
  const getSidebarLTP = (stockName) => {
    // Hardcoded values based on what's visible in your screenshot
    // Replace this with actual logic to get the values from your sidebar data source
    const sidebarData = {
      'INFY': 1555.45,
      'ONGC': 116.8,
      'TCS': 3194.8,
      'KPITTECH': 266.45,
      'QUICKHEAL': 308.55,
      'WIPRO': 577.75,
      // Add other stocks as needed
    };
    
    return sidebarData[stockName];
  };

  // Rest of your component remains the same
  // (chart data, totals calculation, formatting functions, JSX return)
  
  // Prepare chart data
  const labels = allHoldings.map((stock) => stock.name);
  
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  // Calculate totals
  const totalInvestment = allHoldings.reduce((total, stock) => total + stock.costBasis, 0);
  const currentValue = allHoldings.reduce((total, stock) => total + stock.curValue, 0);
  const totalPnL = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100) : 0;

  // Format numbers with proper decimal places
  const formatNumber = (num) => {
    if (num === undefined || num === null || isNaN(num)) {
      return "0.00";
    }
    return parseFloat(num).toFixed(2);
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      
      {isLoading ? (
        <div>Loading holdings data...</div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stock, index) => {
                const pnlPercentage = stock.costBasis > 0 ? ((stock.pnl / stock.costBasis) * 100) : 0;
                const isProfit = stock.pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{formatNumber(stock.avg)}</td>
                    <td>{formatNumber(stock.price)}</td>
                    <td>{formatNumber(stock.curValue)}</td>
                    <td className={profClass}>
                      {isProfit ? "+" : ""}{formatNumber(stock.pnl)}
                    </td>
                    <td className={profClass}>
                      {isProfit ? "+" : ""}{formatNumber(pnlPercentage)}%
                    </td>
                    <td className={dayClass}>{stock.day || (stock.dayPercentage ? stock.dayPercentage + '%' : '0.00%')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;