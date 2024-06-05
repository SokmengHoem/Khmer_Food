import Carousel from "../../components/Templates/Carousel";
import SimpleTastesBetter from '../../components/Molecules/SimpleTastesBetter';
import OnlyTheGoodStuff from "../../components/Molecules/GoodStuff";
import { FoodGallery } from "../../components/Molecules/FoodGallery";

const sliders: string[] = [
  'images/slide_Carousel1.png',
  'images/slide_Carousel2.png',
  'images/slide_Carousel3.png',
];
type Props = {}

export default function AboutPage({ }: Props) {
  return (
    <div>
      <div>
        <SimpleTastesBetter />
      </div>
      <div>
        {
          <div>
            <Carousel slides={sliders} autoSlide={true} autoSlideInterval={3000} />
          </div>
        }
      </div>
      <div>
        <OnlyTheGoodStuff/>
      </div>
      <div>
        <FoodGallery/>
      </div>
    </div>
  )
}