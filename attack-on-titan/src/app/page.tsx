import Image from 'next/image';

// Custom colors for AOT theme (using Tailwind arbitrary values if not configured)
const AOT_RED = 'text-[#A00000]'; 
const AOT_YELLOW = 'text-[#FFD700]'; 

export default function AoTTributePage() {
  return (
    // Background: Dark, subtle vertical gradient
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white p-8">
      
      {/* Header with Dramatic Typography (Remains above the image) */}
      <header className="text-center mb-16 pt-8">
        <h1 className={`text-7xl md:text-8xl font-black ${AOT_RED} tracking-wider uppercase drop-shadow-lg`}>
          Attack on Titan
        </h1>
        <p className={`mt-4 text-2xl font-light text-gray-300 border-b border-yellow-400/50 pb-2 inline-block`}>
          For the sake of humanity!
        </p>
      </header>

      {/* Hero Image Section with Content Overlay - FULL WIDTH AND MASSIVE */}
      <section className="flex justify-center mb-16 px-0">
        {/* Container: Taller height (90vh) and full width */}
        <div className="relative w-full min-h-[600px] lg:min-h-[90vh] border-y-4 border-red-600 shadow-[0_0_50px_rgba(255,0,0,0.5)] overflow-hidden group">
            
            {/* The Main Image - uses fill to cover the entire tall container */}
            <Image
                // NOTE: Switched back to aot_image.jpg as per previous context
                src="/images/aot.jpg" 
                alt="Attack on Titan Key Visual"
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
            />
            {/* Subtle Gradient Overlay for Text Readability - made slightly stronger */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"></div>

            {/* Content Overlay (Plot Summary & Character List) - CENTERED */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-white space-y-12">
              
              {/* Added a centered H2 for the Plot summary title */}
              <h2 className={`text-5xl font-extrabold  tracking-widest text-center border-b-4 border-yellow-400 pb-3 drop-shadow-lg`}>
                THE BATTLE FOR HUMANITY
              </h2>

              {/* Plot Summary - TRANSPARENT and Center-Aligned */}
              {/* Restricted max-width for better readability in the center */}
              <div className="max-w-4xl p-6 rounded-lg text-center">
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200 drop-shadow-xl">
                  The world of Attack on Titan centers around the remnants of humanity 
                  living within three enormous, concentric walls to protect themselves 
                  from gigantic, man-eating humanoid creatures known as Titans. The story primarily follows <span className="text-red-400 font-extrabold">Eren Yeager</span>, who 
                  vows to exterminate the Titans after a Colossal Titan breaches the outermost 
                  wall.
                </p>
              </div>

              {/* Character List - TRANSPARENT and Centered */}
              <div className="p-6 rounded-lg text-center">
                <h2 className={`text-4xl font-bold mb-6 ${AOT_RED} border-b-2 border-red-600/50 pb-2 drop-shadow-md`}>
                  Survey Corps Elite
                </h2>
                
                {/* Changed to flex row to center the list horizontally */}
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg text-gray-200">
                  {/* Character 1: Eren Yeager */}
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/eren_icon.jpg" alt="Eren Yeager" width={64} height={64} className="rounded-full border-4 border-red-500 object-cover" />
                      <span className="font-bold text-white-400">Eren Yeager</span>
                  </li>

                  {/* Character 2: Mikasa Ackerman */}
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/mikasa_icon.jpg" alt="Mikasa Ackerman" width={64} height={64} className="rounded-full border-4 border-gray-400 object-cover" />
                      <span>Mikasa Ackerman</span>
                  </li>

                  {/* Character 3: Armin Arlert */}
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/armin_icon.jpg" alt="Armin Arlert" width={64} height={64} className="rounded-full border-4 border-blue-400 object-cover" />
                      <span>Armin Arlert</span>
                  </li>

                  {/* Character 4: Levi Ackerman */}
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/levi_icon.jpg" alt="Levi Ackerman" width={64} height={64} className="rounded-full border-4 border-purple-400 object-cover" />
                      <span>Levi Ackerman</span>
                  </li>

                  {/* Character 5: Erwin Smith */}
                  <li className="flex flex-col items-center space-y-1">
                      <Image src="/images/erwin_icon.jpg" alt="Erwin Smith" width={64} height={64} className="rounded-full border-4 border-orange-400 object-cover" />
                      <span>Erwin Smith</span>
                  </li>
                </ul>
                
              </div> {/* End Character List */}

            </div> {/* End Content Overlay */}
        </div> {/* End Hero Image Container */}
      </section>

      {/* Optional: Other sections below the main image area */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-gray-400 text-lg">
          Explore the world of Attack on Titan and join the Survey Corps!
        </p>
      </div>
      
    </main>
  );
}