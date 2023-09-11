import { useState } from 'react';

const ColocarTexto = () => {
    const [message, setMessage] = useState("Trabajando ...");

    setTimeout(() => {
        setMessage("Es todo por hoy. A mimir!");
    }, 5000);

    return <p>{message}</p>;
}

export default ColocarTexto;
