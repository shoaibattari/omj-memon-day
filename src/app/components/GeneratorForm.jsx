import { FaUpload, FaDownload, FaUserAlt, FaCheckCircle, FaRibbon } from "react-icons/fa";

export default function GeneratorForm({
  title,
  formData,
  setFormData,
  handleImageChange,
  onDownload,
  userImage
}) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-pink-50 space-y-8 animate-in fade-in slide-in-from-left duration-700">
      
      {/* Header with Medical Theme Icon */}
      <div className="flex items-center gap-4">
        <div className="bg-pink-600 p-3 rounded-2xl shadow-lg shadow-pink-200">
           <FaRibbon className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-800 uppercase italic leading-none">
            {title}
          </h2>
          <p className="text-pink-500 text-[10px] font-black mt-1 uppercase tracking-[0.2em]">
            Health Seminar Personalization
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Name Input Group - Refined Pink Focus */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within:text-pink-600 text-slate-300 transition-colors">
            <FaUserAlt size={16} />
          </div>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full pl-12 pr-4 py-5 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-pink-500 focus:bg-white outline-none font-bold text-slate-700 transition-all placeholder:text-slate-300"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Upload Area with Pink Feedback UX */}
        <label className={`group flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-3xl cursor-pointer transition-all duration-300 
          ${userImage ? 'border-green-400 bg-green-50' : 'border-slate-200 hover:border-pink-500 hover:bg-pink-50'}`}>
          
          <div className="text-center">
            {userImage ? (
              <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <FaCheckCircle className="text-green-500 mb-2" size={32} />
                <span className="text-sm font-black text-green-600 uppercase">Photo Linked!</span>
              </div>
            ) : (
              <>
                <div className="bg-white p-4 rounded-full mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <FaUpload className="text-slate-400 group-hover:text-pink-500" size={24} />
                </div>
                <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">
                  Select Profile Photo
                </span>
                <p className="text-[10px] text-slate-300 font-bold mt-1 uppercase">High Quality Recommended</p>
              </>
            )}
          </div>
          
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Action Button - Pink to Rose Gradient */}
      <div className="pt-2">
        <button
          disabled={!formData.name}
          onClick={onDownload}
          className="w-full relative overflow-hidden group bg-pink-600 text-white py-6 rounded-2xl font-black shadow-[0_10px_30px_-10px_rgba(219,39,119,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(219,39,119,0.7)] hover:bg-rose-600 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
        >
          <FaDownload className="group-hover:animate-bounce" />
          <span className="tracking-widest">GENERATE MY PASS</span>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000"></div>
        </button>
        
        {!formData.name && (
          <div className="flex items-center justify-center gap-2 mt-4">
             <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
               Input name to unlock download
             </p>
             <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}