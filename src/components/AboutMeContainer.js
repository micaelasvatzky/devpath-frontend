import React from "react";
import Image from "next/image";

const AboutMeContainer = () => {
  return (
    <div
      className="p-8 pt-25"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 120, 255, 0.7), transparent 40%),
          radial-gradient(circle at 35% 50%, rgba(0, 180, 255, 0.5), transparent 40%),
          radial-gradient(circle at 70% 70%, rgba(0, 120, 255, 0.6), transparent 50%),
          radial-gradient(circle at 85% 25%, rgba(0, 150, 255, 0.4), transparent 50%)
        `,
      }}
    >
      {/* Contenedor de la cuadrícula de Bento con 6 columnas y 4 filas */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Foto de perfil (1 columna en móvil, 1 columna en desktop) */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <Image
            className="rounded-2xl"
            src="/assets/yo.jpeg" // Asegúrate de tener la foto en 'public/assets/yo.jpeg'
            alt="Foto de Micaela"
            height={250}
            width={250}
          />
        </div>

        {/* Datos personales (1 columna en móvil, 5 en desktop) */}
        <div className="col-span-1 md:col-span-4 bg-[#0d0f16] p-6 rounded-2xl shadow-lg backdrop-blur-md text-white">
          <h4 className="text-xl md:text-2xl font-bold text-[#00aaff] mb-6">
            ¡Hola! Soy Micaela Svatzky :P
          </h4>
          <p className="text-lg md:text-xl">Les dejo unos datos sobre mí:</p>
          <ul className="text-base md:text-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 list-disc list-inside mt-6 leading-10">
            <li>Tengo 21 años</li>
            <li>Se supone que soy colorada</li>
            <li>Me gusta la programación</li>
            <li>Mi deporte favorito es el voley</li>
            <li>Estoy en 3er año de la Lic. en Tecnología Multimedial</li>
            <li>Siempre me visto de negro (o la mayoría de las veces)</li>
          </ul>
        </div>

        {/* Música favorita (ocupa 6 columnas en desktop, 1 en móvil) */}
        <div className="col-span-1 md:col-span-2 bg-[#0d0f16] p-6 rounded-2xl shadow-lg backdrop-blur-md text-white">
          <h4 className="text-xl md:text-2xl font-bold text-[#00aaff] mb-4">
            Música que me gusta
          </h4>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg: grid-cols-4 gap-4">
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/airbag.jpeg"
                alt="Airbag"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/dillom.jpeg"
                alt="Dillom"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/Milo-J.jpg"
                alt="Milo J"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/wos.jpeg"
                alt="Wos"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/badbunny.jpg"
                alt="Bad Bunny"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/ctangana.jpg"
                alt="C Tangana"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/trueno.jpg"
                alt="Trueno"
                height={200}
                width={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-2xl w-20 h-20 sm:w-[100px] sm:h-[100px]"
                src="/assets/postmalone.jpg"
                alt="Post Malone"
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>

        {/* Series favoritas (1 columna en móvil, 2 en desktop) */}
        <div className="col-span-1 md:col-span-2 bg-[#0d0f16] p-6 rounded-2xl shadow-lg backdrop-blur-md text-white">
          <h4 className="text-xl md:text-2xl font-bold text-[#00aaff] mb-4">
            Series favoritas
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              className="rounded-2xl mb-4 md:mb-0"
              src="/assets/rickmorty.jpg"
              alt="Rick y Morty"
              height={200}
              width={200}
            />
            <Image
              className="rounded-2xl mb-4 md:mb-0"
              src="/assets/b99.jpg"
              alt="Brooklyn Nine-Nine"
              height={200}
              width={200}
            />
          </div>
        </div>

        {/* Mi perrita Maddie (1 columna en móvil, 2 en desktop) */}
        <div className="col-span-1 md:col-span-2 bg-[#0d0f16] p-6 rounded-2xl shadow-lg backdrop-blur-md text-white">
          <h4 className="text-xl md:text-2xl font-bold text-[#00aaff] mb-4">
            Mi perrita Maddie
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              className="rounded-2xl mb-4 md:mb-0"
              src="/assets/maddie2.jpeg"
              alt="Maddie"
              height={200}
              width={200}
            />
            <Image
              className="rounded-2xl"
              src="/assets/maddie3.jpeg"
              alt="Maddie"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContainer;

