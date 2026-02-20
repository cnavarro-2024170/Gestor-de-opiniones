import { Publication } from './publication.model.js';

const publications = [];

export const createPublication = (data) => {
    const pub = new Publication(data);
    publications.push(pub);
    return pub;
};

export const getPublications = () => publications;

export const getPublicationById = (id) =>
    publications.find(p => p.id === id);

export const updatePublication = (id, text, author) => {
    const pub = getPublicationById(id);
    if (!pub) return null;
    if (pub.author !== author) return 'NOT_AUTHOR';

    pub.text = text;
    return pub;
};

export const deletePublication = (id, author) => {
    const index = publications.findIndex(p => p.id === id);
    if (index === -1) return null;
    if (publications[index].author !== author) return 'NOT_AUTHOR';

    publications.splice(index, 1);
    return true;
};