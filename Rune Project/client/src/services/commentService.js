import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (hrId) => {
    const query = new URLSearchParams({
        where: `hrId="${hrId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (hrId, username, text) => {
    const newComment = await request.post(baseUrl, {
        hrId,
        username, 
        text,
    });

    return newComment;
}