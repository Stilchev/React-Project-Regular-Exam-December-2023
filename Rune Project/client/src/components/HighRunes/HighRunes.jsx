import { Link } from "react-router-dom";

import './HighRunes.css'

const HighRunes = () => {
    return(
      <div id="hrs-logged">
        <div className="hrs">
      <Link to="/hrs/list" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          All High Runes List
        </button>
      </Link>

      <Link to="/hrs/my" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          Your High Runes
        </button>
      </Link>

      <Link to="/hrs/create" style={{ textDecoration: 'none' }}>
        <button style={{ fontSize: '24px', margin: '10px' }}>
          Add New High Rune
        </button>
      </Link>
    </div>
    </div>

    )
}

export default HighRunes;