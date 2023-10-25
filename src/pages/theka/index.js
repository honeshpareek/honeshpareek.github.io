import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { theka } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Theka = () => {

  return (
    <div className="">
        <div className=" px-12 py-6">
          <h1 className="text-4xl font-bold">THEKA - Local Liqour Shop Branding</h1>
        </div>

      <main className="py-8">
      <section className="px-12 mb-5">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Branding</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-slate-300 font-bold py-1 px-4">Brand Identity</li>
          </ul>
        </section>

        <section className="px-12 mb-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Photoshop</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
          </ul>
        </section>
        <section className="px-12 mb-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           The Project required us to choose a local business owner, Research on the the product they are selling, their market and target audience 
           and give these generic shops around our locality a new brand identity with a supportive campaign that aligns which the positioning of the brand we have done.
          </p>
        </section>

        <section className="my-5">
          <div className="w-screen  flex-col">
          {theka.map((theka, i) => {
            return (
                <LazyLoadImage className="" key={i} src={theka.img} alt="" />
            );
          })}
          </div>
        </section>

       
      </main>

      <footer className="">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm">&copy; 2023 Honesh Rai Pareek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

