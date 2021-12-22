import Image from "next/image";
import dataSlider from "./DataSlider";
import classes from './Slider.module.css';

const Slider = () => {
    return (
        <div >
            {dataSlider.map(item => {
                return <Image  key={item.id} src={item.image} alt={item.title} layout='fill' />
            })}
            
        </div>
    )
}

export default Slider



