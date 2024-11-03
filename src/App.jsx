function App() {
  return (
    <>
      <div className="bg-slate-300 h-dvh flex items-center justify-center">
        <div className="flex flex-col bg-white rounded-2xl w-72 p-4 shadow-md gap-4">
          <img className="rounded-xl" src="image-qr-code.png" />
          <p className="text-slate-900 font-bold text-xl text-center leading-6">
            Improve your font-end skills by building projects
          </p>
          <p className="text-slate-500 text-sm text-center px-2 pb-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
