import { useState } from "react";

const DayNightToggle = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    const toggleMode = () => {
        setIsNightMode(!isNightMode)
    };

    return (
        <div style={{
            backgroundColor: isNightMode? 'black' : 'white',
            color: isNightMode? 'white' : 'black',
            padding: '20px',
            textAlign: 'center',
            transition: 'background-color 0.5s, color 0.5s'
        }}>
            <h1>{isNightMode ? 'Nachtmodus' : 'Tagmodus'}</h1>
            <button onClick={toggleMode}>
                {isNightMode ? 'Wechsel zu Tag' : 'Wechsel zu Nacht'}
            </button>

        </div>
      );
}
 
export default DayNightToggle

;