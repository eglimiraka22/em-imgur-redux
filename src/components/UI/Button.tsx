import { PhotoCheck } from 'tabler-icons-react';
import React from 'react';

type Props = {
	children: JSX.Element | JSX.Element[];
	active?: boolean;
	onClick?: () => void; //Type of data passed throught props
};

const Button = ({ children, active, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={`text-xs ${
				active ? 'bg-gray-600 text-white' : ' text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
			} inline-flex items-center justify-center  mr-2 py-2 px-4 rounded-md`}
		>
			{active && <span className='mr-2'><PhotoCheck/> </span>}
			{children  }   
		</button>  //Data passed only if button active for filtering...
	);
};

export default Button;

// <a href="#_" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
// Button Text
// </a>



