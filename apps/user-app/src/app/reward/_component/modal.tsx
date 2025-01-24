"use client";
import { DialogClose, DialogContent } from '@/components/ui/dialog'

import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"

import { z } from 'zod'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';

// Define Zod schema
const claimFormSchema = z.object({
    network: z.string().nonempty("Please select a network"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\d+$/, "Phone number must contain only numbers"),
  });
  
  // Define TypeScript type from the schema
  type ClaimFormInputs = z.infer<typeof claimFormSchema>;

function Modal() {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<ClaimFormInputs>({
        resolver: zodResolver(claimFormSchema),
      });
    
      const onSubmit = (data: ClaimFormInputs) => {
        console.log("Form Submitted:", data);
        alert("Claim submitted successfully!");
      };
    
  return (
    <DialogContent className="py-[32px] px-[24px] flex flex-col gap-[10px] rounded-[32px] bg-[#131313] border-none">
        <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[20px] font-medium text-white tracking-[-0.4px] font-figtree">
                Claim ₦1,000 Airtime
              </h2>
              <p className="rewardH text-[16px] tracking-[-0.32px] font-medium font-figtree">100 Points</p>
            </div>
           
        </div>
        <form className="mt-6 flex flex-col gap-[16px]">
             {/* Network Selection */}
      <div>
        
        <Select onValueChange={(value: string) => setValue("network", value)}>
          <SelectTrigger id="network" className="w-full border border-[#303033] text-white">
            <SelectValue placeholder="Select Network" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mtn">MTN</SelectItem>
            <SelectItem value="glo">Glo</SelectItem>
            <SelectItem value="airtel">Airtel</SelectItem>
            <SelectItem value="9mobile">9Mobile</SelectItem>
          </SelectContent>
        </Select>
        {errors.network && (
          <p className="text-red-500 text-sm mt-1">{errors.network.message}</p>
        )}
      </div>

      {/* Phone Number Input */}
      <div>
        
        <Input
          id="phone"
          type="text"
          placeholder="Enter phone number"
          className=" text-white"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit"
       className="w-full h-[48px] bg-[#C1FF70] text-black">
        Claim
      </Button>
          </form>
    </DialogContent>
  )
}

export default Modal
