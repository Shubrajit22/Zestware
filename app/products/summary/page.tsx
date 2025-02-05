"use client";

import { useState } from 'react';
import { Shirt as Tshirt } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; 
export default function SummaryPage() {
  const router = useRouter(); 
  const customization = JSON.parse(localStorage.getItem('customization') || '{}');
 

  const handleBuyNow = () => {
    console.log("Buy Now clicked!", customization);

    fetch('/api/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customization),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order created:', data);
        router.push('/confirmation'); 
      })
      .catch(error => {
        console.error('Error creating order:', error);
       
        alert("An error occurred during order creation. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Order Summary</h1>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
               
                <div>
                 
                  <div className="mt-2" style={{ backgroundColor: customization.color, width: '20px', height: '20px', borderRadius: '50%' }}></div>
                </div>
                <div>
                  <Label>Size:</Label>
                  <div className="mt-2">{customization.size}</div>
                </div>
             
                {customization.customImage && (
                  <div>
                    <Label>Custom Image:</Label>
                    <img src={customization.customImage} alt="Custom Image" className="mt-2 w-24 h-24 object-contain" />
                  </div>
                )}

               
              </div>

              <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg relative">
                <div
                  className="w-64 h-64 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: customization.color }} 
                >
                  <Tshirt className="w-32 h-32 text-gray-400" />
              
                  {customization.customImage && (
                    <img
                      src={customization.customImage}
                      alt="Custom Image Preview"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleBuyNow}>Buy Now</Button>
      </div>
    </div>
  );
}