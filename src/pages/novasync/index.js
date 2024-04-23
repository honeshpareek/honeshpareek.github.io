import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { nova } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const NovaSync = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> NovaSync </title>
          <meta name="description" content="NovaSync Banding" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">NovaSync </h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Branding</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Logo Design</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Motion Design</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Brand Identity</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photoshot</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">After Effects</li>
          </ul>
        </section>
        <section className="mb-12 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
            NovaSync is a branding project that I worked on for a client that was presented to me at my BCG interview assignment. The client wanted a modern and unique brand identity for their new business. I created a logo, color palette, chose the right typography  and motion design for the brand.
          </p>
        </section>

        <section className="my-5">
        <div className="px-2 max-sm:px-4 columns-1 ">
          <div className="aspect-w-16 aspect-h-9 h-screen">
            <iframe
              src="https://player.vimeo.com/video/934551234?badge=0"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div> 
        </div>
        </section>

        <section className="my-5">
          <div className="flex-col flex justify-center ">
          {nova.map((nova, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={nova.img} alt="" />
            );
          })}
          </div>
        </section>


       
      </main>

      <footer className="">
        <div className="container px-8 py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
 </HelmetProvider>
  );
};

