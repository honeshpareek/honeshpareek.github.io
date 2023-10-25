import "./style.css";
import { phantom } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Phantom = () => {

  return (
    <div className="">
        <div className="py-6 px-12">
          <h1 className="text-4xl font-bold">Phantom Sweet Cigarretes - Logo Redesign</h1>
        </div>

      <main className="py-8">
      <section className="mb-5 px-12">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Branding</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Brand Identity</li>
          </ul>
        </section>

        <section className="mb-8 px-12">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photoshop</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
          </ul>
        </section>
        <section className="mb-8 px-12">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           The Project required us to choose a brand that has died, Research on the the product they are selling, their market and target audience 
           and give this brand a new brand identity with that aligns which the positioning of the brand we have done.
          </p>
        </section>

        <section className="my-5">
          <div className="w-screen  flex-col">
          {phantom.map((phantom, i) => {
            return (
                <LazyLoadImage className="" key={i} src={phantom.img} alt="" />
            );
          })}
          </div>
        </section>

       
      </main>

      <footer className="">
        <div className="px-4 py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

