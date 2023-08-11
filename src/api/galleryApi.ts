import { AxiosError } from 'axios';
import { GalleryFilters } from '../interfaces/interfaces';
import api from './index';

export const getGalleryData = async (
    filters: GalleryFilters,
    rejectValue: any
) => {
    try {
        const response = await api.get(
            `/${filters.section}/${filters.sort}/${filters.window}/${filters.page}?showViral=${filters.showViral}&album_previews=${filters.albumPreviews}`
        );
        return response; // Return only the data from the response
    } catch (err) {
        let errors = err as AxiosError;
        return rejectValue(errors.response?.data);
    }
};

