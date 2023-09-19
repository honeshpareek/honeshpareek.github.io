import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { anim } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Animation = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> Motion Graphics </title>
          <meta name="description" content="Dhun ~ Music Concert Planner App" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">Motion Graphics</h1>
        </div>

      <main className=" py-8">
      {/* <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Interface</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Centric</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Experience</li>
          </ul>
        </section> */}

        {/* <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Figma</li>
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Illustrator</li>
          </ul>
        </section> */}

        <section className="mb-12 px-8">
          <p className="text-lg px-12 mt-5">
            I never thought of giving a shot to motion graphics as such untill my 6th semester of college 🎓 when I was intriduced to After Effects in depth, and I have fallen in love 💖 with it. I am keen on learning it in depth and make use of it in industrial uses.
          </p>
        </section>

        <section className="my-5">
          <div className="columns-2 px-20">
          {anim.map((anim, i) => {
            return (
                <LazyLoadImage className="mb-4" key={i} src={anim.img} alt="" />
            );
          })}
          </div>
        </section>
{/* 
        <section className="w-full flex justify-center">
          <a target="_blank" href="https://www.figma.com/file/TKleWFFrlPpsnWdAP3DZtG/Mock-Assignment?type=design&node-id=0%3A1&mode=design&t=eAtLRTu4B08McEwB-1" className="rounded-full bg-blue-950 text-white text-xl font-black flex px-4 py-1">Figma Prototype</a>
        </section> */}

       
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

