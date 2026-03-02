import './Move.css';
export default function Move({ children, onButtonClick, isActive }) {
    return (
        <button 
          className={"move-ball " + (isActive ? "active" : "")} 
          onClick={onButtonClick}
        >
            {children}
        </button>
    );
}