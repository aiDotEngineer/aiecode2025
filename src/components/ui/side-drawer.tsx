import * as React from 'react';
import * as SideDrawerPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowLeft } from 'lucide-react';

import { cn } from '~/support/cn';

const SideDrawer = SideDrawerPrimitive.Root;

const SideDrawerTrigger = SideDrawerPrimitive.Trigger;

const SideDrawerClose = SideDrawerPrimitive.Close;

type Props = SideDrawerPrimitive.DialogPortalProps & {
  className?: string;
};

const SideDrawerPortal = ({ className, ...props }: Props) => {
  const newProps = {
    ...props,
    className: cn(className),
  };
  return <SideDrawerPrimitive.Portal {...newProps} />;
};
SideDrawerPortal.displayName = SideDrawerPrimitive.Portal.displayName;

const SideDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof SideDrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SideDrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SideDrawerPrimitive.Overlay
    className={cn(
      'bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-xs',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SideDrawerOverlay.displayName = SideDrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface SideDrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof SideDrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const SideDrawerContent = React.forwardRef<
  React.ElementRef<typeof SideDrawerPrimitive.Content>,
  SideDrawerContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SideDrawerPortal>
    <SideDrawerOverlay>
      <SideDrawerPrimitive.Content
        ref={ref}
        className={cn(drawerVariants({ side }), className, 'pt-16')}
        {...props}
      >
        {children}
        <SideDrawerPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary fixed left-4 top-4 z-30 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </SideDrawerPrimitive.Close>
      </SideDrawerPrimitive.Content>
    </SideDrawerOverlay>
  </SideDrawerPortal>
));
SideDrawerContent.displayName = SideDrawerPrimitive.Content.displayName;

const SideDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'fixed left-0 right-0 top-0 z-20 flex h-[52px] flex-col space-y-2 border-b  border-solid border-slate-300 bg-white text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
SideDrawerHeader.displayName = 'SideDrawerHeader';

const SideDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);
SideDrawerFooter.displayName = 'SideDrawerFooter';

const SideDrawerTitle = React.forwardRef<
  React.ElementRef<typeof SideDrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SideDrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SideDrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-foreground pt-3 text-center text-lg font-semibold',
      className,
    )}
    {...props}
  />
));
SideDrawerTitle.displayName = SideDrawerPrimitive.Title.displayName;

const SideDrawerDescription = React.forwardRef<
  React.ElementRef<typeof SideDrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SideDrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SideDrawerPrimitive.Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
SideDrawerDescription.displayName = SideDrawerPrimitive.Description.displayName;

export {
  SideDrawer,
  SideDrawerTrigger,
  SideDrawerClose,
  SideDrawerContent,
  SideDrawerHeader,
  SideDrawerFooter,
  SideDrawerTitle,
  SideDrawerDescription,
};
