import  { WhatsappLogo, MapPin }  from "@phosphor-icons/react/dist/ssr"
import about2Img  from "../../../public/about-2.png";
import about1Img from "../../../public/about-1.png";
import Image from "next/image";
import { Check } from "lucide-react";


export function About(){
    return (
      <section className="bg-[#fdf6ec] py-16">
        <div className="container px-4 mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

             <div className="relative">
            <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold ">SOBRE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
              quibusdam commodi qui. Ullam quo ab quam adipisci, ad saepe,
              placeat a necessitatibus tenetur vero ea temporibus expedita
              voluptas officiis?
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Atendimento das 6h 18h.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade e nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Cantato via WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
         
        </div>
      </section>
    );
}