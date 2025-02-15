import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';


export function Slider({ info, title }) {

	console.log(info, title);
	
	return (
		<Container>
		  <h2>{title}</h2>
		  <Swiper 
		    grabCursor={true}
			spaceBetween={10}
			slidesPerView={'auto'}
			className="swiper"

		  >
			{info.map( (item,index) =>(
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<SwiperSlide key={index}>
				<div 
				style={{color: 'white'}}>
					{item.original_title}</div>
			</SwiperSlide>
			))}
			
		  </Swiper>
		</Container>
	);
}
