import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { atlas } from "../../content_option";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Atlas = () => {
  return (
  <HelmetProvider>
    <div className="">
    <Helmet>
          <meta charSet="utf-8" />
          <title> Salus </title>
          <meta name="description" content="Kal baat krte hai" />
      </Helmet>
        <div className="container px-8 py-6">
          <h1 className="text-4xl font-bold">Atlas App Redesign</h1>
        </div>

      <main className=" py-8">
      <section className="mb-5 px-8">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Interface</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Research</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">User Experience</li>
            <li className="rounded-2xl bg-green-400 font-bold py-1 px-4">Interaction Design</li>
          </ul>
        </section>

        <section className="mb-8 px-8">
          <h2 className="text-lg font-bold mb-4">Tools</h2>
          <ul className="list-none flex gap-3">
            <li className="rounded-2xl bg-slate-700 text-white font-bold py-1 px-4">Figma</li>
          </ul>
        </section>
        <section className="mb-12 px-8">
          <h2 className="text-lg font-bold mb-4">Project Overview</h2>
          <p className="text-lg px-12 mt-5">
           The project aims at building a completely new design system or redisigning an existing with incorporating the idea of physical spaces interact with digital products. For this particular product i have chose my college app where I am going ot redesign the user experince with added physical interaction. This is a Work-In_progress project.
          </p>
        </section>

        <section className="my-5">
          <div className="flex-col">
          {atlas.map((atlas, i) => {
            return (
                <LazyLoadImage className="my-4" key={i} src={atlas.img} alt="" />
            );
          })}
          </div>
        </section>

        <section className="w-full flex justify-center">
          <a target="_blank" href="https://www.figma.com/proto/RQN4WLdKP6QgJpv1vj2x1n/TataNexon-Infotainment-Design?page-id=0%3A1&type=design&node-id=5-2&viewport=165%2C509%2C0.08&scaling=min-zoom&starting-point-node-id=5%3A2&show-proto-sidebar=1" className="rounded-full bg-blue-950 text-white text-xl font-black flex px-4 py-1">Figma Prototype</a>
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
