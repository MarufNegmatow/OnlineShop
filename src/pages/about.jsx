import React from 'react'
import men from "../assets/aboutmen.png"
import d1 from "../assets/d1.png"
import d2 from "../assets/d2.png"
import d3 from "../assets/d3.png"
import d4 from "../assets/d4.png"
import n1 from "../assets/n1.png"
import n2 from "../assets/n2.png"
import n3 from "../assets/n3.png"
import f1 from "../assets/twiter.png"
import f2 from "../assets/instagram.png"
import f3 from "../assets/incelod.png"
import delivery1 from "../assets/delivery1.png";
import delivery2 from "../assets/delivery2.png";
import delivery3 from "../assets/delivery3.png";

const About = () => {
  return (
    <div>
      <div className="flex justify-around items-center mt-[100px] mb-[50px]">
        <div className="flex flex-col gap-[30px]">
          <p className="text-[#000000] font-[600] text-[54px]">Our Story</p>
          <p className="text-[#000000] font-[400] text-[16px] w-[525px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-[#000000] font-[400] text-[16px] w-[525px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img src={men} alt="" />
        </div>
      </div>
      <div className="flex justify-around gap-[50px] mb-[100px] mt-[100px]">
        <div>
          <div className="flex justify-around gap-[100px]">
            <div className="bg-white  rounded-lg shadow-md w-[270px] h-[230px] flex flex-col items-center pt-[30px] gap-[15px]">
              <img className="w-[80px] h-[80px]" src={d1} alt="" />
              <div className="text-2xl font-bold mb-2">10.5k</div>
              <div className="text-sm text-gray-500">
                Sellers active on our site
              </div>
            </div>

            <div className="bg-red-500 rounded-lg shadow-md w-[270px] h-[230px] flex flex-col text-white items-center pt-[30px] gap-[15px]">
              <img className="w-[80px] h-[80px]" src={d2} alt="" />
              <div className="text-2xl font-bold mb-2">33k</div>
              <div className="text-sm">Monthly Product Sale</div>
            </div>

            <div className="bg-white rounded-lg shadow-md w-[270px] h-[230px] flex flex-col items-center pt-[30px] gap-[15px]">
              <img className="w-[80px] h-[80px]" src={d3} alt="" />
              <div className="text-2xl font-bold mb-2">45.5k</div>
              <div className="text-sm text-gray-500">
                Customers active on our site
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md w-[270px] h-[230px] flex flex-col items-center pt-[30px] gap-[15px]">
              <img className="w-[80px] h-[80px]" src={d4} alt="" />
              <div className="text-2xl font-bold mb-2">25k</div>
              <div className="text-sm text-gray-500">
                Annual gross sale on our site
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Raditel">
        <div class="container mx-auto py-12">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md  flex flex-col items-center gap-[10px]">
              <img className="w-[326px] h-[392px]" src={n1} alt="Tom Cruise" />
              <h3 class="text-xl font-bold mb-2">Tom Cruise</h3>
              <p class="text-gray-500 mb-4">Founder & Chairman</p>
              <div class="flex justify-center space-x-4 text-gray-500 relative top-[7 px]">
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f1} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f2} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f3} alt="" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md  flex flex-col items-center gap-[15px] pt-[12px]">
              <img className="w-[326px] h-[392px]" src={n2} alt="Emma Watson" />
              <h3 class="text-xl font-bold mb-2">Emma Watson</h3>
              <p class="text-gray-500 mb-4">Managing Director</p>
              <div class="flex justify-center space-x-4 text-gray-500 relative top-[-10px]">
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f1} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f2} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f3} alt="" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md  flex flex-col items-center gap-[15px] pt-[12px]">
              <img className="w-[326px] h-[392px]" src={n3} alt="Will Smith" />
              <h3 class="text-xl font-bold mb-2">Will Smith</h3>
              <p class="text-gray-500 mb-4">Product Designer</p>
              <div class="flex justify-center space-x-4 text-gray-500 relative top-[-10px]">
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f1} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f2} alt="" />
                </a>
                <a href="#" class="hover:text-gray-700">
                  <img className="w-[25px] h-[25px]" src={f3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto flex flex-wrap justify-around items-center gap-[20px] mt-[50px] mb-[100px]">
        <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
          <img src={delivery1} alt="" />
          <h1 className="text-[20px] text-black font-[700]">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-[14px]">Free delivery for all orders over $140</p>
        </div>

        <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
          <img src={delivery2} alt="" />
          <h1 className="text-[20px] text-black font-[700]">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>

        <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
          <img src={delivery3} alt="" />
          <h1 className="text-[20px] text-black font-[700]">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-[14px]">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default About