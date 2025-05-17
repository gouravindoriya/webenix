import img from '/homeimage.jpg'
import React, { useRef, useState } from 'react'
const home = () => {
const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
const sectionRef = useRef(null);

const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40; // max 20px left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40; // max 20px up/down
    setImgPos({ x, y });
};

return (
    <div className="">
        <section
            ref={sectionRef}
            className="w-full h-2/3 grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-4 p-8 px-2 md:px-36"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setImgPos({ x: 0, y: 0 })}
        >
            <div className="w-full h-full">
                <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white w-full h-full">
                    <div className="max-w-xl mb-8 md:mb-0  p-4">
                        <h1 className="text-5xl font-bold text-gray-900  mb-4">
                            Transforming Ideas <br /> into <span className="text-blue-700">Scalable Digital Solutions</span>
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">
                            Web development, app development, and IT consultancy—all in one place.
                        </p>
                        <div className="flex gap-4 justify-center items-center">
                            <button className="bg-blue-700 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-800 transition">
                                Get a Free Quote
                            </button>
                            <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
                                Book a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full relative">
                <img
                    className="w-full h-full scale-75 object-cover mb-8 transition-transform duration-200"
                    src={img}
                    alt="Home"
                    style={{
                        transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(0.75)`,
                        pointerEvents: 'none'
                    }}
                />
            </div>
        </section>
    </div>
)
}

export default home
