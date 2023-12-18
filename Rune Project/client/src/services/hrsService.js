import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/hrs'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (hrsId) => {
    const result = await request.get(`${baseUrl}/${hrsId}`, );

    return result;
}


export const create = async (hrsData) => {
    const result = await request.post(baseUrl, hrsData);

    return result;
};

export const edit = async (hrsId, hrsData) => {
    const result = await request.put(`${baseUrl}/${hrsId}`, hrsData);

    return result;
};

export const remove = async (hrsId) => request.remove(`${baseUrl}/${hrsId}`);