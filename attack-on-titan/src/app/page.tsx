import {AOT_CHARACTERS} from '../types';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import CharacterList from './components/CharacterList';



const AOT_RED_CLASS='text-red-800';
const image_src='/images/aot.jpg';
const image_alt="Attack on Titan Key Visual";
const image_title="THE BATTLE FOR HUMANITY";
const image_description=`The world of Attack on Titan centers around the remnants of humanity 
living within three enormous, concentric walls to protect themselves 
from gigantic, man-eating humanoid creatures known as Titans. The story primarily follows `

// Final Server Component assembling the page
export default function AoTTributePage() {
  return (
    // Background: Dark, subtle vertical gradient
    <main className="min-h-screen  bg-gradient-to-b from-slate-950 via-gray-900 to-black text-white p-4 md:p-8 ">
      
      
        <Header
            title="Attack On Titan"
            subtitle='For the sake of humanity!'
            aotRedClass={AOT_RED_CLASS}

        />

        <ImageCard 
            src={image_src}
            alt={image_alt}
            title={image_title}
            description={image_description}
        />

        <section className='flex justify-center mb-16 px-0' >
          <CharacterList
              characters={AOT_CHARACTERS}
              title="Survey Corps Elite"
          />
        </section>
    </main>
  );
}
