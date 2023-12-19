import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import { Link } from "react-router-dom";
import HighRuneEdit from "../HighRuneEdit/HighRuneEdit";

import * as hrsService from '../../../services/hrsService'
import * as commentService from '../../../services/commentService'
import './HighRuneDetails.css'
import { pathToUrl } from "../../../utils/pathUtils";

const HighRuneDetails = () => {
    const navigate = useNavigate();
    const { email, userId, isAuthenticated } = useContext(AuthContext)
    const [hr, setHr] = useState({});
    const [comments, setComments] = useState([]);
    const { hrId } = useParams();

    const authorRef = useRef(null);
  const commentRef = useRef(null);

    useEffect(() => {
        hrsService.getOne(hrId)
            .then(setHr)

        commentService.getAll(hrId)
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

        setComments(state => [...state, newComment])
        // navigate(`/hrs/:${hrId}`)
        authorRef.current.value = '';
        commentRef.current.value = '';

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

                    <Link to={pathToUrl('/hrs/:hrId/edit', { hrId })} element={<HighRuneEdit {...hr} />}>
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button" onClick={deleteButtonClickHandler}>Delete</button>
                </div>
            )}

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, username, text }) => (
                        <li key={_id} className="comment">
                            <p>{username}: {text}</p>
                        </li>
                    ))}
                </ul>
                {comments.length === 0 && (
                    <p className="no-comment">No comments.</p>
                )}
            </div>
            {isAuthenticated &&
                <form className="form-comments" onSubmit={addCommentHandler}>
                    <input type="text" ref={authorRef} name="username" placeholder="username" />
                    <textarea name="comment" ref={commentRef} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>}


        </section>
    )
}

export default HighRuneDetails;