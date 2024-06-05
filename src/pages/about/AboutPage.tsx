import Carousel from "../../components/Templates/Carousel";
import OnlyTheGoodStuff from "../../components/Molecules/aboutPage/GoodStuff";
import { FoodGallery } from "../../components/Molecules/aboutPage/FoodGallery";
import { SimpleTastesBetter } from "../../components/Molecules/aboutPage/SimpleTastesBetter";

const sliders: string[] = [
  'images/aboutPage/slide_Carousel1.png',
  'images/aboutPage/slide_Carousel2.png',
  'images/aboutPage/slide_Carousel3.png',
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