import { FaUpload, FaDownload, FaUserAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function GeneratorForm({
  title,
  formData,
  setFormData,
  handleImageChange,
  onDownload,
  userImage // Pass the userImage state here for better UX feedback
}) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-8 animate-in fade-in slide-in-from-left duration-700">
      {/* Header with Icon */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-900 p-3 rounded-2xl shadow-lg">
           <FaUserAlt className="text-white text-xl" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-blue-900 uppercase italic leading-none">
            {title}
          </h2>
          <p className="text-slate-400 text-sm font-bold mt-1 uppercase tracking-wider">
            Personalize your asset
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Name Input Group */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within:text-blue-900 text-slate-300 transition-colors">
            <FaUserAlt size={18} />
          </div>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full pl-12 pr-4 py-5 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-blue-900 focus:bg-white outline-none font-bold text-slate-700 transition-all placeholder:text-slate-300"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Community Input Group */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within:text-blue-900 text-slate-300 transition-colors">
            <FaMapMarkerAlt size={18} />
          </div>
          <input
            type="text"
            placeholder="Community / Memon Jamat Name (e.g. Okhai Memon)"
            className="w-full pl-12 pr-4 py-5 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-blue-900 focus:bg-white outline-none font-bold text-slate-700 transition-all placeholder:text-slate-300"
            onChange={(e) => setFormData({ ...formData, community: e.target.value })}
          />
        </div>

        {/* Upload Area with Feedback UX */}
        <label className={`group flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-3xl cursor-pointer transition-all duration-300 
          ${userImage ? 'border-green-400 bg-green-50' : 'border-slate-200 hover:border-blue-900 hover:bg-slate-50'}`}>
          
          <div className="text-center">
            {userImage ? (
              <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <FaCheckCircle className="text-green-500 mb-2" size={32} />
                <span className="text-sm font-black text-green-600 uppercase">Photo Selected!</span>
              </div>
            ) : (
              <>
                <div className="bg-slate-100 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FaUpload className="text-slate-400 group-hover:text-blue-900" size={24} />
                </div>
                <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">
                  Tap to Upload Profile Photo
                </span>
                <p className="text-[10px] text-slate-300 font-bold mt-1">PNG, JPG or JPEG (Max 5MB)</p>
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

      {/* Action Button */}
      <div className="pt-2">
        <button
          disabled={!formData.name}
          onClick={onDownload}
          className="w-full relative overflow-hidden group bg-blue-900 text-white py-6 rounded-2xl font-black shadow-[0_10px_30px_-10px_rgba(30,58,138,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(220,38,38,0.4)] hover:bg-red-600 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
        >
          <FaDownload className="group-hover:bounce" />
          <span className="tracking-widest">GENERATE & DOWNLOAD</span>
          
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000"></div>
        </button>
        {!formData.name && (
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-tighter">
            * Please enter your name to enable the download
          </p>
        )}
      </div>
    </div>
  );
}