import { AxiosResponse } from 'axios';
import {
	GalleryFilters,
	GalleryState,
	GalleryResponse,
} from '../../interfaces/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGalleryData } from '../actions/galleryActions';

const initialState: GalleryState = {
	loading: false,
	items: [],
	filters: {
		section: 'hot',
		sort: 'rising',
		page: 1,
		visible: 20,
		window: 'day',
		showViral: true,
		albumPreviews: false,
	},
};

const setLoader = (state: GalleryState): void => {
	state.loading = true;
};

const setGalleryRejected = (
	state: GalleryState,
	action: PayloadAction<AxiosResponse>
): void => {
	state.items = action.payload.data.data;
	state.error = action.payload;
};

const setGalleryFulfilled = (
	state: GalleryState,
	action: PayloadAction<GalleryResponse>
): void => {
	state.items = action.payload.data.data;
	state.loading = false;
};

export const gallerySlice = createSlice({
	name: 'gallery',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<GalleryFilters>) => {
			state.filters = action.payload;
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
	extraReducers: {
		[fetchGalleryData.pending as unknown as string]: setLoader,
		[fetchGalleryData.fulfilled as unknown as string]: setGalleryFulfilled,
		[fetchGalleryData.rejected as unknown as string]: setGalleryRejected,
	},
});

export const galleryActions = gallerySlice.actions;
