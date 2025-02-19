// "use client";

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Shirt as Tshirt } from "lucide-react";
// // const COLORS = [
// //   { name: "White", value: "#FFFFFF" },
// //   { name: "Black", value: "#000000" },
// //   { name: "Navy", value: "#000080" },
// //   { name: "Red", value: "#FF0000" },
// //   { name: "Green", value: "#008000" },
// //   { name: "Gray", value: "#808080" }, 
// //   { name: "Yellow", value: "#FFFF00" },
// //   { name: "Blue", value: "#0000FF" },
// //   { name: "Orange", value: "#FFA500" },
// //   { name: "Purple", value: "#800080" },
// //   { name: "Pink", value: "#FFC0CB" },
// //   { name: "Brown", value: "#A52A2A" },
// //   { name: "Teal", value: "#008080" },
// //   { name: "Maroon", value: "#800000" },
// //   { name: "Olive", value: "#808000" },
// //   { name: "Lime", value: "#00FF00" },
// //   { name: "Cyan", value: "#00FFFF" },
// //   { name: "Magenta", value: "#FF00FF" },
// // ];
// const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

// export default function CustomizePage() {
//     const router = useRouter();
//   //  const [color,setColor] = useState(COLORS[0].value);
//     const [size, setSize] = useState("M");
//    // const [customImage, setCustomImage] = useState<File | null>(null);
//     const [customImagePreview, setCustomImagePreview] = useState<string | null>(null);
//     //const [price, setPrice] = useState(29.99);

//     const handleProceed = () => { const customization = {
//       size,

//       customImage: customImagePreview,
//     };
//     localStorage.setItem("customization", JSON.stringify(customization));
//     router.push("/products/summary");};
//     const handleCustomImageChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* ... your handleCustomImageChange function */ };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
//                 <div className="flex flex-col items-center mb-8">
//                     <div
//                         className="w-64 h-64 flex items-center justify-center rounded-lg border-2 border-gray-300"
                        
//                     >
//                         <Tshirt className="w-32 h-32 text-gray-400" />
//                         {customImagePreview && (
//                             <img
//                                 src={customImagePreview}
//                                 alt="Custom Image Preview"
//                                 className="absolute inset-0 w-full h-full object-contain pointer-events-none"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="size" className="block text-sm font-medium text-gray-700">Select Size</label>
//                     <select 
//                         id="size" 
//                         value={size} 
//                         onChange={(e) => setSize(e.target.value)} 
//                         className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" // Added styling
//                     >
//                         {SIZES.map((s) => (
//                             <option key={s} value={s}>
//                                 {s}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Custom Image</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleCustomImageChange}
//                         id="image"
//                         className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" // Added styling
//                     />
//                 </div>

//                 <div className="flex justify-center">
//                     <button 
//                         onClick={handleProceed} 
//                         className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
//                     >
//                         Proceed to Summary
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



// //////////////////////////////////////////

// // import { useState } from "react";



// // import { useRouter } from "next/navigation";
// // import { Shirt as Tshirt, Upload, Image as ImageIcon } from "lucide-react";


// // const COLORS = [
// //   { name: "White", value: "#FFFFFF" },
// //   { name: "Black", value: "#000000" },
// //   { name: "Navy", value: "#000080" },
// //   { name: "Red", value: "#FF0000" },
// //   { name: "Green", value: "#008000" },
// //   { name: "Gray", value: "#808080" }, // Added some more colors
// //   { name: "Yellow", value: "#FFFF00" },
// //   { name: "Blue", value: "#0000FF" },
// //   { name: "Orange", value: "#FFA500" },
// //   { name: "Purple", value: "#800080" },
// //   { name: "Pink", value: "#FFC0CB" },
// //   { name: "Brown", value: "#A52A2A" },
// //   { name: "Teal", value: "#008080" },
// //   { name: "Maroon", value: "#800000" },
// //   { name: "Olive", value: "#808000" },
// //   { name: "Lime", value: "#00FF00" },
// //   { name: "Cyan", value: "#00FFFF" },
// //   { name: "Magenta", value: "#FF00FF" },
// // ];

// // const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

// // export default function CustomizePage() {
// //   const router = useRouter();
// //   const [color, setColor] = useState(COLORS[0].value);
// //   const [size, setSize] = useState("M");
// //   const [logo, setLogo] = useState<File | null>(null);
// //   const [customImage, setCustomImage] = useState<File | null>(null);
// //   const [logoPreview, setLogoPreview] = useState<string | null>(null);
// //   const [customImagePreview, setCustomImagePreview] = useState<string | null>(
// //     null
// //   );
// //   const [price, setPrice] = useState(29.99); // Initialize price

// //   const handleProceed = () => {
// //     const customization = {
// //       size,

// //       customImage: customImagePreview,
// //     };
// //     localStorage.setItem("customization", JSON.stringify(customization));
// //     router.push("/products/summary");
// //   };

// //   const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0] || null;
// //     setLogo(file);
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setLogoPreview(reader.result as string);
// //       };
// //       reader.readAsDataURL(file);
// //     } else {
// //       setLogoPreview(null);
// //     }
// //   };

// //   const handleCustomImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0] || null;
// //     setCustomImage(file);
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setCustomImagePreview(reader.result as string);
// //       };
// //       reader.readAsDataURL(file);
// //     } else {
// //       setCustomImagePreview(null);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12">
// //       <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg relative">
// //         <div
// //           className="w-64 h-64 flex items-center justify-center rounded-lg"
// //           style={{ backgroundColor: color }}
// //         >
// //           <Tshirt className="w-32 h-32 text-gray-400" />

// //           {customImagePreview && (
// //             <img
// //               src={customImagePreview}
// //               alt="Custom Image Preview"
// //               className="absolute inset-0 w-full h-full object-contain pointer-events-none"
// //             />
// //           )}
// //         </div>
// //       </div>
// //       <div>
// //         <label>Select Size</label>
// //         <Select value={size} onValueChange={setSize}>
// //           {" "}
// //           {/* Controlled Select */}
// //           <SelectTrigger className="w-full mt-2">
// //             <SelectValue placeholder="Select size" />
// //           </SelectTrigger>
// //           <SelectContent>
// //             {SIZES.map((s) => (
// //               <SelectItem key={s} value={s}>
// //                 {s}
// //               </SelectItem>
// //             ))}
// //           </SelectContent>
// //         </Select>
// //       </div>
// //       <div>
// //         <label>Upload Custom Image</label>
// //         <Input
// //           type="file"
// //           accept="image/*"
// //           onChange={handleCustomImageChange}
// //         />
// //       </div>

// //       <div className="mt-8 flex justify-center">
// //         <button onClick={handleProceed}>Proceed to Summary</button>
// //       </div>
// //     </div>
// //   );
// // }
