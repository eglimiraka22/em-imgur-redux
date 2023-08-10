import { useSelector } from 'react-redux';
import ErrorHandler from '../components/UI/Error';
import Filters from '../components/filters';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { selectGalleryState } from '../store/selectors/gallerySelector';
import Layout from '../components/UI/Layout';

const Root = () => {
	const gallery = useSelector(selectGalleryState);

	if (gallery.error) {
		return <ErrorHandler />;
	}

	return (
		<Layout>
			<div className=''><Filters />
			<GalleryGrid /></div>
		</Layout>
	);
};

export default Root;
