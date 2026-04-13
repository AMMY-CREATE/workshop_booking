import { GLSLHills } from './components/ui/glsl-hills'

function App() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* GLSL Hills Background */}
      <GLSLHills width="100vw" height="100vh" cameraZ={125} planeSize={256} speed={0.5} />
      
      {/* Content Overlay */}
      <div className="space-y-6 pointer-events-none z-10 text-center absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl md:text-7xl whitespace-pre-wrap text-white drop-shadow-lg">
          <span className="italic font-thin text-4xl md:text-6xl block mb-2">Designs That Speak</span>
          Louder Than Words
        </h1>
        <p className="text-sm md:text-base text-gray-300 drop-shadow-md max-w-2xl px-4">
          We craft stunning visuals and user-friendly experiences that help your brand stand out and connect with your audience.
        </p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 drop-shadow-lg pointer-events-auto">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
