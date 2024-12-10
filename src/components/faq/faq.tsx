import { useState } from "react";

const FAQ = () => {
    const [answer, setAnswer] = useState(false);
    const clickAnswer = () => {
        setAnswer(!answer);
    }

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <p>Why is React great?</p>
            <button onClick={clickAnswer}> {answer ? "Hide Answer" : "Show Answer"}</button>
            {answer && (
                <p>Fast Learning Curve</p>
            )}
        </div>
      );
}

export default FAQ;
