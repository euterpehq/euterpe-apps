
import { DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'

import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"

import { z } from 'zod'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';


// Define Zod schema
const claimFormSchema = z.object({
    network: z.string().nonempty("Please select a network"),
    phone: z.string().nonempty("Please your number")

  });
  
  // Define TypeScript type from the schema
  type ClaimFormInputs = z.infer<typeof claimFormSchema>;

function Modal({selectedReward}: {selectedReward: any}) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<ClaimFormInputs>({
        resolver: zodResolver(claimFormSchema),
      });
    
      const onSubmit = async (data: ClaimFormInputs) => {
        //setLoading(true);
        try {
          const response = await fetch('/api/airtime', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phoneNumber: data.phone,
              amount: Number(selectedReward.amount),
            }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to process purchase');
          }
    
          console.log('Purchase successful!');
          alert('Claim submitted successfully!');
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to process purchase');
        } finally {
          //setLoading(false);
        }
      };
    
      

  return (
    <DialogContent className="py-[32px] px-[24px] flex flex-col gap-[10px] rounded-[32px] bg-[#131313] border-none">
        <DialogTitle className="flex justify-between items-center h-[49px]">
            <div className='flex flex-col gap-[16px]'>
              <h2 className="text-[20px] font-medium text-white tracking-[-0.4px] font-figtree">
                Claim ₦{Number(selectedReward.amount)} Airtime
              </h2>
              <p className="rewardH text-[16px] tracking-[-0.32px] font-medium font-figtree">{Number(selectedReward.point)} Points</p>
            </div>
           
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-[16px]">
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
       className="w-full h-[48px] bg-[#C1FF70] text-black font-figtree font-bold tracking-[-0.26px] text-[13px]">
        Claim
      </Button>
          </form>
    </DialogContent>
  )
}

export default Modal
