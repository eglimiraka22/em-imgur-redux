import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGalleryStateById } from '../store/selectors/gallerySelector';
import GalleryCard from '../components/gallery/GalleryCard';
import React from 'react';
import { CheckCircleIcon ,ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';

const Gallery = () => {
	let { galleryId } = useParams();
	const data = useSelector(selectGalleryStateById(galleryId || ''));

	

	// Gallery Cart is Single item=data   data.title data.poinss  data.ups data.dows description
	return (
		<React.Fragment>
			<div className='w-[100%] mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black '>
				<div className='flex items-center justify-center min-h-screen'>
					
					<div className='max-w-[600px]  w-full sm:w-1/2 lg:w-1/3 py-6 px-3'>
						<div className='bg-white shadow-xl rounded-lg overflow-hidden  flex-col justify-center items-center mx-auto '>
						<a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg></a>

							<div className='bg-cover bg-center lg:h-[600px]   w-full relative p-4 flex items-center justify-center'>
								
								<GalleryCard isSingle item={data} />
								
							</div>
							<div className='p-4'>
								{data && data.title && (
									<p className='flex justify-center items-center text-center uppercase tracking-wide text-xl font-bold text-gray-700'>
										{data.title}
									</p>
								)}

								{data && data.points &&<p className='text-gray-700 font-bold flex justify-center items-center '>
									<CheckCircleIcon className='h-6 w-6 text-blue-500 m-1' />
									Points : {data.points}
								</p>}
							</div>
							<div className='flex p-4 flex-row border-t border-gray-300 justify-evenly  item-center jus text-gray-700'>
								<div className='flex flex-row items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
										/>
									</svg>
									{data && data.ups &&<p>
										<span className='text-gray-900 font-bold'>{data.ups}</span>{' '}
									</p>}
								</div>
								<div className='flex flex-row justify-center items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384'
										/>
									</svg>

									{data && data.downs && <p>
										<span className='text-gray-900 font-bold'>{data.downs}</span> 
									</p>}
								</div>
							</div>
							<div className='px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100 flex flex-col justify-center items-center'>
								<div className='text-xs uppercase font-bold text-gray-600 tracking-wide'>
									Imgur Image
								</div>
								<div className='flex items-center justify-center pt-2'>
									<div>
								{data && data.comment_count	&&	<p className='font-bold text-gray-900 flex justify-center '> <ChatBubbleBottomCenterIcon className='h-6 w-6 text-blue-500 m-1'/> {data.comment_count}</p>}
										<a href="https://imgur.com/">Find more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Gallery;
