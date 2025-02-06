import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TagsInput } from "./ui/extension/tags-input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { cn, isString } from "@/lib/utils";

export enum FormTypeEnum {
  INPUT = "input",
  SELECT = "select",
  TAG_INPUT = "tag-input",
  DATE = "date",
  CUSTOM = "custom",
}

export interface AppFormControlProps {
  formType: `${FormTypeEnum}`;
  placeholder?: string;
  label: string;
  field?: any;
  options?: string[] | { [key in "key" | "value"]: string }[];
}

export const AppFormControl: React.FC<
  React.PropsWithChildren<AppFormControlProps>
> = ({ formType, placeholder, label, field, options, children }) => {
  switch (formType) {
    case FormTypeEnum.INPUT:
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type="" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      );

    case FormTypeEnum.SELECT:
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem
                  value={isString(option) ? option : option.key}
                  key={isString(option) ? option : option.key}
                >
                  {isString(option) ? option : option.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      );

    case FormTypeEnum.TAG_INPUT:
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <TagsInput
              value={field.value ?? []}
              onValueChange={field.onChange}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );

    case FormTypeEnum.DATE:
      return (
        // TODO: extract custom date component into separate component
        <FormItem className="flex flex-col">
          <FormLabel>Release Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "h-10 w-full rounded-[6px] border-[0.8px] border-[#303033] bg-[#1E1E1E] p-[14px] text-xs font-medium font-normal transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-xs placeholder:text-[#797979] hover:bg-[#1E1E1E] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:placeholder:text-sm",
                    !field.value && "text-[#797979] hover:text-[#797979]",
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>MM - DD - YYYY</span>
                  )}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto"
                  >
                    <path
                      d="M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M2.5 8.33317H17.5M4.16667 3.33317H15.8333C16.7538 3.33317 17.5 4.07936 17.5 4.99984V16.6665C17.5 17.587 16.7538 18.3332 15.8333 18.3332H4.16667C3.24619 18.3332 2.5 17.587 2.5 16.6665V4.99984C2.5 4.07936 3.24619 3.33317 4.16667 3.33317Z"
                      stroke="#868B9F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      );

    case FormTypeEnum.CUSTOM:
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {children}
        </FormItem>
      );

    default:
      return <></>;
  }
};
