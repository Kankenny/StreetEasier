import React from 'react'

const SolidButton = ({
	buttonType,
	buttonText,
	className,
	onClick,
	...rest
}) => {
	return (
		<button
			{...rest}
			type={buttonType ? buttonType : 'button'}
			onClick={onClick}
			className={`${className} font-serif text-white text-center focus:ring-4 focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none shadow-2xl`}
			// This React Component needs a color and text size that is passed via the className
		>
			{buttonText}
		</button>
	)
}

export default SolidButton
