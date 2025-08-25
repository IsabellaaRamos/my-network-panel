import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants} from "@/components/ui/button"
import { rootPropsReducer } from "recharts/types/state/rootPropsSlice"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal  = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) =>  (
    <AlertDialogPrimitive.Overlay
        className={cn(
            "fixed inset-0 z-50 bg-black/80 data - [state=open] :animate-in data-[state=closed]:animate-out",
            className
        )}
        {...props}
        ref={ref}
      />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.dispalyName 

const AlertDialogContent = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ classNAme, ...Props},  ref) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={cn( 
                "fixed left-[50%] top-[50%] z- 50 grid w-full max-w-lg translate-x-",
                className
            )}
            {...props}
        />
    </AlertDialogPortal> 
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName 

const AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName 

const AlertDialogHeader = ({
    className,
    ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    />

)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
    className,
    ...rootPropsReducer
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
       className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className 
       )}
   {...props}
  />

 )
 AlertDialogHeader.displayName = "AlertDialogHeader"

 const AlertDialogFooter = ({
    className,
    ...props
 }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
      />
 )
 AlertDialogFooter.displayName = "AlertDialogFooter"

 
 



