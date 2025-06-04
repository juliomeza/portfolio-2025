import { useState, type ChangeEvent } from 'react'
import PortfolioV1 from './components/PortfolioV1'
import PortfolioV2 from './components/PortfolioV2'
import PortfolioV3 from './components/PortfolioV3'
import PortfolioV4 from './components/PortfolioV4'
import PortfolioV5 from './components/PortfolioV5'
import PortfolioV6 from './components/PortfolioV6'
import PortfolioV7 from './components/PortfolioV7'
import './App.css'

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState('v2')

  const portfolioOptions = [
    { value: 'v1', label: 'V1 - Colorful Professional' },
    { value: 'v2', label: 'V2 - Minimalist Clean' },
    { value: 'v3', label: 'V3 - Creative Modern' },
    { value: 'v4', label: 'V4 - Typographic Focus' },
    { value: 'v5', label: 'V5 - Sidebar Minimal' },
    { value: 'v6', label: 'V6 - Zen Typography' },
    { value: 'v7', label: 'V7 - Philosophical Book' },
  ]

  const renderPortfolio = () => {
    switch (selectedPortfolio) {
      case 'v1':
        return <PortfolioV1 />
      case 'v2':
        return <PortfolioV2 />
      case 'v3':
        return <PortfolioV3 />
      case 'v4':
        return <PortfolioV4 />
      case 'v5':
        return <PortfolioV5 />
      case 'v6':
        return <PortfolioV6 />
      case 'v7':
        return <PortfolioV7 />
      default:
        return <PortfolioV1 />
    }
  }

  return (
    <div className="app">
      {/* Portfolio Selector */}
      <div className="portfolio-selector">
        <div className="selector-container">
          <label htmlFor="portfolio-select" className="selector-label">
            📋 Portfolio Style:
          </label>
          <select
            id="portfolio-select"
            value={selectedPortfolio}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectedPortfolio(e.target.value)
            }
            className="selector-dropdown"
          >
            {portfolioOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Portfolio */}
      <div className="portfolio-content">
        {renderPortfolio()}
      </div>
    </div>
  )
}

export default App
