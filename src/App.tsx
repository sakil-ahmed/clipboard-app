import {useEffect, useState} from "react";

function App() {

    const [clipboardText, setClipboardText] = useState<string>('');
    const [clipboardHistory, setClipboardHistory] = useState<string[]>([]);

    useEffect(() => {

        console.log(window)
        setClipboardHistory([])
        // Listen for clipboard text updates

    }, []);


    return (
        <>
            <div>
                <h1>Clipboard App</h1>
                <textarea
                    value={clipboardText}
                    onChange={(e) => setClipboardText(e.target.value)}
                />

                <h2>Clipboard History</h2>
                <ul>
                    {clipboardHistory.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default App
