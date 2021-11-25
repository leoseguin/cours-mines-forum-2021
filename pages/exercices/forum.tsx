import type { NextPage } from "next";
import MessagesList from "../components/MessagesList";
import NewMessageForm from "../components/NewMessageForm";

const Forum: NextPage = () => {
    return (
        <div id="app" className="container-fluid">
            <div id="forum-wrapper" className="d-flex flex-column">
                <div>
                    <h1>Forum Depinfo</h1>
                </div>
                <div id="messages-container" className="flex-grow-1 my-2">
                    <MessagesList />
                </div>
                <div className="card border-primary mb-2">
                    <div className="card-body">
                        <NewMessageForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;
