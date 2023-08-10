import { useState } from 'react';
import {HeartIcon ,CursorArrowRippleIcon,ServerIcon,Cog8ToothIcon}  from '@heroicons/react/24/solid'

const Header = () => {
	const [open, setOpen] = useState(false);
	const [flyer, setFlyer] = useState(false);
	return (
		<header>
			<div className='relative bg-white z-10'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6'>
					<div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
						<div className='flex justify-start lg:w-0 lg:flex-1'>
							<a href='/'>
								<svg
									className='h-8 sm:h-10'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M25.6 0H6.4C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H25.6C29.1346 32 32 29.1346 32 25.6V6.4C32 2.86538 29.1346 0 25.6 0Z'
										fill='url(#paint0_linear_103_1789)'
									/>
									<path
										d='M5.9577 24.8845C5.42578 25.9483 6.19937 27.2 7.38878 27.2H18.2111C19.4005 27.2 20.1741 25.9483 19.6422 24.8845L14.231 14.0622C13.6414 12.8829 11.9585 12.8829 11.3688 14.0622L5.9577 24.8845Z'
										fill='white'
									/>
									<path
										d='M15.5577 24.8845C15.0258 25.9483 15.7994 27.2 16.9888 27.2H24.6111C25.8005 27.2 26.5741 25.9483 26.0422 24.8845L22.231 17.2622C21.6414 16.0829 19.9585 16.0829 19.3688 17.2622L15.5577 24.8845Z'
										fill='white'
										fillOpacity='0.6'
									/>
									<path
										d='M24.0002 11.2C25.7675 11.2 27.2002 9.76726 27.2002 7.99995C27.2002 6.23264 25.7675 4.79995 24.0002 4.79995C22.2329 4.79995 20.8002 6.23264 20.8002 7.99995C20.8002 9.76726 22.2329 11.2 24.0002 11.2Z'
										fill='white'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_103_1789'
											x1='16'
											y1='0'
											x2='16'
											y2='32'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#00E676' />
											<stop offset='1' stop-color='#00C853' />
										</linearGradient>
									</defs>
								</svg>
							</a>
						</div>
						<div className='-mr-2 -my-2 md:hidden'>
							<button
								type='button'
								className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
								onClick={() => setOpen(!open)}
							>
								<span className='sr-only'>Open menu</span>
								{/* Heroicon name: outline/menu */}
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
						</div>
						<nav className='hidden md:flex space-x-10'>
							<div className='relative'>
								{/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
								<button
									type='button'
									className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                    "
									// eslint-disable-next-line no-sequences
									onClick={() => (setFlyer(!flyer))}
								>
									<span>Categories</span>
									{/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
									<svg
										className={
											flyer === true
												? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
												: 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
										}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
								{/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

								<div
									onMouseLeave={() => setFlyer(false)}
									className={
										flyer
											? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
											: ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
									}
								>
									<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
										<div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
											<a
												href='/'
												className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
											>
												{/* Heroicon name: outline/chart-bar */}

												<div className='ml-4'>
													<p className='text-base font-medium text-gray-900'>
														My Favorites
													</p>
													<p className='mt-1 text-sm text-gray-500'>
														See your favorite images
													</p>
												</div>
											</a>
											<a
												href='/'
												className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
											>
												{/* Heroicon name: outline/cursor-click */}

												<div className='ml-4'>
													<p className='text-base font-medium text-gray-900'>
														Engagement
													</p>
													<p className='mt-1 text-sm text-gray-500'>
														Speak directly to your customers in a more
														meaningful way.
													</p>
												</div>
											</a>
											<a
												href='/'
												className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
											>
												{/* Heroicon name: outline/shield-check */}

												<div className='ml-4'>
													<p className='text-base font-medium text-gray-900'>
														Imguri Viral images
													</p>
													<p className='mt-1 text-sm text-gray-500'>
														Your customers' data will be safe and secure.
													</p>
												</div>
											</a>
											<a
												href='/'
												className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
											>
												{/* Heroicon name: outline/view-grid */}

												<div className='ml-4'>
													<p className='text-base font-medium text-gray-900'>
														Integrations
													</p>
													<p className='mt-1 text-sm text-gray-500'>
														Connect with third-party tools that you're already
														using.
													</p>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>

							<a
								href='/'
								className='text-base font-medium text-gray-500 hover:text-gray-900'
							>
								Go ads Free
							</a>
							<a
								href='/'
								className='text-base font-medium text-gray-500 hover:text-gray-900'
							>
								Docs
							</a>
						</nav>
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<a
								href='/'
								className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
							>
								Sign in
							</a>
							<a
								href='/'
								className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700'
							>
								Sign up
							</a>
						</div>
					</div>
				</div>
				{/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

				<div
					className={
						open
							? 'opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
							: 'opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					}
				>
					<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
						<div className='pt-5 pb-6 px-5'>
							<div className='flex items-center justify-between'>
								<div>
									<svg
										className='h-8 sm:h-10'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.6 0H6.4C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H25.6C29.1346 32 32 29.1346 32 25.6V6.4C32 2.86538 29.1346 0 25.6 0Z'
											fill='url(#paint0_linear_103_1789)'
										/>
										<path
											d='M5.9577 24.8845C5.42578 25.9483 6.19937 27.2 7.38878 27.2H18.2111C19.4005 27.2 20.1741 25.9483 19.6422 24.8845L14.231 14.0622C13.6414 12.8829 11.9585 12.8829 11.3688 14.0622L5.9577 24.8845Z'
											fill='white'
										/>
										<path
											d='M15.5577 24.8845C15.0258 25.9483 15.7994 27.2 16.9888 27.2H24.6111C25.8005 27.2 26.5741 25.9483 26.0422 24.8845L22.231 17.2622C21.6414 16.0829 19.9585 16.0829 19.3688 17.2622L15.5577 24.8845Z'
											fill='white'
											fillOpacity='0.6'
										/>
										<path
											d='M24.0002 11.2C25.7675 11.2 27.2002 9.76726 27.2002 7.99995C27.2002 6.23264 25.7675 4.79995 24.0002 4.79995C22.2329 4.79995 20.8002 6.23264 20.8002 7.99995C20.8002 9.76726 22.2329 11.2 24.0002 11.2Z'
											fill='white'
										/>
										<defs>
											<linearGradient
												id='paint0_linear_103_1789'
												x1='16'
												y1='0'
												x2='16'
												y2='32'
												gradientUnits='userSpaceOnUse'
											>
												<stop stopColor='#00E676' />
												<stop offset='1' stop-color='#00C853' />
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div className='-mr-2'>
									<button
										type='button'
										className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
										onClick={() => setOpen(!open)}
									>
										<span className='sr-only'>Close menu</span>
										{/* Heroicon name: outline/x */}
										<svg
											className='h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='mt-6'>
								<nav className='grid gap-y-8 justify-center items-center'>
									<a
										href='/'
										className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
									>
                                        <HeartIcon className='h-8 text-green-500'/>
										{/* Heroicon name: outline/chart-bar */}
										
										<span className='ml-3 text-base font-medium text-gray-900'>
											Favorites
										</span>
									</a>
									<a
										href='/'
										className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
									>
										{/* Heroicon name: outline/cursor-click */}
                                        <CursorArrowRippleIcon className='h-8 text-green-500'/>

										<span className='ml-3 text-base font-medium text-gray-900'>
											Engagement
										</span>
									</a>
									<a
										href='/'
										className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
									>
										{/* Heroicon name: HeartIcon */}
                                        <ServerIcon className='h-8 text-green-500'/>

										<span className='ml-3 text-base font-medium text-gray-900'>
											Imguri Docs
										</span>
									</a>
									<a
										href='/'
										className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
									>
										{/* Heroicon name: Heart */}
                                        <Cog8ToothIcon className='h-8 text-green-500'/>

										<span className='ml-3 text-base font-medium text-gray-900'>
											Settings
										</span>
									</a>
									
								</nav>
							</div>
						</div>
						<div className='py-6 px-5 space-y-6'>
							
							<div>
								<a
									href='/'
									className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700'
								>
									Sign up
								</a>
								<p className='mt-6 text-center text-base font-medium text-gray-500'>
									Existing customer?
									<a href='/' className='text-green-600 hover:text-green-500'>
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
