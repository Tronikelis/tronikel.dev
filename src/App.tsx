import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Hello guys</p>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
        </div>
    );
}
