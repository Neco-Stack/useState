import { useState } from "react"
import "./form.css"

const Form = () => {
    const [vorname, setVorname] = useState<string>("")
    const [nachname, setNachname] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    return (
        <section className="form">
            <h2>Formular auslesen: </h2>
            <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVorname(e.target.value)}
            value={vorname}
            type="text"
            placeholder="Vorname"
            />
            <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNachname(e.target.value)}
            value={nachname}
            type="text"
            placeholder="Nachname" 
            />
            <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)}
            value={email} 
            type="text"
            placeholder="Email"
            />

            <p>______________</p>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>E-Mail: {email}</p>
        </section>
    )
}

export default Form;
