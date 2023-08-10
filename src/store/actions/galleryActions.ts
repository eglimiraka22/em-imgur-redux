import { getGalleryData } from '../../api/galleryApi';

import { GalleryFilters } from '../../interfaces/interfaces';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGalleryData = createAsyncThunk(
	'gallery/get',
	async (filters: GalleryFilters, { rejectWithValue }) => {
		return await getGalleryData(filters, rejectWithValue);
	}
);
