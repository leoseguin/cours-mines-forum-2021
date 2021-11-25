import { formatDistanceToNow } from "date-fns";
import fr from "date-fns/locale/fr";

interface Props {
    body: string;
    author: string;
    date: Date;
}

const Message = ({ body, author, date }: Props) => {
    //let classN = "card mb-3 w-75";
    //if (author === me) {
    //    classN = "card mb-3 w-75 align-self-end text-end";
    //}
    return (
        //<div className={classN}>
        <div className="card mb-2">
            <div className="card-body">
                <h6 className="card-title text-muted" id="pseudo">
                    {author}
                </h6>
                <h6 className="card-subtitle mb-1 text-muted" id="date">
                    {formatDistanceToNow(date, { addSuffix: true, locale: fr })}
                </h6>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
};

export default Message;
