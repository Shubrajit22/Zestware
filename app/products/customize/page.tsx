
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shirt as Tshirt, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const COLORS = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Navy', value: '#000080' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#008000' },
  { name: 'Gray', value: '#808080' }, // Added some more colors
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Purple', value: '#800080' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Brown', value: '#A52A2A' },
  { name: 'Teal', value: '#008080' },
  { name: 'Maroon', value: '#800000' },
  { name: 'Olive', value: '#808000' },
  { name: 'Lime', value: '#00FF00' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'Magenta', value: '#FF00FF' },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

export default function CustomizePage() {
  const router = useRouter();
  const [color, setColor] = useState(COLORS[0].value);
  const [size, setSize] = useState('M');
  const [logo, setLogo] = useState<File | null>(null);
  const [customImage, setCustomImage] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [customImagePreview, setCustomImagePreview] = useState<string | null>(null);
  const [price, setPrice] = useState(29.99); // Initialize price

  const handleProceed = () => {
    const customization = {
      
      
      size,
     
      customImage: customImagePreview,
      
    };
    localStorage.setItem('customization', JSON.stringify(customization));
    router.push('/summary');
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLogo(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleCustomImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCustomImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setCustomImagePreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      

     
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg relative">
        <div
          className="w-64 h-64 flex items-center justify-center rounded-lg"
          style={{ backgroundColor: color }}
        >
          <Tshirt className="w-32 h-32 text-gray-400" />

          
         
          {customImagePreview && (
            <img
              src={customImagePreview}
              alt="Custom Image Preview"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          )}
        </div>
      </div>
      <div>
        <Label>Select Size</Label>
        <Select value={size} onValueChange={setSize}> {/* Controlled Select */}
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {SIZES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Upload Custom Image</Label>
        <Input type="file" accept="image/*" onChange={handleCustomImageChange} />
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={handleProceed}>Proceed to Summary</Button>
      </div>
    </div>
  );
}


