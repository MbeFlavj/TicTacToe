import './Button.css';

export default function Button({ children, disabled, onButtonClick }) {
    return (
        <>
            <button 
              className="btn" 
              onClick={onButtonClick}
              disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}