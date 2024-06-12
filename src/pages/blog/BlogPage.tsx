import React from 'react'

type Props = {}

export default function BlogPage({ }: Props) {
  return (
    <div>
      <section>
        <h1 className="text-lg tracking-widest text-center mt-20">
          <span className="border-t-2 border-b-2 border-yellow-500 mx-5">RECIPES</span>
          <span className="border-t-2 border-b-2 border-yellow-500">FEB 22,2022</span>
        </h1>
        <div className='text-center text-4xl m-4'>
          <h1>Elegant Dessert: 10 Tips How to <br />
            Make It at Home</h1>
        </div>
        <div className='text-center text-sl mb-5 text-gray-500'>
          <p>Creating elegant desserts at home can be a rewarding and delightful experience. <br />Here are ten tips to help you make elegant desserts in your own kitchen.</p>
        </div>
      </section>
      <section>
        <div >
          <img
            src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" // replace with your image path
            alt="Delicious food" className="w-full h-96 object-cover" />
        </div>
        <div className='my-10 mx-16 text-lg'>
          <p>Khmer desserts are known for their sweet and indulgent flavors, often featuring ingredients like coconut milk, palm sugar, 
            and tropical fruits. Sticky rice with mango, coconut custard, and sweetened rice cakes are just a few examples of Khmer desserts.
            Num Ansom is a traditional Cambodian dessert made during special occasions and festivals like the Khmer New Year. It consists of 
            sticky rice cooked with coconut milk and sugar, then wrapped in banana leaves and steamed. Sometimes, it includes fillings like mung 
            bean paste or banana slices.
            </p>
          <div className='font-bold text-2xl my-8'>
            <h5>Perfect Food for all Hungry Livings</h5>
          </div>

          <div>
            <p>
              When it comes to satisfying hunger for all living beings, there are a few key considerations to keep in mind,
              such as nutritional value, accessibility, and sustainability. While it's challenging to find a single food that
              meets the needs of every living being, there are some options that come close.
            </p>

            <div className='text-base my-5 mx-11'>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">Grains: Grains such as rice, wheat, oats, and corn are staple foods for humans and can also be used to feed animals like livestock and poultry.</li>
                <li className="text-gray-700">Legumes: Legumes like beans, lentils, and chickpeas are rich in protein, fiber, and essential nutrients. </li>
                <li className="text-gray-700">Leafy Greens: Leafy greens such as spinach, kale, and lettuce are packed with vitamins, minerals, and antioxidants.</li>
              </ul>
            </div>

            <div className='text-center font-bold my-20'>
              <p>SAOY was crowned “The Best Cookbook in the World” by the renowned Gourmand Award.<br />
                It's equivalent to receiving an 'Oscar' in the food industry,
                with people all across the world<br /> celebrating.  This distinction genuinely reflects our passion, creativity, <br />and dedication to the delectable art of cooking.</p>
            </div>
          </div>

          <div className='font-bold text-2xl my-8'>
            <h5>What Amok recipes exist you can follow?</h5>
          </div>
          <p>Certainly! "Amok" is a traditional Cambodian dish that typically features fish,
            although variations with chicken, shrimp, or tofu are also popular. The dish is cooked with
            coconut milk and a variety of aromatic spices, then steamed in banana leaves, imparting a unique flavor and aroma.
            Here's a basic recipe for Fish Amok:
          </p>
          <div className='text-base my-5 mx-11'>
            <ol className="list-decimal list-inside space-y-2">
              <li className="text-gray-700">Prepare the Amok Paste: In a food processor or mortar and pestle, blend together all the ingredients for the Amok paste until smooth. Set aside.</li>
              <li className="text-gray-700">Prepare the Fish: In a bowl, combine the fish fillets with 2-3 tablespoons of the prepared Amok paste, coating the fish evenly. Allow it to marinate for at least 15-30 minutes.</li>
              <li className="text-gray-700">Prepare the Coconut Sauce: In a saucepan, heat the coconut milk over medium heat. Add the fish sauce, palm sugar, and shredded kaffir lime leaves (if using). Stir until the sugar is dissolved and the mixture is well combined.</li>
            </ol>
          </div>

        </div>
      </section>
    </div>
  )
}