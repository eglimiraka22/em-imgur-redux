import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGalleryState } from '../../store/selectors/gallerySelector';
import { AppDispatch } from '../../store';
import { galleryActions } from '../../store/slices/gallery-slice';
import GalleryCard from './GalleryCard';
import Loading from '../UI/Loading';
import { Reload } from 'tabler-icons-react';



const GalleryGrid = () => {

    
    const dispatch = useDispatch<AppDispatch>();
    const gallery = useSelector(selectGalleryState);

    const handleLoadMore = useCallback(() => {

        dispatch(
            galleryActions.setFilters({
                ...gallery.filters,
                visible: gallery.filters.visible + 20,
            })
        );
    }, [dispatch, gallery.filters]);


    const renderItems = useMemo(() => {
        return gallery.items
            .slice(0, gallery.filters.visible)
            .filter((item) => item.images)
            .map((item) => {
                return <GalleryCard item={item} key={item.id} />;
            });
    }, [gallery.filters.visible, gallery.items]);


    if (gallery.loading) {
        return <Loading />;
    }

    

    
    
    return (
        <main className='container mx-auto px-4 mt-10 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {renderItems}
            </div>
            <div className='flex items-center justify-center w-full mt-10'>
                {gallery.items.length <= gallery.filters.visible ? (
                    <p>You have arrived at the end</p>
                ) : (
                    <button onClick={handleLoadMore}>
                        <span className='flex items-center justify-center'>
                            <Reload size={15} className='mr-2' /> Load more
                        </span>
                    </button>
                )}
            </div>
        </main>
    );
};



export default GalleryGrid;
