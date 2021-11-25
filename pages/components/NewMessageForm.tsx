import { ChangeEvent, SyntheticEvent, useState } from "react";
import { mutate } from "swr";

const NewMessageForm = () => {
    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");

    const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) =>
        setPseudo(event.target.value);
    const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value);
    const handleSubmit = async (event: SyntheticEvent) => {
        // Prevent browser to submit
        event.preventDefault();

        // Send data
        await fetch("https://ensmn.herokuapp.com/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: pseudo, message: message }),
        });

        // Refresh messages
        mutate("https://ensmn.herokuapp.com/messages");

        // Clear state
        setPseudo("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div id="new-message-container" className="row">
                <div className="col-sm-9">
                    <div className="input-group">
                        <span className="input-group-text">Message</span>
                        <textarea
                            className="form-control"
                            aria-label="Message"
                            id="msgbox"
                            required
                            onChange={handleMessageChange}
                            value={message}
                        />
                    </div>
                </div>
                <div className="col-sm">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="pseudo"
                            name="pseudo"
                            placeholder="Entrer un pseudo"
                            required
                            onChange={handlePseudoChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default NewMessageForm;
