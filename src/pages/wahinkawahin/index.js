import { Helmet, HelmetProvider } from "react-helmet-async";
import { omar } from "../../content_option";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { wahin } from "../../content_option";


export const Wahin = () => {

  return (
    <div className="">
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">Wahin ka Wahin - Music Video Promo</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Story Telling</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Cinemtography</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Story boarding</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Direction</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">DaVinci Resolve 18</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Procreate</li>
          </ul>
        </section>
        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           The Project is based on a song written and sung by the artist himself, Lifafa. This is our interpretation of what the song is talking about, a love story, the society and how pure it could be. Put your headphones on and do enjoy the promo video.
          </p>
        </section>


        <section className="my-5">
          <div className="flex-col">
          {wahin.map((salus, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={salus.img} alt="" />
            );
          })}
          </div>
        </section>

        <div className="aspect-w-16 aspect-h-9 h-screen">
    <iframe
      src="https://player.vimeo.com/video/833932438?h=233dabe5a8"
      className="w-full h-full"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>     



      </main>

      <footer className="">
        <div className="container px-8  py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

