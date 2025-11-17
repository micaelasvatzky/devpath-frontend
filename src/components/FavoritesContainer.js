'use client'
import { useEffect } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
import ResourceFavoriteCard from "@/components/ResourceFavoriteCard"; 


const FavoritesContainer = () => {
  const { favorites, getFavoriteResources, favoriteResources } = useAppContext(); 

  useEffect(() => {
    if (favorites.length > 0) {
      getFavoriteResources(favorites.map(fav => fav.id));  
    }
  }, [favorites, getFavoriteResources]);

  return (
    <div
      className="p-8 pt-25 h-[900px] md:h-[600px] lg:h-[1000px]"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0, 120, 255, 0.7), transparent 40%),
          radial-gradient(circle at 35% 50%, rgba(0, 180, 255, 0.5), transparent 40%),
          radial-gradient(circle at 70% 70%, rgba(0, 120, 255, 0.6), transparent 50%),
          radial-gradient(circle at 85% 25%, rgba(0, 150, 255, 0.4), transparent 50%)`,
      }}
    >
       <h1
        className="font-black text-center text-4xl sm:text-5xl md:text-6xl bg-linear-to-r from-[#00aaff] via-[#a0c8ff] to-white bg-clip-text text-transparent leading-tight mb-5"
      >
        Favorites
      </h1>
      <section className="m-5  bg-white/20 rounded-xl shadow-lg backdrop-blur md:pr-2.5 p-6">
        {favoriteResources.length === 0 ? (
          <p className="text-black font-extrabold text-4xl text-center">
            You haven't added any resources to favorites yet
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-12">
            {favoriteResources.map((resource) => (
              <ResourceFavoriteCard key={resource._id} resource={resource} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritesContainer;


