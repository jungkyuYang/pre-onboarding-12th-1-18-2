export const AdBanner = ({ data }: any) => {
	return (
		<a href={data.link} target="_blank" rel="noopener noreferrer">
			<img src={data.src} alt={data.alt}></img>
		</a>
	);
};
