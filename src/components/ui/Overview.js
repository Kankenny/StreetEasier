import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'

const containerClasses =
	'min-w-full mx-auto mb-10 px-6 pt-20 pb-6 bg-slate-100 flex flex-col shadow-md'

const Overview = ({ title, subtitle, paragraph, className, children }) => {
	return (
		<div className={`${className} ${containerClasses}`}>
			<Title title={title} />
			<Subtitle subtitle={subtitle} />
			<Paragraph paragraph={paragraph} />
			{children}
		</div>
	)
}

export default Overview
