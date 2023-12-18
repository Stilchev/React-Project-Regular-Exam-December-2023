import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import { Link } from "react-router-dom";

import * as hrsService from '../../../services/hrsService'
import * as commentService from '../../../services/commentService'
import './HighRuneDetails.css'
import { pathToUrl } from "../../../utils/pathUtils";

const HighRuneDetails = () => {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext)
    const [hr, setHr] = useState({});
    const [comments, setComments] = useState([]);
    const { hrId } = useParams();

    useEffect(() => {
        hrsService.getOne(hrId)
            .then(setHr)

        commentService.getAll()
            .then(setComments);
    }, [hrId])

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${hr.rune}`);

        if (hasConfirmed) {
            await hrsService.remove(hrId);

            navigate('/hrs');
        }
    }

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            hrId,
            formData.get('username'),
            formData.get('comment')
        );

        console.log(newComment);
    }

    return (
        <section className="hr-details">

            <div className="hr-details">
                <h2>High Rune Details</h2>

                <p>Rune: {hr.rune} Rune</p>
                <p>Character: {hr.character}</p>
                <p>Zone: {hr.zone}</p>

            </div>
            {userId === hr._ownerId && (
                <div className="details-buttons">

                    <Link to={pathToUrl('/hrs/:hrId/edit', { hrId })} >
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button" onClick={deleteButtonClickHandler}>Delete</button>
                </div>
            )}

            {comments.map(({ username, text }) => (
                <li className="comment">
                    <p>{username}: {text}</p>
                </li>
            ))}

            {comments.length === 0 && (
                <p className="no-comment">No comments.</p>
            )}

            <form className="form-comments" onSubmit={addCommentHandler}>
                <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>

        </section>
    )
}

export default HighRuneDetails;