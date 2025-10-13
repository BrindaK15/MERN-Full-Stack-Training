import Image from 'next/image';
import {AOT_CHARACTERS} from '../types';
import Header from './components/Header';


const AOT_RED_CLASS='text-red-800'


export default function AoTTributePage() {
  return (
    // Background: Dark, subtle vertical gradient
    <main className="min-h-screen  bg-gradient-to-b from-slate-950 via-gray-900 to-black text-white p-4 md:p-8 ">
      
      {/* Header with Dramatic Typography (Remains above the image) */}
        <Header
            title="Attack On Titan"
            subtitle='For the sake of humanity!'
            aotRedClass={AOT_RED_CLASS}

        />

      {/* Hero Image Section with Content Overlay - FULL WIDTH AND MASSIVE */}
      <section className="flex justify-center mb-16 px-0">
        {/* Container: Taller height (90vh) and full width */}
        <div className="relative w-full min-h-[500px] h-[90vh] border-4 border-double border-gray-700 ring-4 ring-red-500/50  shadow-[0_0_80px_rgba(160,0,0,0.8)] inset_0_0_20px_rgba(100,0,0,0.9) overflow-hidden rounded-lg group ">
            
            {/* The Main Image - uses fill to cover the entire tall container */}
            <Image
                src="/images/aot.jpg" 
                alt="Attack on Titan Key Visual"
                fill 
                className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
                sizes='100vw'
      
            />
            {/* Subtle Gradient Overlay for Text Readability - made slightly stronger */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

            {/* Content Overlay (Plot Summary & Character List) - CENTERED */}
            <div className="absolute inset-0 p-4 md:p-12 flex flex-col items-center justify-end text-white space-y-8">
              
              {/* Added a centered H2 for the Plot summary title */}
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-center border-b-4 border-yellow-300/50 pb-2 drop-shadow-xl`}>
                THE BATTLE FOR HUMANITY
              </h2>

         
              <div className="max-w-4xl p-4 md:p-6 bg-black/50   rounded-xl text-center border-t border-red-700/50">
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200 drop-shadow-lg">
                  The world of Attack on Titan centers around the remnants of humanity 
                  living within three enormous, concentric walls to protect themselves 
                  from gigantic, man-eating humanoid creatures known as Titans. The story primarily follows <span className="text-red-400 font-extrabold">Eren Yeager</span>, who 
                  vows to exterminate the Titans after a Colossal Titan breaches the outermost 
                  wall.
                </p>
              </div>

              
              <div className="max-w-4xl p-4 md:p-6 bg-black/50 rounded-xl  text-center border-t border-red-700/50">
                <h2 className={`text-xl sm:text-2xl font-bold mb-4  border-b-2 border-red-600/50 pb-2 drop-shadow-md`}>
                  Survey Corps Elite
                </h2>
                
                {/* Changed to flex row to center the list horizontally */}
                <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-4 text-sm sm:text-lg text-gray-200">
                  
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/eren_icon.jpg" alt="Eren Yeager" width={64} height={64} className="rounded-full border-4 border-red-500/50 object-cover" />
                      <span className="font-bold text-red-400">Eren Yeager</span>
                  </li>

                 
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/mikasa_icon.jpg" alt="Mikasa Ackerman" width={64} height={64} className="rounded-full border-4 border-gray-400 object-cover" />
                      <span>Mikasa Ackerman</span>
                  </li>

          
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/armin_icon.jpg" alt="Armin Arlert" width={64} height={64} className="rounded-full border-4 border-blue-400 object-cover" />
                      <span>Armin Arlert</span>
                  </li>

                 
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/levi_icon.jpg" alt="Levi Ackerman" width={64} height={64} className="rounded-full border-4 border-purple-400 object-cover" />
                      <span>Levi Ackerman</span>
                  </li>

                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/erwin_icon.jpg" alt="Erwin Smith" width={64} height={64} className="rounded-full border-4 border-orange-400 object-cover" />
                      <span>Erwin Smith</span>
                  </li>
                </ul>
                
              </div> 

            </div>
        </div> 
      </section>

     
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-gray-400 text-lg">
          Explore the world of Attack on Titan and join the Survey Corps!
        </p>
      </div>
      
    </main>
  );
}