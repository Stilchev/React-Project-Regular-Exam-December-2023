import { Link } from "react-router-dom";

const HighRunes = () => {
    return(
        <div>
      <Link to="/all-high-runes-list" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          All High Runes List
        </button>
      </Link>

      <Link to="/your-high-runes" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          Your High Runes
        </button>
      </Link>

      <Link to="/add-new-high-rune" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          Add New High Rune
        </button>
      </Link>
    </div>
  

    )
}

export default HighRunes;