import * as React from 'react'
import { cn } from '@/lib/utils'







const HeroWrapper = React.forwardRef(({className,...props},ref) =>{
    <div className={cn('flex items-center justify-center mx-auto h-screen',className)} ref={ref} {...props}>

    </div>
})

export {HeroWrapper};